import type { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-2xl xs:text-4xl sm:text-5xl mt-16 mb-8">
      {children}
    </h2>
  );
}
