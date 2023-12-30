import React from "react";
import Container from "./Container";
import Link from "next/link";
import { Icons } from "./icons";
import NavItems from "./NavItems";
import { buttonVariants } from "../ui/button";
import Cart from "../Cart";
import UserAccountNav from "../UserAccountNav";

const Navbar = () => {
  const user = true;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <Container>
          <div className="border-b border-slate-200">
            <div className="flex h-16 items-center">
              {/* Mobile NAV */}

              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"} className="flex items-center gap-x-2">
                  <Icons.logo className="w-10 h-10" />
                  <h1 className="font-bold">AssetSphere</h1>
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href={"/"}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Login
                    </Link>
                  )}
                  {user ? null : (
                    <span
                      className="h-6 w-px bg-slate-200"
                      aria-hidden="true"
                    />
                  )}
                  {user ? (
                    <UserAccountNav />
                  ) : (
                    <Link
                      href={"/"}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Register
                    </Link>
                  )}

                  {user ? (
                    <span
                      className="h-6 w-px bg-slate-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  {user ? null : (
                    <div className="flex ml-6">
                      <span
                        className="h-6 w-px bg-slate-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Navbar;
