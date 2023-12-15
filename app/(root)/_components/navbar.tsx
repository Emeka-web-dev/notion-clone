"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

function Navbar() {
  const {isAuthenticated, isLoading} = useConvexAuth()
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0  w-full ",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="flex items-center max-w-6xl w-full mx-auto px-6 py-4">
        <Logo />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
         {isLoading && (
          <Spinner />
         )}
         {(!isAuthenticated && !isLoading) && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size="sm">
                  Get Notion free
                </Button>
              </SignInButton>
            </>
         )}
         {(isAuthenticated && !isLoading) && (
          <>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documents">
              Enter Notion
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/"/>
          </>
         )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
