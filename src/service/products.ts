import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

//비동기는 Promise를 반환하기 때문에 typescript에 Promise를 적고
//그 프로미스가 Product[]를 반환한다고 명시해준다.
const getProducts = async (): Promise<Product[]> => {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

const getProduct = async (id: string): Promise<Product | undefined> => {
  const products = await getProducts();
  return products.find((item) => item.id === id);
};

export { getProducts, getProduct };
