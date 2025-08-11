"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Leaf } from "lucide-react";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./navbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Contact", link: "/contact" },
];

// Custom NavItems with active state indicators
const EnviroNavItems = ({ pathname }: { pathname: string }) => {
  return (
    <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex lg:space-x-1">
      {navItems.map((item, idx) => {
        const isActive = pathname === item.link;
        return (
          <a
            key={`link-${idx}`}
            href={item.link}
            className="relative px-4 py-2 transition-colors duration-300"
          >
            {isActive && (
              <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-600 shadow-sm" />
            )}
            <span className={`relative z-20 text-body transition-colors duration-300 ${isActive ? 'text-green-800 font-semibold' : 'text-black hover:text-green-700'}`}>
              {item.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

// Custom Enviro Logo Component
export const EnviroLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-3 px-2 py-1 text-sm font-normal"
    >
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg">
        <Leaf className="h-5 w-5 text-white" />
      </div>
      <div>
        <span className="text-heading-2 text-heading text-black">
          Enviro
        </span>
        <div className="text-caption text-body text-gray-700 font-medium tracking-wider">DAIRY EXPORTS</div>
      </div>
    </a>
  );
};

export function EnviroNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <Navbar className="fixed inset-x-0 top-0 z-50 w-full">
      {/* Desktop Navigation */}
      <NavBody>
        <EnviroLogo />
        <EnviroNavItems pathname={pathname} />
        <NavbarButton 
          href="/contact" 
          variant="gradient"
          className="rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 hover:scale-105"
        >
          Get Premium Quote
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <EnviroLogo />
          <MobileNavToggle isOpen={isOpen} onClick={toggleMobileMenu} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={closeMobileMenu}>
          {navItems.map((item, idx) => {
            const isActive = pathname === item.link;
            return (
              <a
                key={idx}
                href={item.link}
                className={`block transition-colors duration-300 text-body-lg relative px-4 py-2 rounded-full ${
                  isActive 
                    ? 'text-green-800 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-600 font-semibold shadow-sm' 
                    : 'text-black hover:text-green-700 hover:bg-gray-50'
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
            );
          })}
          <NavbarButton 
            href="/contact" 
            variant="gradient"
            className="w-full rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 py-3 hover:scale-105"
          >
            Get Premium Quote
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
