"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { TransferNotification } from "@/components/TransferNotification";

interface ActionButtonsProps {
  saldo: number;
  setSaldo: (value: number) => void;
}

export function ActionButtons({ saldo, setSaldo }: ActionButtonsProps) {
  return (
    <div className="grid grid-cols-5 gap-4 mt-8">
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setSaldo(saldo + 500);
          toast({
            description: (
              <TransferNotification amount={500} sender="Célio Raggi" />
            ),
          });
        }}
        className="flex flex-col items-center gap-2"
      >
        <div className="w-16 h-16 rounded-full bg-[#1E1E1E] flex items-center justify-center">
          <Image
            src="/pix.svg"
            alt="Pix"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <span className="text-white text-center text-sm">Área Pix</span>
      </Link>
      <Link href="#" className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-[#1E1E1E] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <span className="text-white text-center text-sm">Pagar</span>
      </Link>
      <Link href="#" className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-[#1E1E1E] flex items-center justify-center relative">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="absolute -bottom-1 text-xs bg-[#8A05BE] px-2 py-0.5 rounded-full text-white">
            FGTS
          </div>
        </div>
        <span className="text-white text-center text-sm">Pegar emprest</span>
      </Link>
      <Link href="#" className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-[#1E1E1E] flex items-center justify-center relative">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <div className="absolute -bottom-1 text-xs bg-[#8A05BE] px-2 py-0.5 rounded-full text-white">
            Descontos
          </div>
        </div>
        <span className="text-white text-center text-sm">Ajuda financeir</span>
      </Link>
      <Link href="#" className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-[#1E1E1E] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <span className="text-white text-center text-sm">
          Recarga de celular
        </span>
      </Link>
    </div>
  );
}
