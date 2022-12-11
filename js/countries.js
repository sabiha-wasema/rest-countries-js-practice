const loadCountries = () => {
  //   console.log(countryContainer);
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountry(data));
};

const displayCountry = countries => {
  //   console.log(countries);
  const countryContainer = document.getElementById("display-countries");
  countries.forEach(country => {
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <img width="200px" src="${country.flags.png}" alt="">
    <h4><span>Name:</span> ${country.name.common}</h4>
    <p><span>Capital:</span> ${country.capital}</p>
    <p><span>Population:</span> ${country?.population}</p>
     <button onclick="displayDetail('${country?.name?.common}')">Details</button>
    `;
    countryContainer.appendChild(div);
  });
};

const displayDetail = name =>{
    //  console.log(name)
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>singleCountryDetail(data[0]))
}

const singleCountryDetail = country =>{
    // console.log(country)
    const detailContainer = document.getElementById("country-detail");
    const div = document.createElement("div");
    div.classList.add('details')
    div.innerHTML = `
    <img src="${country.flags.png}" alt="">
    <h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital}</p>
    `;
    detailContainer.appendChild(div);
}
