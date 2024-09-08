
let myPromises = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("print after a bit delay in promise 1");
        console.log("I'm in Promise 1");
        
    }, 4000);
    resolve(2000);

    
});
let myPromises2 = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("print after a bit delay in promise 2");
        console.log("I'm in Promise 2");
        
    }, 2000);       
    resolve(2000);

    
});
 myPromises2.then((value) =>console.log(value));
 // // call back function 
setTimeout(function() {
    console.log("time out");
    
},2000);

function x(y){
    console.log("Inside x");
    // Y is being called 
    y();
    
}

x(function y(){
    console.log("Inside y");
    
})



function awaited(){
    console.log("Hii let's get started.");
    
    setTimeout(()=>{
        console.log("sorry for Convenience");
        
        setTimeout(()=>{
console.log("you are deep inside SetTimeout function");

        },1000) 
        setTimeout(()=>{
            console.log("you are more deep inside SetTimeout function");
            
                    },5000) 
     },10000)
        console.log("Hii let's finish it.");
        
}
awaited();

// Promises chaining
let Promises1 = fetch('');

Promises1.then((response)=>{
    let res = response.json();
    res.then((data)=>{
        console.log(data)
    }
    )
})

Promises

let prom1 = new Promise((resolve,reject) =>{
setTimeout(()=>{
    console.log("The Request is Being Resolved.");
    
},1200)
 
})

let prom2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("The Request2 is Being Resolved.");
        
    },1200);
  
    return resolve(4000);
    })

// callback chaining
function op1(a,callback){
    const ans= a+1;
    callback(ans);
}
function op2(a,callback){
    const ans= a+2;
    callback(ans);
}function op3(a,callback){
    const ans= a+3;
    callback(ans);
}
function op4(){
    op1(0,(ans1)=>{
        op2(ans1,(ans2)=>
        {
            op3(ans2,(ans3)=>{
console.log(`ans is:${ans3}`);

            });
        });
    });
    
}

op4();
