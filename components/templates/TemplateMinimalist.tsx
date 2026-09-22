"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const weddingInfo = {
  couple: "Ánh Dương & Huy Hiếu",
  bride: "Nguyễn Thị Ánh Dương",
  groom: "Phạm Huy Hiếu",
  weddingDate: "12 . 12 . 2026",
  lunarDate: "Tức 4/11 năm Bính Ngọ",
  groomHouse: "11 ngõ 4 Lam Sơn, Vĩnh Yên, Phú Thọ",
  brideHouse: "88 Mạc Đĩnh Chi, Lê Thanh Nghị, Hải Phòng",
};

const timeline = [
  { time: "6h30", label: "Đón khách tại nhà gái" },
  { time: "7h00", label: "Lễ vu quy" },
  { time: "8h00", label: "Nhà trai đón dâu" },
  { time: "10h00", label: "Đón khách tại nhà trai" },
  { time: "10h30", label: "Lễ thành hôn" },
  { time: "11h30", label: "Khai tiệc" },
  { time: "12h00", label: "Photobooth" },
];

export default function TemplateMinimalist({ guestName }: { guestName: string }) {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        <FadeIn>
          <p className="tracking-[0.3em] uppercase text-xs mb-8 text-gray-500">Thân mời đến dự tiệc cưới</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">{weddingInfo.bride} <span className="text-gray-300">&</span> {weddingInfo.groom}</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-gray-500 tracking-widest mt-6">{weddingInfo.weddingDate}</p>
        </FadeIn>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gray-300"
          />
        </div>
      </section>

      {/* Guest Welcome */}
      <section className="py-24 px-8 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-gray-500 mb-6 uppercase tracking-widest text-xs">Trân trọng kính mời</p>
            <h2 className="text-3xl font-light mb-8">{guestName}</h2>
            <p className="text-gray-600 leading-relaxed font-light">
              Đến chung vui cùng gia đình chúng mình trong ngày trọng đại.
              Sự hiện diện của bạn là niềm vinh hạnh và là lời chúc phúc tuyệt vời nhất.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 pb-8 pt-12">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#e8e1d7] bg-[#fffdfb] p-6 shadow-[0_14px_30px_rgba(77,64,52,0.08)]">
          <p className="mb-3 text-center text-[10px] uppercase tracking-[0.35em] text-gray-500">Timeline</p>
          <div className="space-y-3">
            {timeline.map((item, index) => (
              <div key={item.time} className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${index % 2 === 0 ? 'bg-[#faf5ee] border-[#e8dcc7]' : 'bg-white border-[#ece5d9]'}`}>
                <span className="inline-flex min-w-[64px] items-center justify-center rounded-full bg-[#d9b648]/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6b4f3b]">{item.time}</span>
                <span className="text-sm text-[#1a1a1a]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="uppercase tracking-widest text-xs text-gray-500 mb-6">Lễ cưới</h3>
              <p className="text-2xl font-light mb-2">10:30</p>
              <p className="text-xl font-light mb-2">Chủ Nhật, 12.12.2026</p>
              <p className="text-gray-500 font-light text-sm">{weddingInfo.lunarDate}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="uppercase tracking-widest text-xs text-gray-500 mb-6">Địa điểm</h3>
              <p className="text-2xl font-light mb-2">Nhà trai</p>
              <p className="text-gray-600 font-light mb-6">{weddingInfo.groomHouse}</p>
              <button className="px-6 py-2 border border-[#1a1a1a] text-sm uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
                Xem Bản Đồ
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Images - Clean grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <FadeIn>
            <img src="/image_2_2.png" alt="Couple" className="w-full h-[60vh] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <img src="/image_4_2.png" alt="Couple" className="w-full h-[60vh] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </FadeIn>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-16 px-8">
        <div className="mx-auto max-w-md rounded-[2rem] border border-[#e5dfd6] bg-[#fffaf4] p-6 shadow-[0_14px_30px_rgba(77,64,52,0.08)]">
          <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-[#7a6a6a]">Dress code</p>
          <h3 className="mb-5 text-center text-2xl font-light text-[#1a1a1a]">Vàng · Be · Nâu</h3>
          <div className="space-y-3">
            {[
              { name: "Vàng", hex: "#D9B648" },
              { name: "Be", hex: "#D9C7A5" },
              { name: "Nâu", hex: "#6B4F3B" },
            ].map((option) => (
              <div key={option.name} className="flex items-center justify-between rounded-xl border border-[#e8e1d7] bg-white px-3 py-2.5">
                <div className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-full border border-[#ddd0bb]" style={{ backgroundColor: option.hex }} />
                  <span className="text-sm font-medium text-[#1a1a1a]">{option.name}</span>
                </div>
                <span className="text-[10px] tracking-[0.16em] text-gray-500">{option.hex}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-[#4a4a4a] leading-relaxed">
            Quý khách vui lòng chọn trang phục theo tông màu vàng, be hoặc nâu để cùng tạo nên vẻ đẹp đồng bộ cho buổi tiệc.
          </p>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-24 px-8 text-center bg-[#1a1a1a] text-white mt-12">
        <div className="max-w-md mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-light mb-12 tracking-wide">Xác Nhận Tham Dự</h2>
            <div className="space-y-6 text-left">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Trạng Thái</label>
                <select className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-white transition-colors font-light appearance-none">
                  <option className="text-black">Có, mình sẽ tham dự</option>
                  <option className="text-black">Mình bận, rất tiếc</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Số Lượng</label>
                <select className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-white transition-colors font-light appearance-none">
                  <option className="text-black">1 người</option>
                  <option className="text-black">2 người</option>
                </select>
              </div>
              <button className="w-full mt-8 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors">
                Gửi Xác Nhận
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
