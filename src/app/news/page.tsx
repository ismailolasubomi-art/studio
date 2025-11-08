
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
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const latestNews = newsArticles
    .filter(article => new Date(article.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = newsArticles
    .filter(article => new Date(article.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Keep up with the vibrant life and latest happenings at our school."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-headline text-foreground mb-8 text-center">Latest News</h2>
            {latestNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestNews.map((article) => {
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
            ) : (
              <div className="text-center">
                <p className="text-muted-foreground">There are no news or events at this time. Please check back later!</p>
              </div>
            )}
          </div>
          
          <div>
            <h2 className="text-3xl font-bold font-headline text-foreground mb-8 text-center">Past Events</h2>
            {pastEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((article) => {
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
            ) : (
              <div className="text-center">
                <p className="text-muted-foreground">There are no past events to show.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
