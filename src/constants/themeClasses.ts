export type ThemeType = "default" | "theme2" | "theme3";

export const themeClasses: Record<
  ThemeType,
  {
    background: string;
    text: string;
    font: string;
    button: string;
    card: string;
  }
> = {
  default: {
    background: "bg-gradient-subtle",
    text: "text-gray-800",
    font: "font-sans",
    button: "bg-blue-600 hover:bg-blue-700",
    card: "bg-white dark:bg-gray-800",
  },
  theme2: {
    background: "bg-gradient-to-br from-gray-900 to-black",
    text: "text-white",
    font: "font-mono",
    button: "bg-purple-600 hover:bg-purple-700",
    card: "bg-gray-800",
  },
  theme3: {
    background: "bg-gradient-to-br from-blue-50 to-blue-100",
    text: "text-blue-900",
    font: "font-serif",
    button: "bg-teal-600 hover:bg-teal-700",
    card: "bg-blue-50",
  },
};
