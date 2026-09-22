import Link from "next/link";
import { Heart, Sparkles, LayoutDashboard } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0b] text-[#f3eee8] font-sans flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#941d24]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#171a1b]/80 rounded-full blur-[120px]" />

      <main className="z-10 text-center max-w-3xl px-6">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#171a1b] border border-[#394144] mb-8">
          <Sparkles size={16} className="text-[#858b8e]" />
          <span className="text-sm font-medium tracking-wide text-[#b8b9b7] uppercase">Wedding Invitation Builder</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Lưu Giữ Khoảnh Khắc <br />
          <span className="italic text-[#858b8e] font-light">Tuyệt Đẹp Nhất</span>
        </h1>

        <p className="text-lg md:text-xl text-[#b8b9b7] mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Nền tảng tạo thiệp cưới trực tuyến với giao diện hiện đại, hiệu ứng mượt mà và quản lý khách mời dễ dàng.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-8 py-4 bg-[#941d24] hover:bg-[#b71927] transition-all rounded-full text-white font-medium text-lg tracking-wide shadow-[0_0_40px_rgba(148,29,36,0.4)]"
          >
            <LayoutDashboard size={20} />
            Đi đến Dashboard
          </Link>
          
          <Link
            href="/invite/test-couple/nguyen-van-a"
            className="flex items-center gap-2 px-8 py-4 bg-[#171a1b] hover:bg-[#2a2f31] border border-[#394144] hover:border-[#858b8e] transition-all rounded-full text-white font-medium text-lg tracking-wide"
          >
            <Heart size={20} className="text-[#858b8e]" />
            Xem Mẫu Demo
          </Link>
        </div>
      </main>

      <footer className="absolute bottom-8 text-sm text-[#4d5558] tracking-widest uppercase">
        Designed for Cinelove Concept
      </footer>
    </div>
  );
}
