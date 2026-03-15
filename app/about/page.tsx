import { PageTitle } from '@/components/page-title';
import { milestones } from '@/lib/data';

export default function AboutPage() {
  return (
    <div>
      <PageTitle
        title="About Athlegame"
        subtitle="Built in Nigeria, designed for global esports dominance through disciplined rosters, modern infrastructure, and fan-first culture."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">Organization Overview</h2>
          <p className="mt-3 text-white/70">Athlegame Esports is a professional Nigerian organization competing across mobile and tactical titles with performance, branding, and player development at its core.</p>
          <h3 className="mt-5 text-lg font-semibold">Mission</h3>
          <p className="mt-2 text-white/70">Develop championship-caliber teams and elevate Nigerian esports internationally.</p>
          <h3 className="mt-5 text-lg font-semibold">Vision</h3>
          <p className="mt-2 text-white/70">Become Africa&apos;s benchmark for elite competitive gaming ecosystems.</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">Core Values</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/70">
            <li>Discipline and consistent high performance.</li>
            <li>Team synergy, respect, and accountability.</li>
            <li>Innovation in strategy and fan engagement.</li>
            <li>Community impact in Nigerian esports.</li>
          </ul>
          <p className="mt-4 text-white/70">A recent merger expanded coaching depth and strengthened the roster in all active divisions.</p>
        </article>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Milestones Timeline</h2>
        <div className="mt-5 space-y-4 border-l border-white/20 pl-6">
          {milestones.map((item) => (
            <div key={item.year} className="relative rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="absolute -left-[34px] top-5 h-3 w-3 rounded-full bg-glow" />
              <p className="text-sm font-bold text-glow">{item.year}</p>
              <p className="text-white/80">{item.event}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
