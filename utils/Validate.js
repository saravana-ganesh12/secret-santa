//Validate with previous year data
class Validate {
    
    //Condition to check with previous year child data
    static checkCondition(current, index, previousYearData) {
        return current.Employee_EmailID !== previousYearData[index].Secret_Child_EmailID 
    }

    //Iterate and validate with previous year data 
    static validateAssignment(data, previousYearData) {
        for(let i=0; i < data.length; i++) {
            if(!this.checkCondition(data[i],i,previousYearData)) {
                return false;
            }
        }
        return true
    }
}

export { Validate };