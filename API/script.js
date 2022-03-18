async function fetchCats() {
    let response = await fetch('https://api.thecatapi.com/v1/breeds');
    let responseInJson = await response.json();
    console.log(responseInJson);
    creatCat(responseInJson);
}

function creatCat(dataCat){
    for (let i = 0; i < dataCat.length; i++) {
        //Check error undefined data
        if (dataCat[i].image === undefined || dataCat[i].image.url === undefined){
            continue;
        }

        let catCast = document.getElementById('cat');

        // Get data from API
        let div = document.createElement('div');
        div.style.borderBlock = '2px solid black';
        catCast.appendChild(div);

        let image =document.createElement('img');
        image.src = dataCat[i].image.url;
        image.style.width = '50%';
        image.style.display = 'block';
        image.style.marginBlock = 'center';
        div.appendChild(image);

        let name = document.createElement('div');    
        name.innerHTML = dataCat[i].name;
        div.appendChild(name);

        let origin = document.createElement('div');
        origin.innerHTML = dataCat[i].origin;

        let temperament = document.createElement('div');
        temperament.innerHTML ="Temperament: " + dataCat[i].temperament;

        let lifeSpan = document.createElement('div');
        lifeSpan.innerHTML = "Life Span: " + dataCat[i].life_span + " year";

        let weight = document.createElement('div');
        weight.innerHTML = "Weight: "+ dataCat[i].weight.metric + " kg";

        let description = document.createElement('div');
        description.innerHTML = "Description: " + dataCat[i].description;
        
        // Handling evens
        div.onmouseover = function(){
            div.appendChild(origin);
            div.appendChild(temperament);
            div.appendChild(lifeSpan);
            div.appendChild(weight);
            div.appendChild(description);
            div.onmouseout = function(){
                div.removeChild(origin);
                div.removeChild(temperament);
                div.removeChild(lifeSpan);
                div.removeChild(weight);
                div.removeChild(description);
            };
        };
        
    }
}
fetchCats();
// fetchAPI();
// creatCat(dataCat);


