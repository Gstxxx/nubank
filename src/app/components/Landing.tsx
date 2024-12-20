import { Suspense } from "react";
import { AccountBalance } from "@/components/AccountBalance";
import { AccountBalanceLoading } from "@/components/loading/AccountBalanceLoading";
import { ItauBalance } from "@/components/ItauBalance";
import { ActionButtons } from "@/components/ActionButtons";
import { CardsSection } from "@/components/CardsSection";
import { InsuranceBanner } from "@/components/InsuranceBanner";
import { UpcomingPayments } from "@/components/UpcomingPayments";

interface LandingProps {
  saldo: number;
  setSaldo: (value: number) => void;
}

export function Landing({ saldo, setSaldo }: LandingProps) {
  return (
    <div className="mt-6 bg-black min-h-screen rounded-t-3xl p-6">
      <Suspense fallback={<AccountBalanceLoading />}>
        <AccountBalance saldo={saldo} />
      </Suspense>
      <ItauBalance />
      <ActionButtons saldo={saldo} setSaldo={setSaldo} />
      <CardsSection />
      <InsuranceBanner />
      <UpcomingPayments />
    </div>
  );
}
