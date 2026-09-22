"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

function Reveal({
  children,
  className = "",
  side,
}: {
  children: ReactNode;
  className?: string;
  side?: "left" | "right" | "bottom";
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
      transition={{ duration: 0.8, ease: "easeOut" }}
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

export default function TemplateClassic({ guestName }: { guestName: string }) {
  return (
    <main className="page-shell bg-[#0a0b0b]">
      <div className="phone relative bg-[#171a1b] shadow-2xl mx-auto overflow-hidden">
        <div className="music-mark" aria-hidden="true">◉</div>
        <div className="side-credit">Made with Cinelove</div>

        <section className="demo demo-1" data-demo="demo-1">
          <div className="eyebrow">SAVE THE DATE</div>
          <Reveal side="left" className="hero-copy">
            <span className="script font-serif">Our little story</span>
            <h1 className="font-serif">Minh Anh <i>&amp;</i> Tuấn Anh</h1>
            <p>19 · 09 · 2026</p>
          </Reveal>
          <Photo src="/image_1_1.jpg" alt="Cô dâu và chú rể bên hoa trắng" className="opening-photo" />
          <Reveal side="right" className="intro-note">
            <span>KÍNH MỜI</span>
            <strong>{guestName}</strong>
            <p className="mt-4">Đến dự buổi tiệc chung vui cùng gia đình chúng mình.</p>
          </Reveal>
        </section>

        <section className="demo demo-2" data-demo="demo-2">
          <Reveal className="section-heading"><span className="script font-serif">Thư Mời</span><p>TRÂN TRỌNG KÍNH MỜI</p></Reveal>
          <div className="trio">
            <Photo src="/image_2_1.png" alt="Ảnh gia đình nhà trai" />
            <Photo src="/image_2_2.png" alt="Ảnh cô dâu chú rể" />
            <Photo src="/image_2_3.png" alt="Ảnh gia đình nhà gái" />
          </div>
          <Reveal side="left" className="date-line"><small>Vào lúc</small><strong className="font-serif">11:30 <i>|</i> 20.09.2026 <i>|</i> Chủ Nhật</strong><span>Tức ngày 10 tháng 08 năm Bính Ngọ</span></Reveal>
          <Reveal side="right" className="venue"><small>Tại</small><h2 className="font-serif">Tư Gia Nhà Trai</h2><p>Nhà Văn Hóa thôn Yên Ninh, xã Ninh Sở, Hà Nội</p><button>Chỉ đường</button></Reveal>
        </section>

        <section className="demo demo-4" data-demo="demo-4">
          <Reveal className="love-quote"><span className="script font-serif">Hôn nhân là chuyện cả đời</span><strong className="font-serif">Yêu người vừa ý, cưới người Mình thương</strong></Reveal>
          <div className="duo-grid">
            <Photo src="/image_4_1.png" alt="Cô dâu chú rể trong tiệc cưới" />
            <Photo src="/image_4_2.png" alt="Cô dâu chú rể mặc lễ phục" />
            <Photo src="/image_4_3.png" alt="Cô dâu chú rể ngoài vườn" />
          </div>
          <Reveal side="right" className="with-you"><h2 className="font-serif">WITH YOU</h2><p>Every moment of each day,<br />loving and missing you<br />dominates every inch of my brain.</p></Reveal>
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
