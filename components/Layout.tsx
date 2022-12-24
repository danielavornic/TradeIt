import React from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { PlusButton } from "./PlusButton";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  hasNavbar?: boolean;
}

export const Layout = ({
  children,
  title,
  description,
  hasNavbar = true,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={description || "Barter up your stuff"}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      {hasNavbar && <Navbar />}

      <Box
        px={4}
        style={{ minHeight: "calc(100vh - 161px)" }}
        bg='whiteAlpha.900'
        pt={4}
      >
        {children}
      </Box>

      <PlusButton />
    </>
  );
};
