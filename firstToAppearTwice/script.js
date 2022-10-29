//find the first char to appear twice


var repeatedCharacter = function(s) {
    let obj = {}
    for(let i = 0;i<s.length;i++){
        if(!(obj.hasOwnProperty(s[i]))){
            obj[s[i]]=1
        }
        else{
            obj[s[i]]+=1
            if(obj[s[i]]===2){
                return s[i]
            }
        }
        
    }
    
    
    
};