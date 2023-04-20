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

export default function PantsPage({ params }: Props) {
  return <h1>{params.slug} 제품 설명</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
