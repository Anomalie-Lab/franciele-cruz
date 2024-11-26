import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar.component";
import { Providers } from "./providers/providers";
import "@splidejs/react-splide/css";
import Head from "next/head";
import { Html } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  types: string;
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Html lang="pt-BR" suppressHydrationWarning>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="pt-BR" />
        <meta name="theme-color" content="#132226" />
        <link rel="icon" href="/favicon.ico" />
        <title>Franciele Cruz - Advogada</title>
        <meta property="og:title" content="Franciele Cruz - Advogada" />
        <meta property="og:site_name" content="Franciele Cruz - Advogada" />
        <meta property="og:type" content="website" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Fernando Esdras (@esdrasfyy), João Silva (@joajo)" />
        <meta name="description" content="Especialista em Direito Trabalhista e atuante no Direito Civil, Empresarial, Consumidor, Família e Previdenciário" />
        <meta property="og:description" content="Especialista em Direito Trabalhista e atuante no Direito Civil, Empresarial, Consumidor, Família e Previdenciário" />
        <link rel="canonical" href="https:///" />
        <meta property="og:url" content="https:///" />
        <meta
          name="keywords"
          content="Franciele Cruz, advogada, Direito Trabalhista, Direito Civil, Direito do Consumidor, Direito de Família, consultoria jurídica, advocacia online, atendimento jurídico online, resolução de conflitos, advogada em Jundiaí, advogada trabalhista Jundiaí, processo trabalhista, ação de divórcio, direitos do consumidor, acordo trabalhista, advocacia humanizada, confiança, sensibilidade jurídica, atendimento personalizado, consultoria jurídica Brasil, solução de demandas jurídicas, advogada de confiança, consultoria trabalhista, orientação jurídica, Jundiaí, São Paulo, SP, Brasil"
        />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      <Providers>
        <body className={`${inter.className} antialiased`}>
          {children}
          <Navbar />
        </body>
      </Providers>
    </Html>
  );
}
