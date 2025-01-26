//Import utility classes
import { AssignChild }  from './utils/AssignChild.js';
import { JsonToCsv } from './utils/JsonToCsv.js';

//Import module from package
import express from 'express';
import multer from 'multer';
import cors from 'cors'
import { parse } from 'csv-parse';
import xlsx from 'xlsx'
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Middleware
app.use(cors())
const upload = multer({ storage: multer.memoryStorage() });

//Respond with index.html file for / route
app.get('/', express.static(path.join(__dirname,'public')));

//Process the file inputs for /secretchild
app.post('/secretchild', upload.fields([{ name: 'file1'},{ name: 'file2'}]), async (req, res) => {
    try {

        //check if both files are uploaded
        if (!req.files || Object.keys(req.files).length !== 2) {
            return res.status(400).send({error:'Two files are required'});
        }
        
        //check the file type
        if((!req.files.file1[0].originalname.endsWith('.xlsx') && !req.files.file1[0].originalname.endsWith('.csv')) || (!req.files.file2[0].originalname.endsWith('.xlsx') && !req.files.file2[0].originalname.endsWith('.csv'))) {
            return res.status(400).send({error:'Invalid file type'});
        }

        let inputData = [];
        let previousYearData = [];

        //Read both csv file
        if(req.files.file1[0].originalname.endsWith('.csv') && req.files.file2[0].originalname.endsWith('.csv')) {
            parse(req.files.file1[0].buffer, { delimiter: ',', columns: true, skip_empty_lines: true },(err,file1Data) => {
                if(err) {
                    res.status(400).send({error:'Error parsing csv file'})
                }
                parse(req.files.file2[0].buffer, { delimiter: ',', columns: true, skip_empty_lines: true },(err,file2Data) => {
                    if(err) {
                        res.status(400).send({error:'Error parsing csv file'})
                    }
                    inputData = file1Data
                    previousYearData = file2Data

                    const csvData = secretSantaAssignment(inputData, previousYearData)

                    //Send the csv as a response
                    res.header('Content-Type', 'text/csv');
                    res.attachment('output.csv');
                    res.send(csvData);

                });
            });  
        }
        
        //Read both xlsx files
        if(req.files.file1[0].originalname.endsWith('.xlsx') && req.files.file2[0].originalname.endsWith('.xlsx')) {
            const inputDataFile = xlsx.read(req.files.file1[0].buffer, { type: 'buffer' });
            const previousYearDataFile = xlsx.read(req.files.file2[0].buffer, { type: 'buffer' });
            const inputDataSheet = inputDataFile.Sheets[inputDataFile.SheetNames[0]];
            const previousYearDataSheet = previousYearDataFile.Sheets[previousYearDataFile.SheetNames[0]];
    
            inputData = xlsx.utils.sheet_to_json(inputDataSheet);
            previousYearData = xlsx.utils.sheet_to_json(previousYearDataSheet);
            
            const csvData = secretSantaAssignment(inputData, previousYearData)
            
            //Send the csv as a response
            res.header('Content-Type', 'text/csv');
            res.attachment('output.csv');
            res.send(csvData);    
        }
        
        //Read first file as csv and second file as xlsx
        if(req.files.file1[0].originalname.endsWith('.csv') && req.files.file2[0].originalname.endsWith('.xlsx')) {
            parse(req.files.file1[0].buffer, { delimiter: ',', columns: true, skip_empty_lines: true },(err,file1Data) => {
                if(err) {
                    res.status(400).send({error:'Error parsing csv file'})
                }
                const previousYearDataFile = xlsx.read(req.files.file2[0].buffer, { type: 'buffer' });
                const previousYearDataSheet = previousYearDataFile.Sheets[previousYearDataFile.SheetNames[0]];

                inputData = file1Data
                previousYearData = xlsx.utils.sheet_to_json(previousYearDataSheet);

                const csvData = secretSantaAssignment(inputData, previousYearData)
            
                //Send the csv as a response
                res.header('Content-Type', 'text/csv');
                res.attachment('output.csv');
                res.send(csvData);  
            });
        }

        //Read first file as xlsx and second file as csv
        if(req.files.file1[0].originalname.endsWith('.xlsx') && req.files.file2[0].originalname.endsWith('.csv')) {
            parse(req.files.file2[0].buffer, { delimiter: ',', columns: true, skip_empty_lines: true },(err,file2Data) => {
                if(err) {
                    res.status(400).send({error:'Error parsing csv file'})
                }
                const inputDataFile = xlsx.read(req.files.file1[0].buffer, { type: 'buffer' });
                const inputDataSheet = inputDataFile.Sheets[inputDataFile.SheetNames[0]];

                inputData = xlsx.utils.sheet_to_json(inputDataSheet);
                previousYearData = file2Data;

                const csvData = secretSantaAssignment(inputData, previousYearData);
            
                //Send the csv as a response
                res.header('Content-Type', 'text/csv');
                res.attachment('output.csv');
                res.send(csvData);  
            });
        }
        

    } 
    catch (error) {
        console.error('Error processing files:', error);
        res.status(500).send('Error processing files');
    }
});

function secretSantaAssignment(inputData, previousYearData) {
    //Process the input data to get output
    const assignChildInstance = new AssignChild(inputData, previousYearData);
    const outputData = assignChildInstance.assignChild()
    
    //Create new csv file for output
    const csvData = JsonToCsv.convert(outputData)

    return csvData
}

//Setup the server
app.listen(PORT, () => {
    console.log('Secret santa application is running now...')
})
