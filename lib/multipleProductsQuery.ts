import { Record } from "pocketbase";
import parsePbImage from "./parseImage";
import pb from "@/lib/pocketBaseClient";

export const multipleProductsQuery = async () => {
  const coll = "products";

  const [res, resEn] = await Promise.all([
    pb.collection(coll).getOne("eeobqth7cwnmdz6"),
    pb.collection(coll).getOne("eeobqth7cwnmdz6"),
  ]);

  const parseData = (data: Record[]) => {
    const parsedData: ProductList = data.map((item: Record) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      price: item.price,
      summary: item.summary,
      stock: item.stock,
      digital: item.productTypeDigital,
      image: parsePbImage(coll, item.id, item.image),
      quantity: 0,
    }));

    return parsedData;
  };

  const itemsRo = res;
  const itemsEn = resEn;

  return { itemsRo, itemsEn };
};

export default multipleProductsQuery;
