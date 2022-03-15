function criyicalCode(){
    throw "throwing an exception";
}

function logError(theException){
    console.log(theException);
}

//try..Catch
console.log("\n********try...Catch********\n");

try{
    criyicalCode();
}catch (ex){
    console.log("Got an Error");
    logError(ex);
}

//Throwing in Try...Catch
console.log("\n********Throwing in try...Catch********\n")

try{
    throw "An exception is throw every time"
}catch(ex){
    console.log("Got an error");
    logError(ex);
}
//Try...Catch...Finally
console.log("\n********Try...Catch..Finally********\n");

try{
    criyicalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex)
}finally{
    console.log("Code that always will run");
}
function hello(){
    console.log("\n********Throwing Exceptions********\n")
}