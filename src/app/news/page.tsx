
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { newsArticles, getPlaceholderImage } from '@/lib/data';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay up-to-date with the latest news, announcements, and events from Fahad Memorial Int\'l School.',
};

export default function NewsPage() {
  const sortedNews = [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Keep up with the vibrant life and latest happenings at our school."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div>
            <h2 className="text-3xl font-bold font-headline text-foreground mb-8 text-center">Latest News</h2>
            {sortedNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedNews.map((article) => {
                  const articleImage = getPlaceholderImage(article.image);
                  return (
                    <Card key={article.id} className="overflow-hidden flex flex-col bg-primary">
                      <div className="relative h-48 w-full">
                          <Image src={articleImage.imageUrl} alt={article.title} fill className={cn("object-cover", article.image === 'news-waec-logo' && 'object-contain p-4')} data-ai-hint={articleImage.imageHint} />
                      </div>
                      <CardHeader>
                          <CardDescription className="text-muted-foreground">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                          <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                          <p className="text-muted-foreground text-sm">{article.summary}</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                        <Button asChild variant="secondary">
                          <Link href={`/news/${article.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
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
        </div>
      </section>
    </>
  );
}
