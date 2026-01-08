import { useEffect, useState } from "react";
import Sidebar from "../components/SideBar/SideBar.jsx";
import BotaoPremium from "../components/button/Button.jsx";
import { easeIn, motion } from "framer-motion";
import "./ProfilePage.css";
import { CircleUserRound, Wallet, History, Pencil, LogOut } from "lucide-react";



export default function Profile() {


    return (

        <>
            <Sidebar />
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-banner">


                        <motion.h1
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5, ease: easeIn }}
                            viewport={{ once: true, amount: 0.3 }}


                        >
                            Olá Usuário


                        </motion.h1>
                        <motion.p initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5, ease: easeIn, delay: 1 }}
                            viewport={{ once: true, amount: 0.3 }}>
                            00/00/000
                        </motion.p>

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
                    <div className="useroptions">
                        <motion.div
                            className="profilephoto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: easeIn, delay: 2 }}
                            viewport={{ once: true, amount: 0.3 }}



                        >
                            <CircleUserRound size={90} strokeWidth={2} />
                        </motion.div>


                        <div className="opc-user">
                            <motion.button
                                whileTap={{ scale: 0.75 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.35 },
                                    boxShadow: "0 0 25px rgba(150, 50, 255, 0.6), 0 0 50px rgba(150, 50, 255, 0.3)",
                                }}

                            >
                                <Wallet />Carteira
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.75 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.35 },
                                    boxShadow: "0 0 25px rgba(150, 50, 255, 0.6), 0 0 50px rgba(150, 50, 255, 0.3)",
                                }}

                            >
                                <Pencil />Editar informações
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.75 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.35 },
                                    boxShadow: "0 0 25px rgba(150, 50, 255, 0.6), 0 0 50px rgba(150, 50, 255, 0.3)",
                                }}

                            >
                                <History />Histórico de sessões
                            </motion.button>


                            <motion.button
                                whileTap={{ scale: 0.75 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.35 },
                                    boxShadow: "0 0 25px rgba(150, 50, 255, 0.6), 0 0 50px rgba(150, 50, 255, 0.3)",
                                }}

                            >
                                <LogOut />Sair</motion.button>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}