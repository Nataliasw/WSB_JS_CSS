document.addEventListener("DOMContentLoaded", function (event) {

    const categories = document.getElementById("categories");

    axios.get("https://api.chucknorris.io/jokes/categories").then(response => {
        response.data.forEach(c => {
            const option = createOption(c);
            categories.append(option);
        })
    });
});

function createOption(val) {
    const option = document.createElement("option");
    option.value = val;
    option.innerText = val;
    return option;
}

function createImage(src) {
    const image = document.createElement("img");
    image.src = src;

    return image;
}

function createJokeDiv(joke) {
    const div = document.createElement("div");
    div.innerText = joke;
    return div;
}

function generateJoke() {

    const category = document.getElementById("categories").value;
    const jokeDiv = document.getElementById("joke-div");

    jokeDiv.innerHTML = "";

    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then(response => {

        const image = createImage(response.data.icon_url);
        const joke = createJokeDiv(response.data.value);

        jokeDiv.append(image);
        jokeDiv.append(joke);
    })
}
/////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function (event) {

    const categories = document.getElementById("cat");
    const language = ["en", "de"];

        language.forEach(c => {
            const option = createOptions(c);
            categories.append(option);
        })

});

function createOptions(val) {
    const option = document.createElement("option");
    option.value = val;
    option.innerText = val;
    return option;
}



function createFactDiv(fact) {
    const div = document.createElement("div");
    div.innerText = fact;
    return div;
}



function generateFact(){
    const lang = document.getElementById("cat").value;
    const factDiv = document.getElementById("fact-div");

    factDiv.innerHTML = "";

    axios.get(`https://uselessfacts.jsph.pl/random.json?language=${lang}`).then(response => {



        const fact = createFactDiv(response.data.text);


        factDiv.append(fact);

    })

}