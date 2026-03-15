import { PageTitle } from '@/components/page-title';
import { divisions } from '@/lib/data';

export default function DivisionsPage() {
  return (
    <div>
      <PageTitle title="Divisions" subtitle="Seven active divisions with specialized rosters, title-specific strategies, and measurable results." />
      <div className="grid gap-5 md:grid-cols-2">
        {divisions.map((division) => (
          <article key={division.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6">
            <h3 className="text-2xl font-bold">{division.name}</h3>
            <p className="mt-3 text-white/70">{division.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/65">
              {division.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
