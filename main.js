/**
 * A Callback  => is calling a function inside another function  
 * this create relationships/ connection  between functions 
 *  
 * using regular functions method approch
 */


//passing paramenter to function one
function one(call_two){
console.log(`step one comple wait for step two`)
// in order to provoke function two , we will use the parameter and pass it as below
call_two()

}

function two(){
    console.log(`step two done`)
}

// when u are to call ,only one call it to be called then the other is to be passes as argument to it 

one(two)