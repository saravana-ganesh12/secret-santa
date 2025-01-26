//Shuffle the array
class Randomize {

    //Shuffle the given data and return
    static randomize(data) {
        let randomData = [...data];
        for(let i=randomData.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i+1);
            [randomData[i], randomData[j]] = [randomData[j],randomData[i]]
        }
        return randomData
    }
}

export { Randomize };