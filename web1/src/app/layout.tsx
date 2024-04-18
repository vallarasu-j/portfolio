"use client"; 

import { useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container, Loading, Text } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading ? <PageLoader /> : children}
      </body>
    </html>
  );
}

const PageLoader = () => {
  return (
    <Container
      justify="center"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loading type="spinner" size="lg" />
    </Container>
  );
};
