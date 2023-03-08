let input = document.querySelector('input');


const handleSearch = async () => {
    let city = input.value;

    if(!city) return;
    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=imperial&q=${city}`;
    let { list } = await (await fetch(url)).json()

    let { dt, main: { temp, humidity }, wind: {speed }, weather:[{icon}] } = list[0];

    current.innerHTML = `
        <h1>${city} (${new Date(dt*1000).toDateString()}) <img src="https://openweather.org/image/${icon}.png"> </h1>
        <h3>Temp: ${temp} F</h3>
        <h3>Wind: ${speed} MPH</h3>
        <h3>Humidity: ${humidity} %</h3>
    `;
}

search.onclick = handleSearch;