# Asynchronous Code.

promise object is used to handle the Async code in two way either it will be resolved or rejected .once it is resolved it returns the desired behavior otherwise returns the error on case of rejection .the then  keyword is used after the promise fulfilled other wise error will be thrown using catch keyword .

In promises the JS engine does not wait for promise to be resolve to start execution .

syntax:-

let varName = new promise ((resolve, reject) ⇒{
});

## Async & Await .

Async is a keyword which is used before a function to create a Async function .it always return promises even promise is not defined .it wrap the code in promise if promise is not defined.

Await is also a keyword only used inside Async function to prevent the flow of execution to Fulfill the promise before executing further. Await is used to prevent the flow of execution of the code for certain time period.

##CallBack Function 

Function which is passed inside another function is called is known as callback function . as name suggest it is function which is called back later for some specific purpose .
it is an important feature of Async code to make the code more bulky without any interuption.


## promises 
The promises object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
it is a type of object which is used in javascript to make it more responsive with fast responsive it takes a callback function as parameter called executing function which itself takes two parameter resolve and reject .

there are three stage in promise :-
pending:-initial stage neither fulfilled or rejected
fulfilled:- meaning that the operation was completed successfully.
rejected:- meaning that the operation failed.

