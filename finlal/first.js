// const promiseOne = new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
    
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// }).then(function () {
//     console.log("promise consumed");
// })


// const Promisethree = new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         resolve({username:"Sandeep",email:"sandeeppati69@gmail.com"})
//     }, 1000);
// }).then(function(user){{
//     console.log(user);
// }})

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username : "sandeep" , password : "123"})
//         }
//         else{
//             reject('Something went wrong')
//         }
//     }, 2000);
// })
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log("error");
// })
// .finally(()=>{
//     console.log("resolve or regected");
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username:"sandeep",college:"GIET"})

//         }
//         else{
//             reject('error : something went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//    try {
//     const response = await promiseFive
//     console.log(response);
    
//    } catch (error) {
//     console.log(error);
//    }
// }
// consumePromiseFive()
// async function getAllUser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("Error");
//    }
// }
// getAllUser()

// const response = fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

