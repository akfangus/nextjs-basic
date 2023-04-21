import Image from "next/image";
import { Inter } from "next/font/google";
import Counter from "@/components/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // 서버컴포넌트에서는 상태값 관련 안됨.
  // const [name, setName] = useState("홍길동");
  return (
    <>
      <h1>홈화면 입니다.</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={500}
        height={500}
      />
    </>
  );
}
