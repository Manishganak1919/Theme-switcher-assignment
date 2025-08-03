import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setTheme } from "../redux/slices/themeSlice";
import { useNavigate } from "react-router-dom";
import { themeClasses, ThemeType } from "../constants/themeClasses";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value as ThemeType));
    setMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { text, font } = themeClasses[currentTheme];

  // Manual theme handling
  const getThemeStyles = {
    background:
      currentTheme === "theme2"
        ? "bg-gray-900"
        : currentTheme === "theme3"
        ? "bg-blue-50"
        : "bg-gray-50",
    border:
      currentTheme === "theme2"
        ? "border-gray-700"
        : currentTheme === "theme3"
        ? "border-blue-200"
        : "border-gray-200",
    selectBg: currentTheme === "theme2" ? "bg-gray-800" : "bg-white",
    selectBorder:
      currentTheme === "theme2" ? "border-gray-700" : "border-gray-300",
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b shadow-sm ${
        getThemeStyles.background
      } ${isScrolled ? "py-2" : "py-3 md:py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Responsive sizing */}
          <div
            className={`text-lg md:text-xl font-bold ${text} ${font} flex items-center cursor-pointer`}
            onClick={() => handleNavigation("/")}
          >
            <span className="hidden sm:inline">ThemeSwitcher</span>
            <span className="sm:hidden">TS</span>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <nav className="flex space-x-4 lg:space-x-6">
              <button
                onClick={() => handleNavigation("/")}
                className={`${text} px-2 py-1 lg:px-3 lg:py-2 rounded-md text-sm font-medium hover:underline`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className={`${text} px-2 py-1 lg:px-3 lg:py-2 rounded-md text-sm font-medium hover:underline`}
              >
                Contacts
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className={`${text} px-2 py-1 lg:px-3 lg:py-2 rounded-md text-sm font-medium hover:underline`}
              >
                About
              </button>
            </nav>

            <select
              value={currentTheme}
              onChange={handleThemeChange}
              className={`rounded-md px-2 py-1 lg:px-3 lg:py-2 text-xs lg:text-sm focus:outline-none ${text} ${font} ${getThemeStyles.selectBg} border ${getThemeStyles.selectBorder} hover:cursor-pointer`}
            >
              <option value="default">Default</option>
              <option value="theme2">Dark</option>
              <option value="theme3">Blue</option>
            </select>
          </div>

          {/* Mobile Menu Toggle - Visible only on mobile */}
          <div className="md:hidden flex items-center space-x-3">
            <select
              value={currentTheme}
              onChange={handleThemeChange}
              className={`rounded-md px-2 py-1 text-xs focus:outline-none ${text} ${font} ${getThemeStyles.selectBg} border ${getThemeStyles.selectBorder} hover:cursor-pointer`}
            >
              <option value="default">Default</option>
              <option value="theme2">Dark</option>
              <option value="theme3">Blue</option>
            </select>
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-2xl ${text} focus:outline-none`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Appears below header when toggled */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden mt-3 pb-3 space-y-2 border-t ${getThemeStyles.border} pt-3`}
          >
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavigation("/")}
                className={`${text} px-3 py-2 rounded-md text-base font-medium text-left`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className={`${text} px-3 py-2 rounded-md text-base font-medium text-left`}
              >
                Contacts
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className={`${text} px-3 py-2 rounded-md text-base font-medium text-left`}
              >
                About
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
