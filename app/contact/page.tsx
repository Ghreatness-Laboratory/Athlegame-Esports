import { PageTitle } from '@/components/page-title';

const inquiryTypes = ['Player Application', 'Tournament Organizer', 'Sponsorship', 'Media', 'Other'];

export default function ContactPage() {
  return (
    <div>
      <PageTitle title="Contact" subtitle="Reach Athlegame Esports for roster opportunities, events, sponsorships, and media collaborations." />
      <div className="grid gap-8 md:grid-cols-2">
        <form className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <input placeholder="Name" className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-3" />
          <input type="email" placeholder="Email" className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-3" />
          <input placeholder="Organization" className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-3" />
          <select className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-3">
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <textarea placeholder="Message" rows={5} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-3" />
          <button type="submit" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black">Send Message</button>
        </form>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Direct Channels</h2>
          <p className="mt-3 text-white/70">Email: hello@athlegame.gg</p>
          <p className="text-white/70">Location: Lagos, Nigeria</p>
          <p className="mt-6 text-white/70">Social: X, Instagram, YouTube, TikTok</p>
        </div>
      </div>
    </div>
  );
}
