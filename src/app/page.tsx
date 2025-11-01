import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Baby, Newspaper } from 'lucide-react';

import { schoolInfo, about, academicPrograms, newsArticles, getPlaceholderImage } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const iconMap: { [key: string]: React.ElementType } = {
  BookOpen,
  GraduationCap,
  Baby,
};

function HeroSection() {
  const heroImage = getPlaceholderImage('hero-background');
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 container px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline drop-shadow-lg">
          {schoolInfo.name}
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
          Nurturing minds for a brighter future through academic excellence and character development.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/admissions">Apply Now</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Welcome to {schoolInfo.shortName}</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
          {about.mission}
        </p>
        <Button asChild className="mt-8" variant="outline">
          <Link href="/about">Discover Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  );
}

function AcademicsPreview() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Academic Programs</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                A structured pathway for success at every stage of learning.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicPrograms.map((program) => {
             const Icon = iconMap[program.icon];
             const programImage = getPlaceholderImage(program.image);
            return (
              <Card key={program.name} className="flex flex-col">
                <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <Icon className="h-8 w-8 text-primary"/>
                    </div>
                  <CardTitle className="font-headline">{program.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button variant="ghost" asChild>
                        <Link href="/academics">Learn more <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function NewsPreview() {
  const latestNews = newsArticles.slice(0, 3);
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Latest News & Events</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                Stay updated with the latest happenings at our school.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((article) => {
            const articleImage = getPlaceholderImage(article.image);
            return (
              <Card key={article.id} className="overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                    <Image src={articleImage.imageUrl} alt={article.title} fill className="object-cover" data-ai-hint={articleImage.imageHint} />
                </div>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
                    <CardDescription>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{article.summary}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" asChild className="p-0">
                        <Link href="/news">Read More <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
         <div className="text-center mt-12">
            <Button asChild>
                <Link href="/news">View All News <Newspaper className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
      </div>
    </section>
  )
}

function GalleryPreview() {
    const galleryImages = ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4'].map(id => getPlaceholderImage(id));

    return (
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Glimpses of Our Campus Life</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                        Explore the vibrant and dynamic environment at Fahad Memorial.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map(image => (
                         <div key={image.id} className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                            <Image src={image.imageUrl} alt={image.description} fill className="object-cover transition-transform hover:scale-105" data-ai-hint={image.imageHint}/>
                         </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button variant="secondary" asChild>
                        <Link href="/gallery">Visit Gallery <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <AcademicsPreview />
      <NewsPreview />
      <GalleryPreview />
    </>
  );
}
