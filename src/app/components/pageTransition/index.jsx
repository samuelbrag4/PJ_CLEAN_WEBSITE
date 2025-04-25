"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Oculta a animação após 0.8 segundos
      if (onComplete) onComplete(); // Chama o callback para notificar o término
    }, 800); // Duração da animação

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, [onComplete]);

  if (!isVisible) return null; // Não renderiza nada se a animação já terminou

  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundColor: "#F05080",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        pointerEvents: "none", // Evita bloquear interações
      }}
    />
  );
}