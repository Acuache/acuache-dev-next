export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,255,153,0.15),transparent_55%)]">
      <div className="border-t border-white/5 bg-transparent">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-6 text-xs text-white/60 md:flex-row md:justify-between">
          <p>© {year} Michael Acuache.</p>
          <p className="flex items-center gap-1 text-white/60 text-center">
            Diseñado con enfoque en detalle, accesibilidad y rendimiento.
          </p>
        </div>
      </div>
    </footer>
  );
}
