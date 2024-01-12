import Head from "next/head";

const MetaData = ({ data }) => {
  return (

              <Head>
          <title>{data.meta.title}</title>
          <meta name="description" content={data.meta.description}/>
          <meta itemProp="name" content={data.meta.title}/>
          <meta itemProp="description"
                content={data.meta.description}/>
          <meta itemProp="image" content={data.meta.image}/>
          {/*<meta property="og:url" content="https://voxukraine.org/yak-prozorro-market-polegshuye-zakupivli"/>*/}
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={data.meta.title}/>
          <meta property="og:description"
                content={data.meta.description}/>
          <meta property="og:image"
                content={data.meta.image}/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={data.meta.title}/>
          <meta name="twitter:description"
                content={data.meta.description}/>
          <meta name="twitter:image"
                content={data.meta.image}/>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
          />
          <link rel="icon" href="/favicon.ico" />
              </Head>


  );
};

export default MetaData;