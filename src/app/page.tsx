"use client"


import ClientI18nProvider from "@/components/ClientI18nProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Content from "@/components/content";
import SmartCursor from "@/components/smartCursor";


//import { useTranslation } from 'react-i18next';

export default function Home() {

  //const { t } = useTranslation();
  
  return (
    <>
      <ClientI18nProvider>
        <SmartCursor />
        <Header />
        <Content />
        <Footer />
    </ClientI18nProvider>
    </>
    
  );
}
