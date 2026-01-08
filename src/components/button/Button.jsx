import { motion } from "framer-motion";
import "./botaoPremium.css";

export default function BotaoPremium({ children = "Explorar", onClick }) {
  return (
    <motion.button
      className="botao-premium"
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <span>{children}</span>

     
      {[...Array(20)].map((_, i) => (
        <i
          key={i}
          className="estrela"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `scale(${0.6 + Math.random() * 0.8})`,
          }}
        />
      ))}
    </motion.button>
  );
}
