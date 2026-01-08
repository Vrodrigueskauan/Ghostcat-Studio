import { useEffect, useState } from "react";
import BotaoPremium from "../components/button/Button.jsx";
import { motion, AnimatePresence } from "framer-motion";
import "./Catalogo.css";
import Sidebar from "../components/SideBar/SideBar.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShoppingCart, Heart } from "lucide-react";

export default function Catalogo() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
    };

    const [modalData, setModalData] = useState(null);


    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    const abrirModal = (produto) => {
        setProdutoSelecionado(produto);
        setOpenModal(true);
    };

    return (
        <>
            <Sidebar />

            <div className="catalogo-container">
                {/* Modal foda*/}

                <AnimatePresence>
                    {modalData && (
                        <motion.div
                            className="modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setModalData(null)}
                        >
                            <motion.div
                                className="modal-content"
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.85, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 180 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="close-btn"
                                    onClick={() => setModalData(null)}
                                >
                                    ✕
                                </button>

                                <img
                                    src={modalData.image}
                                    alt={modalData.title}
                                    className="modal-image"
                                />

                                <h2>{modalData.title}</h2>
                                <p>{modalData.description}</p>



                                <div className="sizes">
                                    <p className="title">Tamanho</p>

                                    <div className="options">

                                        <div>
                                        <input type="radio" name="size" id="pp" />
                                        <label htmlFor="pp">18cm</label>
                                        </div>


                                        <div>
                                        <input type="radio" name="size" id="p" />
                                        <label htmlFor="p">22cm</label>
                                        </div>

                                        <div>

                                        <input type="radio" name="size" id="m" />
                                        <label htmlFor="m">25cm</label>
                                        </div>

                                    
                                    </div>
                                </div>



                                <span className="modal-price">
                                    {modalData.price}
                                </span>

                                <button className="modal-confirm">
                                    Adicionar ao carrinho
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div className="catalogobanner">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Catálogo
                    </motion.h1>

                    <motion.svg
                        initial={{ y: -100 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 2, type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0.3 }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#e6d6ff"
                            fillOpacity="1"
                            d="M0,128L48,144C96,160,192,192,288,213.3C384,235,480,245,576,229.3C672,213,768,171,864,170.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        />
                    </motion.svg>
                </motion.div>


                <div className="section-title">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeIn", delay: 2.0 }}
                        viewport={{ once: true, amount: 0.3 }}



                    >
                        Flash Tattoos
                    </motion.h1>
                </div>


                <motion.div className="produtos">




                    <Slider {...settings}>

                        <motion.div
                            className="produtos-box"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div className="image-box">
                                <img src="/img/art1.png" alt="Art" />
                            </motion.div>

                            <div className="descricao">
                                <h1>A Lua - Coleção de Tarot</h1>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #a020f0" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="ghostcat-btn-cart"
                                    onClick={() =>
                                        setModalData({
                                            title: "A Lua - Coleção de Tarot",
                                            image: "/img/art1.png",
                                            description: "Flash tattoo mística inspirada no tarot.",
                                            price: "R$ 120,00",
                                        })
                                    }
                                >
                                    <ShoppingCart size={18} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.15, boxShadow: "0 0 12px #ff2e80" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="ghostcat-btn-heart"
                                >
                                    <Heart size={18} />
                                </motion.button>
                            </div>
                        </motion.div>


                        <motion.div
                            className="produtos-box"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeIn" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div className="image-box">
                                <img src="/img/art2.png" alt="Art" />
                            </motion.div>

                            <div className="descricao">
                                <h1>Misterious hand</h1>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #a020f0" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="ghostcat-btn-cart"
                                >
                                    <ShoppingCart size={18} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.15, boxShadow: "0 0 12px #ff2e80" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="ghostcat-btn-heart"
                                >
                                    <Heart size={18} />
                                </motion.button>
                            </div>
                        </motion.div>


                        <motion.div
                            className="produtos-box"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeIn" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div className="image-box">
                                <img src="/img/art3.png" alt="Art" />
                            </motion.div>

                            <div className="descricao">
                                <h1>Ghostface</h1>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #a020f0" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="ghostcat-btn-cart"
                                >
                                    <ShoppingCart size={18} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.15, boxShadow: "0 0 12px #ff2e80" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="ghostcat-btn-heart"
                                >
                                    <Heart size={18} />
                                </motion.button>
                            </div>
                        </motion.div>


                        <motion.div
                            className="produtos-box"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div className="image-box">
                                <img src="/img/art4.png" alt="Art" />
                            </motion.div>

                            <div className="descricao">
                                <h1>A Lua - Coleção de Tarot</h1>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #a020f0" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="ghostcat-btn-cart"
                                >
                                    <ShoppingCart size={18} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.15, boxShadow: "0 0 12px #ff2e80" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="ghostcat-btn-heart"
                                >
                                    <Heart size={18} />
                                </motion.button>
                            </div>
                        </motion.div>


                        <motion.div
                            className="produtos-box"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div className="image-box">
                                <img src="/img/art5.png" alt="Art" />
                            </motion.div>

                            <div className="descricao">
                                <h1>A Lua - Coleção de Tarot</h1>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #a020f0" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="ghostcat-btn-cart"
                                >
                                    <ShoppingCart size={18} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.15, boxShadow: "0 0 12px #ff2e80" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="ghostcat-btn-heart"
                                >
                                    <Heart size={18} />
                                </motion.button>
                            </div>
                        </motion.div>


                        <motion.div
                            className="produtos-box"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div className="image-box">
                                <img src="/img/art6.png" alt="Art" />
                            </motion.div>

                            <div className="descricao">
                                <h1>A Lua - Coleção de Tarot</h1>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #a020f0" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="ghostcat-btn-cart"
                                >
                                    <ShoppingCart size={18} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.15, boxShadow: "0 0 12px #ff2e80" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="ghostcat-btn-heart"
                                >
                                    <Heart size={18} />
                                </motion.button>
                            </div>
                        </motion.div>


                    </Slider>

                </motion.div>

            </div>



        </>
    );
}
