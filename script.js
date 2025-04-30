let selectedMood = "";
let currentWeather = "";

const fetchedTemp = document.getElementById('temperature');
const fetchedCondition = document.getElementById('condition');
const weatherIcon = document.querySelector('.weather-icon')
const spotifyPlayer = document.getElementById('spotify-player')
const outfitList = document.querySelector('.outfit-list');
const weatherIcons = {
    'Clear': '☀️',
    'Rain': '🌧️',
    'Clouds': '☁️',
}

function getSpotifyEmbed(mood, weather) {
    const vibe = `${mood}_${weather}`;
    const playlists = {
        "happy_Clear": "https://open.spotify.com/embed/playlist/37i9dQZF1EIh0gn0qhBsTI?utm_source=generator", 
        "chill_Clear": "https://open.spotify.com/embed/playlist/281ziZIHBNCzLHMyH4TX73?utm_source=generator",
        "sad_Clear": "https://open.spotify.com/embed/playlist/3nSfkA7QvYZGiYaRwYxviS?utm_source=generator",
        "stressed_Clear": "https://open.spotify.com/embed/playlist/7kLztRTxv4XHJDqKdbsUcL?utm_source=generator", 
        "happy_Clouds": "https://open.spotify.com/embed/playlist/4GkQ4O8SvNQ6iHOgBaAsMc?utm_source=generator", 
        "chill_Clouds": "https://open.spotify.com/embed/playlist/71vnnbslUNfNBuSrjm9krQ?utm_source=generator", 
        "sad_Clouds": "https://open.spotify.com/embed/playlist/3y6jAYet1roSh2RzePC10h?utm_source=generator", 
        "stressed_Clouds": "https://open.spotify.com/embed/playlist/37i9dQZF1EIdEbtcbwjUsw?utm_source=generator", 
        "happy_Rainy": "https://open.spotify.com/embed/playlist/37i9dQZF1EId3GGm8F19zq?utm_source=generator", 
        "chill_Rainy": "https://open.spotify.com/embed/playlist/37i9dQZF1EIgsKZ1OeM5Qc?utm_source=generator", 
        "sad_Rainy": "https://open.spotify.com/embed/playlist/37i9dQZF1EIgUnp18Jl5J9?utm_source=generator", 
        "stressed_Rainy": "https://open.spotify.com/embed/playlist/37i9dQZF1EIfSvy7beWVGl?utm_source=generator",
    };
    return playlists[vibe] || "https://open.spotify.com/embed/playlist/0MglC1yBNcwajjnjdT4QfZ?utm_source=generator"
}
// function getOutfitSuggestion(mood, weather){
//     const vibe = `${mood}_${weather}`;
//     const outfits = {
//         "happy_Clear": [],
//         "happy_Clouds": ["happy", "clouds", "test"],
//         "sad_Rain": [],
//         "chill_Clear": [],
//     };
//     return outfits[vibe] || ["cardigan", "jeans", "sneakers"];
// }
function getOutfitSuggestion(weather) {
    const lowerWeather = weather.toLowerCase();
    const outfits = {
      clear: [
        ["t-shirt", "shorts", "sneakers"],
        ["polo shirt", "shorts", "sneakers"],
        ["light hoodie", "cargo shorts", "running shoes"]
      ],
      rain: [
        ["rain jacket", "joggers", "rain boots"],
        ["windbreaker", "jeans", "waterproof sneakers"],
        ["hooded sweatshirt", "track pants", "boots"]
      ],
      clouds: [
        ["long-sleeve t-shirt", "jeans", "sneakers"],
        ["crewneck sweatshirt", "straight-leg pants", "casual shoes"],
        ["light jacket", "denim pants", "canvas sneakers"]
      ]
    };
    return outfits[lowerWeather];
}
function updateSpotifyPlayer(mood, weather){
    const spotifyEmbedUrl = getSpotifyEmbed(mood, weather)
    spotifyPlayer.src = spotifyEmbedUrl
}
// function updateOutfit(mood, weather){
//     const outfit = getOutfitSuggestion(mood,weather)
//     outfitList.innerHTML = outfit.map(item => `<p>${item}</p>`).join('');
// }
function updateOutfit(weather) {
    const options = getOutfitSuggestion(weather);
    if (options && options.length > 0) {
      const outfit = options[Math.floor(Math.random() * options.length)];
      outfitList.innerHTML = outfit.map(item => `<p>${item}</p>`).join('');
    }
}
document.querySelectorAll(".mood").forEach(button => {
    button.addEventListener("click", () => {
        selectedMood = button.dataset.mood;
        if (currentWeather) {
            updateSpotifyPlayer(selectedMood, currentWeather);
            updateOutfit(selectedMood, currentWeather);
        }
    });
});
navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = '59a621cf06f68dea3dba8cc62db94e26';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const result = await fetch(url)
    const data = await result.json();
    const fetchedTemperature = Math.round(data.main.temp);
    const fetchedWeather = data.weather[0].main;
    fetchedTemp.innerText = `${fetchedTemperature}°F`;
    fetchedCondition.innerText = fetchedWeather;
    currentWeather = fetchedWeather;
    weatherIcon.innerText = weatherIcons[fetchedWeather] || "🌡️";
    if(selectedMood){
        updateSpotifyPlayer(selectedMood, currentWeather);
        // updateOutfit(selectedMood, currentWeather)
    }
    updateOutfit(currentWeather);
})

