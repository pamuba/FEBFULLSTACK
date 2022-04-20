document.addEventListener("DOMContentLoaded",()=>{
    const options = {
        chart:{
            type:'column',
            zoomType:'xy'
        },
        title:{
            text:'Our First Chart'
        },
        yAxis:{
           
            title:{
                text:"Fruits Eaten"
            }
        },
    }
    // $.get('data.csv', csv => {
    //     options.data = {
    //         csv
    //     };
    //     Highcharts.chart('container',options)
    // })


//    fetch('data.csv')
//         .then(
//             res => {
//                 return res.text()
//             }
//         )
//         .then(csv => {
//             options.data = {
//                 csv
//             };
//             Highcharts.chart('container',options)
//         })
//         .catch()

//    options.data = {
//        csvURL:'http://localhost:5500/data.csv',
//        enablePolling:true,
//        dataRefreshRate:2
//    };
//    Highcharts.chart('container',options)
})