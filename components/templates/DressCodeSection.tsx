const dressCodeOptions = [
    { name: "Vàng", hex: "#D9B648", label: "Gold" },
    { name: "Be", hex: "#D9C7A5", label: "Beige" },
    { name: "Nâu", hex: "#6B4F3B", label: "Brown" },
];

export default function DressCodeSection() {
    return (
        <section className="px-6 pb-10 pt-2">
            <div className="mx-auto max-w-md rounded-2xl border border-[#d9c7a5]/40 bg-white/75 p-6 shadow-[0_10px_30px_rgba(100,80,60,0.08)] backdrop-blur-sm">
                <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-[#7a6a6a]">
                    Dress code
                </p>
                <h3 className="mb-4 text-center text-2xl font-medium text-[#4a3b3b]">Vàng · Be · Nâu</h3>

                <div className="space-y-3">
                    {dressCodeOptions.map((option) => (
                        <div
                            key={option.name}
                            className="flex items-center justify-between rounded-xl border border-[#e7dcc8] bg-[#fffdf9] px-3 py-2.5"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    aria-label={`Màu ${option.name}`}
                                    className="h-8 w-8 rounded-full border border-[#d7c7a9] shadow-inner"
                                    style={{ backgroundColor: option.hex }}
                                />
                                <div>
                                    <p className="text-sm font-semibold text-[#4a3b3b]">{option.name}</p>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a7979]">{option.label}</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-medium tracking-[0.18em] text-[#8a7979]">
                                {option.hex}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="mt-4 text-center text-sm leading-relaxed text-[#7a6a6a]">
                    Mời quý khách ưu tiên trang phục theo tông màu vàng, be hoặc nâu để tạo sự đồng bộ cùng không gian tiệc.
                </p>
            </div>
        </section>
    );
}
