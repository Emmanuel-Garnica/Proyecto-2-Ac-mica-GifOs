const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
let suggestions = fetch('http://api.giphy.com/v1/gifs/trending?' + 'api_key=' + apiKey)
    .then((response) => response.json())