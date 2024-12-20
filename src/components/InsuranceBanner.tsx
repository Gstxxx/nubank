"use client";
export function InsuranceBanner() {
  return (
    <div className="mt-4 bg-[#1E1E1E] rounded-xl p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white text-xl">
            Nubank Vida: seguro a partir de
          </h3>
          <p className="text-white text-xl mt-1">R$4/mês.</p>
        </div>
        <div className="w-12 h-12 bg-[#2E2E2E] rounded-full flex items-center justify-center">
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-1 mt-4 justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-white opacity-50" />
        <div className="w-2 h-2 rounded-full bg-white opacity-50" />
      </div>
    </div>
  );
}
