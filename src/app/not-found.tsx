import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-7xl text-st sm:text-8xl">404</h1>
      <p className="text-lg text-balance">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="block py-2 px-5 relative group transition-colors duration-300 hover:text-st hover:[text-shadow:0_0_8px_var(--color-st)]"
      >
        <span className="absolute top-0 left-0 w-2 h-2 border-st border-t-2 border-l-2 transition-all duration-300 ease-out motion-reduce:transition-none group-hover:w-full group-hover:h-full" />
        <span className="absolute right-0 bottom-0 w-2 h-2 border-st border-b-2 border-r-2 transition-all duration-300 ease-out motion-reduce:transition-none group-hover:w-full group-hover:h-full" />
        Volver al inicio
      </Link>
    </main>
  );
}
