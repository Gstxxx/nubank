"use client";
import { Plus, User, HelpCircle, Eye } from "lucide-react";

interface TopNavigationProps {
  name: string;
}

export function TopNavigation({ name }: TopNavigationProps) {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#9B30C9] rounded-full flex items-center justify-center">
          <Plus className="text-white w-6 h-6" />
        </div>
        <span className="text-white text-lg">Olá, {name}</span>
      </div>
      <div className="flex items-center gap-6">
        <Eye className="text-white w-6 h-6" />
        <HelpCircle className="text-white w-6 h-6" />
        <User className="text-white w-6 h-6" />
      </div>
    </div>
  );
}
