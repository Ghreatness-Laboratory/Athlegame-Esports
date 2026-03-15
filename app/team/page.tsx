import { PageTitle } from '@/components/page-title';
import { PlayerCard } from '@/components/player-card';
import { players } from '@/lib/data';

export default function TeamPage() {
  const grouped = Object.entries(players.reduce<Record<string, typeof players>>((acc, player) => {
    if (!acc[player.division]) acc[player.division] = [];
    acc[player.division].push(player);
    return acc;
  }, {}));

  return (
    <div>
      <PageTitle title="Team Roster" subtitle="FIFA-inspired player cards with performance attributes, division data, and role-based specialization." />
      <div className="space-y-10">
        {grouped.map(([division, divisionPlayers]) => (
          <section key={division}>
            <h2 className="mb-5 text-2xl font-bold text-glow">{division}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {divisionPlayers.map((player) => (
                <PlayerCard key={player.tag} player={player} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
