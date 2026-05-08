
async function getRandomAnime(){
    let animeData = await fetch("./anime_db.json")
        .then(res => res.json());
    const id = Math.floor(Math.random() * animeData.length);
    return animeData[id];
}

export default { getRandomAnime };