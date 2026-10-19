async function getCharacter() {
    try{
        const character = document.getElementById("character").value;
        const url="https://api.disneyapi.dev/character?name=" + character;

        const headers = new Headers();
        headers.append("Accept", "application/json");

        const response = await fetch(url, {headers:headers});
        const json = await response.json();

        const characterHolder = document.getElementById("characterHolder");
        characterHolder.append(document.createElement('br'));

        // characterHolder.innerHTML = "";

        let img = document.createElement('img');
        img.src = json.data[0].imageUrl;
        img.width = 100;
        characterHolder.appendChild(img);
    }

    catch (error) {
        console.log(error);
    }
}