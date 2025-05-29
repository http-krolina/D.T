import React, { useState, useEffect } from 'react';
import styles from "./Footer.module.css";

// Exportamos o componente funcional tipado com React.FC
export const Footer: React.FC = () => {
  // O estado 'isVisible' é explicitamente tipado como um booleano
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // A função handleScroll é tipada para não retornar nada (void)
  const handleScroll = (): void => {
    // Definimos explicitamente os tipos para as propriedades do DOM
    const scrollTop: number = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight: number = document.documentElement.scrollHeight;
    const clientHeight: number = document.documentElement.clientHeight;

    // Calculamos se o usuário está na parte inferior da página
    const isAtBottom: boolean = (scrollTop + clientHeight) >= (scrollHeight - 5);

    setIsVisible(isAtBottom);
  };

  useEffect(() => {
    // Chamamos handleScroll uma vez para definir o estado inicial
    handleScroll();

    // Adicionamos o event listener para o scroll da janela
    window.addEventListener('scroll', handleScroll);

    // A função de limpeza remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array de dependências vazio significa que o efeito roda uma vez no montagem e uma vez na desmontagem

  return (
    <footer className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.footerContent}>
        <p>Arteiros © 2025</p>
      </div>
    </footer>
  );
};