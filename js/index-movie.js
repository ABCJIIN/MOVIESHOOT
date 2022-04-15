
let pageA = 1;
let pageB = 1;
let pageC = 1;
const key = "26e37826233bf74e2ff5973dabc4d65b";
const base_url = "https://image.tmdb.org/t/p/w300/";
const containerA = document.querySelector(".containerA");
const containerB = document.querySelector(".containerB");
const containerC = document.querySelector(".containerC");

//인기영화
function fetchMovieA(pageA){
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ko-KR&page=${pageA}`;
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
            containerA.appendChild(div);
        });
    })
    .catch(erro => console.log(erro));
};

window.addEventListener('onLoad', fetchMovieA());

//이전 버튼
const prevButtonA = document.querySelector(".prevA");
prevButtonA.addEventListener('click', function(){
    if(pageA > 0){
        pageA -= 1;
        fetchMovieA(pageA);
    } else {
        this.disabled = true;
    }
    
    console.log(pageA);
});

//다음 버튼  
const moreButtonA = document.querySelector(".moreA");
moreButtonA.addEventListener('click', function(){
    if(pageA < 3){
        pageA += 1;
        fetchMovieA(pageA);
    } else {
        this.disabled = true;
    }
    
    console.log(pageA);
});


//현재상영화
function fetchMovieB(pageB){
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ko-KR&page=${pageB}`;
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
            containerB.appendChild(div);
        });
    })
    .catch(erro => console.log(erro));
};

window.addEventListener('onLoad', fetchMovieB());

//이전 버튼
const prevButtonB = document.querySelector(".prevB");
prevButtonB.addEventListener('click', function(){
    if(pageB > 0){
        pageB -= 1;
        fetchMovieB(pageB);
    } else {
        this.disabled = true;
    }
    
    console.log(pageB);
});

//다음 버튼  
const moreButtonB = document.querySelector(".moreB");
moreButtonB.addEventListener('click', function(){
    if(pageB < 3){
        pageB += 1;
        fetchMovieB(pageB);
    } else {
        this.disabled = true;
    }
    
    console.log(pageB);
});


//개봉예정영화
function fetchMovieC(pageC){
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=ko-KR&page=${pageC}`;
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
            containerC.appendChild(div);
        });
    })
    .catch(erro => console.log(erro));
};

window.addEventListener('onLoad', fetchMovieC());

//이전 버튼
const prevButtonC = document.querySelector(".prevC");
prevButtonC.addEventListener('click', function(){
    if(pageC > 0){
        pageC -= 1;
        fetchMovieC(pageC);
    } else {
        this.disabled = true;
    }
    
    console.log(pageC);
});

//다음 버튼  
const moreButtonC = document.querySelector(".moreC");
moreButtonC.addEventListener('click', function(){
    if(pageC < 3){
        pageC += 1;
        fetchMovieC(pageC);
    } else {
        this.disabled = true;
    }
    
    console.log(pageC);
});
