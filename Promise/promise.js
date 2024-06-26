// then error handling 
const async1 =  param => {
    return new Promise((resolve, reject) => {
        resolve(param * 2)
    })
}

const async2 = param => {
    return new Promise((resolve, reject) => {
        resolve(param * 2);
        throw 'error!';
    })
}

const asyncAll = (message, ret) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            console.log(new Date());
            resolve(ret);
        }, 2000)
    })
}

/*
async1(1).then(async2).then(result => {
    console.log(result) // resolve
}, reason => {
    console.log(`this Promise exit by ${reason}.`) //reject
}) */

async1(1).then(async2).then(result => {
    console.log(result)
    //throw 'error?';
}).catch(reason => {
    console.log(`this Promise exit by ${reason}.`);
}).finally(() => {
    console.log(`this logic must to run after Promise`);
})

const promises = [asyncAll('run1', 1), asyncAll('run2', 2)];

Promise.all(promises).then(data => {
    console.log(data);
})