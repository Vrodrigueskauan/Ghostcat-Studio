import { useState } from "react";
import BotaoPremium from "../components/button/Button.jsx";
import { motion } from "framer-motion";
import "./Login.css";

export default function Login() {

    const [troca, setTroca] = useState(false);

    function Trocar() {
        setTroca(!troca);
    }

    

    return (
        <div className="login-page">

            <div className="login-container">

                {!troca && (
                    <>
                        <motion.div
                            initial={{ opacity: 0}}
                            whileInView={{  opacity: 1}}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }}



                            className="side">
                            <h1>Login</h1>
                            <p>Faça já seu login para ver as artes e ver seu orçamento!</p>
                            <p>Não tem uma conta ainda?</p>

                            <BotaoPremium onClick={Trocar}>
                                Cadastre-se
                            </BotaoPremium>
                        </motion.div>

                        <motion.div

                             initial={{opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="form-side">
                            <form className="form-login">
                                <label>
                                    Email
                                    <input type="text" />
                                </label>

                                <label>
                                    Senha
                                    <input type="password" />
                                </label>

                            <p>Esqueceu sua senha? <a href="/recuperar-senha">recuperar senha</a></p>

                                <BotaoPremium type="submit">Login</BotaoPremium>
                            </form>
                        </motion.div>
                    </>
                )}
            
                {troca && (

                    <>
                     <motion.div

                            initial={{opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="form-side">
                            <form className="form-login">

                                <label>
                                    Nome
                                    <input type="text" />
                                </label>

                                <label>
                                    Email
                                    <input type="text" />
                                </label>

                                <label>
                                    Senha
                                    <input type="password" />
                                </label>

                                <label>
                                    Confirmar senha
                                    <input type="text" />
                                </label>



                                <BotaoPremium type="submit">Cadastrar</BotaoPremium>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            id="side2">
                            
                            <h1>Cadastro</h1>
                            <p>Crie uma conta para acessar o seu perfil!</p>
                            <p>Já tem uma conta?</p>

                            <BotaoPremium onClick={Trocar}>
                                Fazer login
                            </BotaoPremium>
                        </motion.div>



                        </>


            

                )}

            </div>
        </div>
    );
}
