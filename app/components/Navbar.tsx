'use client'

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [lang, setLang] = React.useState<"ID" | "EN">("ID")

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
              <Link href="#fitur">Fitur</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="group inline-flex h-8 w-max items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10"
            >
              <Link href="/jastiper">Jastip</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 gap-1 px-3 py-1 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
                >
                  Tentang
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem className="text-sm">About Us</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">Contact</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">Privacy Policy</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        <div className="hidden text-xs font-medium text-white md:flex">
          <button
            onClick={() => setLang("ID")}
            className={`px-1 ${lang === "ID" ? "text-white" : "text-white/70 hover:text-white"}`}
          >
            ID
          </button>
          <span className="text-white/70">|</span>
          <button
            onClick={() => setLang("EN")}
            className={`px-1 ${lang === "EN" ? "text-white" : "text-white/70 hover:text-white"}`}
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