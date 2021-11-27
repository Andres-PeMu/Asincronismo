const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) resolve('hey');
        else     reject('no que mal');
    });
};
 

somethingWillHappen()
.then(Response => console.log(Response))
.catch(err => console.log(err));


const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            setTimeout(()=> {
                resolve ('true')
            }, 2000)
        }else{
            const error = new Error('no que mal');
            reject(error);
        }
    })
}

somethingWillHappen2()
.then(Response => console.log(Response))
.catch(err => console.log(err));


Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(Response =>{
    console.log('Array of results', Response);
})
.catch(err => {
    console.error(err);
})

