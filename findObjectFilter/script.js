const findObjectFilter = (searchFor,itemsArr)=>{
    
    let result=[];
    let isThere= true;
    let keys = Object.keys(searchFor);
    
    for(let i=0;i<itemsArr.length;i++){
        for(key of keys){
            if(searchFor[key]!=itemsArr[i][key]){
                
                isThere=false;
            }
            
        }
        if(isThere===true){
            result.push(itemsArr[i]);
        }
    }
    return result;
}
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob"
    
};
console.log(findObjectFilter(searchFor1,items));