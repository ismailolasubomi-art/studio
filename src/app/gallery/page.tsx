import Image from 'next/image';
import type { Metadata } from 'next';

import { PageHeader } from '@/components/page-header';
import { getPlaceholderImage } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const metadata: Metadata = {
  title: 'LIS Life',
  description: 'Explore photos of our campus, events, and student life at Fahad Memorial Int\'l School.',
};

export default function GalleryPage() {
  const galleryImageIds = [
    'gallery-1',
    'gallery-2',
    'gallery-3',
    'gallery-4',
    'gallery-5',
    'gallery-6',
    'gallery-7',
    'gallery-8',
    'gallery-9',
  ];
  const galleryImages = galleryImageIds.map(id => getPlaceholderImage(id));

  return (
    <>
      <PageHeader
        title="LIS Life"
        subtitle="A snapshot of our vibrant school community in action."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, idx) => (
              <Dialog key={idx}>
                <DialogTrigger asChild>
                  <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{image.description}</DialogTitle>
                    </DialogHeader>
                    <div className="relative aspect-video mt-4">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-contain"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
