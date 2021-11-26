const img_card_01 = require('../img/bgTeams/bgCard1.jpg').default;
const img_card_02 = require('../img/bgTeams/bgCard2.jpg').default;
const img_card_03 = require('../img/bgTeams/bgCard3.png').default;
const img_card_04 = require('../img/bgTeams/bgCard4.jpg').default;
const img_card_05 = require('../img/bgTeams/bgCard5.jpg').default;
const img_card_06 = require('../img/bgTeams/bgCard6.jpg').default;
const img_card_07 = require('../img/bgTeams/bgCard7.jpg').default;
const img_card_08 = require('../img/bgTeams/bgCard8.jpg').default;


const logo_card_01 = require('../img/bgTeams/logo-hoang-anh-gia-lai.jpg').default;
const logo_card_02 = require('../img/bgTeams/Hcmcfc-logo.png').default;
const logo_card_03 = require('../img/bgTeams/logo-bfc.png').default;
const logo_card_04 = require('../img/bgTeams/logo-danang.svg').default;
const logo_card_05 = require('../img/bgTeams/logo-hai-phong.png').default;
const logo_card_06 = require('../img/bgTeams/logo-hong-linh.png').default;
const logo_card_08 = require('../img/bgTeams/logo-quang-nam.png').default;


const CardArr = [
    {
        img: img_card_01,
        title: 'Hoang Anh Gia Lai FC',
        stadium: 'Sân vận động pleiku',
        logo: logo_card_01,
        description: 'Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.',
        score: '10',
    },
    {
        img: img_card_02,
        title: 'Hồ Chí Minh FC',
        stadium: 'Sân vận động thống nhất',
        logo: logo_card_02,
        description: 'Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.',
        score: '5',
    },
    {
        img: img_card_03,
        title: 'Bình Dương FC',
        stadium: 'Sân vận động Dĩ An Bình Dương',
        logo: logo_card_03,
        description: 'Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.',
        score: '6',
   
    },
    {
        img: img_card_04,
        title: 'Đà Năng FC',
        stadium: 'Sân vận động TDTT Đà Nẵng',
        logo: logo_card_04,
        description: 'Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.',
        score: '8',
    },
    {
        img: img_card_04,
        title: 'Đà Năng FC',
        stadium: 'Sân vận động TDTT Đà Nẵng',
        logo: logo_card_04,
        description: 'Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.',
        score: '8',
    },
    {
        img: img_card_05,
        title: 'Hoang Anh Gia Lai FC',
        stadium: 'Sân vận động pleiku',
        logo: logo_card_05,
        description: 'Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.',
        score: '10',
    },

    {
        img: img_card_06,
        title: 'Hà Tĩnh FC',
        stadium: 'Sân vận động bóng đá Hà Tĩnh',
        logo: logo_card_06,
        description: 'Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.',
        score: '6',
    },
   
 
    {
        img: img_card_08,
        title: 'Hải Phòng FC',
        stadium: 'Sân vận động Lạch Tray',
        logo: logo_card_08,
        description: 'Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.',
        score: '12',
    },
    
]

//sort high to low
function compare( a, b ) {
    if (  Number(a.score) > Number(b.score)  ){
      return -1;
    }
    if (  Number(a.score)  <Number(b.score)  ){
      return 1;
    }
    return 0;
  }
  const cardsSorted = CardArr.sort(compare);
  

const getAllCards = () =>CardArr;

const getSortCards = (count) =>{

    //get top count team
    return cardsSorted.slice(0, count)
}
// console.log('compere',compare);
// console.log('card top:',cardsSorted);
// console.log('get card sort',getSortCards(4));

const card_team_data = {
    getAllCards,
    getSortCards,
}

export default card_team_data;