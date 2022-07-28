// lightbox

// import 'bs5-lightbox';
// import Lightbox from 'bs5-lightbox';

const options = {
	keyboard: true,
  size: 'lg',
  constrain: false
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));

const data = [];
let showdata = document.querySelector('.showdata');
let datacheck = document.querySelector('.check');
const getDataId = localStorage.getItem('room');


// 初始創建 axios 實例
axios = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6',
  timeout: 5000,
  headers: {
    Acctept: 'application/json',
    Authorization: 'Bearer mWhX16Arl9JxhImidZM2YedXzyPS1181XyHkAQSNAQ4HSuR63SVWFtaalgim',
  }
});

this.axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/room/'+ getDataId)
.then((res) => {
  if (res.data.success) {
    data.push(...res.data.room);
    updata(data);
    console.log(data[0]);
  }
});


//渲染畫面
function updata(data) {
    let headImg = '';
    let txt = '';
    let check = '';
    let moe = '';
  

    let price = document.querySelector('.price');
    let photo = document.querySelector('.photo');

    data.forEach((item) => {
      headImg += `
      
      <a href="${item.imageUrl[2]}" class="col-9 p-0" data-toggle="lightbox" data-gallery="hidden-images"><img class="img-fluid w-100 photoitem object-fit" src="${item.imageUrl[2]}" alt=""></a>
      <div class="col-3 p-0 d-flex flex-column photoitem">
          <a href="${item.imageUrl[1]}" class="col h-50 p-0" data-toggle="lightbox" data-gallery="hidden-images"><img class="img-fluid object-fit h-100 w-100" src="${item.imageUrl[1]}" alt=""></a>
          <a href="${item.imageUrl[0]}" class="col h-50 p-0" data-toggle="lightbox" data-gallery="hidden-images"><img class="img-fluid object-fit h-100 w-100" src="${item.imageUrl[0]}" alt=""></a>
      </div>`;
      txt += `
                <h2 class="mb-5 nameH2">${item.name}</h2>
                <p>GuestMax：${item.descriptionShort.GuestMax}~${item.descriptionShort.GuestMin}</p>
                <p>Bed：${item.descriptionShort.Bed[0]}</p>
                <p>Private-Bath：${item.descriptionShort['Private-Bath']}</p>
                <p>Footage：${item.descriptionShort.Footage} m2</p>
                <span>${item.description}</span>

                <div class="lineGroup d-flex my-4 w-25">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>`

      check += `
            <div class="col">
                    <p class="p-0">Check In</p>
                    <h4>${item.checkInAndOut.checkInEarly} - ${item.checkInAndOut.checkInLate}</h4>
                </div>
                <div class="col">
                    <p class="p-0">Check Out</p>
                    <h4>${item.checkInAndOut.checkOut}</h4>
                </div>`

      moe += `<h3>NT.${item.normalDayPrice}</h3>
      <p>平日(一~四)</p>
      <h4>NT.${item.holidayPrice}</h4>
      <p>假日(五~日)</p>`
    });
  
    showdata.innerHTML= txt;
    datacheck.innerHTML = check;
    price.innerHTML = moe;
    photo.innerHTML = headImg;
    
    sever();
  
  
};

function sever() { 
  const BreakfastItem = document.querySelector('.Breakfast');
  const WifiItem = document.querySelector('.Wi-Fi');
  const MiniBar = document.querySelector('.Mini-Bar');
  const GreatView = document.querySelector('.Great-View');
  const AirConditioner = document.querySelector('.Air-Conditioner');
  const SmokeFree = document.querySelector('.Smoke-Free');
  const ChildFriendly = document.querySelector('.Child-Friendly');
  const RoomService = document.querySelector('.Room-Service');
  const Television = document.querySelector('.Television');
  const Refrigerator = document.querySelector('.Refrigerator');
  const Sofa = document.querySelector('.Sofa');
  const PetFriendly = document.querySelector('.Pet-Friendly');

    const qq = data[0].amenities;
    //資料轉陣列
    var a = Object.keys(qq).map(key => {
      return {
          [key]: qq[key]
      }
    })

    //篩選陣列資料
    const v =  a.filter(function(item) {
      if(Object.values(item) == 'true') {
        return item;
      }
      
    })

    
    for(let i=0; i<v.length; i++) {
      if(Object.keys(v[i]) == 'Breakfast') {
        BreakfastItem.classList.add("itemTure");

      } else if(Object.keys(v[i]) == 'Wi-Fi')  {
        WifiItem.classList.add("itemTure");
  
      }else if (Object.keys(v[i]) == 'Child-Friendly'){
        ChildFriendly.classList.add("itemTure");
      }else if (Object.keys(v[i]) == 'Great-View'){
        GreatView.classList.add("itemTure");
      }else if (Object.keys(v[i]) == 'Mini-Bar'){
        MiniBar.classList.add("itemTure");
      }else if (Object.keys(v[i]) == 'Pet-Friendly'){
        PetFriendly.classList.add("itemTure");
      }else if (Object.keys(v[i]) == 'Refrigerator'){
        Refrigerator.classList.add("itemTure");
      }else if (Object.keys(v[i]) == 'Room-Service'){
        RoomService.classList.add("itemTure");
      }else if (Object.keys(v[i]) == 'Smoke-Free'){
        SmokeFree.classList.add("itemTure");
      }else if (Object.keys(v[i]) == 'Sofa'){
        Sofa.classList.add("Sofa");
      }else if (Object.keys(v[i]) == 'Television'){
        Television.classList.add("itemTure");
      }else if (Object.keys(v[i]) == 'Air-Conditioner'){
        AirConditioner.classList.add("itemTure");
      }
    }

}

  
  


// <!-- Modal -->
var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})