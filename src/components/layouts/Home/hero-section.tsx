function BackgroundEffects() {
  return (
    <>
      {/* Glow blobs */}
      <div className="absolute right-[-100px] top-[-100px] h-[600px] w-[600px] rounded-full bg-black/80 blur-[120px]" />
      <div className="absolute bottom-[-100px] left-[-100px] h-[300px] w-[300px] bg-black/70 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[100px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40" />
    </>
  );
}
export default function HomePage() {
  return (
    <main className="relative mx-auto mt-20 flex items-center justify-center overflow-hidden rounded-3xl bg-white px-20 py-[250px] text-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundEffects />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1 className="mb-6 text-5xl font-semibold">
          One-click for Asset <span className="text-gray-600">Defense</span>
        </h1>

        <p className="mb-10 text-gray-600">
          Dive into the art assets, where innovative blockchain technology meets
          financial expertise
        </p>

        <div className="flex justify-center gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-black">
            Open App
          </button>
          <button className="rounded-full border border-black/20 bg-black px-6 py-3 text-white">
            Discover More
          </button>
        </div>
      </div>
    </main>
  );
}
