
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { newsArticles, getPlaceholderImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay up-to-date with the latest news, announcements, and events from Fahad Memorial Int\'l School.',
};

export default function NewsPage() {
  const now = new Date();
  const currentYear = now.getFullYear();

  const latestArticles = newsArticles.filter(article => new Date(article.date).getFullYear() >= currentYear);
  const pastArticles = newsArticles.filter(article => new Date(article.date).getFullYear() < currentYear);

  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Keep up with the vibrant life and latest happenings at our school."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          {latestArticles.length > 0 ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground mb-8 text-center">Latest News & Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestArticles.map((article) => {
                  const articleImage = getPlaceholderImage(article.image);
                  return (
                    <Card key={article.id} className="overflow-hidden flex flex-col bg-primary">
                    <div className="relative h-48 w-full">
                        <Image src={articleImage.imageUrl} alt={article.title} fill className="object-contain p-4" data-ai-hint={articleImage.imageHint} />
                    </div>
                    <CardHeader>
                        <CardDescription className="text-muted-foreground">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                        <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">{article.summary}</p>
                    </CardContent>
                  </Card>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-muted-foreground">There are no upcoming news or events at this time. Please check back later!</p>
            </div>
          )}
        </div>
      </section>
      
      {pastArticles.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground mb-8 text-center">Past Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastArticles.map((article) => {
                        const articleImage = getPlaceholderImage(article.image);
                        return (
                            <Card key={article.id} className="overflow-hidden flex flex-col bg-primary">
                                <div className="relative h-48 w-full">
                                    <Image src={articleImage.imageUrl} alt={article.title} fill className="object-contain p-4" data-ai-hint={articleImage.imageHint} />
                                </div>
                                <CardHeader>
                                    <CardDescription className="text-muted-foreground">{new Date(article.date).toLocaleDate-String('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                                    <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm">{article.summary}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
      )}
    </>
  );
}
