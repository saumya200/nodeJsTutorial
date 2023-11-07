// const hello = require('./hello.js')

// console.log(hello.foo);
// hello.sayHello1();
// hello.sayHello2();

//-------------------------------------------------------------------------------------------------------------------------
//-------------------------Built-in Modules are of 4 types:
//1)OS Module , 2)PATH Module 3)FS Module, 4)HTTP Module
//-------------------------------------------------------------------------------------------------------------------------
//OS MODULE //
const os = require('os');

const systemUpTime = os.uptime();

const userInfo = os.userInfo();

const otherInfo = {
    name : os.type(),
    release : os.release(),
    totalMem : os.type(),
    freeMem : os.freemem()
}

console.log(systemUpTime);
console.log(userInfo);
console.log(otherInfo);

//-----------------------------------------------------------------------------------------------------------------------------
//PATH MODULE//
const path = require('path');

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
