'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Player = {
  tag: string;
  division: string;
  nationality: string;
  role: string;
  rating: number;
  image: string;
  stats: { aim: number; strategy: number; reflex: number; teamwork: number; clutch: number };
};

export function PlayerCard({ player }: { player: Player }) {
  const stats = Object.entries(player.stats);

  return (
    <motion.div className="group [perspective:1200px]" whileHover={{ scale: 1.02 }}>
      <div className="relative h-[430px] w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-4 shadow-neon [backface-visibility:hidden]">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">{player.rating} OVR</span>
            <span className="text-xs text-white/70">{player.division}</span>
          </div>
          <Image src={player.image} alt={player.tag} width={500} height={300} className="h-60 w-full rounded-xl object-cover" />
          <h3 className="mt-4 text-2xl font-bold text-white">{player.tag}</h3>
          <p className="text-sm text-white/70">{player.role} • {player.nationality}</p>
        </div>

        <div className="absolute inset-0 rounded-2xl border border-glow/30 bg-black p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-xl font-bold text-white">Skill Ratings</h3>
          <div className="mt-4 space-y-3">
            {stats.map(([name, value]) => (
              <div key={name}>
                <div className="mb-1 flex justify-between text-xs uppercase text-white/70">
                  <span>{name}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-glow" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
