import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { schoolInfo, navLinks } from '@/lib/data';
import { Logo } from '@/components/icons/logo';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M22.98,9.782,20.21,11.2a2.02,2.02,0,0,1-1.33-2.131V4.76a2.02,2.02,0,0,1,1.33-2.131l2.77-1.422a1,1,0,0,1,1.23.957V8.825A1,1,0,0,1,22.98,9.782Z"></path>
      <path d="M15.869,9.745a4.52,4.52,0,0,1-1.12-1.328,4.37,4.37,0,0,1-.535-2.012,4.24,4.24,0,0,1,.1-.861,4.42,4.42,0,0,1,.3-.742,4.5,4.5,0,0,1,.5-.644,4.43,4.43,0,0,1,.7-.521,4.5,4.5,0,0,1,.8-.392,4.42,4.42,0,0,1,1-.252,4.36,4.36,0,0,1,.6.056v3.1a1.29,1.29,0,0,0-.4-.056,1.48,1.48,0,0,0-.5.069,1.41,1.41,0,0,0-.4.153,1.52,1.52,0,0,0-.3.252,1.4,1.4,0,0,0-.2.345,1.46,1.46,0,0,0-.1.432,1.52,1.52,0,0,0,.05.424,1.43,1.43,0,0,0,.15.378,1.47,1.47,0,0,0,.2.3,1.49,1.49,0,0,0,.3.221,1.44,1.44,0,0,0,.4.124,1.28,1.28,0,0,0,.4.042V14.59a4.5,4.5,0,0,1-.8.392,4.43,4.43,0,0,1-.7.521,4.5,4.5,0,0,1-.5.644,4.42,4.42,0,0,1-.3.742,4.24,4.24,0,0,1-.1.861,4.37,4.37,0,0,1,.535,2.012,4.52,4.52,0,0,1,1.12,1.328,4.37,4.37,0,0,1,1.3,1.129,4.45,4.45,0,0,1,.5,1.5,10.15,10.15,0,0,1,0,2.949,4.4,4.4,0,0,1-.54,1.5,4.56,4.56,0,0,1-1.3,1.131,4.48,4.48,0,0,1-1.8,1.011,4.35,4.35,0,0,1-2.1.337,4.4,4.4,0,0,1-2.09-.337,4.48,4.48,0,0,1-1.8-1.011,4.56,4.56,0,0,1-1.3-1.131,4.4,4.4,0,0,1-.54-1.5,10.15,10.15,0,0,1,0-2.949,4.5,4.5,0,0,1,.53-1.5A4.47,4.47,0,0,1,4.1,13.12a4.4,4.4,0,0,1,1.8-1.011A4.25,4.25,0,0,1,8,11.772a4.34,4.34,0,0,1,2.08.337A4.42,4.42,0,0,1,11.89,13.12a4.39,4.39,0,0,1,1.3,1.131,4.5,4.5,0,0,1,.53,1.5v-3.8A4.5,4.5,0,0,1,15.869,9.745Z"></path>
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
