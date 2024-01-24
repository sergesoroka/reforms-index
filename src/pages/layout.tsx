import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

export default function Layout({ children, metadata }) {
  console.log("L", metadata);

  return (
    <div>
      <Header data={metadata} />
      {children}
      <Footer data={metadata} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.baseURL}/api/settings?lang=${context.locale}`
  );
  const metadata = await res.json();
  console.log(process.env.baseURL);

  return {
    props: {
      metadata,
      baseURL: process.env.baseURL,
    },
  };
}
