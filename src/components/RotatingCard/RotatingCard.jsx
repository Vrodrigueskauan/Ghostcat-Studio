import { useState, useEffect } from "react";
import "./RotatingCard.css";

export default function RotatingCard() {
  const cards = [
    { tag: "Lorem Ipsum", title: "Lorem Ipsum", subtitle: "Lorem Ipsum" },
    { tag: "Design UI", title: "Card Rotativo", subtitle: "Totalmente Responsivo" },
    { tag: "React JS", title: "Troca Automática", subtitle: "A cada 3 segundos" }
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // sai
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cards.length);
        setAnimate(true); // entra
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rotating-wrapper">
      <div className={`rotating-card ${animate ? "show" : "hide"}`}>

        <div className="card-avatar" />
        <span className="card-tag">{cards[index].tag}</span>
        <h1 className="card-title">{cards[index].title}</h1>
        <p className="card-subtitle">{cards[index].subtitle}</p>

        <div className="card-dots">
          {cards.map((_, i) => (
            <span key={i} className={`dot ${i === index ? "active" : ""}`} />
          ))}
        </div>

      </div>
    </div>
  );
}
