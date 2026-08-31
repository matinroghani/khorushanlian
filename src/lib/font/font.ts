import localFont from "next/font/local";

export const yekan = localFont({
  src: [
    {
      path: "../../../public/fonts/YekanBakhFaNum-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
});
