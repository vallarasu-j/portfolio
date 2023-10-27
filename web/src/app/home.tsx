"use client";
import { styled } from "@nextui-org/react";
import { HomeLayout } from "./layouts/homeLayout";
import {useTheme} from 'next-themes';
import { Hero } from "./components/hero";
import { AboutMe } from "./components/about";
import { Services } from "./components/services";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export const Box = styled("div", {
  boxSizing: "border-box",
});

export const Home = () => {
  
  const {theme, setTheme} = useTheme();

  return (
    <div>
      <HomeLayout>
        <Hero />
        <AboutMe />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </HomeLayout>
    </div>
  );
};
