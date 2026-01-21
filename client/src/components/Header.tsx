import { useState, useEffect } from "react";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", to: "home" },
    { name: "Giới thiệu", to: "about" },
    { name: "Dịch vụ", to: "services" },
    { name: "Bảng giá", to: "pricing" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-width flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="bg-primary rounded-lg p-2 text-white">
            <Sparkles size={24} fill="currentColor" />
          </div>
          <div className="leading-tight">
            <h1 className="font-display font-bold text-xl text-primary tracking-tight">CLEAN <span className="text-secondary">PRO</span></h1>
            <p className="text-[10px] text-muted-foreground font-semibold tracking-wider uppercase">Vệ sinh công nghiệp</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-sm font-semibold text-foreground/80 hover:text-primary cursor-pointer transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:0912553748" className="flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors">
            <Phone size={18} />
            <span>0912.553.748</span>
          </a>
          <Link to="booking" smooth={true} duration={500}>
            <Button className="rounded-full px-6 font-bold bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 hover:shadow-secondary/30 transition-all">
              Đặt lịch ngay
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-width py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold py-2 border-b border-gray-50 text-foreground/80 active:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a href="tel:0912553748" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 font-bold text-primary">
                  <Phone size={18} />
                  0912.553.748
                </a>
                <Link to="booking" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-xl py-6 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white">
                    Đặt lịch ngay
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
