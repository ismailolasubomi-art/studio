'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Download } from 'lucide-react';
import React from 'react';

import { navLinks, schoolInfo } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/icons/logo';
import { DownloadCodeDialog } from '@/components/download-code-dialog';

export function Header() {
  const pathname = usePathname();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 's') {
        setIsDialogOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo width={32} height={32} className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block font-headline">
              {schoolInfo.shortName}
            </span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="hidden md:flex md:gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-foreground/60'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-2">
               <Button onClick={() => setIsDialogOpen(true)}>Download Code <Download className="ml-2 h-4 w-4" /></Button>
               <Button asChild>
                  <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="mb-8 flex items-center">
                   <Logo width={32} height={32} className="h-8 w-8 mr-2" />
                   <span className="font-bold font-headline">{schoolInfo.shortName}</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                         pathname === link.href ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Button onClick={() => setIsDialogOpen(true)} className="mt-4">Download Code <Download className="ml-2 h-4 w-4" /></Button>
                   <Button asChild>
                      <Link href="/admissions">Apply Now</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <DownloadCodeDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
