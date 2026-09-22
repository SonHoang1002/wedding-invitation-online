export type ElementType = "text" | "image" | "shape";

export interface CanvasElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  content?: string; // Text content or Image URL
  styles: {
    backgroundColor?: string;
    color?: string;
    fontSize?: number;
    fontFamily?: string;
    borderRadius?: number;
    opacity?: number;
  };
}
