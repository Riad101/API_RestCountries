fetch("https://restcountries.eu/rest/v2/all")
.then(res=> res.json())
.then(data=> displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries")

    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "country";
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });    


    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement("div");
    //     countryDiv.className = "country";

    //     // const countryName = document.createElement("H2");
    //     // countryName.innerText = country.name;
    //     // const countryCapital = document.createElement("p");
    //     // countryCapital.innerText = country.capital;
    //     // countryDiv.appendChild(countryName);
    //     // countryDiv.appendChild(countryCapital);
    //     // countriesDiv.appendChild(countryDiv);  
        
    //     const countryInfo = `
    //         <h2 class="country-name">${country.name}</h2>
    //         <p>${country.capital}</p>
    //         `
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);
    // };
}

const displayCountryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>renderCountryInfo(data[0]))    
}

const renderCountryInfo = country =>{
    
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h1>${country.name}</h1>
        <p>population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
    `
}