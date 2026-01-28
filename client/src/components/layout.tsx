import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/images/logo.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src={logo} alt="Abhayam Transchem" className="h-12 w-auto" />
              <div className="hidden md:block">
                <h1 className="font-heading font-bold text-xl text-primary leading-none">ABHAYAM</h1>
                <p className="text-xs tracking-widest text-muted-foreground">TRANSCHEM</p>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white absolute w-full left-0 top-20 shadow-lg animate-in slide-in-from-top-2">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium p-2 hover:bg-muted rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src={logo} alt="Logo" className="h-10 w-auto brightness-0 invert" />
                <div>
                  <h3 className="font-heading font-bold text-lg leading-none text-white">ABHAYAM</h3>
                  <p className="text-[10px] tracking-widest text-slate-400">TRANSCHEM</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Industrial Chemical Trading & Supply. Focused on reliability, compliance, and long-term partnerships.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="/#capabilities" className="hover:text-white transition-colors">How We Work</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><Link href="/solvents"><a className="hover:text-white transition-colors">Solvents Catalog</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  <span>Gujarat, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <span>+91 9377611150</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <span>info@abhayamtranschem.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Abhayam Transchem. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
