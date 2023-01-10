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

  FILTER_GRAY:
    "brightness(0) saturate(100%) invert(73%) sepia(52%) saturate(1%) hue-rotate(256deg) brightness(95%) contrast(93%)",
  FILTER_ORANGE:
    "brightness(0) saturate(100%) invert(65%) sepia(57%) saturate(1112%) hue-rotate(332deg) brightness(100%) contrast(107%)",
  FILTER_RED:
    "brightness(0) saturate(100%) invert(36%) sepia(61%) saturate(2418%) hue-rotate(344deg) brightness(101%) contrast(101%)",
} as const;

const FONT_SIZE = {
  EXTRA_SMALL_SIZE: "2.5rem",
  SMALL_SIZE: "3rem",
  MAIN_SIZE: "4.2rem",
  SUB_TITLE_SIZE: "4rem",
  TITLE_SIZE: "4.8rem",
} as const;

const FONT_WEIGHT = {
  DEFAULT: 400,
  BOLD: 600,
} as const;

const theme = {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
};

export default theme;
