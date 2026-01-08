import { useState } from "react";
import { motion } from "framer-motion";
import { Home, ShoppingCart, Heart, User, Menu, X, CalendarRange } from "lucide-react";
import "./SideBar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

    const menu = [
        { name: "Catálogo", icon: <Home size={22} />, link: "/catalogo" },
        { name: "Carrinho", icon: <ShoppingCart size={22} />, link: "/carrinho" },
        { name: "Favoritos", icon: <Heart size={22} />, link: "/favoritos" },
        { name: "Agendamentos", icon: <CalendarRange size={22} />, link: "/perfil" },
        { name: "Perfil", icon: <User size={22} />, link: "/perfil" },
    ];

    return (

    <>
      
      <motion.button
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={{ rotate: isOpen ? 90 : 0 }}
      >
        <motion.div
          className="bar top"
          animate={isOpen ? { rotate: 40, y: 10, x:5 } : { rotate: 0, y: 0 }}
        />
        <motion.div
          className="bar middle"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.div
          className="bar bottom"
          animate={isOpen ? { rotate: -40, y: -20,  x:5 } : { rotate: 0, y: 0 }}
        />
      </motion.button>

      {/* Sidebar */}
      <motion.div
        className={`sidebar ${isOpen ? "open" : "closed"}`}
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: isOpen ? 0 : -250, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <h2 className="sidebar-title">{isOpen && "Ghostcat"}</h2>

        <ul className="sidebar-menu">
          {menu.map((item, i) => (
            <motion.li
              key={i}
              className="sidebar-item"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a href={item.link}>
                {item.icon} {isOpen && <span>{item.name}</span>}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
    );
}
