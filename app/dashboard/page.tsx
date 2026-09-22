import Link from "next/link";
import { Users, Gift, Activity } from "lucide-react";

export default function DashboardPage() {
  // Mock data for MVP
  const stats = [
    { name: "Khách Mời", value: "120", icon: Users },
    { name: "Đã RSVP", value: "85", icon: Activity },
    { name: "Lời Chúc", value: "42", icon: Gift },
  ];

  return (
    <div className="min-h-screen bg-[#0a0b0b] text-[#f3eee8] p-6 lg:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center pb-8 border-b border-[#394144]">
          <h1 className="text-3xl font-light tracking-wide text-white font-serif">Quản Lý Thiệp Cưới</h1>
          <Link
            href="/"
            className="px-6 py-2 bg-[#941d24] hover:bg-[#b71927] transition-colors rounded-full text-sm tracking-wider font-medium"
          >
            Đăng Xuất
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="p-6 rounded-2xl bg-[#171a1b] border border-[#394144] shadow-2xl flex items-center space-x-4 hover:border-[#858b8e] transition-colors"
            >
              <div className="p-4 bg-[#0a0b0b] rounded-full text-[#b8b9b7]">
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm text-[#858b8e] tracking-widest uppercase">{stat.name}</p>
                <p className="text-3xl font-serif mt-1">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-[#171a1b] rounded-2xl border border-[#394144] overflow-hidden">
          <div className="p-6 border-b border-[#394144] flex justify-between items-center">
            <h2 className="text-xl font-serif">Danh Sách Khách Mời</h2>
            <button className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors rounded-lg text-sm font-medium">
              + Thêm Khách Mời
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0a0b0b] text-[#858b8e] text-xs uppercase tracking-wider">
                  <th className="p-4 font-medium">Tên Khách</th>
                  <th className="p-4 font-medium">Trạng Thái RSVP</th>
                  <th className="p-4 font-medium">Số Lượng</th>
                  <th className="p-4 font-medium">Link Thiệp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#394144]">
                {[
                  { name: "Nguyễn Văn A", rsvp: "Sẽ Tham Dự", count: 2, link: "test-couple/nguyen-van-a" },
                  { name: "Trần Thị B", rsvp: "Chưa Phản Hồi", count: 1, link: "test-couple/tran-thi-b" },
                  { name: "Lê Văn C", rsvp: "Từ Chối", count: 0, link: "test-couple/le-van-c" },
                ].map((guest, idx) => (
                  <tr key={idx} className="hover:bg-[#0a0b0b] transition-colors">
                    <td className="p-4 font-medium">{guest.name}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          guest.rsvp === "Sẽ Tham Dự"
                            ? "bg-green-500/20 text-green-400"
                            : guest.rsvp === "Từ Chối"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {guest.rsvp}
                      </span>
                    </td>
                    <td className="p-4">{guest.count}</td>
                    <td className="p-4">
                      <Link
                        href={`/invite/${guest.link}`}
                        target="_blank"
                        className="text-[#941d24] hover:text-[#b71927] text-sm underline underline-offset-4"
                      >
                        Xem Thiệp
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
