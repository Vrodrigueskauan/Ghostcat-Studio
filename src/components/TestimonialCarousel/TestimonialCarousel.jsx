import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./TestimonialCarousel.css";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      nome: "Cliente 1",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      nome: "Cliente 2",
      texto:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      nome: "Cliente 3",
      texto:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      nome: "Cliente 4",
      texto:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      nome: "Cliente 5",
      texto:
        "Curabitur vel sem at lorem interdum tincidunt. Donec sagittis tincidunt nisi, vel feugiat justo.",
    },
    {
      id: 6,
      nome: "Cliente 6",
      texto:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];

  const trackRef = useRef(null);

  // Faz o carrossel deslizar automaticamente
  useEffect(() => {
    const track = trackRef.current;
    let x = 0;
    let animationFrame;

    const animate = () => {
      x -= 0.5; // velocidade
      if (x <= -track.scrollWidth / 2) x = 0; // loop infinito
      track.style.transform = `translateX(${x}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="carousel-title">O que nossos clientes dizem</h2>

      <div className="carousel-wrapper">
        <motion.div ref={trackRef} className="carousel-track">
          {/* duplicamos para loop infinito */}
          {[...testimonials, ...testimonials].map((item, i) => (
            <div className="card" key={i}>
              <div className="circle"></div>
              <h3>{item.nome}</h3>
              <p>{item.texto}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
