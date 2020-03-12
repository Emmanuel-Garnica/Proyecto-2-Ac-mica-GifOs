let url = fetch('http://api.giphy.com/v1/gifs/search?api_key=nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh&q=Sailor')
    .then((res) => res.json())
    .then((data) => data.data)
    .then((array) => array.forEach((gif) => {
        console.log(gif.url)
    }))