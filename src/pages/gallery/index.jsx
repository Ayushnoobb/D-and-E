import React from "react";


function Gallery({data}) {
  console.log(data)
  let  product = data.products || [];
  return (
    <>
    {
      product.map(pro => {
        return(
          <div key={pro.id}>
            {pro.id}
            {pro.title}
          </div>
        )
      })
    }
    </>
  );
}
export default Gallery;

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()

  return {
    props: {
        data
    },
  };
}
