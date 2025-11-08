
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { newsArticles, getPlaceholderImage } from '@/lib/data';
import { PageHeader } from '@/components/page-header';

type NewsArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: NewsArticlePageProps): Metadata {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'News Not Found',
    };
  }
  return {
    title: article.title,
    description: article.summary,
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const articleImage = getPlaceholderImage(article.image);

  return (
    <>
      <PageHeader
        title={article.title}
        subtitle={new Date(article.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      />
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <div className="relative aspect-video mb-12 rounded-lg overflow-hidden">
            <Image
              src={articleImage.imageUrl}
              alt={article.title}
              fill
              className="object-contain p-4"
              data-ai-hint={articleImage.imageHint}
            />
          </div>
          <div
            className="prose lg:prose-lg max-w-none mx-auto text-foreground/80 space-y-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>
    </>
  );
}
