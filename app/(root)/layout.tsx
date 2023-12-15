import React, { ReactNode } from "react";
import Navbar from "./_components/navbar";

type LayoutProps = {
  children: ReactNode;
};

function layout({ children }: LayoutProps) {
  return (
    <div className="overflow-x-hidden dark:bg-[#1f1f1f]">
        <Navbar />
      <main className="pt-32">{children}</main>
    </div>
  );
}

export default layout;
