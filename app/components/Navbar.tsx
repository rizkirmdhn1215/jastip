'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useLanguage } from '@/app/context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const navItems = {
    ID: {
      home: "Beranda",
      jastip: "Jastip",
      about: "Tentang",
      features: "Fitur"
    },
    EN: {
      home: "Home",
      jastip: "Services",
      about: "About",
      features: "Features"
    }
  };

  return (
    <header className="flex h-16 w-full items-center justify-between bg-[#F04B4B] px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="Jastipinja Logo"
          width={150}
          height={40}
          priority
        />
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10"
            >
              <Link href="/">{navItems[language].home}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10"
            >
              <Link href="/jastiper">{navItems[language].jastip}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10"
            >
              <Link href="/fitur">{navItems[language].features}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const footer = document.getElementById('footer');
                  if (footer) {
                    const startPosition = window.pageYOffset;
                    const targetPosition = footer.offsetTop;
                    const distance = targetPosition - startPosition;
                    const duration = 1000; // Duration in milliseconds
                    let start: number | null = null;

                    function animation(currentTime: number) {
                      if (start === null) start = currentTime;
                      const timeElapsed = currentTime - start;
                      const run = ease(timeElapsed, startPosition, distance, duration);
                      window.scrollTo(0, run);
                      if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                      }
                    }

                    function ease(t: number, b: number, c: number, d: number) {
                      t /= d / 2;
                      if (t < 1) return c / 2 * t * t + b;
                      t--;
                      return -c / 2 * (t * (t - 2) - 1) + b;
                    }

                    requestAnimationFrame(animation);
                  }
                }}
              >
                {navItems[language].about}
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        <div className="hidden text-xs font-medium text-white md:flex">
          <button
            onClick={() => setLanguage("ID")}
            className={`px-1 ${language === "ID" ? "text-white" : "text-white/70 hover:text-white"}`}
          >
            ID
          </button>
          <span className="text-white/70">|</span>
          <button
            onClick={() => setLanguage("EN")}
            className={`px-1 ${language === "EN" ? "text-white" : "text-white/70 hover:text-white"}`}
          >
            EN
          </button>
        </div>
        <Button
          className="rounded-full bg-white px-6 text-sm font-medium text-[#F04B4B] hover:bg-white/90"
          size="sm"
        >
          Download
        </Button>
      </div>
    </header>
  )
} 