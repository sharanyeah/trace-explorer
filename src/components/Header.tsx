import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link2, Menu, Shield, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Statistics", href: "#stats" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-button">
                <Link2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl text-foreground">TraceX</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                Blockchain for Justice
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Shield className="w-4 h-4 mr-1" />
              Admin
            </Button>
            <Button variant="wallet" size="default">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-strong border-t border-border"
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full">
                <Shield className="w-4 h-4 mr-2" />
                Admin
              </Button>
              <Button variant="wallet" className="w-full">
                Connect Wallet
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
