const img_card_01 = require("../img/referees/trongtai1.jpg").default;
const img_card_02 = require("../img/referees/trongtai2.jpg").default;
const img_card_03 = require("../img/referees/trongtai3.jpeg").default;
const img_card_04 = require("../img/referees/trongtai4.jpg").default;

const CardArr = [
  {
    img: img_card_01,
    title: "Ngô Duy Luân",
    stadium: "Sân vận động pleiku",
    description:
      "Trọng tài Ngô Duy Lân đã được Liên đoàn Bóng đá Châu Á (AFC) bổ nhiệm tham gia điều hành tại bảng H vòng loại giải U23 Châu Á 2022. Ông là trọng tài duy nhất của Việt Nam tham dự giải đấu này.",
    score: "10",
    number_match: "7",
    number_win: "7",
    number_loss: "7",
    number_draw: "7",
    gf: "9",
    ga: "2",
    gd: "1",
    total: "",
  },
  {
    img: img_card_02,
    title: "Hoàng Ngọc Hà",
    stadium: "Sân vận động thống nhất",
    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "5",
    number_match: "7",
    number_win: "7",
    number_loss: "7",
    number_draw: "7",
    gf: "9",
    ga: "2",
    gd: "1",
    total: "",
  },
  {
    img: img_card_03,
    title: "Hà Thị Phượng",
    stadium: "Sân vận động Dĩ An Bình Dương",
    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "6",
    number_match: "7",
    number_win: "7",
    number_loss: "7",
    number_draw: "7",
    gf: "9",
    ga: "2",
    gd: "1",
    total: "",
  },
  {
    img: img_card_04,
    title: "Trương Quốc Dũng",
    stadium: "Sân vận động TDTT Đà Nẵng",
    description:
      "Eirmod sadipscing stet sea diam aliquyam amet eirmod eos, nonumy duo sed ipsum consetetur nonumy at justo vero kasd, accusam.",
    score: "8",
    number_match: "7",
    number_win: "7",
    number_loss: "7",
    number_draw: "7",
    gf: "9",
    ga: "2",
    gd: "1",
    total: "",
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

const card_referees_data = {
  getAllCards,
  getSortCards,
};

export default card_referees_data;
