import React from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const Layout = ({ children, title, description }: LayoutProps) => {
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

      <main>{children}</main>
    </>
  );
};
