"use client";
export function CardsSection() {
  return (
    <div className="mt-8 bg-[#1E1E1E] rounded-xl p-4 flex items-center gap-3">
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
      <span className="text-white text-xl">Meus cartões</span>
    </div>
  );
}
