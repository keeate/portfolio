// 팝업창------------------------

// const open=document.querySelector("#open");
// const close=document.querySelector("#close");
// const popup=document.querySelector(".modal_wrapper")
// open.addEventListener("click",e=>{
//     popup.style.display="flex";
// })
// close.addEventListener("click",e=>{
//     popup.style.display="none";
// })

// // 이벤트 실행은 안하고 속성값만 얻어오기--
//  const a=document.querySelector("a");
//  a.addEventListener("click",e=>{
//     e.preventDefault();
//     console.log("네이버로 이동합니다");
//     console.log(e);
//  })

//  const area=document.querySelector(".area");
//  area.addEventListener("mousemove",e=>
// {
//     console.log(e);
// })

// 이벤트 발생 대상 알아내기
// e.target : 이벤트가 발생하면 마우스 포인터가 위치해 있는 요소를 반환해준다.
// e.currentTarget : 이벤트가 발생했을 때 이벤트문에서 선택자 요소를 반환해 준다.

// const wrap1=document.querySelector(".wrap1");
// wrap1.addEventListener("click", e=>{
//     console.log(e.currentTarget);
//     console.log(e.target);
//     e.currentTarget.style.backgroundColor="pink";
// })

// const wrap4=document.querySelector(".wrap4");
// wrap4.addEventListener("click", e=>{
//     const style=getComputedStyle(e.currentTarget).height;
//     console.log(style);
// })
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
  });