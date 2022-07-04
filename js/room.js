// lightbox

// import 'bs5-lightbox';
// import Lightbox from 'bs5-lightbox';

const options = {
	keyboard: true,
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));

const data = [];
let showdata = document.querySelector('.showdata');

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
this.axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/room/3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu')
.then((res) => {
  if (res.data.success) {
    data.push(...res.data.room);
    updata(data);
  }
});


//渲染畫面
function updata(data) {
    let headImg = '';
    let txt = '';
    let moe = '';
  

    let price = document.querySelector('.price');
    let photo = document.querySelector('.photo');

    data.forEach((item) => {
      headImg += `
      <a href="index.html"><h1 class="hideH1">我是LOGO</h1></a>
      <a href="${item.imageUrl[2]}" class="col-9 p-0" data-toggle="lightbox" data-gallery="hidden-images"><img class="img-fluid w-100 photoitem object-fit" src="${item.imageUrl[2]}" alt=""></a>
      <div class="col-3 p-0 d-flex flex-column photoitem">
          <a href="${item.imageUrl[1]}" class="col h-50 p-0" data-toggle="lightbox" data-gallery="hidden-images"><img class="img-fluid object-fit h-100 w-100" src="${item.imageUrl[1]}" alt=""></a>
          <a href="${item.imageUrl[0]}" class="col h-50 p-0" data-toggle="lightbox" data-gallery="hidden-images"><img class="img-fluid object-fit h-100 w-100" src="${item.imageUrl[0]}" alt=""></a>
      </div>`;
      txt += `<div class="col-8 w-100">
                <h2 class="mb-5 nameH2">${item.name}</h2>
                <p>GuestMax：${item.descriptionShort.GuestMax}~${item.descriptionShort.GuestMin}</p>
                <p>Bed：${item.descriptionShort.Bed[0]}</p>
                <p>Private-Bath：${item.descriptionShort}</p>
                <p>Footage：${item.descriptionShort.Footage} m2</p>
                <span>${item.description}</span>

                <div class="lineGroup d-flex my-4 w-25">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                
            </div>

            <div class="col-2 w-100 d-flex">
            <div class="col">
                    <p class="p-0">Check In</p>
                    <h4>${item.checkInAndOut.checkInEarly} - ${item.checkInAndOut.checkInLate}</h4>
                </div>
                <div class="col">
                    <p class="p-0">Check Out</p>
                    <h4>${item.checkInAndOut.checkOut}</h4>
                </div>

            </div>
            <div class="col-2 mt-3 mb-5 w-100 p-0">
            
              <div class="row row-cols-3 m-3 bg-light p-4">
                  <div class="col d-flex align-items-center p-0 mb-4 item"><img class="img-fluid listItme" src="../img/info_icon/wifi.svg" alt=""><p class="mb-0 ms-3">WIFI</p></div>
                  <div class="col d-flex align-items-center mb-4 item"><img class="img-fluid listItme" src="../img/info_icon/phone.svg" alt=""><p class="mb-0 ms-3">電話</p></div>
                  <div class="col d-flex align-items-center mb-4 item"><img class="img-fluid listItme" src="../img/info_icon/mountain-range.svg" alt=""><p class="mb-0 ms-3">漂亮的視野</p></div>
                  <div class="col d-flex align-items-center p-0 mb-4 item"><img class="img-fluid listItme" src="../img/info_icon/breakfast.svg" alt=""><p class="mb-0 ms-3">早餐</p></div>
                  <div class="col d-flex align-items-center mb-4 item"><img class="img-fluid listItme" src="../img/info_icon/breeze.svg" alt=""><p class="mb-0 ms-3">空調</p></div>
                  <div class="col d-flex align-items-center mb-4 item"><img class="img-fluid listItme" src="../img/info_icon/no-smoke-symbol.svg" alt=""><p class="mb-0 ms-3">禁止吸煙</p></div>
                  <div class="col d-flex align-items-center p-0 mb-4 item"><img class="img-fluid listItme" src="../img/info_icon/Bar.svg" alt=""><p class="mb-0 ms-3">Mini Bar</p></div>
                  <div class="col d-flex align-items-center mb-4 item"><img class="img-fluid listItme" src="../img/info_icon/wifi.svg" alt=""><p class="mb-0 ms-3">冰箱</p></div>
                  <div class="col d-flex align-items-center mb-4 item"><img class="img-fluid listItme" src="../img/info_icon/crawling-baby-silhouette.svg" alt=""><p class="mb-0 ms-3">適合兒童</p></div>
                  <div class="col d-flex align-items-center p-0 item"><img class="img-fluid listItme" src="../img/info_icon/room_service.svg" alt=""><p class="mb-0 ms-3">Room Service</p></div>
                  <div class="col d-flex align-items-center item"><img class="img-fluid listItme" src="../img/info_icon/wifi.svg" alt=""><p class="mb-0 ms-3">沙發</p></div>
                  <div class="col d-flex align-items-center item"><img class="img-fluid listItme" src="../img/info_icon/dog.svg" alt=""><p class="mb-0 ms-3">寵物攜帶</p></div>
              </div>
            </div>`

      moe += `<h3>NT.${item.normalDayPrice}</h3>
      <p>平日(一~四)</p>
      <h4>NT.${item.holidayPrice}</h4>
      <p>假日(五~日)</p>`
    });
  
    showdata.innerHTML= txt;
    price.innerHTML = moe;
    photo.innerHTML = headImg;
  
};


// <!-- Modal -->
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})