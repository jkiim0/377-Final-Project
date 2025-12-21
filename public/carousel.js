const key = "65bd56a4dfbcd5f890245e965a661290";

const artists = [
  "Kehlani",
  "Beyoncé",
  "Daft Punk",
  "Florence and the Machine",
  "Kendrick Lamar",
  "Nirvana",
  "Adele",
  "J Balvin"
];

function randomize(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function loadRandomAlbum() {
  const artist = randomize(artists);

  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${encodeURIComponent(
    artist
  )}&api_key=${key}&format=json`;

  const response = await fetch(url);
  const data = await response.json();

  const albums = data.topalbums.album;
  const album = randomize(albums);

  let imageUrl = "";

  album.image.forEach(img => {
    if (img.size === "extralarge") {
    imageUrl = img["#text"];
    }
  });

  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";

  const img = document.createElement("img");
  img.src = imageUrl;

  carousel.appendChild(img);
  console.log('display image');
}

loadRandomAlbum();
