//연결방법1
//DOM.onClick=()=>{
    // 실행할 내용
// }

//연결방법2
//DOM.addeventListner("이벤트 동장",=>{
    //실행할 내용
//})

// const a=document.querySelector("a");
// console.log(a);
// console.dir(a);
// //dir을 사용하여 dom의 구조를 알 수 있다.

// // a.onclick=()=>{
// //     console.log("클릭했습니다.");
// // };
// // a.onclick=()=>{
// //     console.log("두번째 클릭했습니다.");
// // }; //onclick방법으로 이벤트를 연결하는 경우 기존의 이벤트를 덮어쓰기 한다.

// a.addEventListener("click",()=>{
//     alert("클릭했습니다.");
// })
// a.addEventListener("click",()=>{
//     console.log("클릭했습니다.");
// })
// --------------------------------------
// const btn1=document.querySelector("#btn1");
// const btn2=document.querySelector("#btn2");
// const btn3=document.querySelector("#btn3");

// btn1.addEventListener("click", ()=>{
//     // btn1.style.backgroundColor="red";
//     document.body.style.backgroundColor=
//     "red";
// })
// btn2.addEventListener("click", ()=>{
//     document.body.style.backgroundColor=
//     "white";
// })
// btn3.addEventListener("click", ()=>{
//     document.body.style.backgroundColor=
//     "pink";
// })
// -------------------------------------
// 마우스 오버/아웃 & 앤터/러브 구분
// const check_area=document.querySelector(".check_area");
// const mouse_enter=document.querySelector("#outer_area");
// mouse_enter.addEventListener("mouseover", e=>{
//     check_area.innerHTML+="<p>이벤트 발생</p>";
// });
// mouse_enter.addEventListener("mouseleave",e=>{
//     check_area.innerHTML+="<p>이벤트 발생</p>";
// })
// ------------------------------------
const number=document.querySelector("#number");
const increase=document.querySelector("#increase");
const decrease=document.querySelector("#decrease");
console.log(Number(number.innerText)+1);

increase.addEventListener("click",e=>{
    const current=parseInt(number.innerText,10);
    number.innerText=current+1;
})
decrease.addEventListener("click",e=>{
    const current=parseInt(number.innerText,10);
    number.innerText=current-1;
})