"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

function Reveal({
  children,
  className = "",
  side,
  transition,
}: {
  children: ReactNode;
  className?: string;
  side?: "left" | "right" | "bottom";
  transition?: {
    duration?: number;
    delay?: number;
    ease?: any;
  };
}) {
  const initial =
    side === "left"
      ? { opacity: 0, x: -50 }
      : side === "right"
        ? { opacity: 0, x: 50 }
        : { opacity: 0, y: 50 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", ...transition }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <Reveal className={`photo-wrap ${className}`} side="bottom">
      <img className="photo" src={src} alt={alt} />
    </Reveal>
  );
}

function MenuButton() {
  return <button className="menu-button" aria-label="Mở menu"><span /><span /><span /></button>;
}

const weddingInfo = {
  couple: "Ánh Dương & Huy Hiếu",
  bride: "Nguyễn Thị Ánh Dương",
  groom: "Phạm Huy Hiếu",
  weddingDate: "12/12/2026",
  lunarDate: "Tức 4/11 năm Bính Ngọ",
  eventDateText: "Chủ Nhật, 12.12.2026",
  groomHouse: "11 ngõ 4 Lam Sơn, Vĩnh Yên, Phú Thọ",
  brideHouse: "88 Mạc Đĩnh Chi, Lê Thanh Nghị, Hải Phòng",
};

const timeline = [
  { time: "6h30", label: "Đón khách tại nhà gái" },
  { time: "7h00", label: "Lễ vu quy tại nhà gái" },
  { time: "8h00", label: "Nhà trai đón dâu" },
  { time: "10h00", label: "Đón khách tại nhà trai" },
  { time: "10h30", label: "Lễ thành hôn tại nhà trai" },
  { time: "11h30", label: "Khai tiệc" },
  { time: "12h00", label: "Photobooth" },
];

