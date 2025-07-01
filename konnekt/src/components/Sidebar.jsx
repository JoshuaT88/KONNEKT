export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 h-screen">
      <h2 className="text-2xl font-bold mb-6">KONNEKT</h2>
      <ul className="space-y-2">
        <li className="hover:text-teal-400 cursor-pointer"># general</li>
        <li className="hover:text-teal-400 cursor-pointer"># random</li>
        <li className="hover:text-teal-400 cursor-pointer">GIFs 🎉</li>
      </ul>
    </div>
  )
}
