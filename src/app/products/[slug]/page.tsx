import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

// 페이지의 메타데이터를 생성합니다. (SEO를 위해 사용됩니다.)
// 페이지의 제목을 생성합니다.
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  // products.json 중에서 선택한 제품의 정보를 가져옴
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }
  // 서버에 있는 데이터중 해당 제품의 정보를 찾아서 보여줌
  return (
    <>
      <h1>{product?.name} 제품 설명</h1>
      <Image
        src={`/images/${product?.image}`}
        alt={product?.name}
        width={300}
        height={300}
      />
    </>
  );
}

export async function generateStaticParams() {
  //모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줌(SSG 구현)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
