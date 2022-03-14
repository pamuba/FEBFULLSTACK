function doubleAfter2Seconds(x){
    return new Promise(resolve=>{
        setTimeout(
            () => {
                resolve(x*2)
            }, 2000
        )
    })
}