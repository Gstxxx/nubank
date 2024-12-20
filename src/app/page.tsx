"use client";

import { Login } from "./components/Login";
import { useState } from "react";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { StatusBar } from "@/components/StatusBar";
import { TopNavigation } from "@/components/TopNavigation";
import { Landing } from "./components/Landing";

export default function Home() {
  const [name, setName] = useState<string | null>(null);
  const [saldo, setSaldo] = useState<number>(0);
  const handleLogin = async (newName: string, newSaldo: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setName(newName);
    setSaldo(newSaldo);
  };

  return (
    <>
      {name === null ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="min-h-screen bg-[#8A05BE]">
          <StatusBar />
          <TopNavigation name={name} />
          <Landing saldo={saldo} setSaldo={setSaldo} />
        </div>
      )}
      <ToastProvider>
        <ToastViewport className="fixed top-0 left-0 right-0 flex flex-col items-center gap-2 p-4 z-50" />
      </ToastProvider>
    </>
  );
}
