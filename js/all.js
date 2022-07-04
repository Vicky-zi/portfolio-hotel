// import axios from '../node_modules/axios'

// const axios = require('axios').default;

const roomList = [];

let list = document.querySelector('.list');
let roomNuber = document.querySelector('.roomNuber');
let roomName = document.querySelector('.roomName');


// 初始創建 axios 實例
axios = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6',
  timeout: 5000,
  headers: {
    Acctept: 'application/json',
    Authorization: 'Bearer mWhX16Arl9JxhImidZM2YedXzyPS1181XyHkAQSNAQ4HSuR63SVWFtaalgim',
  }
});
// 用實例真正呼叫 api
this.axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms')
.then((res) => {
  if (res.data.success) {
    roomList.push(...res.data.items);
    showData(roomList);
  }
});



//渲染畫面
function showData(roomList) { 
  let txt = '';
  roomList.forEach(function (item, index) {
    txt += `<li>
    <a href="information.html" class="listRoom" data-id="${item.id}" data-index="${index}">${item.name}</a>
  </li>`

  });
  // <a href="${item.id}" class="listRoom" data-id="${item.id}" data-index="${index}">${item.name}</a>
  // </li>

  document.body.style.backgroundImage = `url(${roomList[0].imageUrl})`;
  roomName.innerHTML = `${roomList[0].name}`;
  
  list.innerHTML= txt;


}


list.addEventListener('mouseenter', (e) =>{
  e.stopPropagation();
  if (e.target.nodeName !== 'A') {
    return;
  } else {
    updata(e.target.dataset.id, e.target.dataset.index);
  }
}, true);



//更新資料
function updata(id, index) {
  for(let y = 0; y < roomList.length; y++) {
    if(roomList[y].id == id) {
      document.body.style.backgroundImage = `url(${roomList[y].imageUrl})`;
      roomName.innerHTML = `${roomList[y].name}`;
      roomNuber.innerHTML = '0' + (Number(index)+1) ;

    }
  }
  
}



list.addEventListener('click', function(e) { 
  e.stopPropagation();
  e.preventDefault();
  const qq = e.target.dataset.id;
  // console.log(qq);
  if(e.target.nodeName !== 'A') {
    return;
  }else {

    axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/room/' + qq)
        .then((res) => {
          if (res.data.success) {
    // roomList.push(...res.data.items);
    // showData(roomList);
            // console.log(res.config.url);
            window.location.href = 'information.html';
            // rrr();
          }
        });
    
    // axios.delete('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms/')
    // .then(function (response) {
    //   // console.log(response);

    //   axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/room/' + qq)
    //     .then((res) => {
    //       if (res.data.success) {
    // // roomList.push(...res.data.items);
    // // showData(roomList);
    //         console.log('res.data');
    //         // rrr();
    //       }
    //     });
    // })
    // .catch(function (error) {
    //   console.log('error');
    // });
  }
})
//   const urrl = 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/';

//   function rrr(urrl , it) {
//     let oo = res.data;
//     console.log(oo);
//   }


  

  


//   this.axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/room/{id}')
// .then((res) => {
//   if (res.data.success) {
//     // roomList.push(...res.data.items);
//     // showData(roomList);
//     console.log(res.data);
//   }
// });
  
// })


// function funcB() {
//   return fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/room/{id}', {
//     method: 'GET',
//     headers: {
//       Acctept: 'application/json',
//       Authorization: 'Bearer mWhX16Arl9JxhImidZM2YedXzyPS1181XyHkAQSNAQ4HSuR63SVWFtaalgim',
//     },
//   })
//   .then((res) => {
//     console.log('yf');
//   })
// }

// const roomid = [];

// list.addEventListener('click', (e) =>{ 
//   e.stopPropagation();
//   e.preventDefault();

//   this.axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/room/{id}')
// .then((res) => {
//   if (res.data.success) {
//     // roomList.push(...res.data.items);
//     // showData(roomList);
//     console.log(res.data)
//   }
// });
  
// })
// list.addEventListener('load', this.refresh.bind(this), false)

