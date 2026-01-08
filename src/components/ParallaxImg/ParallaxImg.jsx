import React, { useState, useEffect } from 'react';

function ScrollingImage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Remove o listener ao desmontar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '300vh', position: 'relative', overflow: 'hidden' }}> {/* Container alto para scroll; overflow hidden para evitar barras extras */}
      <img
        src="/img/icon.png" // Substitua pela URL da sua imagem
        alt="Imagem que se move"
        style={{

          top: '50%', // Centraliza verticalmente
          left: '0', // Começa à esquerda
          transform: `translate(${scrollY * 0.5}px, -50%)`, // Move para a direita com scroll; -50% para centralizar verticalmente
          transition: 'none', // Remove transição para movimento suave sem delay
          zIndex: 10, // Garante que fique acima de outros elementos
        }}
      />
      {/* Adicione conteúdo aqui para testar o scroll */}
      <div style={{ paddingTop: '100vh', textAlign: 'center' }}>
        <p>Rolagem para baixo para ver a imagem se mover para a direita.</p>
        <p>Continue rolando...</p>
        <p>Mais conteúdo aqui...</p>
      </div>
    </div>
  );
}

export default ScrollingImage;