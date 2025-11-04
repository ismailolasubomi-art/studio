import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { schoolInfo, navLinks } from '@/lib/data';
import { Logo } from '@/components/icons/logo';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo width={160} height={40} className="h-10 text-primary filter-invert" />
          </Link>
          <p className="text-sm text-background/70">
            {schoolInfo.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-background/70 hover:text-secondary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-headline font-semibold mb-4">Contact Us</h3>
          <address className="not-italic text-sm space-y-2 text-background/70">
            <p>{schoolInfo.address}</p>
            <p>
              <a href={`tel:${schoolInfo.phone}`} className="hover:text-secondary transition-colors">
                {schoolInfo.phone}
              </a>
              <br />
               <a href={`tel:${schoolInfo.phone2}`} className="hovertext-secondary transition-colors">
                {schoolInfo.phone2}
              </a>
            </p>
            <p>
              <a href={`mailto:${schoolInfo.email}`} className="hover:text-secondary transition-colors">
                {schoolInfo.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-background/70 hover:text-secondary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-background/70 hover:text-secondary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-background/70 hover:text-secondary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-background/10 text-background/50">
        <div className="container py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} {schoolInfo.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
