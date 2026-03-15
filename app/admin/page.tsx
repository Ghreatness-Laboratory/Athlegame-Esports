import { PageTitle } from '@/components/page-title';

export default function AdminPage() {
  return (
    <div>
      <PageTitle title="Content Management Ready" subtitle="Hook this panel to Sanity, Strapi, or Payload to manage players, achievements, divisions, sponsors, and news." />
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-white/75">Current build uses centralized data files in <code>lib/data.ts</code> for simple editing. Replace with your preferred headless CMS APIs for production admin workflows.</p>
      </div>
    </div>
  );
}
