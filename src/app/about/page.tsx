import Image from 'next/image';
import type { Metadata } from 'next';

import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { about, getPlaceholderImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about the mission, vision, and values of Fahad Memorial Int'l School, Bachirawa.`,
};

export default function AboutPage() {
  const principalImage = getPlaceholderImage('about-principal');
  const missionImage = getPlaceholderImage('about-mission');

  return (
    <>
      <PageHeader
        title="About Fahad Memorial School"
        subtitle="A commitment to excellence, integrity, and lifelong learning."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={missionImage.imageHint}
                />
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{about.mission}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{about.vision}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <h2 className="text-3xl font-bold font-headline text-primary">Message from the Principal</h2>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={principalImage.imageUrl} alt={about.principal.name} data-ai-hint={principalImage.imageHint}/>
                  <AvatarFallback>{about.principal.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-4">
                    <p className="text-foreground/80 italic">
                        "{about.principal.message}"
                    </p>
                    <p className="font-semibold text-primary">{about.principal.name}</p>
                    <p className="text-sm text-muted-foreground">Principal</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
