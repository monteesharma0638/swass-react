let serverUrl = "http://localhost"
async function fetchChartData(){
    return new Promise((resolve, reject)=>{
        fetch(`${serverUrl}/fetchChart.php`)
        .then(response=> response.json())
        .then(result=>{
            let data = result.data.ethereum.dexTrades
            let chartData = [];
            data.sort((a,b)=>(a.any-b.any));
            data.forEach((element, index)=>{
                let time = (new Date(element.any)).getTime()/1000;
                let dataToAppend = {time, open: parseFloat(element.open_price), high: parseFloat(element.maximum_price), low: parseFloat(element.minimum_price) , close: parseFloat(element.close_price)}
                
                chartData.push(dataToAppend);
                
            }) 
            resolve(chartData);  
        })
        .catch(reject)
    })
}

export {
    fetchChartData
}