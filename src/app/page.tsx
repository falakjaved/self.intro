export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Profile Pic */}
      <img
        src="/my-pic.jpg"
        alt="My Picture"
        className="w-32 h-32 rounded-full shadow-lg"
      />

      {/* Name */}
      <h1 className="text-3xl font-bold mt-4">Aapka Naam</h1>

      {/* About Lines */}
      <p className="text-center text-gray-700 mt-2 max-w-md">
        Main ek student hoon jo web development seekh raha hai.
      </p>
      <p className="text-center text-gray-700 max-w-md">
        Mujhe coding aur naye projects banana pasand hai.
      </p>
      <p className="text-center text-gray-700 max-w-md">
        Mera goal professional developer banna hai.
      </p>
    </main>
  );
}
