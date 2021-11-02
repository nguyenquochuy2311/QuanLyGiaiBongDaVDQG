// import React, { useEffect, useState } from "react";

// export default function ScrollToTop() {

// const [isVisible, setIsVisible] = useState(false);

// // Show button when page is scrolled upto given distance
// const toggleVisibility = () => {
//   if (window.pageYOffset > 1000) {
//     setIsVisible(true);
//   } else {
//     setIsVisible(false);
//   }
// };

// // Set the top cordinate to 0
// // make scrolling smooth
// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

// useEffect(() => {
//   window.addEventListener("scroll", toggleVisibility);
// }, []);
// }
// //hidden nav when scroll down
