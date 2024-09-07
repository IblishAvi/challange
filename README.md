# Asynchronous Code.

promise object is used to handle the Async code in two way either it will be resolved or rejected .once it is resolved it returns the desired behavior otherwise returns the error on case of rejection .the then  keyword is used after the promise fulfilled other wise error will be thrown using catch keyword .

In promises the JS engine does not wait for promise to be resolve to start execution .

syntax:-

let varName = new promise ((resolve, reject) ⇒{
});

## Async & Await .

Async is a keyword which is used before a function to create a Async function .it always return promises even promise is not defined .it wrap the code in promise if promise is not defined.

Await is also a keyword only used inside Async function to prevent the flow of execution to Fulfill the promise before executing further. Await is used to prevent the flow of execution of the code for certain time period.
