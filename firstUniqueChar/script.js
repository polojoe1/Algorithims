var firstUniqChar = function(s) {
    let obj = {}
    for(let i = 0;i<s.length;i++){
        if(!(obj.hasOwnProperty(s[i]))){
            obj[s[i]]=1
        }
        else{
            obj[s[i]]+=1
        }
        
    }
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]===1){
            return i
        }
    }
    return -1
};