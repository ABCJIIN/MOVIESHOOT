//인기영화
let page = 1;
const key = "26e37826233bf74e2ff5973dabc4d65b";
const base_url = "https://image.tmdb.org/t/p/w300/";
const container = document.querySelector(".container");

function fetchMovie(page){
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=ko-KR&page=${page}`;
    fetch(url)
    .then(res => res.json())
    .then(function(res){
        const movies = res.results;
        movies.map(function(movie){
            console.log(movie.title);
            const div = document.createElement('div');
            const output = `
                <img src="${base_url + movie.poster_path}">
            `;
            div.innerHTML = output;
            container.appendChild(div);
        });
    })
    .catch(erro => console.log(erro));
};

window.addEventListener('onLoad', fetchMovie());

//이전 버튼
const prevButton = document.querySelector(".prev");
prevButton.addEventListener('click', function(){
    if(page > 0){
        page -= 1;
        fetchMovie(page);
    } else {
        this.disabled = true;
    }
    
    console.log(page);
});

//다음 버튼  
const moreButton = document.querySelector(".more");
moreButton.addEventListener('click', function(){
    if(page < 3){
        page += 1;
        fetchMovie(page);
    } else {
        this.disabled = true;
    }
    
    console.log(page);
});