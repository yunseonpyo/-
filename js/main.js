const searchEl = document.querySelector(".search")
const inputEl = document.querySelector(".search input")

searchEl.addEventListener("click" ,function () {
  inputEl.focus()
})

inputEl.addEventListener("focus",function () {
  searchEl.classList.add("focused")
  inputEl.setAttribute("placeholder","통합검색")
})

inputEl.addEventListener("blur",function () {
  searchEl.classList.remove("focused")
  inputEl.setAttribute("placeholder","")
})

// 스크롤 없애기

const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll",_.throttle(function () {
  if(window.scrollY >500) {
    //배지 숨기기
    gsap.to(badgeEl,.6 ,{
      opacity:0, //
      display:"none"
    })
  }else{
    //배지 보이기
    gsap.to(badgeEl,.6 ,{
      opacity:1,
      display:"block"
    })
  }
},300))
//_.throttle(함수 , 시간 ) 시간마다 함수 작동 => 과부하를 막아준다.
// gsap.to(요소,지속시간,옵션) => 옵션은 객체 데이터
// opacity 속성처럼 값을 숫자로 입력하는 속성은 전환효과를 통해 , 요송의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄수 있지만 
// display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에, 자연스러운 전환효고랄 적용할수 없다.


// 순차적 애니메이션 
const fadEls =document.querySelectorAll(".visual .fade-in");
fadEls.forEach(function (fadeEl,index) {
  //gsap.to(요소,지속시간,옵션)
  gsap.to(fadeEl,1,{
    delay:(index+1)*0.7, // delay 값만큼 지연
    opacity:1
  })
})

new Swiper(".notice .notice-line .mySwiper", {
  direction: "vertical",
  autoplay:true,
  loop:true
});

 
new Swiper(".promotion .swiper-container", {
  direction:"horizontal", //기본값
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  centeredSlides:true, //1번 슬라이드가 가운데 보이기
  loop:true, //반복재생
  autoplay:{
    delay:5000
  }, // autoPlay 에 값을 객체로 delay:3000(기본값) 설정으로 반복시간을 설정할수 있다.
  pagination:{   //페이지 설정 
    el:".promotion .swiper-pagination",
    clickable:true
  },navigation:{  // 전,후 네비게이터
    prevEl:".notice .promotion .arrow-back",
    nextEl:".notice .promotion .arrow-forward"
  }
});


const toggleEl = document.querySelector(".notice-line .inner-right .toggle-promotion");
const promotionEl = document.querySelector(".promotion")

toggleEl.addEventListener("click",function () {
  promotionEl.classList.toggle("hide");
})

