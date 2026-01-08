import { useState, useEffect } from "react";
import BotaoPremium from "../components/button/Button.jsx";
import { motion } from "framer-motion";
import "./recsenha.css";

export default function RecSenha() {

    // estado dos dígitos
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const isComplete = otp.every((n) => n !== ""); // verifica se todos foram preenchidos

    useEffect(() => {
        const inputs = document.querySelectorAll(".otp-input");

        inputs.forEach((input, index) => {
            input.addEventListener("input", () => {
                input.value = input.value.replace(/\D/g, ""); 

                if (input.value && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }

                setOtp(prev => {
                    const copy = [...prev];
                    copy[index] = input.value;
                    return copy;
                });
            });

            input.addEventListener("keydown", (e) => {
                if (e.key === "Backspace" && !input.value && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });
    }, []);

    return (
        <div className="login-page" >

            <div className="login-container">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="s1de"
                >

                    <div className="text-grupo">
                        <h1>Recuperar senha</h1>
                        <p>enviamos um código para o seu email para redefinir a senha</p>
                    </div>

                    <div className="grupo-input">
                        <input type="text" maxLength="1" className="otp-input" />
                        <input type="text" maxLength="1" className="otp-input" />
                        <input type="text" maxLength="1" className="otp-input" />
                        <input type="text" maxLength="1" className="otp-input" />
                        <input type="text" maxLength="1" className="otp-input" />
                        <input type="text" maxLength="1" className="otp-input" />
                    </div>

                    {/* BOTÃO PREMIUM */}
                    <div className="btn-grupo">
                        <BotaoPremium
                            
                            disabled={!isComplete} 
                        >Continuar</BotaoPremium>
                    </div>

                </motion.div>

            </div>
        </div >
    );
}
