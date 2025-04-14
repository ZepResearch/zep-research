"use client"

import { useState, useEffect } from "react"
import { Book, LogOut, Menu, Sunset, Trees, User, Zap, Settings, MessageSquare } from "lucide-react"
import logox from "../assets/logo.svg"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { getPocketBaseClient, isUserAuthenticated, getCurrentUser } from "@/lib/pocketbase" // Import helper functions

const Navbar1 = ({
  logo = {
    url: "https://www.zepresearch.com",
    src: "https://www.zepresearch.com/images/block/block-1.svg",
    alt: "logo",
    title: "Zepresearch.com",
  },

  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description: "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],

  mobileExtraLinks = [
    { name: "Press", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Imprint", url: "#" },
    { name: "Sitemap", url: "#" },
  ],

  auth = {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Function to check and update auth state
  const checkAuthState = () => {
    const authenticated = isUserAuthenticated()
    // console.log("Auth check:", authenticated, "Current user:", getCurrentUser())
    setIsLoggedIn(authenticated)

    if (authenticated) {
      const user = getCurrentUser()
      // console.log("User data loaded:", user)
      setUserData(user)
    } else {
      setUserData(null)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    // Add a small delay for the initial check to ensure client-side code is fully loaded
    const initialCheckTimeout = setTimeout(() => {
      checkAuthState()
    }, 100)

    // Remove the interval that's causing the loop
    // const intervalId = setInterval(checkAuthState, 1000);

    const handleStorageChange = (event) => {
      if (event.key === "pocketbase_auth") {
        checkAuthState()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    const pb = getPocketBaseClient()
    const unsubscribe = pb.authStore.onChange(() => {
      checkAuthState()
    })

    const handleAuthEvent = () => {
      checkAuthState()
    }

    window.addEventListener("authStateChanged", handleAuthEvent)

    return () => {
      clearTimeout(initialCheckTimeout)
      // clearInterval(intervalId) // Remove this line
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("authStateChanged", handleAuthEvent)
      unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    const pb = getPocketBaseClient()
    pb.authStore.clear()

    // Also clear from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("pocketbase_auth")
    }

    setIsLoggedIn(false)
    setUserData(null)

    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("authStateChanged"))

    // Use client-side navigation instead of full page reload
    window.location.href = "/"
  }

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!userData || !userData.name) return "U"

    const nameParts = userData.name.split(" ")
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
    }
    return userData.name[0].toUpperCase()
  }

  // Use email for name if name is not available
  const getDisplayName = () => {
    if (userData?.name) return userData.name
    if (userData?.email) {
      // Use the part before @ as name
      return userData.email.split("@")[0]
    }
    return "User"
  }

  return (
    <section className="py-4 fixed top-0 left-0 right-0 z-30 shadow-md bg-white">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={"/"} className="flex items-center gap-2">
              <Image src={logox || "/placeholder.svg"} className="w-48" alt={logo.alt} />
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>{menu.map((item) => renderMenuItem(item))}</NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            {isLoading ? (
              // Show a skeleton loader while loading
              <div className="w-[160px] h-9 bg-gray-100 animate-pulse rounded-md"></div>
            ) : isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={
                          userData?.avatar
                            ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${userData.collectionId}/${userData.id}/${userData.avatar}`
                            : ""
                        }
                        alt="Profile"
                      />
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium leading-none">{getDisplayName()}</p>
                    <p className="text-xs leading-none text-muted-foreground">{userData?.email || ""}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <a href="/profile" className="cursor-pointer flex w-full items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/settings" className="cursor-pointer flex w-full items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="outline" size="sm" className="hover:border-cyan-400 px-4">
                  <a href={auth.login.url}>{auth.login.text}</a>
                </Button>
                <Button asChild size="sm" className="bg-gradient-to-tr from-cyan-400 to-blue-500 px-8">
                  <a href={auth.signup.url}>{auth.signup.text}</a>
                </Button>
              </>
            )}
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <Image src={logox || "/placeholder.svg"} className="w-48" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <Image src={logox || "/placeholder.svg"} className="w-48" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {isLoading ? (
                      // Show a skeleton loader while loading
                      <div className="w-full h-20 bg-gray-100 animate-pulse rounded-md"></div>
                    ) : isLoggedIn ? (
                      <>
                        <div className="flex items-center gap-2 p-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={
                                userData?.avatar
                                  ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${userData.collectionId}/${userData.id}/${userData.avatar}`
                                  : ""
                              }
                              alt="Profile"
                            />
                            <AvatarFallback>{getUserInitials()}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <p className="text-sm font-medium">{getDisplayName()}</p>
                            <p className="text-xs text-muted-foreground">{userData?.email || ""}</p>
                          </div>
                        </div>
                        <a href="/profile" className="flex items-center gap-2 rounded-md p-2 hover:bg-muted">
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </a>
                        <a href="/settings" className="flex items-center gap-2 rounded-md p-2 hover:bg-muted">
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </a>
                        <Button variant="destructive" size="sm" className="mt-2" onClick={handleLogout}>
                          <LogOut className="mr-2 h-4 w-4" />
                          Log out
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button asChild variant="outline" size="sm" className="hover:border-cyan-400 px-4">
                          <a href={auth.login.url}>{auth.login.text}</a>
                        </Button>
                        <Button asChild size="sm" className="bg-gradient-to-tr from-cyan-400 to-blue-500 px-8">
                          <a href={auth.signup.url}>{auth.signup.text}</a>
                        </Button>
                      </>
                    )}
                  </div>

                  {/* WhatsApp button for mobile */}
                  <div className="mt-4 flex justify-center">
                    <a
                      href="https://wa.me/917848854815"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600 h-12 w-12">
                        <img src="/whatsapp.png" className="h-12 w-12 text-white" />
                        <span className="sr-only">Contact via WhatsApp</span>
                      </Button>
                      <span className="text-xs font-medium mt-1 text-green-600">Chat with us</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button - Desktop */}
      <div className="fixed right-4 top-2 z-50 hidden lg:flex flex-col items-center">
        <a
          href="https://wa.me/917848854815"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600 h-12 w-12 shadow-lg">
            <img src="/whatsapp.png" className="h-12 w-12 text-white" />
            <span className="sr-only">Contact via WhatsApp</span>
          </Button>
          <span className="text-xs font-medium mt-1 text-green-600">Chat with us</span>
        </a>
      </div>
    </section>
  )
}

// Keep these unchanged
// Keep these unchanged
const renderMenuItem = (item) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className={`p-3 ${item.items.length >= 8 ? "grid grid-cols-2 gap-3 w-[600px]" : "w-80"}`}>
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <a
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-xs font-semibold">{subItem.title}</div>
                      {subItem.description && (
                        <p className="text-xs leading-snug text-muted-foreground">{subItem.description}</p>
                      )}
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </a>
  )
}

const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">{item.title}</AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">{subItem.description}</p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  )
}

export { Navbar1 }
