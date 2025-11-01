import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { newsArticles, getPlaceholderImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay up-to-date with the latest news, announcements, and events from Fahad Memorial Int\'l School.',
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Keep up with the vibrant life and latest happenings at our school."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => {
              const articleImage = getPlaceholderImage(article.image);
              return (
                <Card key={article.id} className="overflow-hidden flex flex-col">
                  <div className="relative h-56 w-full">
                    <Image
                      src={articleImage.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                      data-ai-hint={articleImage.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{article.title}</CardTitle>
                    <CardDescription>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{article.summary}</p>
                  </CardContent>
                   <CardFooter>
                    <Button variant="link" asChild className="p-0">
                        <Link href="#">Read More <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
