const colors = {
  primary: {
    base: "rgb(111, 156, 235)",
    lighten: "rgb(152, 185, 242)",
    "darken-1": "rgb(48, 107, 172)",
    "darken-2": "rgb(18, 47, 102)",
    "opacity-5": "rgba(111, 156, 235, 0.5)",
  },
  secondary: {
    base: "rgb(145, 142, 244)",
  },
  background: {
    base: "rgb(0, 07, 25)",
    "background-lighten-1": "rgb(20, 27, 65)",
    "background-lighten-2": "rgb(10, 17, 45);",
  },
  white: {
    base: "rgb(240, 240, 240)",
  },
  black: {
    base: "rgb(33, 33, 33)",
  },
};

const sizes = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "32px",
  8: "40px",
  9: "48px",
  10: "64px",
};

const transitions = {
  1: "all 0.3s ease-in-out",
};

export const keyToColor = (colorName) => {
  const values = JSON.parse(JSON.stringify(colors));

  const color = colorName.split("-").shift() || "black";
  const variant = colorName.split("-").slice(1).join("-") || "base";
  return values[color][variant];
};

const theme = {
  colors,
  sizes,
  transitions,
};

export default theme;
