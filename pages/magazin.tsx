// import multipleProductsQuery from "@/lib/multipleProductsQuery";
// import parsePbImage from "@/lib/parseImage";
// import pb from "@/lib/pocketBaseClient";
// import {
//   GetServerSideProps,
//   InferGetServerSidePropsType,
//   NextPage,
// } from "next";
// import { Record } from "pocketbase";
// import React from "react";

// const Shop: NextPage<
//   InferGetServerSidePropsType<typeof getServerSideProps>
// > = ({ res }) => {
//   console.log(res);
//   return <div>Shop</div>;
// };

// export default Shop;

// export const getServerSideProps = async () => {
//   try {
//     const coll = "products";
//     const [resRo, resEn] = await Promise.all([
//       pb.collection(coll).getList(1, 50, { filter: `english = false` }),
//       pb.collection(coll).getList(1, 50, { filter: `english = true` }),
//     ]);

//     const itemRo = resRo.items.map((item: Record) => ({
//       id: item.id,
//       title: item.title,
//       slug: item.slug,
//       price: item.price,
//       summary: item.summary,
//       stock: item.stock,
//       digital: item.productTypeDigital,
//       image: parsePbImage(coll, item.id, item.image),
//       quantity: 0,
//     }));
//     return {
//       props: { res },
//     };
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//     return {
//       props: { item_ebook: null, item_hardcover: null },
//     };
//   }
// };

import React from "react";

const Magazin = () => {
  return <div>Magazin</div>;
};

export default Magazin;
