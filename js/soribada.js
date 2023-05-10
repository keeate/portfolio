//메뉴 클릭해서 드롭
const nav=document.querySelectorAll("nav ul li");
const navColor=document.querySelectorAll("nav ul li .blue");
const navBasic=document.querySelectorAll("nav ul li .basic");
const navDrop=document.querySelectorAll("nav ul li .pop");

for(let i=1; i<nav.length; i++){
  nav[i].addEventListener("mouseover", e=>{
    navColor[i].style.display="inline";
    navBasic[i].style.display="none";
  })
  nav[i].addEventListener("mouseout", e=>{
    navColor[i].style.display="none";
    navBasic[i].style.display="inline";
  })
  nav[i].addEventListener("mouseover", e=>{
    navDrop[i].style.display="block";
  })
  nav[i].addEventListener("mouseout", e=>{
    navDrop[i].style.display="none";
  })
}
for(let i=0; i<nav.length; i++){
  nav[i].addEventListener("mouseover", e=>{
    navDrop[i].style.display="block";
  })
  nav[i].addEventListener("mouseout", e=>{
    navDrop[i].style.display="none";
  })
}

const openbtn=document.querySelector(".icon");
const closebtn=document.querySelector(".close");
const sidemenu=document.querySelector(".side_menu")

openbtn.addEventListener("click",e=>{
    sidemenu.style.width="300px";
})
closebtn.addEventListener("click", e=>{
    sidemenu.style.width="0px";
})


var swiper = new Swiper(".playlist_wrap", {
    slidesPerView: 3,
    spaceBetween: 5,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
    450: {
    slidesPerView: 3,
    spaceBetween: 10,
    },
    470: {
    slidesPerView: 2,
    spaceBetween: 20,
    },
    660: {
    slidesPerView: 3,
    spaceBetween: 20,
    },
    850: {
    slidesPerView: 4,
    spaceBetween: 20,
    },
    1023: {
    slidesPerView: 4,
    spaceBetween: 20,
    },
    1280: {
    slidesPerView: 5,
    spaceBetween: 20,
    },
    1400: {
    slidesPerView: 5,
    spaceBetween: 20,
    },
    1420: {
    slidesPerView: 5,
    spaceBetween: 20,
    },
    1724: {
    slidesPerView: 6,
    spaceBetween: 20,
    },
},
  });
//mv
var swiper = new Swiper(".music_video", {
    slidesPerView: 2,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        479: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
      1280: {
        slidesPerView: 3,
        spaceBetween: 5,
        },
      1400: {
        slidesPerView: 3,
        spaceBetween: 5,
        },
      1420: {
        slidesPerView: 3,
        spaceBetween: 5,
        },
        1724: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    },
  });

//키워드 탭바
const keyword=document.querySelectorAll(".main_keyword li");
const keyword_drop=document.querySelectorAll(".kor_keyword");

for(let i=0; i<keyword.length; i++){
    keyword[i].addEventListener("click",e=>{
        e.preventDefault();
        for(let j=0; j<keyword.length;j++){
            keyword_drop[j].classList.remove("check_on");
            keyword[j].classList.remove("main_check");
        }
        keyword_drop[i].classList.add("check_on");
        keyword[i].classList.add("main_check");
    })
}

//키워드 셀렉해서 배경색 바꾸기

const keyword_select=document.querySelectorAll(".kor_keyword li")

for(let i=0; i<keyword_select.length; i++){
    keyword_select[i].addEventListener("click",e=>{
        keyword_select[i].classList.toggle("keyword_select");
    })
}

const now_select=document.querySelectorAll("#keyword_now li")
for(let i=0; i<now_select.length; i++){
    now_select[i].addEventListener("click",e=>{
        console.log(now_select[i]);
        now_select[i].classList.toggle("now_select");
    })
}
const search_select=document.querySelectorAll("#search_music li")
for(let i=0; i<search_select.length; i++){
    search_select[i].addEventListener("click",e=>{
        console.log(search_select[i]);
        search_select[i].classList.toggle("search_music_select");
    })
}

