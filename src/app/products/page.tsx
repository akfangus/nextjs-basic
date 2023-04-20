import { getProducts } from "@/service/products";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getProducts();

  //서버 파일에 있는 제품 리스트를 읽어와서 불러옴(DB)
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
