// document.getElementById("wrapper").style.color="red";
// // document.getElementsByClassName("point")[2].style.color="red"
// document.getElementsByTagName("h4")[2].style.backgroundColor="blue";
// document.querySelector(".point").style.border="2px solid blue";
// document.querySelectorAll(".list").children[0].style.fontWeight="300";
// document.getElementsByClassName("point")[1].style.color
// ------------------------------
// document.getElementsByTagName("h1")[0].style.color="green";
// document.getElementById("title").style.color="red";
// document.getElementsByTagName("li")[1].style.backgroundColor="red";
// document.getElementsByTagName("h2")[1].style.color="orange";
// document.getElementById("season").style.fontSize="25px";
// document.getElementById("wrapper").style.border="1px dotted black";
// document.body.style.backgroundColor="#dfdfdf";
// -------------------------------
const wrap=document.querySelector("#wrap");
console.log(wrap);
//부모요소.querySelector()
//부모요소.children;

const box2=wrap.querySelector(".box2");
console.log(box2);

const child=wrap.children;
console.log(child);
console.log(child[1]);


const prevEl=box2.previousElementSibling;
const nextEl=box2.nextElementSibling;
console.log("이전요소",prevEl);
console.log("다음요소",nextEl);

const parent=box2.parentNode;
console.log(parent);

const a_link=box2.querySelector("a");
console.log(a_link);
const a_parent=a_link.parentElement;
console.log(a_parent);
const grand_parent=a_link.closest("#wrap");
console.log(grand_parent);

const child_list=document.querySelector(".list");
console.log(child_list);
const child_El=child_list.childNodes;
console.log(child_El);