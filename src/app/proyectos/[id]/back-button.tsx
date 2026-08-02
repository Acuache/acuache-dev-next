"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Ir hacia atrás"
      className="mt-10 cursor-pointer hover:text-st"
    >
      <ArrowLeft className="size-8" />
    </button>
  );
}
