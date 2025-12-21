// api key: 1062477-JennaKim-3CB98006
function showToast(message){
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }

    })
};

async function artistRecs(){
    const artistName = document.getElementById("artistName").value;
    console.log('artist:', artistName);

    showToast("Finding similar artists for" + artistName + "...");

    document.getElementById('waitMessage').innerHTML = `<h4>Finding similar artists</h4>`;

    const artists = fetch(`https://tastedive.com/api/similar?type=music&q=${artistName}&limit=10&info=1&k=1062477-JennaKim-3CB98006&format=json`).then(result =>
        result.json()
    );

    const artistsTable = document.getElementById('artistTable');

    const artistsAwaited = await artists;
    console.log('artisits:', artistsAwaited);
    const data = artistsAwaited.similar?.results;
    console.log('similar artists:', data);
    
    artistsTable.innerHTML = `<tr><th>Similar Artists</th></tr>`;

    if(!Array.isArray(data)){
        artistsTable.innerHTML = `<h4>Artist not found</h4>`;
        return;
    }

    showToast("Found " + data.length + " similar artists!");

    data.forEach((artist) => {
        const tableRow = document.createElement('tr');
        const artistNames = document.createElement('td');
        const song = document.createElement('a');

        song.href = artist.yUrl;
        song.textContent = artist.name;
        song.target = "_blank";

        artistNames.appendChild(song);
        tableRow.appendChild(artistNames);
        artistsTable.append(tableRow);
    });

    document.getElementById('waitMessage').style.display = 'none';
    artistsTable.style.display = 'table';
}