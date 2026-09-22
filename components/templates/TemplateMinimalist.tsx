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

export default function TemplateMinimalist({ guestName }: { guestName: string }) {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        <FadeIn>
          <p className="tracking-[0.3em] uppercase text-xs mb-8 text-gray-500">Thân mời đến dự tiệc cưới</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">Minh Anh <span className="text-gray-300">&</span> Tuấn Anh</h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-lg text-gray-500 tracking-widest mt-6">19 . 09 . 2026</p>
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

      {/* Details */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="uppercase tracking-widest text-xs text-gray-500 mb-6">Thời Gian</h3>
              <p className="text-2xl font-light mb-2">11:30</p>
              <p className="text-xl font-light mb-2">Chủ Nhật, 20.09.2026</p>
              <p className="text-gray-500 font-light text-sm">Tức ngày 10/08 năm Bính Ngọ</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="border-t border-gray-200 pt-8">
              <h3 className="uppercase tracking-widest text-xs text-gray-500 mb-6">Địa Điểm</h3>
              <p className="text-2xl font-light mb-2">Tư Gia</p>
              <p className="text-gray-600 font-light mb-6">Nhà Văn Hóa thôn Yên Ninh,<br/>xã Ninh Sở, Hà Nội</p>
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
