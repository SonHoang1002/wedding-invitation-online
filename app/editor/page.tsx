"use client";

import { useState, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { Type, Image as ImageIcon, Square, Upload, Trash2, MousePointer2 } from "lucide-react";
import type { CanvasElement, ElementType } from "../../types/editor";

export default function EditorPage() {
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Thêm một element mới vào chính giữa Canvas
  const addElement = (type: ElementType) => {
    const newElement: CanvasElement = {
      id: Math.random().toString(36).substring(7),
      type,
      x: 100, // Tọa độ tương đối ngẫu nhiên ở giữa
      y: 150 + elements.length * 20,
      width: type === "text" ? 200 : 150,
      height: type === "text" ? 50 : 150,
      content: type === "text" ? "Văn bản mẫu" : type === "image" ? "/image_1_1.jpg" : undefined,
      styles: {
        backgroundColor: type === "shape" ? "#4d5558" : "transparent",
        color: "#ffffff",
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
      },
    };
    setElements([...elements, newElement]);
    setSelectedId(newElement.id);
  };

  // Cập nhật vị trí khi người dùng thả chuột
  const handleDragEnd = (id: string, info: PanInfo) => {
    setElements((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            x: el.x + info.offset.x,
            y: el.y + info.offset.y,
          };
        }
        return el;
      })
    );
  };

  // Cập nhật thuộc tính của element đang được chọn
  const updateElement = (id: string, updates: Partial<CanvasElement>) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...updates, styles: { ...el.styles, ...(updates.styles || {}) } } : el))
    );
  };

  // Xóa element
  const removeElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const selectedElement = elements.find((el) => el.id === selectedId);

  return (
    <div className="flex h-screen bg-[#0a0b0b] text-[#f3eee8] font-sans overflow-hidden">
      {/* LEFT SIDEBAR - Toolbar */}
      <div className="w-64 bg-[#171a1b] border-r border-[#394144] flex flex-col z-20">
        <div className="p-4 border-b border-[#394144]">
          <h2 className="font-serif font-bold text-lg tracking-wider">Cinelove Editor</h2>
        </div>
        <div className="flex-1 p-4 space-y-4">
          <p className="text-xs text-[#858b8e] font-semibold uppercase tracking-widest mb-2">Thêm Khối</p>
          <button
            onClick={() => addElement("text")}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#0a0b0b] border border-[#394144] hover:border-[#858b8e] transition-colors"
          >
            <Type size={18} className="text-[#b8b9b7]" />
            <span className="text-sm font-medium">Văn Bản</span>
          </button>
          <button
            onClick={() => addElement("image")}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#0a0b0b] border border-[#394144] hover:border-[#858b8e] transition-colors"
          >
            <ImageIcon size={18} className="text-[#b8b9b7]" />
            <span className="text-sm font-medium">Hình Ảnh</span>
          </button>
          <button
            onClick={() => addElement("shape")}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#0a0b0b] border border-[#394144] hover:border-[#858b8e] transition-colors"
          >
            <Square size={18} className="text-[#b8b9b7]" />
            <span className="text-sm font-medium">Hình Khối</span>
          </button>
        </div>
        <div className="p-4 border-t border-[#394144]">
           <button className="w-full py-2 bg-[#941d24] rounded text-sm font-medium">Xuất JSON</button>
        </div>
      </div>

      {/* CENTER CANVAS */}
      <div 
        className="flex-1 bg-[#202425] relative overflow-hidden flex items-center justify-center pattern-grid"
        onClick={() => setSelectedId(null)}
      >
        {/* Vùng thiết kế giả lập kích thước điện thoại */}
        <div 
          ref={canvasRef}
          className="w-[400px] h-[750px] bg-[#171a1b] shadow-2xl relative overflow-hidden border border-[#394144]"
          onClick={(e) => e.stopPropagation()}
        >
          {elements.map((el) => (
            <motion.div
              key={el.id}
              drag
              dragMomentum={false}
              dragConstraints={canvasRef}
              onDragEnd={(e, info) => handleDragEnd(el.id, info)}
              onClick={(e) => { e.stopPropagation(); setSelectedId(el.id); }}
              className={`absolute cursor-grab active:cursor-grabbing ${selectedId === el.id ? 'ring-2 ring-blue-500' : ''}`}
              style={{
                x: el.x,
                y: el.y,
                width: el.width,
                height: el.height,
                backgroundColor: el.styles.backgroundColor,
                color: el.styles.color,
                fontSize: el.styles.fontSize,
                fontFamily: el.styles.fontFamily,
                borderRadius: el.styles.borderRadius,
                opacity: el.styles.opacity,
                zIndex: selectedId === el.id ? 10 : 1,
              }}
            >
              {el.type === "text" && (
                <div className="w-full h-full flex items-center justify-center p-2 outline-none">
                  {el.content}
                </div>
              )}
              {el.type === "image" && (
                <img 
                  src={el.content} 
                  alt="Editor img" 
                  className="w-full h-full object-cover pointer-events-none"
                  style={{ borderRadius: el.styles.borderRadius }} 
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR - Properties */}
      <div className="w-72 bg-[#171a1b] border-l border-[#394144] flex flex-col z-20 overflow-y-auto">
        <div className="p-4 border-b border-[#394144]">
          <h2 className="font-serif font-bold text-lg tracking-wider">Thuộc Tính</h2>
        </div>
        
        {selectedElement ? (
          <div className="p-4 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase text-[#858b8e] tracking-widest">{selectedElement.type}</span>
              <button onClick={() => removeElement(selectedElement.id)} className="text-red-400 hover:text-red-500">
                <Trash2 size={16} />
              </button>
            </div>

            {/* Kích thước */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-[#b8b9b7]">Kích Thước (W x H)</label>
              <div className="flex gap-2">
                <input 
                  type="number" 
                  value={selectedElement.width} 
                  onChange={(e) => updateElement(selectedElement.id, { width: Number(e.target.value) })}
                  className="w-full bg-[#0a0b0b] border border-[#394144] rounded p-2 text-sm text-white" 
                />
                <input 
                  type="number" 
                  value={selectedElement.height} 
                  onChange={(e) => updateElement(selectedElement.id, { height: Number(e.target.value) })}
                  className="w-full bg-[#0a0b0b] border border-[#394144] rounded p-2 text-sm text-white" 
                />
              </div>
            </div>

            {/* Nội dung Text */}
            {selectedElement.type === "text" && (
              <div className="space-y-3">
                <label className="text-xs font-semibold text-[#b8b9b7]">Nội Dung</label>
                <textarea 
                  value={selectedElement.content} 
                  onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                  className="w-full bg-[#0a0b0b] border border-[#394144] rounded p-2 text-sm text-white min-h-[80px]" 
                />
                <label className="text-xs font-semibold text-[#b8b9b7]">Cỡ chữ</label>
                <input 
                  type="number" 
                  value={selectedElement.styles.fontSize} 
                  onChange={(e) => updateElement(selectedElement.id, { styles: { fontSize: Number(e.target.value) } })}
                  className="w-full bg-[#0a0b0b] border border-[#394144] rounded p-2 text-sm text-white" 
                />
              </div>
            )}

            {/* Hình ảnh */}
            {selectedElement.type === "image" && (
              <div className="space-y-3">
                <label className="text-xs font-semibold text-[#b8b9b7]">Ảnh (Tạm thời nhập URL)</label>
                <input 
                  type="text" 
                  value={selectedElement.content} 
                  onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                  className="w-full bg-[#0a0b0b] border border-[#394144] rounded p-2 text-sm text-white" 
                />
                <button className="w-full py-2 flex items-center justify-center gap-2 border border-[#394144] rounded bg-[#202425] hover:bg-[#394144] text-sm">
                  <Upload size={14} /> Upload Firebase (Sắp ra mắt)
                </button>
              </div>
            )}

            {/* Màu sắc & Bo góc */}
            <div className="space-y-3">
              {selectedElement.type !== "image" && (
                <>
                  <label className="text-xs font-semibold text-[#b8b9b7]">Màu {selectedElement.type === "text" ? "chữ" : "nền"}</label>
                  <div className="flex gap-2">
                    <input 
                      type="color" 
                      value={selectedElement.type === "text" ? selectedElement.styles.color : selectedElement.styles.backgroundColor} 
                      onChange={(e) => {
                        if (selectedElement.type === "text") {
                          updateElement(selectedElement.id, { styles: { color: e.target.value } });
                        } else {
                          updateElement(selectedElement.id, { styles: { backgroundColor: e.target.value } });
                        }
                      }}
                      className="w-8 h-8 rounded cursor-pointer" 
                    />
                  </div>
                </>
              )}
              
              <label className="text-xs font-semibold text-[#b8b9b7]">Bo góc (Border Radius)</label>
              <input 
                type="range" 
                min="0" max="100" 
                value={selectedElement.styles.borderRadius || 0} 
                onChange={(e) => updateElement(selectedElement.id, { styles: { borderRadius: Number(e.target.value) } })}
                className="w-full" 
              />
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-[#4d5558] flex flex-col items-center">
            <MousePointer2 size={32} className="mb-4 opacity-50" />
            <p className="text-sm">Chọn một thành phần trên Canvas để thiết lập thuộc tính</p>
          </div>
        )}
      </div>
    </div>
  );
}
