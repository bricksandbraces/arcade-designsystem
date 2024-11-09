export type EffectStyle = {
  name: string;
  layers: {
    type: string;
    color: string;
    position: {
      x: number;
      y: number;
    };
    blur: number;
    spread: number;
    blendMode: string;
  }[];
};

const effectStyles: EffectStyle[] = [
  {
    name: "Focus",
    layers: [
      {
        type: "drop-shadow",
        color: "var(--color-border-focus-03)",
        position: { x: 0, y: 0 },
        blur: 0,
        spread: 1,
        blendMode: "normal"
      },
      {
        type: "drop-shadow",
        color: "var(--color-border-focus-02)",
        position: { x: 0, y: 0 },
        blur: 0,
        spread: 3,
        blendMode: "normal"
      },
      {
        type: "drop-shadow",
        color: "rgba(51, 170, 255, 20)",
        position: { x: 0, y: 0 },
        blur: 0,
        spread: 6,
        blendMode: "normal"
      }
    ]
  },
  {
    name: "Shadow",
    layers: [
      {
        type: "drop-shadow",
        color: "var(--color-shadow)",
        position: { x: 0, y: 4 },
        blur: 8,
        spread: 0,
        blendMode: "normal"
      }
    ]
  },
  {
    name: "Subtle",
    layers: [
      {
        type: "drop-shadow",
        color: "var(--color-shadow)",
        position: { x: 0, y: 2 },
        blur: 4,
        spread: 0,
        blendMode: "normal"
      }
    ]
  },
  {
    name: "Subtlest",
    layers: [
      {
        type: "drop-shadow",
        color: "var(--color-shadow)",
        position: { x: 0, y: 0.5 },
        blur: 2,
        spread: 0,
        blendMode: "normal"
      }
    ]
  }
];

export function getEffectStyleProperties(effectStyle: EffectStyle): {
  [key: string]: string;
} {
  const cssProperties: { [key: string]: string } = {};
  const boxShadows: string[] = [];
  const filters: string[] = [];

  effectStyle.layers.forEach((layer) => {
    const { type, color, position, blur, spread } = layer;
    const shadowValue = `${position.x}px ${position.y}px ${blur}px ${spread}px ${color}`;

    if (type === "drop-shadow") {
      boxShadows.push(shadowValue);
    }
  });

  if (boxShadows.length > 0) {
    cssProperties.boxShadow = boxShadows.join(", ");
  }

  if (filters.length > 0) {
    cssProperties.filter = filters.join(" ");
  }

  return cssProperties;
}

export default effectStyles;
