import type { GetServerSideProps } from "next";
import Head from "next/head";
import Basket from "../components/Basket";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Product from "../components/Product";

import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import { fetchCategories } from "./utils/fetchCategories";
import { fetchProducts } from "./utils/fetchProducts";

interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null;
}

const Home = ({ categories, products }: Props) => {
  console.log(products);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };

  return (
    <div className="">
      <Head>
        <title>Apple Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Basket />

      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>

          <div>
            <div className="flex justify-center">
              {categories.map((category) => (
                <div
                  key={category._id}
                  id={category._id}
                 
                >
                  {category.title}
                </div>
              ))}
            </div>
            <div className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <div className="tabPanel">{showProducts(0)}</div>
              <div className="tabPanel">{showProducts(1)}</div>
              <div className="tabPanel">{showProducts(2)}</div>
              <div className="tabPanel">{showProducts(3)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Backend Code
export const getServerSideProps: GetServerSideProps = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);

  return {
    props: {
      categories,
      products,
      session,
    },
  };
};