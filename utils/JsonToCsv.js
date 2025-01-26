//Convert CSV to JSON
class JsonToCsv {
    static convert(jsonData) {
        let csvData = '';
        const headers = Object.keys(jsonData[0]);
        csvData += headers.join(',') + '\n';

        //Get values and convert to csv
        jsonData.forEach(data => {
            const values = headers.map(header => data[header]);
            csvData += values.join(',') + '\n';
        });
        
        return csvData;
    }
}

export { JsonToCsv }