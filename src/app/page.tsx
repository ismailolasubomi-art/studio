

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Baby, Newspaper } from 'lucide-react';

import { schoolInfo, about, academicPrograms, newsArticles, getPlaceholderImage } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const iconMap: { [key: string]: React.ElementType } = {
  BookOpen,
  GraduationCap,
  Baby,
};

function HeroSection() {
  const heroImage = getPlaceholderImage('hero-background');
  return (
    <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 container px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline drop-shadow-lg">
          Welcome to Fahad Memorial Int'l School
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
          Where Knowledge Meets Discipline
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const aboutImage = getPlaceholderImage('about-mission');
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Welcome to {schoolInfo.shortName}</h2>
            <p className="mt-4 text-lg text-foreground/80">
                {about.welcome}
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-background rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-secondary">2k+</p>
                    <p className="text-sm text-muted-foreground">Students</p>
                </div>
                 <div className="p-4 bg-background rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-secondary">20+</p>
                    <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                 <div className="p-4 bg-background rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-secondary">100+</p>
                    <p className="text-sm text-muted-foreground">Dedicated Teachers</p>
                </div>
                 <div className="p-4 bg-background rounded-lg shadow-sm">
                    <p className="text-3xl font-bold text-secondary">WASSCE &amp; NECO</p>
                    <p className="text-sm text-muted-foreground">Registered</p>
                </div>
            </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
            />
            <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </section>
  );
}

function AcademicsPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Our Schools</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We offer complete and balanced education across three levels, guiding students from their earliest years through to graduation.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicPrograms.map((program) => {
             const programImage = getPlaceholderImage(program.image);
             const ProgramCard = (
                <Card className="overflow-hidden group transition-shadow hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-64 w-full">
                        <Image src={programImage.imageUrl} alt={program.name} fill className="object-cover transition-transform group-hover:scale-105" data-ai-hint={programImage.imageHint} />
                        <div className="absolute inset-0 bg-black/30" />
                        <CardHeader className="absolute bottom-0 text-white">
                            <CardTitle className="font-headline text-2xl">{program.name}</CardTitle>
                        </CardHeader>
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <p className="text-muted-foreground text-sm">{program.description}</p>
                    </CardContent>
                </Card>
             );

             if (program.href) {
                return (
                    <Link href={program.href} key={program.name} className="flex">
                        {ProgramCard}
                    </Link>
                )
             }
            return (
              <div key={program.name}>
                {ProgramCard}
              </div>
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
    <section className="py-16 md:py-24 bg-primary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Latest News & Events</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Stay updated with the latest happenings at our school.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((article) => {
            const articleImage = getPlaceholderImage(article.image);
            return (
              <Card key={article.id} className="overflow-hidden flex flex-col bg-background">
                <div className="relative h-48 w-full">
                    <Image src={articleImage.imageUrl} alt={article.title} fill className={cn("object-cover", article.image === 'news-waec-logo' && 'object-contain p-4')} data-ai-hint={articleImage.imageHint} />
                </div>
                <CardHeader>
                    <CardDescription>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                    <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{article.summary}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
         <div className="text-center mt-12">
            <Button asChild variant="secondary">
                <Link href="/news">View All News</Link>
            </Button>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <AcademicsPreview />
      <NewsPreview />
    </>
  );
}
