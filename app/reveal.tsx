"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "./userReveal";
import styles from "./WeddingInvite.module.css";

type Direction = "fade" | "left" | "right";

interface RevealProps {
  as?: ElementType;
  direction?: Direction;
  /** ms — tăng dần khi phần tử càng nằm phía dưới để tạo hiệu ứng so le */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export default function Reveal({
  as: Tag = "div",
  direction = "fade",
  delay = 0,
  className = "",
  style,
  children,
}: RevealProps) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      // Reveal bọc nhiều loại thẻ (div, h3...) nên ref được ép kiểu chung
      ref={ref as never}
      className={[
        styles.reveal,
        styles[`reveal--${direction}`],
        visible ? styles["is-visible"] : "",
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}