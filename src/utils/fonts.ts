import localFont from "next/font/local";
import { NextFont } from "next/dist/compiled/@next/font";

export const yekan: NextFont = localFont({
    src: [
      {
        path: "../../public/fonts/YekanBakh-Light.woff2",
        weight: "100",
        style: "nornal"
      },
      {
        path: "../../public/fonts/YekanBakh-Regular.woff2",
        weight: "200",
        style: "nornal"
      },
      {
        path: "../../public/fonts/YekanBakh-Bold.woff2",
        weight: "400",
        style: "nornal"
      },
      {
        path: "../../public/fonts/YekanBakh-Heavy.woff2",
        weight: "600",
        style: "nornal"
      },
      {
        path: "../../public/fonts/YekanBakh-Fat.woff2",
        weight: "700",
        style: "nornal"
      },
    ]
  })