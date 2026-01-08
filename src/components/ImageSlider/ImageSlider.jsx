import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({
  images = [],
  interval = 3000,
  height = "400px",
}) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const timeoutRef = useRef(null);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);

  const dragLayerRef = useRef(null);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (isDragging || images.length <= 1) return;

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearTimeout(timeoutRef.current);
  }, [index, interval, images.length, isDragging]);

  /* ================= CONTROLES ================= */
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  /* ================= DRAG ================= */
  const startDrag = (clientX) => {
    setIsDragging(true);
    dragStartX.current = clientX;
  };

  const moveDrag = (clientX) => {
    if (!isDragging) return;
    dragOffset.current = clientX - dragStartX.current;
    dragLayerRef.current.style.transform = `translateX(${dragOffset.current}px)`;
  };

  const endDrag = () => {
    if (!isDragging) return;

    dragLayerRef.current.style.transform = "translateX(0px)";
    setIsDragging(false);

    if (dragOffset.current < -60) nextSlide();
    if (dragOffset.current > 60) prevSlide();

    dragOffset.current = 0;
  };

  /* ================= SLIDES ================= */
  const slides = useMemo(() => {
    return images.map((img, i) => {
      const offset = (i - index) * 100;

      return (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          loading="lazy"
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: i === index ? 1 : 0,
            transform: `translateX(${offset}%)`,
            transition: isDragging
              ? "none"
              : "transform .6s cubic-bezier(0.4,0,0.2,1), opacity .4s ease",
            willChange: "transform",
            userSelect: "none",
            pointerEvents: i === index ? "auto" : "none",
          }}
        />
      );
    });
  }, [images, index, isDragging]);

  /* ================= EMPTY ================= */
  if (!images.length) {
    return (
      <div
        style={{
          width: "100%",
          height,
          display: "grid",
          placeItems: "center",
          background: "#15001763",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          color: "rgba(255,255,255,.7)",
        }}
      >
        Nenhuma imagem disponível
      </div>
    );
  }

  /* ================= RENDER ================= */
  return (
    <div
      style={{
        position: "relative",
        width: "100%", // 🔥 CORREÇÃO DA LARGURA
        height,
        overflow: "hidden",
        borderRadius: "20px",
        background: "#8763c66b",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 20px 60px rgba(102,126,234,.3), 0 0 40px rgba(186,85,255,.25)",
      }}
    >
      {/* NAV */}
      <NavButton left onClick={prevSlide}>
        <ChevronLeft size={24} color="white" />
      </NavButton>

      <NavButton onClick={nextSlide}>
        <ChevronRight size={24} color="white" />
      </NavButton>

      {/* SLIDER */}
      <div style={{ height: "100%", padding: 8 }}>
        <div
          style={{
            position: "relative",
            height: "100%",
            borderRadius: 16,
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={(e) => startDrag(e.clientX)}
          onMouseMove={(e) => moveDrag(e.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
          onTouchEnd={endDrag}
        >
          <div
            ref={dragLayerRef}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              transform: "translateX(0px)",
              transition: isDragging
                ? "none"
                : "transform .6s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {slides}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
          background: "rgba(0,0,0,.3)",
          backdropFilter: "blur(10px)",
          padding: "10px 16px",
          borderRadius: 30,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: i === index ? 32 : 10,
              height: 10,
              borderRadius: 5,
              border: "none",
              background:
                i === index
                  ? "linear-gradient(135deg,#c77dff,#ba55ff)"
                  : "rgba(255,255,255,.4)",
              transition: "all .3s ease",
              cursor: "pointer",
              boxShadow:
                i === index
                  ? "0 0 20px rgba(199,125,255,.6)"
                  : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= NAV BUTTON ================= */
function NavButton({ left, children, ...props }) {
  return (
    <button
      {...props}
      style={{
        position: "absolute",
        top: "50%",
        [left ? "left" : "right"]: 20,
        transform: "translateY(-50%)",
        zIndex: 10,
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,.3)",
        background: "rgba(0,0,0,.4)",
        backdropFilter: "blur(10px)",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        transition: "all .3s ease",
      }}
    >
      {children}
    </button>
  );
}
