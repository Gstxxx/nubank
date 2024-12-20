"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginProps {
  onLogin: (name: string, saldo: number) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [inputName, setInputName] = useState("");
  const [inputSaldo, setInputSaldo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputName.trim()) {
      localStorage.setItem("userName", inputName.trim());
      localStorage.setItem("userSaldo", inputSaldo);
      onLogin(inputName.trim(), Number(inputSaldo));
    }
  };

  return (
    <div className="min-h-screen bg-[#8A05BE] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Bem-vindo ao Nubank
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Seu nome
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="saldo"
                className="text-sm font-medium text-gray-700"
              >
                Seu saldo
              </label>
              <Input
                id="saldo"
                type="number"
                step="0.01"
                placeholder="Digite seu saldo"
                value={inputSaldo}
                onChange={(e) => setInputSaldo(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
