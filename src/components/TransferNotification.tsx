"use client";
import Image from "next/image";

interface TransferNotificationProps {
  amount: number;
  sender: string;
}

export function TransferNotification({
  amount,
  sender,
}: TransferNotificationProps) {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center gap-2 bg-[#393939] p-4 z-50">
      <Image src="/nubank_white.svg" alt="Nubank" width={35} height={35} />
      <span className="pl-4 text-white text-base">
        Você recebeu uma transferência de R${" "}
        {amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} de{" "}
        {sender}
      </span>
    </div>
  );
}
