const giphyData = {
    api_key: "VqwYQrLEYOi3btJlgOTHADsvnfBZsE5p",
    limit: 10,
}

const fetchPromise = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${giphyData.api_key}&limit=10`);
let embededTrendigGifs = []

fetchPromise.then(response => {
    const jsonPromise = response.json();
    jsonPromise.then(json => {
        let data = json.data;
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            embededTrendigGifs.push(data[i]['embed_url']);
        }
        console.log(embededTrendigGifs);
    });
});


// fetchPromise.then(response => {
//     const jsonPromise = response.json();
//     jsonPromise.then(json => {
//         console.log(json.data);
//     });
// });

