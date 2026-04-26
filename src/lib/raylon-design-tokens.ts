export const raylonDesignTokens = {
  color: {
    black: "#0d0d0d",
    white: "#ffffff",
    whiteAlpha: {
      100: "rgb(255 255 255)",
      74: "rgb(255 255 255 / 74%)",
      70: "rgb(255 255 255 / 70%)",
      60: "rgb(255 255 255 / 60%)",
      50: "rgb(255 255 255 / 50%)",
      25: "rgb(255 255 255 / 25%)",
      14: "rgb(255 255 255 / 14%)",
      10: "rgb(255 255 255 / 10%)",
      8: "rgb(255 255 255 / 8%)",
      6: "rgb(255 255 255 / 6%)",
      5: "rgb(255 255 255 / 5%)",
    },
    surface: {
      strong: "#141414",
      soft: "#1d1c1e",
      elevated: "#272727",
      raised: "#161616",
    },
    gradientStops: [
      "#ff00c1",
      "#f200ff",
      "#7a00f4",
      "#0c00ea",
      "#005ee3",
      "#0dbfd7",
      "#19cd88",
      "#24c231",
      "#76b82f",
      "#ae9c2c",
      "#b1532a",
      "#b72727",
      "#ff0000",
    ],
  },
  typography: {
    heading: {
      "01": { fontSize: "60px", lineHeight: "68px", letterSpacing: "-1px", fontWeight: 500 },
      "02": { fontSize: "52px", lineHeight: "60px", letterSpacing: "-1px", fontWeight: 500 },
      "03": { fontSize: "40px", lineHeight: "48px", letterSpacing: "-1px", fontWeight: 500 },
      "04": { fontSize: "32px", lineHeight: "40px", letterSpacing: "-1px", fontWeight: 500 },
      "05": { fontSize: "24px", lineHeight: "32px", letterSpacing: "-1px", fontWeight: 500 },
      "06": { fontSize: "20px", lineHeight: "28px", letterSpacing: "-1px", fontWeight: 500 },
    },
    body: {
      large: { fontSize: "16px", lineHeight: "24px", letterSpacing: "0", fontWeight: 400 },
      largeMedium: { fontSize: "16px", lineHeight: "24px", letterSpacing: "0", fontWeight: 500 },
      largeSemibold: { fontSize: "16px", lineHeight: "24px", letterSpacing: "0", fontWeight: 600 },
      small: { fontSize: "14px", lineHeight: "22px", letterSpacing: "0", fontWeight: 400 },
      smallSemibold: { fontSize: "14px", lineHeight: "22px", letterSpacing: "0", fontWeight: 600 },
    },
  },
  radius: {
    pill: "100px",
    buttonSmall: "7px",
  },
  shadow: {
    buttonInset: "inset 0 0 24px rgb(255 255 255 / 25%)",
    buttonInsetSoft: "inset 0 0 24px rgb(255 255 255 / 5%)",
    buttonLight: "0 4px 14px rgb(0 0 0 / 25%)",
  },
  motion: {
    buttonDuration: "650ms",
    standardEasing: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
} as const;

export type RaylonDesignTokens = typeof raylonDesignTokens;
export type RaylonHeadingToken = keyof typeof raylonDesignTokens.typography.heading;
export type RaylonBodyToken = keyof typeof raylonDesignTokens.typography.body;
