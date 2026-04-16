export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-teal-300">
        Belizely
      </h1>

      <p className="mt-4 text-zinc-400 max-w-md">
        Build and book your entire Belize experience in one place — hotels, islands, cayes, and adventures.
      </p>

      <a
        href="/explore"
        className="mt-8 bg-teal-400 text-black px-6 py-3 rounded-xl font-bold"
      >
        Start Exploring
      </a>
    </div>
  );
}