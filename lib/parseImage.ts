const baseUrl = "https://auroralove-pocketbase.fly.dev";

export default function parsePbImage(
  collection: string,
  id: string,
  image: string
) {
  return `${baseUrl}/api/files/${collection}/${id}/${image}`;
}
