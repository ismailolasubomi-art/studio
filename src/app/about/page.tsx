import Image from 'next/image';
import type { Metadata } from 'next';

import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { about, getPlaceholderImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about the mission, vision, and values of Fahad Memorial Int'l School.`,
};

export default function AboutPage() {
  const principalImage = getPlaceholderImage('about-principal');
  const missionImage = getPlaceholderImage('about-mission');

  return (
    <>
      <PageHeader
        title="About Our School"
        subtitle="A tradition of excellence and a future of innovation."
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
                  <CardTitle className="font-headline text-2xl text-foreground">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{about.mission}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-foreground">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{about.vision}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background">
              <CardHeader className="text-center">
                <h2 className="text-3xl font-bold font-headline text-foreground">Message from the Principal</h2>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <Avatar className="h-32 w-32 border-4 border-secondary">
                  <AvatarImage src={principalImage.imageUrl} alt={about.principal.name} data-ai-hint={principalImage.imageHint}/>
                  <AvatarFallback>{about.principal.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-4">
                    <p className="text-muted-foreground italic">
                        "{about.principal.message}"
                    </p>
                    <p className="font-semibold text-foreground">{about.principal.name}</p>
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
