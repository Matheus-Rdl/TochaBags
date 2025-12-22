import { useRef, useState } from "react";

export default function DragScroll({ children, step = 300 }) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag com mouse
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const walk = (e.pageX - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Botões
  const scrollLeftBtn = () => {
    containerRef.current.scrollBy({
      left: -step,
      behavior: "smooth",
    });
  };

  const scrollRightBtn = () => {
    containerRef.current.scrollBy({
      left: step,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Botão esquerda */}
      <button
        onClick={scrollLeftBtn}
        className="flex justify-center absolute text-3xl left-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white w-10 h-10 rounded-full"
      >
        ‹
      </button>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="scroll-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {/* Botão direita */}
      <button
        onClick={scrollRightBtn}
        className="flex justify-center absolute text-3xl right-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white w-10 h-10 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
