import { PageTitle } from '@/components/page-title';
import { achievements, milestones } from '@/lib/data';

export default function AchievementsPage() {
  return (
    <div>
      <PageTitle title="Achievements" subtitle="A record of tournament wins, rankings, player accolades, and competitive milestones." />
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-3xl">🏆</p>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 text-4xl font-black text-glow">{item.value}</p>
            <p className="text-xs text-white/60">{item.suffix}</p>
          </article>
        ))}
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold">Major Timeline</h2>
        <div className="space-y-4">
          {milestones.map((m) => (
            <div key={m.year} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-bold text-glow">{m.year}</p>
              <p className="text-white/75">{m.event}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
