//Write an algorithm that takes in a string and checks to make sure the parentheses are valid.
//all '(' should have a matching ')'
//parentheses should also be in the correct order(i.e. ')(' would not be valid)

//example: ()           -> true
//example: (([(8+13)])) -> true
//example: (()))()      -> false
//example: (            -> false

function parensValid(str){
    //return true or false
    var leftBrac=0;
    var rightBrac=0;
    for(var i=0;i<str.length;i++){
        if(str[i]===')'&&leftBrac===rightBrac){
            return false;
        }
        else if(str[i]===')'){
            rightBrac++;
        }
        else if(str[i]==='('){
            leftBrac++;
        }

    }
    return leftBrac === rightBrac;
}

console.log(parensValid(")())"));
console.log(parensValid('()()()'));
console.log(parensValid('()())(]'));
