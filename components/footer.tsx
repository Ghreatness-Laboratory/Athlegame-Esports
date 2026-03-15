export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/70">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-white">Athlegame Esports</h3>
          <p className="mt-2 text-sm text-white/70">Elite Nigerian esports organization across mobile and PC titles.</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Connect</h3>
          <p className="mt-2 text-sm text-white/70">hello@athlegame.gg</p>
          <p className="text-sm text-white/70">Lagos, Nigeria</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Social</h3>
          <p className="mt-2 text-sm text-white/70">X / Instagram / TikTok / YouTube</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} Athlegame Esports. All rights reserved.</p>
    </footer>
  );
}
