var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".design_swiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });
  var swiper = new Swiper(".project_swiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });

let pop=document.querySelector(".popup");
let pop2=document.querySelector(".popup2");
let close1=document.querySelector(".close_button1")
let close2=document.querySelector(".close_button2")

// -------------------------

let brand1_img1=document.querySelector(".brand_01_01");
let brand1_img2=document.querySelector(".brand_01_02");
let brand1_img3=document.querySelector(".brand_01_03");
let brand1_img4=document.querySelector(".brand_01_04");
let brand1_img5=document.querySelector(".brand_01_05");

let pop1_img2=document.querySelector(".pop_01_02");
let pop1_img3=document.querySelector(".pop_01_03");
let pop1_img4=document.querySelector(".pop_01_04");
let pop1_img5=document.querySelector(".pop_01_05");

// -----------------------------

let brand2_img1=document.querySelector(".brand_02_01");
let brand2_img2=document.querySelector(".brand_02_02");
let brand2_img3=document.querySelector(".brand_02_03");
let brand2_img4=document.querySelector(".brand_02_04");
let brand2_img5=document.querySelector(".brand_02_05");

let pop2_img2=document.querySelector(".pop_02_02");
let pop2_img3=document.querySelector(".pop_02_03");
let pop2_img4=document.querySelector(".pop_02_04");
let pop2_img5=document.querySelector(".pop_02_05");

close1.addEventListener("click", e=>{
  pop.style.display="none";
  pop1_img2.style.display="none";
  pop1_img3.style.display="none";
  pop1_img4.style.display="none";
  pop1_img5.style.display="none";
})
close2.addEventListener("click", e=>{
  pop2.style.display="none";
  pop2_img2.style.display="none";
  pop2_img4.style.display="none";
  pop2_img5.style.display="none";
})
pop.addEventListener("click", e=>{
  pop.style.display="none";
  pop1_img2.style.display="none";
  pop1_img3.style.display="none";
  pop1_img4.style.display="none";
  pop1_img5.style.display="none";
  pop2_img2.style.display="none";
  pop2_img4.style.display="none";
  pop2_img5.style.display="none";
})

brand1_img2.addEventListener("click", e=>{
  pop.style.display="flex";
  pop1_img2.style.display="block";
})
brand1_img3.addEventListener("click", e=>{
  pop.style.display="flex";
  pop1_img3.style.display="block";
})
brand1_img4.addEventListener("click", e=>{
  pop.style.display="flex";
  pop1_img4.style.display="block";
})
brand1_img5.addEventListener("click", e=>{
  pop.style.display="flex";
  pop1_img5.style.display="block";
})

brand2_img2.addEventListener("click", e=>{
  pop2.style.display="flex";
  pop2_img2.style.display="block";
})
brand2_img4.addEventListener("click", e=>{
  pop2.style.display="flex";
  pop2_img4.style.display="block";
})
brand2_img5.addEventListener("click", e=>{
  pop2.style.display="flex";
  pop2_img5.style.display="block";
})

const gallery=document.querySelectorAll("#gallery_list li"); //클릭할거
const img=document.querySelectorAll(".gallery_all") //클릭에서 작동해야하는거

for(let i=0; i<gallery.length; i++){
  gallery[i].addEventListener("click",e=>{//클릭할거
        console.log(gallery[i]);
        e.preventDefault();
        for(let j=0; j<gallery.length;j++){
            img[j].classList.remove("on");
            console.log(img[j]);
        }
        img[i].classList.add("on"); //작동해야하는거
    })
}

const ect_gallery=document.querySelectorAll(".gallery_all li"); //클릭할거
console.log(ect_gallery);
const ect_bg=document.querySelectorAll(".ect_gallery_popup"); //배경
console.log(ect_bg);
const ect_img=document.querySelectorAll(".ect_gallery_popup li"); //클릭에서 작동해야하는거
console.log(ect_img);
const close3=document.querySelectorAll(".close_button3");
const closeT=document.querySelector(".ect_gallery_popup li .on");

for(let i=0; i<ect_gallery.length; i++){
  ect_gallery[i].addEventListener("click",e=>{
    console.log(ect_gallery[i]);
    for(let j=0; j<ect_img.length;j++){
      // ect_bg.style.display="block";
      ect_img[j].classList.remove("on");
      console.log(ect_img[j])
    }
    ect_img[i].classList.add("on");
  })
};
for(let i=0; i<close3.length; i++){
  close3[i].addEventListener("click",e=>{
    console.log(close3[i]);
    for(let j=0; j<ect_img.length;j++){
      // ect_bg.style.display="block";
      ect_img[j].classList.remove("on");
      console.log(ect_img[j])
    }
    ect_img[i].classList.remove("on");
  })
};

// const close3=document.querySelectorAll(".close_button3");
// console.log(close3);

// close3.addEventListener('click', e=>{
//   if(e.target.classList.contains('on')){
//     ect_img.classList.remove('on');
//   }
//   else{
//     ect_img.classList.remove('on');
//   }
// })
// for(let i=0; i<ect_gallery.length; i++){
//   ect_gallery[i].addEventListener("click",e=>{
//     console.log(ect_gallery[i]);
//     for(let j=0; j<ect_img.length;j++){
//       // ect_bg.style.display="block";
//       ect_img[j].classList.remove("on");
//       console.log(ect_img[j])
//     }
//     ect_img[i].classList.add("on");
//   })
// }


// const fullImg = document.querySelectorAll('.ect_gallery_popup li')
// const smallImg = document.querySelectorAll('.gallery img');
// const modal = document.querySelector('.ect_gallery_popup');

// smallImg.forEach(function(img) {
//     img.addEventListener('click', function(){
//     modal.classList.add('on');
//     fullImg.classList.add('on');
   
//         const original = img.getAttribute('src')
//         fullImg.src = original;
//         });

//         modal.addEventListener('click', function(e){
//         if(e.target.classList.contains('ect_gallery_popup')){
//         modal.classList.remove('on');
//         fullImg.classList.remove('on');
//         }
//     });
// });