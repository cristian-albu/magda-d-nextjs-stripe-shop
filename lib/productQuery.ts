import { Record } from "pocketbase";
import parsePbImage from "./parseImage";
import pb from "./pocketBaseClient";

export default async function productQuery() {
  const coll = "products";

  const items = await Promise.all([
    pb.collection(coll).getOne("eeobqth7cwnmdz6"),
    pb.collection(coll).getOne("h7sqi6yvvkt3tpa"),
    pb.collection(coll).getOne("8y6s7pcqsd7cmei"),
    pb.collection(coll).getOne("bo4csinm3dmxu8q"),
  ]);

  const data: ProductList = items.map((item: Record) => ({
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

  const item_ebook = data[0];
  const item_hardcover = data[1];
  const item_ebook_en = data[2];
  const item_hardcover_en = data[3];

  return [item_ebook, item_hardcover, item_ebook_en, item_hardcover_en];
}
