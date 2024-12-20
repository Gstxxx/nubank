"use client";
import Image from "next/image";

export function ItauBalance() {
  return (
    <div className="flex items-center gap-3 mt-6 ">
      <div className="bg-[#1E1E1E] rounded-full p-2 flex items-center gap-3">
        <Image
          src="/itau.png"
          alt="Itau"
          width={24}
          height={24}
          className="rounded-full p-1 bg-orange-400"
        />
        <span className="text-white text-xl">R$ 124,00</span>
      </div>
    </div>
  );
}
