import Link from "next/link";
import Image from "next/image";

export function PageHero({
  title,
  image,
  crumbs = [],
}: {
  title: string;
  image: string;
  crumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="relative flex h-64 items-center justify-center overflow-hidden sm:h-80">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-white/80">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <span>/</span>
              <Link href={crumb.href} className="hover:text-white">
                {crumb.label}
              </Link>
            </span>
          ))}
          <span>/</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
