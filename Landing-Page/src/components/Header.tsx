import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface navItemsObj{
  name: string,
  href: string
}

const navItems:navItemsObj[] = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `transition-colors hover:text-foreground/80 ${
                  isActive ? "text-foreground" : "text-foreground/60"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function Header() {
  return (
    <div className="md:w-max-[75%] w-max-[90vw] flex justify-center mb-5 my-5">
      <div className="static top-2 bg-white bg-opacity-40 backdrop-blur-md border-b border-white border-opacity-20 shadow-lg rounded-full h-auto">
        <header className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <NavLink to="/">
                <img src="https://avatars.githubusercontent.com/u/169580113?s=200&v=4" className="md:w-[3vw]
                max-w-[10vw] rounded-full font-bold mr-9" />
              </NavLink>
            </div>

            <nav className="hidden md:flex md:space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `transition-colors hover:text-foreground/80 ${
                      isActive ? "text-foreground" : "text-foreground/60"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center space-x-4 ml-5">
              <MobileNav />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}