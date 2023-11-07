// const hello = require('./hello.js')

// console.log(hello.foo);
// hello.sayHello1();
// hello.sayHello2();

//-------------------------------------------------------------------------------------------------------------------------
//-------------------------Built-in Modules are of 4 types:
//1)OS Module , 
//2)PATH Module 
//3)FS Module, 
//4)HTTP Module-------------------------------------------------------------------------------------------

//----------->OS MODULE <---------------------------//

//import for OS using the require() method;
const os = require('os'); 

//tells the system uptime in seconds
const systemUpTime = os.uptime(); 

//gives the information about the current user
const userInfo = os.userInfo(); 

const otherInfo = {
  //Tells the name of the Operating System
    name : os.type(), 
    //Tells the release version of the Operating System
    release : os.release(), 
     //Tells the total amount of memory available in bytes
     totalMem : os.type(),
   // Tells the total amount of free memory available in 
    freeMem : os.freemem() 
}

console.log(systemUpTime);
console.log(userInfo);
console.log(otherInfo);

//-----------------------------------------------------------------------------------------------------------------------------
//-------------------->PATH MODULE<-------------------------------------//

//import for PATH using the require() method
const path = require('path'); 

//// Assigning a path to the myPath variable
const myPath = '/home/saumya/REACT/nodeJsTut/app.js' 

const pathInfo = {
    fileName : path.basename(myPath),
    folderName : path.dirname(myPath),
    extensionName : path.extname(myPath),
    absoluteOrNot : path.isAbsolute(myPath),
    detailInfo : path.parse(myPath),
    
}

console.log(myPath);
console.log(pathInfo);
console.log(path.sep);

//accepts path as strings
console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'))
 
console.log(path.resolve('grandParentFolder', 'parentFolder', 'child.txt'))

//-------------------------------------------------------------------------------------------------------------------------------
//FS MODULE//
const fs = require('fs');

//Making a new directory called ./myFolder//
fs.mkdir('./myFolder',(err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Folder created successfully !")
    }
})
