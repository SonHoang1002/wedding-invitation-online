"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function Reveal({
  children,
  className = "",
  side,
}: {
  children: ReactNode;
  className?: string;
  side?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${side ? `reveal-${side}` : "reveal-fade"} ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <Reveal className={`photo-wrap ${className}`}>
      <img className="photo" src={src} alt={alt} />
    </Reveal>
  );
}

function MenuButton() {
  return <button className="menu-button" aria-label="Mở menu"><span /><span /><span /></button>;
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="phone">
        <div className="music-mark" aria-hidden="true">◉</div>
        <div className="side-credit">Made with Cinelove</div>

        <section className="demo demo-1" data-demo="demo-1">
          <div className="eyebrow">SAVE THE DATE</div>
          <Reveal side="left" className="hero-copy">
            <span className="script">Our little story</span>
            <h1>Minh Anh <i>&amp;</i> Tuấn Anh</h1>
            <p>19 · 09 · 2026</p>
          </Reveal>
          <Photo src="/image_1_1.jpg" alt="Cô dâu và chú rể bên hoa trắng" className="opening-photo" />
          <Reveal side="right" className="intro-note">
            <span>HAPPY TOGETHER</span>
            <strong>We are getting married</strong>
            <p>Một chương mới bắt đầu từ khoảnh khắc chúng mình gặp nhau.</p>
          </Reveal>
        </section>

        <section className="demo demo-2" data-demo="demo-2">
          <Reveal className="section-heading"><span className="script">Thư Mời</span><p>TRÂN TRỌNG KÍNH MỜI</p></Reveal>
          <div className="trio">
            <Photo src="/image_2_1.png" alt="Ảnh gia đình nhà trai" />
            <Photo src="/image_2_2.png" alt="Ảnh cô dâu chú rể" />
            <Photo src="/image_2_3.png" alt="Ảnh gia đình nhà gái" />
          </div>
          <Reveal side="left" className="date-line"><small>Vào lúc</small><strong>11:30 <i>|</i> 20.09.2026 <i>|</i> Chủ Nhật</strong><span>Tức ngày 10 tháng 08 năm Bính Ngọ</span></Reveal>
          <Reveal side="right" className="venue"><small>Tại</small><h2>Tư Gia Nhà Trai</h2><p>Nhà Văn Hóa thôn Yên Ninh, xã Ninh Sở, Hà Nội</p><button>Chỉ đường</button></Reveal>
        </section>

        <section className="demo demo-3" data-demo="demo-3">
          <Reveal className="month-title">Tháng 09</Reveal>
          <Reveal className="calendar-wrap" side="left">
            <div className="weekdays"><span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span></div>
            <div className="calendar">{Array.from({ length: 30 }, (_, index) => <span key={index} className={index + 1 === 19 ? "chosen" : index + 1 === 10 ? "heart" : ""}>{index + 1}</span>)}</div>
          </Reveal>
          <div className="event-columns">
            <Reveal side="left" className="event-card"><h3>Tiệc Mời Cưới Nhà Trai</h3><p><b>16:30 · Thứ bảy</b><br />19.09.2026<br /><small>09/08 âm lịch</small></p><p>Nhà Văn Hóa thôn Yên Ninh,<br />xã Nổi Bài, Hà Nội</p><button>Chỉ đường</button></Reveal>
            <Reveal side="right" className="event-card"><h3>Tiệc Mời Cưới Nhà Gái</h3><p><b>16:30 · Thứ bảy</b><br />19.09.2026<br /><small>09/08 âm lịch</small></p><p>Nhà Văn Hóa thôn Ninh Môn,<br />xã Nổi Bài, Hà Nội</p><button>Chỉ đường</button></Reveal>
          </div>
        </section>

        <section className="demo demo-4" data-demo="demo-4">
          <Reveal className="love-quote"><span className="script">Hôn nhân là chuyện cả đời</span><strong>Yêu người vừa ý, cưới người Mình thương</strong></Reveal>
          <div className="duo-grid">
            <Photo src="/image_4_1.png" alt="Cô dâu chú rể trong tiệc cưới" />
            <Photo src="/image_4_2.png" alt="Cô dâu chú rể mặc lễ phục" />
            <Photo src="/image_4_3.png" alt="Cô dâu chú rể ngoài vườn" />
          </div>
          <Reveal side="right" className="with-you"><h2>WITH YOU</h2><p>Every moment of each day,<br />loving and missing you<br />dominates every inch of my brain.</p></Reveal>
        </section>

        <section className="demo demo-5" data-demo="demo-5">
          <Reveal className="section-heading"><span className="script">Our memories</span><p>NHỮNG KHOẢNH KHẮC ĐẸP NHẤT</p></Reveal>
          <div className="gallery-grid">{[1, 2, 3, 4].map((number) => <Photo key={number} src={`/image_5_${number}.png`} alt={`Kỷ niệm ${number}`} />)}</div>
          <Reveal side="left" className="memory-copy"><h2>WITH YOU</h2><p>Every moment of each day,<br />loving and missing you<br />dominates every inch of my brain.</p></Reveal>
        </section>

        <section className="demo demo-6" data-demo="demo-6">
          <Reveal side="left" className="floating-label">You make me want to be a better man.</Reveal>
          <Photo src="/image_6_1.png" alt="Cô dâu chú rể trong khung cảnh sân khấu" className="wide-photo" />
          <Reveal side="right" className="floating-label bottom-label">Em khiến anh muốn trở thành phiên bản tốt nhất của chính mình</Reveal>
        </section>

        <section className="demo demo-7" data-demo="demo-7">
          <Photo src="/image_7_1.png" alt="Cô dâu chú rể bên sân khấu" className="countdown-photo" />
          <div className="countdown">{[["3", "ngày"], ["13", "giờ"], ["11", "phút"], ["47", "giây"]].map(([value, label]) => <Reveal key={label} side="right" className="count-box"><strong>{value}</strong><span>{label}</span></Reveal>)}</div>
          <Reveal className="love-vertical">LOVE <i>is</i> the answer</Reveal>
        </section>

        <section className="demo demo-8" data-demo="demo-8">
          <Photo src="/image_8_1.png" alt="Ảnh cưới Waltz of the flowers" className="rsvp-photo" />
          <Reveal side="left" className="rsvp-card">
            <h2>Xác nhận tham dự</h2>
            <label>Họ và tên<input placeholder="Nhập tên của bạn" /></label>
            <fieldset><legend>Bạn sẽ tham dự chứ?</legend><label><input type="radio" name="attend" defaultChecked /> Có, tôi sẽ tham dự</label><label><input type="radio" name="attend" /> Tôi bận, rất tiếc không thể tham dự</label></fieldset>
            <label>Số lượng người tham dự<select defaultValue="1"><option value="1">1 người</option><option value="2">2 người</option></select></label>
            <button className="submit-button">Gửi xác nhận</button>
          </Reveal>
          <p className="closing">Cảm ơn bạn đã đến chung vui cùng chúng mình</p>
        </section>

        <MenuButton />
      </div>
    </main>
  );
}