export default function TemplateClassic({ guestName }: { guestName: string }) {
  return (
    <main className="page-shell bg-[#0a0b0b]">
      <div className="phone relative bg-[#171a1b] shadow-2xl mx-auto overflow-hidden">
        <div className="music-mark" aria-hidden="true">◉</div>
        <div className="side-credit">Made with Cinelove</div>

        <section className="demo demo-1" data-demo="demo-1">
          <div className="eyebrow">SAVE THE DATE</div>
          <Reveal side="left" className="hero-copy" transition={{ duration: 0.55 }}>
            <span className="script font-serif">Our little story</span>
            <h1 className="font-serif">{weddingInfo.bride} <i>&amp;</i> {weddingInfo.groom}</h1>
            <p>{weddingInfo.eventDateText}</p>
          </Reveal>
          <Photo src="/image_1_1.jpg" alt="Cô dâu và chú rể bên hoa trắng" className="opening-photo" />
          <Reveal side="right" className="intro-note" transition={{ duration: 0.55, delay: 0.08 }}>
            <span>KÍNH MỜI</span>
            <strong>{guestName}</strong>
            <p className="mt-4">Đến dự lễ cưới của {weddingInfo.couple}.</p>
          </Reveal>
        </section>

        <section className="demo demo-2" data-demo="demo-2">
          <Reveal className="section-heading"><span className="script font-serif">Thư Mời</span><p>TRÂN TRỌNG KÍNH MỜI</p></Reveal>
          <div className="trio">
            <Photo src="/image_2_1.png" alt="Ảnh gia đình nhà trai" />
            <Photo src="/image_2_2.png" alt="Ảnh cô dâu chú rể" />
            <Photo src="/image_2_3.png" alt="Ảnh gia đình nhà gái" />
          </div>
          <Reveal side="left" className="date-line"><small>Vào lúc</small><strong className="font-serif">10:30 <i>|</i> 12.12.2026 <i>|</i> Chủ Nhật</strong><span>{weddingInfo.lunarDate}</span></Reveal>
          <Reveal side="right" className="venue"><small>Tại</small><h2 className="font-serif">Nhà Trai</h2><p>{weddingInfo.groomHouse}</p><button>Chỉ đường</button></Reveal>
        </section>

        <section className="demo demo-timeline" data-demo="demo-timeline">
          <Reveal className="section-heading"><span className="script font-serif">Timeline</span><p>NHỮNG MỐC THỜI GIAN</p></Reveal>
          <div className="mx-4 mb-4 rounded-[24px] border border-[#d9c7a5]/35 bg-[#fffaf2]/90 p-3 shadow-[0_12px_30px_rgba(86,56,34,0.10)]">
            <div className="space-y-2">
              {timeline.map((item, index) => (
                <div key={item.time} className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${index % 2 === 0 ? 'bg-[#fffaf2] border-[#e7dcc8]' : 'bg-[#f8f1e5] border-[#e3d5b8]'}`}>
                  <span className="inline-flex min-w-[52px] items-center justify-center rounded-full bg-[#d9b648]/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6b4f3b]">{item.time}</span>
                  <span className="text-xs text-[#4a3b3b]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="demo demo-4" data-demo="demo-4">
          <Reveal className="love-quote"><span className="script font-serif">Hôn nhân là chuyện cả đời</span><strong className="font-serif">Yêu người vừa ý, cưới người mình thương</strong></Reveal>
          <div className="duo-grid">
            <Photo src="/image_4_1.png" alt="Cô dâu chú rể trong tiệc cưới" />
            <Photo src="/image_4_2.png" alt="Cô dâu chú rể mặc lễ phục" />
            <Photo src="/image_4_3.png" alt="Cô dâu chú rể ngoài vườn" />
          </div>
          <Reveal side="right" className="with-you"><h2 className="font-serif">WITH YOU</h2><p>Đón chờ ngày đẹp<br />và cùng nhau viết tiếp<br />một hành trình mới trọn vẹn.</p></Reveal>
        </section>

        <section className="demo demo-dresscode" data-demo="demo-dresscode">
          <div className="mx-auto max-w-[320px] rounded-[28px] border border-[#d9c7a5]/40 bg-[#fffdf9]/90 p-5 shadow-[0_16px_40px_rgba(101,82,55,0.12)]">
            <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-[#7a6a6a]">Dress code</p>
            <h3 className="mb-4 text-center text-xl font-medium text-[#4a3b3b]">Vàng · Be · Nâu</h3>
            <div className="space-y-3">
              {[
                { name: "Vàng", hex: "#D9B648" },
                { name: "Be", hex: "#D9C7A5" },
                { name: "Nâu", hex: "#6B4F3B" },
              ].map((option) => (
                <div key={option.name} className="flex items-center justify-between rounded-xl border border-[#e7dcc8] bg-white px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <span className="h-7 w-7 rounded-full border border-[#d7c7a9] shadow-inner" style={{ backgroundColor: option.hex }} />
                    <span className="text-sm font-medium text-[#4a3b3b]">{option.name}</span>
                  </div>
                  <span className="text-[10px] tracking-[0.15em] text-[#8a7979]">{option.hex}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-[#7a6a6a]">
              Mời quý khách ưu tiên trang phục theo tông màu vàng, be hoặc nâu để đồng bộ với không gian tiệc.
            </p>
          </div>
        </section>

        <section className="demo demo-8" data-demo="demo-8">
          <Photo src="/image_8_1.png" alt="Ảnh cưới" className="rsvp-photo" />
          <Reveal side="left" className="rsvp-card bg-[#171a1b] p-6 rounded-lg border border-[#394144] shadow-2xl relative z-10 -mt-12 mx-4">
            <h2 className="font-serif text-xl mb-4 text-center">Xác nhận tham dự</h2>
            <p className="text-sm text-center mb-6 text-gray-400">Khách mời: <strong className="text-white">{guestName}</strong></p>
            <label className="block text-sm text-gray-300 mb-2">Bạn sẽ tham dự chứ?</label>
            <select className="w-full bg-[#0a0b0b] border border-[#394144] rounded p-2 mb-4 text-white">
              <option value="yes">Có, mình sẽ tham dự</option>
              <option value="no">Mình bận, rất tiếc</option>
            </select>

            <label className="block text-sm text-gray-300 mb-2">Số lượng người tham dự</label>
            <select className="w-full bg-[#0a0b0b] border border-[#394144] rounded p-2 mb-6 text-white">
              <option value="1">1 người</option>
              <option value="2">2 người</option>
              <option value="3">3 người</option>
            </select>

            <button className="w-full py-3 bg-[#941d24] hover:bg-[#b71927] text-white rounded font-medium transition-colors">
              Gửi Xác Nhận
            </button>
          </Reveal>
          <p className="closing text-center text-gray-500 italic mt-8 pb-8">Cảm ơn {guestName} đã đến chung vui cùng chúng mình</p>
        </section>

        <MenuButton />
      </div>
    </main>
  );
}
