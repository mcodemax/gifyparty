console.log("Let's get this party started!");

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault();
    const gif = document.querySelector('#gifin').value;
    gifSubmit(gif);
});

document.querySelector('#kill').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#gifholder').innerHTML = '';
});


async function gifSubmit(gif){
    //use api
    const api_key = 'qg46IbDVyCyJt02vxUg31A0qV3VZ498T';//
        
    const req = await axios.get("http://api.giphy.com/v1/gifs/search", { params: {api_key: api_key,q: gif } });

    //attach gif to html from above http request
    attachgif(req.data.data[Math.floor((50 * Math.random()))].images.fixed_width_small.url);
}

const attachgif = (giflink) => {
    const img = document.createElement('img');
    img.src = giflink;
    document.querySelector('#gifholder').append(img);

}
//Element.prepend