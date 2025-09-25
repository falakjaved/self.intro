export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-purple-100">
      {/* Header */}
      <header className="w-full bg-purple-200 p-4 flex items-center justify-center relative shadow-md">
        {/* Pic in left corner */}
        <img
          src="/my-pic.jpg"
          alt="My Picture"
          className="w-14 h-14 rounded-full border-2 border-purple-500 shadow absolute left-4 top-2"
        />

        {/* Name in center */}
        <h1 className="text-2xl font-bold text-purple-800">Falak Javed</h1>
      </header>

      {/* About Lines */}
      <section className="flex flex-col items-center justify-start flex-grow p-6 mt-8">
        <p className="text-center text-purple-700 mt-2 max-w-md text-lg">
          Main ek student hoon jo web development seekh raha hai.
        </p>
        <p className="text-center text-purple-700 max-w-md text-lg">
          Mujhe coding aur naye projects banana pasand hai.
        </p>
        <p className="text-center text-purple-700 max-w-md text-lg">
          Mera goal professional developer banna hai.
        </p>
      </section>
    </main>
  );
}
