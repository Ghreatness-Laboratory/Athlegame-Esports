export function PageTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-glow">Athlegame Esports</p>
      <h1 className="text-4xl font-extrabold text-white md:text-5xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p>
    </div>
  );
}
