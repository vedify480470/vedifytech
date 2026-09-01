import type { CSSProperties } from "react";

export interface FoldTextProps {
  text?: string;
  splitBy?: "char" | "word" | "line";
  hinge?: "top" | "bottom" | "left" | "right";
  duration?: number;
  stagger?: number;
  ease?: string;
  perspective?: number;
  creaseShading?: number;
  trigger?: "mount" | "hover" | "scroll" | "loop";
  fontSize?: number | string;
  fontWeight?: number | string;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

declare const FoldText: (props: FoldTextProps) => JSX.Element;
export default FoldText;
