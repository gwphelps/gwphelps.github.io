const baseUrl = "https://api.jikan.moe/v4";
const delayConst = 500;    

function wait(delay){
    return new Promise((resolve) => setTimeout(resolve, delay));
}

function waitThenFetch(url){
    return wait(delayConst).then(() => fetch(url));
}

function getAnimeById(id){
    return waitThenFetch(`${baseUrl}/anime/${id}`)
        .then((res) => res.json())
        .then((json) => {
            const data = {
                name: json.data.title,
                id: json.data.mal_id,
                image: json.data.images.jpg.image_url
            };
            return data;
        });
}

function getActorsByAnimeId(id){
    return waitThenFetch(`${baseUrl}/anime/${id}/characters`)
        .then((res) => res.json())
        .then((json) => {
            return Object.values(json.data.map((character => character.voice_actors.filter((va => va.language == "Japanese"))[0]))
            .filter(actor => actor != null)
            .map(actor => {
                return {
                    name: actor.person.name,
                    id : actor.person.mal_id,
                    image: actor.person.images.jpg.image_url
                };
            }).reduce((acc, curr) => {
                acc[curr.id] = curr;
                return acc;
            }, {}));
        });
}

function getAnimeByActorId(id){
    return waitThenFetch(`https://api.jikan.moe/v4/people/${id}/full`)
        .then((res) => res.json())
        .then((json) => {
            const data = Object.values(json.data.voices
            .filter(show => show != null)
            .map(show => {
                return {
                    name: show.anime.title,
                    id: show.anime.mal_id,
                    image: show.anime.images.jpg.image_url
                };
            }).reduce((acc, curr) => {
                acc[curr.id] = curr;
                return acc;
            }, {}));
            data.sort((a, b) => a.name.localeCompare(b.name));
            return data;
        });
}

export default { getAnimeById, getActorsByAnimeId, getAnimeByActorId };