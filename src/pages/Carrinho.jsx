import { useEffect, useState } from "react";
import Sidebar from "../components/SideBar/SideBar.jsx";
import BotaoPremium from "../components/button/Button.jsx";
import { easeIn, motion } from "framer-motion";
import "./Carrinho.css";
import { CircleUserRound, Wallet, History, Pencil, LogOut } from "lucide-react";



export default function Carrinho() {


    return (
        <div className="carrinho-container">
            <div className="carrinho-banner">
                 <motion.svg
                            initial={{ y: -100 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 2, type: "spring" }}
                            viewport={{ once: true, amount: 0.3 }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                        >
                            <path
                                fill="#410445"
                                fillOpacity="1"
                                d="M0,128L48,144C96,160,192,192,288,213.3C384,235,480,245,576,229.3C672,213,768,171,864,170.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                            />
                        </motion.svg>

            </div>
            <div className="carrinho-content">
                

            </div>

        </div>
       
    )
}