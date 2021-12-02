const img_logo_01 = require("../img/LogoClub/Logo_BDFC.png").default;
const img_logo_02 = require("../img/LogoClub/Logo_BFC.png").default;
const img_logo_03 = require("../img/LogoClub/Logo_HAGL.jpg").default;
const img_logo_04 = require("../img/LogoClub/Logo_HNFC.png").default;
const img_logo_05 = require("../img/LogoClub/Logo_NDFC.jpg").default;
const img_logo_06 = require("../img/LogoClub/Logo_THFC.png").default;
const img_logo_07 = require("../img/LogoClub/Logo_TQN.jpg").default;
const img_logo_08 = require("../img/LogoClub/Logo_VTFC.jpg").default;

const cardLogo = [
  {
    img: img_logo_01,
    title: "Topenland Bình Định",
    stadium: 'SVD Pleiku',
    location: 'Hà Nội'

  },
  {
    img: img_logo_02,
    title: "Becamex Bình Dương",
    stadium: 'SVD Bình Dương',
    location: 'Bình Dương'

  },
  {
    img: img_logo_03,
    title: "Hoàng Anh Gia Lai",
    stadium: 'SVD Pleiku',
    location: 'Gia Lai'

  },
  {
    img: img_logo_04,
    title: "Hà Nội",
    stadium: 'SVD Pleiku',
    location: 'Hà Nội'

  },
  {
    img: img_logo_05,
    title: "Nam Định",
    stadium: 'SVD Thiên Trường',
    location: 'Nam Đinh'

  },
  {
    img: img_logo_06,
    title: "Đông Á Thanh Hóa",
    stadium: 'SVD Thanh Hóa',
    location: 'Thanh Hóa'

  },
  {
    img: img_logo_07,
    title: "Than Quảng Ninh",
    stadium: 'SVD Pleiku',
    location: 'Hà Nội'

  },
  {
    img: img_logo_08,
    title: "Viettel",
    stadium: 'SVD Hàng Đẫy',
    location: 'Hà Nội'

  },
]
//sort high to low
function compare(a, b) {
  if (Number(a.score) > Number(b.score)) {
    return -1;
  }
  if (Number(a.score) < Number(b.score)) {
    return 1;
  }
  return 0;
}
const cardsSorted = cardLogo.sort(compare);

const getAllCards = () => cardLogo;

const getSortCards = (count) => {
  //get top count team
  return cardsSorted.slice(0, count);
};
// console.log('compere',compare);
// console.log('card top:',cardsSorted);
// console.log('get card sort',getSortCards(4));

const card_team_data = {
  getAllCards,
  getSortCards,
};

export default card_team_data;
