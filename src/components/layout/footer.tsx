import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { schoolInfo, navLinks } from '@/lib/data';
import { Logo } from '@/components/icons/logo';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className={className}
    >
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
    </svg>
  );
}

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
            <li>
              <a 
                href="https://fmis-portal-946169281162.us-west1.run.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-background/70 hover:text-secondary transition-colors"
              >
                School Portal
              </a>
            </li>
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
               <a href={`tel:${schoolInfo.phone2}`} className="hover:text-secondary transition-colors">
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
            <a href="https://www.facebook.com/share/17k1iAxWAh/" aria-label="Facebook" className="text-background/70 hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/@fmis_schoolstm?_r=1&_t=ZS-917dbAqMz8T" aria-label="TikTok" className="text-background/70 hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
              <TikTokIcon className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/fmis_schools?igsh=MWV1OTQ0ZmtybHRwYw%3D%3D&utm_source=qr" aria-label="Instagram" className="text-background/70 hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
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
