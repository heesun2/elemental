
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
// import {
//     getNode,
//     attr,
//     addClass,
//     removeClass,
//   } from "../lib";

const navigation = getNode('.nav ul')
const character = getNode('.visual img');
console.log(navigation);

const characterImg = [ 'ember', 'wade', 'clod', 'gale' ]

// console.log(b);

// const visualImage = getNode('.visual img');
function handleSlide(e){
  e.preventDefault();

  //클릭한 요소
  console.log(e.target);

  const target = e.target.closest('li');
  //클릭한 요소에 인접한 html의 'li'요소 -> target으로 변수저장
  const list = [...navigation.children];
  // .nav의 ul의 모든 자식요소를 변수 list로 저장 [배열로 나타내기]


   //list에 담긴 아이템을 나열
  list.forEach((li)=>{
        //모든 item 중에 is-active가 있다면, is-active를 삭제
    li.classList.remove('is-active');
  })

  target.classList.add('is-active');

  const index = target.dataset.index;

  character.setAttribute("src", `./assets/${characterImg[index-1]}.jpeg`);


  const title = document.querySelector('.nickName');
  title.innerHTML = (data[index-1].name)

  const background = document.body.style.background = `linear-gradient(to bottom, ${data[index-1].color})`;



  console.log(background);

}




navigation.addEventListener('click',handleSlide);






