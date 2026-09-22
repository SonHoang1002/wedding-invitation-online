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

const weddingInfo = {
  couple: "Ánh Dương & Huy Hiếu",
  bride: "Nguyễn Thị Ánh Dương",
  groom: "Phạm Huy Hiếu",
  weddingDate: "12 Tháng 12 Năm 2026",
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

        <ScaleIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-medium mb-6 text-[#4a3b3b]">{weddingInfo.bride} <br /><span className="text-3xl italic text-[#c68c8d]">&</span><br /> {weddingInfo.groom}</h1>
        </ScaleIn>

        <ScaleIn delay={0.2}>
          <p className="text-lg tracking-[0.2em] mt-4 uppercase text-[#8a7979]">{weddingInfo.weddingDate}</p>
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

      {/* Timeline */}
      <section className="px-6 pb-8 relative z-10">
        <ScaleIn>
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#e8d5d5]/60 bg-white/75 p-6 shadow-[0_14px_30px_rgba(78,58,49,0.08)] backdrop-blur-sm">
            <p className="mb-3 text-center text-[10px] uppercase tracking-[0.35em] text-[#8a7979]">Timeline</p>
            <div className="space-y-3">
              {timeline.map((item, index) => (
                <div key={item.time} className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${index % 2 === 0 ? 'bg-[#fffaf4] border-[#f0e4d9]' : 'bg-[#fdf7f1] border-[#eadcc5]'}`}>
                  <span className="inline-flex min-w-[60px] items-center justify-center rounded-full bg-[#d9b648]/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6b4f3b]">{item.time}</span>
                  <span className="text-sm text-[#4a3b3b]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScaleIn>
      </section>

      {/* Event Details */}
      <section className="py-20 px-6 relative z-10">
        <ScaleIn>
          <h2 className="text-3xl text-center mb-16 text-[#4a3b3b]">Chương Trình <br /><span className="italic text-[#c68c8d]">Tiệc Cưới</span></h2>
        </ScaleIn>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <ScaleIn delay={0.1}>
            <div className="bg-white/80 p-8 rounded-2xl text-center border border-[#e8d5d5]/30 shadow-lg">
              <div className="w-12 h-12 bg-[#e8d5d5]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#c68c8d] text-xl">1</span>
              </div>
              <h3 className="text-xl mb-4 text-[#4a3b3b]">Lễ Vu Quy</h3>
              <p className="text-2xl mb-2 text-[#c68c8d]">7:00 - 8:00</p>
              <p className="text-[#7a6a6a] mb-4">Chủ Nhật, 12/12/2026</p>
              <p className="text-sm text-[#8a7979] italic">Tại nhà gái<br />{weddingInfo.brideHouse}</p>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.2}>
            <div className="bg-white/80 p-8 rounded-2xl text-center border border-[#e8d5d5]/30 shadow-lg">
              <div className="w-12 h-12 bg-[#d5e8e1]/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#7a9d90] text-xl">2</span>
              </div>
              <h3 className="text-xl mb-4 text-[#4a3b3b]">Lễ Thành Hôn</h3>
              <p className="text-2xl mb-2 text-[#7a9d90]">10:30 - 11:30</p>
              <p className="text-[#7a6a6a] mb-4">{weddingInfo.lunarDate}</p>
              <p className="text-sm text-[#8a7979] italic">Tại nhà trai<br />{weddingInfo.groomHouse}</p>
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

      {/* Dress Code */}
      <section className="py-16 px-6 relative z-10">
        <ScaleIn>
          <div className="mx-auto max-w-lg rounded-[2rem] border border-[#e8d5d5]/60 bg-white/75 p-6 shadow-[0_18px_40px_rgba(110,80,70,0.08)] backdrop-blur-sm">
            <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-[#8a7979]">Dress code</p>
            <h3 className="mb-5 text-center text-3xl text-[#4a3b3b]">Vàng · Be · Nâu</h3>
            <div className="space-y-3">
              {[
                { name: "Vàng", hex: "#D9B648" },
                { name: "Be", hex: "#D9C7A5" },
                { name: "Nâu", hex: "#6B4F3B" },
              ].map((option) => (
                <div key={option.name} className="flex items-center justify-between rounded-xl border border-[#f0e4d9] bg-[#fffdf9] px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <span className="h-7 w-7 rounded-full border border-[#e2d2bd]" style={{ backgroundColor: option.hex }} />
                    <span className="text-sm font-medium text-[#4a3b3b]">{option.name}</span>
                  </div>
                  <span className="text-[10px] tracking-[0.16em] text-[#8a7979]">{option.hex}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm leading-relaxed text-[#7a6a6a]">
              Mời mọi người ưu tiên trang phục cùng gam màu vàng, be và nâu để tạo nên phong cách hài hòa và ấm cúng cho tiệc cưới.
            </p>
          </div>
        </ScaleIn>
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
