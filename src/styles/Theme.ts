const COLORS = {
  BACKGROUND_WHITE: "#F5F5F5",
  CONTAINER_WHITE: "#FFFFFF",
  BLACK: "#3C3C3C",
  LINE_GRAY: "#C1C1C1",

  MAIN_ORANGE: "#FF9136",
  BRIGHT_ORANGE: "#E89925",
  HIGHLIGHT_ORANGE: "#E86025",
  FONT_YELLOW: "#E89925",

  WARNING_RED: "#FF4B29",
  CONFORM_BLUE: "#296FFF",
} as const;

const FONT_SIZE = {
  TINY_SMALL: "1rem",
  EXTRA_SMALL: "1.2rem",
  SMALL: "1.4rem",
  MEDIUM: "1.6rem",
  LARGE: "1.8rem",
  EXTRA_LARGE: "2.4rem",
} as const;

const theme = {
  COLORS,
  FONT_SIZE,
};

export default theme;
