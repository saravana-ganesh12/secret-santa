//Import the randomize and validate class
import { Randomize } from './Randomize.js';
import { Validate } from './Validate.js';

//Secret child assignment
class AssignChild {
    constructor(data, previousYearData) {
        this.data = data;
        this.previousYearData = previousYearData;
    }

    //Assign the secret child for each entry and return
    assignChild() {
        let outputData = [];
        let randomData = Randomize.randomize(this.data);

        for (let i = 0; i < randomData.length; i++) {
            const secretChild = randomData[(i + 1) % randomData.length];
            outputData.push({
                ...this.data[i],
                Secret_Child_Name: secretChild.Employee_Name,
                Secret_Child_EmailID: secretChild.Employee_EmailID
            });
        }

        if (Validate.validateAssignment(randomData, this.previousYearData)) {
            return outputData;
        } else {
            return this.swapAssignment(outputData);
        }
    }

    //Swap assignment until condition is met
    swapAssignment(randomOutputData) {
        for (let i = 0; i < randomOutputData.length; i++) {
            for (let j = i + 1; j < randomOutputData.length; j++) {
                //Swap data
                [randomOutputData[i].Secret_Child_Name,randomOutputData[j].Secret_Child_Name] = [randomOutputData[j].Secret_Child_Name,randomOutputData[i].Secret_Child_Name];
                if (Validate.validateAssignment(randomOutputData, this.previousYearData)) {
                    return randomOutputData;
                }

                //Swap doesn't meet the validation condition rollback the swa[]
                [randomOutputData[j].Secret_Child_Name,randomOutputData[i].Secret_Child_Name] = [randomOutputData[i].Secret_Child_Name,randomOutputData[j].Secret_Child_Name];
            }
        }
        //No valid output, then retry it
        return this.assignChild()
    }
}

export { AssignChild };