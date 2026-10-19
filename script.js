async function getCharacter() {
    try{
        const url="https://api.disneyapi.dev/character?name=Mickey%20Mouse";

        const headers = new Headers();
        headers.append("Accept", "application/json");

        const response = await fetch(url, {headers:headers});
        const json = await response.json();

        //console.log(json.data);

        const characterHolder = document.getElementById("characterHolder");
       // characterHolder.textContent=json.data;

        characterHolder.append(document.createElement('br'));

        let img = document.createElement('img');
        img.src = json.data[1].imageUrl;
        img.width = 100;
        characterHolder.appendChild(img);
    }
    catch (error) {
        console.log(error);
    }
}