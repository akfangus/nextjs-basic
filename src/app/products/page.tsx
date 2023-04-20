import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";

//ISR을 구현하기 위한 코드
// 몇초정도 뒤에 다시 불러오는지 설정
// export const revalidate = 3;

export default async function ProductsPage() {
  //products.json 모든 파일을 읽어옴
  const products = await getProducts();
  //ISR로 만들어진 페이지는 브라우저에서는 캐시를 사용하고
  //
  // const res = await fetch("https://meowfacts.herokuapp.com/", {
  //   next: { revalidate: 3 },
  //   //이것도 가능
  //   // cache:'no-store'
  // });
  // const data = await res.json();
  // const factText = data.data[0];

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
      <MeowArticle />
    </>
  );
}
