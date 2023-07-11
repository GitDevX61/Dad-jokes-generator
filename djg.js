const buttonElement = document.querySelector('.js-btn')

const jokeElement = document.querySelector('.js-joke')

const apiKey = "/1YEnqw32o3z4MFpvAqcjA==Ut4JucW9TvKI2Rti";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try { 
    jokeElement.innerHTML = 'Updating...'
    buttonElement.disabled = true;
    buttonElement.innerHTML= "Loading..."
  
    const response = await fetch(apiURL, options);
    const data = await response.json();

    jokeElement.innerHTML = data[0].joke

    buttonElement.disabled = false;
    buttonElement.innerHTML = "Tell me a joke"
  } catch (error) {
    jokeElement.innerHTML = "An error occurred, please try again later."
    buttonElement.disabled = false;
    buttonElement.innerHTML = "Tell me a joke"
    console.log(error);
  }
}

buttonElement.addEventListener('click', getJoke);

