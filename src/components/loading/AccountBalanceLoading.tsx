export function AccountBalanceLoading() {
  return (
    <div className="text-white">
      <div className="flex items-center justify-between">
        <div className="h-8 w-40 bg-gray-600 rounded animate-pulse" />
        <div className="w-6 h-6 bg-gray-600 rounded animate-pulse" />
      </div>
      <div className="h-12 w-64 bg-gray-600 rounded animate-pulse mt-2" />
    </div>
  );
}
