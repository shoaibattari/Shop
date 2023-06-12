import Image from "next/image";
import Hero from "../../public/hero.jpg";
import Link from "next/link";

export default function hero() {
  return (
    <Link href="/products">
      <Image src={Hero} width={1200} height={500} alt="Picture " />
    </Link>
  );
}
