"use client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import Routes from "./routes";
import { ThemeProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      "font-primary": "black",
      "background-color": "#F8F8FF",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      "font-primary": "white",
      "background-color": "linear-gradient(45deg, #1a202c -20%, #2d3748 100%)",
    },
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider
        defaultTheme="darkTheme"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </NextUIProvider>
      </ThemeProvider>
    </>
  );
}
