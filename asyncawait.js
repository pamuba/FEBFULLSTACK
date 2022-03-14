function doubleAfter2Seconds(x){
    return new Promise(resolve=>{
        setTimeout(
            () => {
                resolve(x*2)
            }, 2000
        )
    })
}
// let v1, v2,v3
// doubleAfter2Seconds(10).then(
//     v1 => console.log(v1)
// )
// doubleAfter2Seconds(20).then(
//     v2 => console.log(v2)
// )
// doubleAfter2Seconds(30).then(
//     v3 => {console.log(v3)
//     console.log(v1+v2+v3)}
// )

// let sum = doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30)
//promises can be difficult
// function addPromise(){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10).then(a=>{
//             doubleAfter2Seconds(20).then(b=>{
//                 doubleAfter2Seconds(30).then(c=>{
//                     resolve(a+b+c)
//                 })
//             })
//         })
//     })
// }

// addPromise().then(r=>{
//     console.log(r)
// })

//async always returns a promise
//await can be used only inside async fn
//exec async sync
async function addAsync(){
    const a  = await doubleAfter2Seconds(10)
    const b  = await doubleAfter2Seconds(20)
    const c  = await doubleAfter2Seconds(30)

    return a+b+c
}

addAsync().then(r=>{
    console.log(r)
})
