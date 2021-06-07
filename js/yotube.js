/* 유튜브 삽입 */

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  // 아래의 plyer는 #player 태그
  player = new YT.Player('player', {
    videoId: 'An6LvWQuj_8', 
    //유튜브 파일에서 소스코드 가져와서 삽입해주기 
    playerVars:{
      autoplay:true, //자동 재생 유무
      loop:true, //반복 재생 유무
      playlist:'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute()  //음소거 
      }
    }
  });
}