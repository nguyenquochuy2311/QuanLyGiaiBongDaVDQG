const logo_01 = require('../img/dunors/logo-hung-thinh.png').default;
const logo_02 = require('../img/dunors/nhataitro.png').default;
const logo_03 = require('../img/dunors/nhataitro1.png').default;
const logo_04 = require('../img/dunors/nhataitro2.png').default;

const LogoArr = [
    {
        img: logo_01,
        title: 'Hung Thinh Land'
    },
    {
        img: logo_02,
        title: 'Grand Sport'
    },
    {
        img: logo_03,
        title: 'King Coffee'
    },
    {
        img: logo_04,
        title: 'Honda'
    },
]

const getAllLogos = () => LogoArr;

const getLogos = (count) =>{
    const max = LogoArr.length -count;
    const min = 0;
    const start = Math.floor(Math.random()*(max-min)+min);

    return LogoArr.slice(start,count + start)
}

const logo_data = {
    getAllLogos,
    getLogos,
}

export default logo_data;