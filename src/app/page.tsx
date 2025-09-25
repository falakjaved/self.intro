export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-6">
      {/* Pic + Name row */}
      <div className="flex items-center gap-4">
        {/* Profile Pic */}
        <img
          src="/my-pic.jpg"
          alt="My Picture"
          className="w-32 h-32 rounded-full shadow-lg"
        />

        {/* Name */}
        <h1 className="text-3xl font-bold text-purple-800">Falak Javed</h1>
      </div>

      {/* About Lines */}
      <p className="text-center text-purple-700 mt-6 max-w-md">
        Main ek student hoon jo web development seekh rahi hai.
      </p>
      <p className="text-center text-purple-700 max-w-md">
        Mujhe coding aur naye projects banana pasand hai.
      </p>
      <p className="text-center text-purple-700 max-w-md">
        Mera goal professional developer banna hai.
      </p>
    </main>
  );
}
