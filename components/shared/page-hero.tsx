import Link from "next/link";
import Image from "next/image";

export function PageHero({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <section className="relative flex h-64 items-center justify-center overflow-hidden sm:h-80">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-white/80">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
