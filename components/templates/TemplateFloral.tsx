"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function ScaleIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function TemplateFloral({ guestName }: { guestName: string }) {
  return (
    <main className="min-h-screen bg-[#fdfaf6] text-[#5c4d4d] font-serif overflow-hidden">
      {/* Decorative Corner */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-[#e8d5d5] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-[#d5e8e1] rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center p-8 text-center relative z-10">
        <ScaleIn>
          <div className="w-32 h-32 rounded-t-full bg-[#e8d5d5]/30 mb-8 mx-auto flex items-end justify-center pb-4">
            <Heart className="text-[#c68c8d] opacity-80" strokeWidth={1.5} />
          </div>
        </ScaleIn>
        
        <ScaleIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-medium mb-6 text-[#4a3b3b]">Minh Anh <br/><span className="text-3xl italic text-[#c68c8d]">&</span><br/> Tuấn Anh</h1>
        </ScaleIn>
        
        <ScaleIn delay={0.4}>
          <p className="text-lg tracking-[0.2em] mt-4 uppercase text-[#8a7979]">19 Tháng 09 Năm 2026</p>
        </ScaleIn>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 text-center relative z-10">
        <div className="max-w-lg mx-auto bg-white/60 backdrop-blur-sm p-12 rounded-3xl border border-[#e8d5d5]/50 shadow-xl shadow-[#e8d5d5]/20">
          <ScaleIn>
            <h2 className="text-2xl mb-8 italic text-[#c68c8d]">Thân gửi {guestName},</h2>
            <p className="leading-loose text-[#7a6a6a]">
              Tình yêu là một hành trình kỳ diệu, và chúng mình đã may mắn tìm thấy nhau. 
              Sẽ thật tuyệt vời nếu hành trình sắp tới của chúng mình có sự chứng kiến và chúc phúc của bạn.
            </p>
          </ScaleIn>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-6 relative z-10">
        <ScaleIn>
          <h2 className="text-3xl text-center mb-16 text-[#4a3b3b]">Chương Trình <br/><span className="italic text-[#c68c8d]">Tiệc Cưới</span></h2>
        </ScaleIn>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <ScaleIn delay={0.2}>
            <div className="bg-white/80 p-8 rounded-2xl text-center border border-[#e8d5d5]/30 shadow-lg">
              <div className="w-12 h-12 bg-[#e8d5d5]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#c68c8d] text-xl">1</span>
              </div>
              <h3 className="text-xl mb-4 text-[#4a3b3b]">Lễ Cưới</h3>
              <p className="text-2xl mb-2 text-[#c68c8d]">11:30 Sáng</p>
              <p className="text-[#7a6a6a] mb-4">Chủ Nhật, 20 Tháng 09</p>
              <p className="text-sm text-[#8a7979] italic">Tư gia nhà trai<br/>Nhà Văn Hóa thôn Yên Ninh, Ninh Sở</p>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.4}>
            <div className="bg-white/80 p-8 rounded-2xl text-center border border-[#e8d5d5]/30 shadow-lg">
              <div className="w-12 h-12 bg-[#d5e8e1]/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#7a9d90] text-xl">2</span>
              </div>
              <h3 className="text-xl mb-4 text-[#4a3b3b]">Tiệc Thân Mật</h3>
              <p className="text-2xl mb-2 text-[#7a9d90]">16:30 Chiều</p>
              <p className="text-[#7a6a6a] mb-4">Thứ Bảy, 19 Tháng 09</p>
              <p className="text-sm text-[#8a7979] italic">Trung Tâm Tiệc Cưới<br/>Xã Ninh Môn, Nội Bài</p>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Images */}
      <section className="py-20 relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
           <ScaleIn>
             <img src="/image_1_1.jpg" alt="Couple" className="w-full h-[70vh] object-cover rounded-t-[10rem] shadow-2xl" />
           </ScaleIn>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-24 px-6 relative z-10 text-center">
        <ScaleIn>
          <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-[#e8d5d5]/50">
            <h2 className="text-2xl mb-8 text-[#4a3b3b]">Phản Hồi <span className="italic text-[#c68c8d]">Tham Dự</span></h2>
            <div className="space-y-6 text-left">
              <div>
                <label className="block text-sm text-[#7a6a6a] mb-2">Bạn sẽ tham dự chứ?</label>
                <select className="w-full border border-[#e8d5d5] rounded-xl p-3 bg-white text-[#4a3b3b] focus:outline-none focus:border-[#c68c8d]">
                  <option>Chắc chắn rồi!</option>
                  <option>Rất tiếc, mình bận mất rồi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#7a6a6a] mb-2">Có bao nhiêu người đi cùng bạn?</label>
                <select className="w-full border border-[#e8d5d5] rounded-xl p-3 bg-white text-[#4a3b3b] focus:outline-none focus:border-[#c68c8d]">
                  <option>Chỉ mình tôi</option>
                  <option>Đi cùng 1 người</option>
                  <option>Đi cùng gia đình</option>
                </select>
              </div>
              <button className="w-full py-4 mt-4 bg-[#c68c8d] text-white rounded-xl text-lg hover:bg-[#b07879] transition-colors shadow-lg shadow-[#c68c8d]/30">
                Gửi Xác Nhận
              </button>
            </div>
          </div>
        </ScaleIn>
      </section>
    </main>
  );
}
