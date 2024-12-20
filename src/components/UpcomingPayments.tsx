"use client";
export function UpcomingPayments() {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl">Próximos 7 dias</h2>
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-[#2E2E2E] rounded-full" />
          <div className="w-8 h-8 bg-[#2E2E2E] rounded-full" />
        </div>
      </div>
      <p className="text-white text-3xl font-medium mt-2">R$ 875,85</p>
    </div>
  );
}
