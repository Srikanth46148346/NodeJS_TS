//import fs module

const fs = require('fs')

// // read data Asynchronously

// // fs.readFile('demo.txt',(err,res)=>{
// //     if(err) throw err
// //     else{
// //         console.log(res.toString());
// //     }
// // })


// // read data Synchronously

// let data1 = fs.readFileSync('demo.txt')
// console.log(data1.toString())

// Writing the data. when you are using the writeFile and writeFileSync,  old data in the file will be replced with the given data

// let data2 =fs.writeFile('demo.txt','data will be replaced', (err)=>{
//     if(err) throw err
//     else{
//         console.log('data replced successfully')
//     }
// })



// let data3 = fs.writeFileSync('demo.txt', 'data replaced Synchronously')
// console.log(" updated")


// fs.appendFile('demo.txt',' NodeJs',(err)=>{
//     if(err) throw err
//     else{
//         console.log('data appended successfully')
//     }
// })

// fs.appendFileSync('demo.txt', 'Appened Sync data');
// console.log('data appended synchronously')

fs.close()