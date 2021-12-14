import React from "react";

import "./card.scss";
import {
  XuanTruong,
  QuangHai,
  CongPhuong,
  DangVanLam,
} from "../../../assets/img";

console.clear();

const slides = [
  {
    title: "Quang Hải",
    description:
      "Nguyễn Quang Hải sinh năm 1997 tại huyện Đông Anh, Hà Nội. Anh bắt đầu gia nhập lò đào tạo trẻ Hà Nội T&T khi mới 9 tuổi vào năm 2006.. Năm 2013, Nguyễn Quang Hải giành chức vô địch U21 quốc gia 2013 ",
    image: QuangHai,
    subtitle: "",
    bgBorder:"",
  },
  {
    title: "Đặng Văn Lâm",
    subtitle: "",
    bgBorder:"",
    description:
      "Đặng Văn Lâm được sinh ra và lớn lên tại thủ đô Moskva của Nga, có bố là người Việt tên là Đặng Văn Sơn và mẹ là người Nga, tên là Olga Zhukova. ... Vì tài năng bóng đá được phát hiện hồi còn đi học của Văn Lâm nên anh đã được lò đào tạo của câu lạc bộ",
    image: DangVanLam,
  },
  {
    title: "Công Phượng",
    description:
      "Nguyễn Công Phượng (sinh ngày 21 tháng 1 năm 1995 tại Mỹ Sơn, Đô Lương, Nghệ An) là một cầu thủ bóng đá chuyên nghiệp người Việt Nam thi đấu ở vị trí tiền đạo cho câu lạc bộ Hoàng Anh Gia Lai tại Giải bóng đá vô địch quốc gia Việt Nam và đội tuyển quốc gia",
    image: CongPhuong,
    subtitle: "",
    bgBorder:"",
  },

  {
    title: "Xuân Trường",

    description:
      "Cầu thủ Lương Xuân Trường sinh năm 1995, năm 2017 là thành viên của U23 Việt Nam tham dự vòng chung kết U23 Châu Á, đang thi đấu cho Gangwon của Hà Quốc",
    image: XuanTruong,
    subtitle: "",
    bgBorder:"",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
        {/* <div className="bgBorder">{slide.bgBorder}</div> */}
      </div>
    </div>
  );
}

const Card3D = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
};

export default Card3D;
