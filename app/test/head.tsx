async function getData() {
  const res = await fetch("https://vox-imore.ra-devs.tech/api/pages?lang=ua");
  if (!res.ok) {
    throw new Error("Failed to fetch data.data[0]");
  }

  return res.json();
}

export default async function Head() {
  const data = await getData();
  // console.log(data);

  return (
    <>
      <title>{data.data[0].meta.title}</title>
      <title>{data.data[0].meta.title}</title>
      <meta name="description" content={data.data[0].meta.description} />
      <meta itemProp="name" content={data.data[0].meta.title} />
      <meta itemProp="description" content={data.data[0].meta.description} />
      <meta itemProp="image" content={data.data[0].meta.image} />
      {/* <meta property="og:url" content={window.location.href} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.data[0].meta.title} />
      <meta property="og:description" content={data.data[0].meta.description} />
      <meta property="og:image" content={data.data[0].meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.data[0].meta.title} />
      <meta
        name="twitter:description"
        content={data.data[0].meta.description}
      />
      <meta name="twitter:image" content={data.data[0].meta.image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="canonical" href={window.location.href} /> */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
