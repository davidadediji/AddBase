/**
 * Error handling in Node js
 * errors in Node.js are handled using exceptions
 */

//an exception is created using the throw keyword
//throw value

//the value can be any js value like a string, number or object, however in node js we dont throw strings but error objects


try{
    decodeURI("%%%"); 

}catch(e){
    throw new Error(e.name)
}