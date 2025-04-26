"use client";

import { useEffect, useState } from "react";
import styles from "./butterfly.module.css";

export default function Butterfly() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.butterfly}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}