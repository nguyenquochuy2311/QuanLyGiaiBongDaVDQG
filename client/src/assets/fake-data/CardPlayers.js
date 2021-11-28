const img_card_01 = require("../img/players/cauthu1.jpg").default;
const img_card_02 = require("../img/players/cauthu2.jpg").default;
const img_card_03 = require("../img/players/cauthu3.jpg").default;
const img_card_04 = require("../img/players/cauthu4.jpg").default;



const CardArr = [
  {
    img: img_card_01,
    title: "Nguyễn Công Phượng",
    club: "Hồ Chí Minh FC",
    role: 'Tiền vệ',
    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "10",
    
  
    total: '',
  },
  {
    img: img_card_02,
    title: "Nguyễn Quang Hải",
   club: "Hà Nội FC",
   role: 'Tiền vệ',

    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "9",
    
  
    total: '',
  },
  {
    img: img_card_03,
    title: "Đặng Văn Lâm",
    club: "Đà nẵng FC",
    role:'Thủ môn',
    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "8",
    
  
    total: '',
  },
  {
    img: img_card_04,
    title: "Lương Xuân Trường",
    club: "Đà Nẵng FC",
    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "8",
    role:'Thủ môn',
  
    total: '',
  },
  {
    img: img_card_01,
    title: "Nguyễn Công Phượng",
    club: "Hồ Chí Minh FC",
    role: 'Tiền vệ',
    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "10",
    
  
    total: '',
  },
  {
    img: img_card_02,
    title: "Nguyễn Quang Hải",
   club: "Hà Nội FC",
   role: 'Tiền vệ',

    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "9",
    
  
    total: '',
  },
  {
    img: img_card_03,
    title: "Đặng Văn Lâm",
    club: "Đà nẵng FC",
    role:'Thủ môn',
    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "8",
    
  
    total: '',
  },
  {
    img: img_card_04,
    title: "Lương Xuân Trường",
    club: "Đà Nẵng FC",
    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "8",
    role:'Thủ môn',
  
    total: '',
  },
];

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
const cardsSorted = CardArr.sort(compare);

const getAllCards = () => CardArr;

const getSortCards = (count) => {
  //get top count team
  return cardsSorted.slice(0, count);
};
// console.log('compere',compare);
// console.log('card top:',cardsSorted);
// console.log('get card sort',getSortCards(4));

const card_player_data = {
  getAllCards,
  getSortCards,
};

export default card_player_data;
