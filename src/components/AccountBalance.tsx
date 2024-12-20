"use client";

interface AccountBalanceProps {
  saldo: number;
}

export function AccountBalance({ saldo }: AccountBalanceProps) {
  return (
    <div className="text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Saldo em conta</h2>
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <p className="text-4xl mt-2 font-bold">
        R$ {saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </p>
    </div>
  );
}
