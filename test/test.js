var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var yt = [];
function onYouTubeIframeAPIReady() {

    let w = '100%';
    let h = '100%';

    yt['player1'] = new YT.Player('player1', {
        width: w,
        height: h,
        videoId: '4d118fHF8QE',
        events: {
            'onReady': onPlayerReady,
        },
    });
    yt['player2'] = new YT.Player('player2', {
        width: w,
        height: h,
        videoId: 'HzUDAaYMNsA',
    });
    yt['player3'] = new YT.Player('player3', {
        width: w,
        height: h,
        videoId: '5LI1PysAlkU',
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}

const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.on('transitionStart', function(){
    yt['player1'].pauseVideo();
    yt['player2'].pauseVideo();
    yt['player3'].pauseVideo();
});

swiper.on('transitionEnd', function(){

    var index = this.realIndex;
    var slide = document.getElementsByClassName('swiper-slide')[index];
    var slideVideo = slide.getElementsByTagName('iframe')[0];
    var slideVideoId = slideVideo.getAttribute('id');

    if(slideVideo != null || slideVideo != undefined){
        yt[slideVideoId].mute();
        yt[slideVideoId].playVideo();
    }
});