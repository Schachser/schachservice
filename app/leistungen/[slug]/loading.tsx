export default function ServiceLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="relative min-h-[92vh] bg-[#07111F] flex items-center pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="h-3 w-24 rounded-full bg-white/10 mb-6" />
          <div className="h-4 w-32 rounded-full bg-gold/20 mb-5" />
          <div className="h-14 w-2/3 rounded-xl bg-white/10 mb-4" />
          <div className="h-14 w-1/2 rounded-xl bg-white/8 mb-10" />
          <div className="flex gap-4">
            <div className="h-12 w-44 rounded-xl bg-gold/20" />
            <div className="h-12 w-44 rounded-xl bg-white/10" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            <div className="h-3 w-28 rounded-full bg-navy/10" />
            <div className="h-7 w-48 rounded-lg bg-navy/10" />
            <div className="h-4 w-full rounded bg-navy/6" />
            <div className="h-4 w-5/6 rounded bg-navy/6" />
            <div className="h-4 w-4/6 rounded bg-navy/6" />
          </div>
          <div className="space-y-3">
            <div className="h-3 w-28 rounded-full bg-navy/10" />
            <div className="h-7 w-40 rounded-lg bg-navy/10" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-full rounded bg-navy/6" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
