import Aside from "@/component/aside/aside";
import { data } from "autoprefixer";
import React from "react";

function Gallery({ data }) {
  // console.log(data)

  let product = data.products || [];
  return (
    <section className="gallery bg-yellow-gradient">
      <div className="container gallery__container flex">
        <Aside data={data} />
        <main>
          <ul className="products grid grid-cols-3" data-active="all-product">
            {product.map((pro) => {

              return (
                <>
                  <li
                    key={pro.id}
                    className="product relative m-10 flex  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-2xl"
                  >
                    <a
                      className="relative w-full block  h-60 overflow-hidden mx-0"
                      href={`/gallery/${pro.id}`}
                    >
                      <img
                        className="object-cover img-fluid"
                        src={pro.images[0]}
                        alt="product image"
                      />
                      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        {pro.discountPercentage}% OFF
                      </span>
                    </a>
                    <div className="mt-4 px-5 pb-5">
                      <h5 className="text-xl tracking-tight text-slate-900">
                        {pro.title}
                      </h5>
                      <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                          <span className="text-3xl font-bold text-slate-900">
                            ${pro.price}
                          </span>
                        </p>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((element, index) => {
                            if (index < (pro.rating > Math.floor(pro.rating) + 0.5 ? Math.ceil(pro.rating) : Math.floor(pro.rating))) {
                              return (
                                <svg
                                key={index}
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4 text-red-500"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                              );
                            } else {
                              return (
                                <svg
                                  key={index}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  className="w-4 h-4 text-red-500"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                              );
                            }
                          })}
                        
                          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                            {pro.rating > Math.floor(pro.rating) + 0.5 
                              ? Math.ceil(pro.rating)
                              : Math.floor(pro.rating)}
                          </span>
                        </div>
                      </div>
                      <a href="#" className="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>Add to cart</span>
                      </a>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </main>
      </div>
    </section>
  );
}

export default Gallery;

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
