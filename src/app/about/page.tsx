import Image from 'next/image';
import type { Metadata } from 'next';

import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { about, getPlaceholderImage, schoolInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about the mission, vision, and values of Fahad Memorial Int'l School.`,
};

function HeroSection() {
    return (
        <section className="relative h-[60vh] w-full flex items-center justify-center text-center text-white">
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/studio-6593612663-293d1.firebasestorage.app/o/WhatsApp%20Image%202025-11-01%20at%2019.16.56.jpeg?alt=media&token=7d14122a-2185-4e12-856f-5170a217669d"
                alt="About Fahad Memorial International School"
                fill
                className="object-cover"
                priority
                data-ai-hint="school students assembly"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 container px-4">
                <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">
                    About Our School
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    A tradition of excellence and a future of innovation.
                </p>
            </div>
        </section>
    );
}

export default function AboutPage() {
  const principalImage = getPlaceholderImage('about-principal');
  const proprietressImage = getPlaceholderImage('about-proprietress');

  return (
    <>
      <HeroSection />

    <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-3xl font-bold font-headline text-foreground">About Fahad Memorial International School</h2>
              <p className="text-muted-foreground leading-relaxed">
               Since January 13, 1996, Fahad Memorial International School has stood as a beacon of educational excellence in Bachirawa, Kano. Located opposite Maryam S. Dantata's Mosque along Katsina Road, our institution has dedicated nearly three decades to shaping young minds through quality education rooted in our core values of knowledge and discipline.
              </p>
               <p className="text-muted-foreground leading-relaxed">
               We provide comprehensive education across Primary and Secondary levels, creating a nurturing environment where students develop academically, morally, and socially. Our commitment extends beyond textbooks—we build character, instill responsibility, and prepare students to become leaders in an ever-evolving world.
              </p>
              <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-foreground">Our Motto</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground font-semibold">{schoolInfo.tagline}</p>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-foreground">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{about.vision}</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-foreground">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{about.mission}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-background">
              <CardHeader className="text-center">
                <h2 className="text-3xl font-bold font-headline text-foreground">Message from the Proprietor</h2>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-8 text-center">
                <Avatar className="h-32 w-32 border-4 border-secondary">
                  <AvatarImage src={principalImage.imageUrl} alt={about.principal.name} data-ai-hint={principalImage.imageHint}/>
                  <AvatarFallback>{about.principal.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-4">
                    <p className="text-muted-foreground italic">
                        "{about.principal.message}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{about.principal.name}</p>
                      <p className="text-sm text-muted-foreground">{about.principal.title}</p>
                    </div>
                </div>
              </CardContent>
            </Card>
             <Card className="bg-background">
              <CardHeader className="text-center">
                <h2 className="text-3xl font-bold font-headline text-foreground">Message from the Proprietress</h2>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-8 text-center">
                <Avatar className="h-32 w-32 border-4 border-secondary">
                  <AvatarImage src={proprietressImage.imageUrl} alt={about.proprietress.name} data-ai-hint={proprietressImage.imageHint}/>
                  <AvatarFallback>{about.proprietress.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-4">
                    <p className="text-muted-foreground italic">
                        "{about.proprietress.message}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{about.proprietress.name}</p>
                      <p className="text-sm text-muted-foreground">{about.proprietress.title}</p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
