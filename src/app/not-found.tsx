import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="mt-[50px] flex h-[70vh] w-full flex-col items-center justify-center px-5 md:mt-[91px] xl:px-0">
      <h2
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      ></h2>
      <button className="mt-[20px] h-[40px] w-[200px] rounded-2xl bg-secondary-500 font-semibold text-white">
        <Link
          className="inline-block h-full w-full place-content-center text-center"
          href={"/"}
        ></Link>
      </button>
    </div>
  );
}
