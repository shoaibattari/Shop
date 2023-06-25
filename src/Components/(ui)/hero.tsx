import Image from "next/image";
import Hero from "../../../public/hero.jpg";
import Link from "next/link";

export default function hero() {
  return (
    <Link href="/products" className=" animate-pulse">
      <Image src={Hero} width={1200} height={400} alt="Picture " />
    </Link>
  );
}
