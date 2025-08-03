"use client";

import { themes } from "@/constants";
import useTheme from "@/hooks/useTheme";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { theme, changeTheme } = useTheme();

  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const themeDropdownMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const toggleDropdown = (): void => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const openDropdown = (): void => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = (): void => {
    setIsDropdownOpen(false);
  };

  const handleThemeSelect = (theme: string): void => {
    changeTheme(theme);
    closeDropdown();
  };

  const openMobileMenu = (): void => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (): void => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="desktop-menu">
          {/* Logo/Brand */}
          <div className="brand-logo-container">
            <Image
              src="/logo.png"
              alt="Logo"
              width={20}
              height={0}
              className="w-10 h-auto"
            />
            <span>Theme Switcher</span>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu-container">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>

            {/* Theme Dropdown */}
            <div className="dropdown" ref={themeDropdownRef}>
              <button
                className="nav-link theme-dropdown"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                <span>
                  {themes.find((t) => theme.includes(t.id))?.label ||
                    "Unknown Theme"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                ref={themeDropdownMenuRef}
                className={`menu-items-outer-container ${
                  isDropdownOpen ? "menu-open" : "menu-closed"
                }`}
              >
                <div className="menu-items-inner-container">
                  {themes.map((theme) => (
                    <a
                      href="#"
                      className={`theme-option ${theme.class}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleThemeSelect(theme.id);
                      }}
                      key={theme.id}
                    >
                      <div>
                        <div />
                        <span>{theme.label}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="hamburger-button-container">
            <button className="hamburger-button" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-inner">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

            {/* Mobile Theme Options */}
            <div className="mobile-theme-options">
              <p>Theme</p>
              {themes.map((theme) => (
                <a
                  href="#"
                  className={`theme-option ${theme.class}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleThemeSelect(theme.id);
                  }}
                  key={theme.id}
                >
                  <div>
                    <div />
                    <span>{theme.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
