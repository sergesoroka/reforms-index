import Head from "next/head";

const MetaData = ({ data }) => {
  return (
    <Head>
      <title>{data.meta.title}</title>
      <meta name="description" content={data.meta.description} />
      <meta itemProp="name" content={data.meta.title} />
      <meta itemProp="description" content={data.meta.description} />
      <meta itemProp="image" content={data.meta.image} />
      {/* <meta property="og:url" content={window.location.href} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.meta.title} />
      <meta property="og:description" content={data.meta.description} />
      <meta property="og:image" content={data.meta.image} />
      <meta property="og:image:type" content="png" />
      <meta property="og:image:width" content="630" />
      <meta property="og:image:height" content="331" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.meta.title} />
      <meta name="twitter:description" content={data.meta.description} />
      <meta name="twitter:image" content={data.meta.image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="canonical" href={window.location.href} /> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaData;
