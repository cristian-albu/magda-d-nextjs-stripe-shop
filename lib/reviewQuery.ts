import { Record } from "pocketbase";
import pb from "./pocketBaseClient";

export default async function reviewQuery() {
    const items = await pb.collection("reviews").getFullList({
        sort: "-order",
    });

    const reviews: ReviewList = items.map((item: Record) => ({
        id: item.id,
        name: item.name,
        review_en: item.review_en,
        review_ro: item.review_ro,
        order: item.order,
    }));

    return reviews;
}
