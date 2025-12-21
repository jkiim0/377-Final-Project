// prints "{output: '____'}" where the id is
// change 'none' in line 15 to whichever id function is being used for

// html code that goes with the js file
// <script src="homePage.js" defer></script>


function callAPI(){
    fetch('/', {
        method: 'POST'
    })
        .then((response) => response.json())
        .then(responseJson =>  {
            console.log('response:', responseJson); // show up in browser
            document.getElementById('none').innerHTML = JSON.stringify(responseJson);
        });
}

window.onload = callAPI();