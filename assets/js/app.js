// alert("hello javascript");

let  cl=console.log;
const signInForm =document.getElementById("signInForm");
const emailControl =document.getElementById("email");
const passwordControl =document.getElementById("password");

 let db ={
    email : "jhon@wick.com",
    password : "jhonIsAlive"
 }
//if email and pass both match the we can API call is success
//else API call failed >> invalid username or password
const OnSignIn =(e) => {
    e.preventDefault();
    //we will get email and pass from ui send it to DB
    //if it matches >> resolve >> successfully Login 
    //reject >> Invalid username or passwor
    new Promise ((resolve ,reject)=>{
      setTimeout(() => {
        if(emailControl.value === db.email && passwordControl.value === db.password ){
          resolve(`successfully Login !!!`)
        }else{
          reject(`Invalid Username or password !!!`)
        }
      }, 1000);
    }) 
    .then((res)=>{
      swal.fire({
      title:res,
    } )
    })
    .catch(err => {
    swal.fire({
      icon: 'error',
       title: 'Oops...',
       text: err,
      
    })
    })       
    
}
signInForm.addEventListener("submit",OnSignIn)

function promisetest(){
  return  new Promise((resolve ,reject) => {
    setTimeout(() => {
        //API call
        let apiSuccess = true;
        if(apiSuccess === true){
            resolve(`Login  successfully!!!`)
        }else{
            reject(`Invalid Username or password`)
        }

    }, 1000);
})
}
promisetest()  //it returns promise
.then((res)=>{
  cl(res)
})
.catch((err)=>{
  cl(err)
})
    
     




























































//     //we will get email and pass from the UI send it to be DB
//     //if it matches >> resolve >> successfully Login 
//     //reject >> Invalid Username or password 
//      return new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//      if(emailControl.value === db.email && passwordControl.value === db.password){
//         resolve(`successfully Login !!!`)
//      }else{
//         reject(`Invalid Username or password !!!`)
//      }
//     },1000);
//     })
//     .then((res)=>{
//         Swal.fire({
//             title:res,
//         })  
//     })
//     .catch(err => {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: err,
            
//           })
          
//     })
        
// }





// signInForm.addEventListener("submit",OnSignIn)

// function promisetest(){
// return  new Promise ((resolve , reject)=>{
//     setTimeout(()=>{
//         //Api call
//     let apiSuccess = true ;
//      if(apiSuccess === true){
//         resolve(`Login successfully !!!`)
//      }else{
//         reject (`Invalid Username or password`)
//      }
    
// },1000);
// })
// }


// promisetest() // it returns promise
//       
//       .catch(err =>(err))
        
      