export default function Header() {
  return (
    <div className="flex items-center gap-3 mb-2">
      <svg
        className="w-7 h-7 text-gray-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="15" x2="16" y2="15" />
      </svg>
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
        To-Do List
      </h1>
    </div>
  );
}
