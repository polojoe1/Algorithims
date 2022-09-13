const thing = (obj)=>{
    let arr = []
    for(key in obj){
        let newArr = []
        if(obj.hasOwnProperty(key)){
        newArr.push(key.toString())
        newArr.push(obj[key])
        
        arr.push([...newArr])
        }
    }
    return arr;
}
let obj2 = {haha:"Bob"}
let obj1 ={name:"pizza",calories:9001}

obj1.__proto__ = obj2;



console.log(thing(obj1));
