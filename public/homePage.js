function callAPI(){
    fetch('/', {
        method: 'POST'
    })
        .then((response) => response.json())
        .then(responseJson =>  {
            console.log('response:', responseJson); // show up in browser
            document.getElementById('apiResponse').innerHTML = JSON.stringify(responseJson);
        });
}

window.onload = callAPI();