const mbids = [
    "10bf95b6-30e3-44f1-817f-45762cdc0de0",
    "99b09d02-9cc9-3fed-8431-f162165a9371",
    "453eb20f-1560-40e2-ab04-fb6466f5866c",
    "bbca1611-4ca2-4e62-a606-b156d738fe9b",
    "c68a3335-80b8-448a-9fdd-a1ac2cf6967c",
    "e91fe4b3-172d-4ac9-b6d4-50b3f0dc1c03",
    "50fe703f-173e-496a-9155-b2a495d704e5",
    "9402f68c-bc93-4278-8515-01d06fda1b39"
];

function randomize(list){
    return list[Math.floor(Math.random() * list.length)];
}

const mbid = randomize(mbids);

async function images() {
    fetch(`https://coverartarchive.org/release/${mbid}/front`)
        .then(response => response.json())
        .then( data => {
            console.log(data);
            const carousel = document.getElementById('carousel');
            carousel.innerHTML = '';

            data.message.forEach( image => {
                const img = document.createElement('img');
                img.src = image;
                carousel.appendChild(img);
            });

            simpleslider.getSlider();        
        })   

}
images();