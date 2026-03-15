'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { achievements, divisions, players, sponsors } from '@/lib/data';
import { PlayerCard } from '@/components/player-card';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-hero-radial p-10 grid-overlay md:p-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-glow">Athlegame Esports</p>
          <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Nigeria&apos;s Next Generation of Esports Champions</h1>
          <p className="mt-5 text-white/70">Professional Nigerian esports organization focused on competitive mobile gaming and multi-title excellence.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/team" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black">View Team</Link>
            <Link href="/achievements" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold">View Achievements</Link>
            <Link href="/contact" className="rounded-full border border-glow/60 bg-glow/10 px-5 py-3 text-sm font-bold text-glow">Join Us</Link>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {divisions.slice(0, 3).map((division) => (
          <article key={division.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-semibold">{division.name}</h3>
            <p className="mt-2 text-sm text-white/70">{division.description}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-bold">Featured Players</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {players.map((player) => (
            <PlayerCard key={player.tag} player={player} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {achievements.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-4xl font-black text-glow">{item.value}+</p>
            <p className="mt-2 font-semibold">{item.title}</p>
            <p className="text-xs text-white/60">{item.suffix}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-bold">Sponsors / Partners</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {sponsors.map((s) => (
            <span key={s} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70">{s}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
