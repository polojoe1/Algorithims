const findByIdAndUpdate=(id,updatedVals,collection)=> {
    for(let i=0;i<collection.length;i++){
        if(id===collection[i].id){
            for(key in updatedVals){
                if(collection[i].hasOwnProperty(key)){
                    //console.log(collection[i][key]);
                    collection[i][key]=updatedVals[key];
                }
            }
            return collection[i];
        }
    }
    return collection;
}

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];


console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));