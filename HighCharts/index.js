document.addEventListener("DOMContentLoaded",()=>{
    Highcharts.chart('container', {
        chart:{
            type:'areaspline',
            zoomType:'xy'
        },
        credits:{
            // enabled:false
            text: "Webinar Credits",
            href:'https://google.com', 
            position:{
                align:'left',
                x:10
            },
            style:{
                fontSize:"12px",
                color:"red"
            }
        },
        tooltip:{
            animation:true,
            backgroundColor:'#333333',
            borderColor:'#f01f11',
            borderRadius:"20",
            followPointer:true,
            style:{
                color:'#ffffff'
            }
        },
        title:{
            text:'Our First Chart'
        },
        yAxis:{
            title:{
                text:"Fruits Ea ten"
            }
        },
        xAxis:{
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        series:[
            {
                name:'John',
                data:[2,4,8,150,80,50, 10,5,1]
            },
            {
                name:'Jill',
                data:[1,100,3,2,2,3,1,2,3]
            },
            {
                name:'Jake',
                data:[2,4,8,4,80,50, 80,5,1]
            },
        ]
    })
})