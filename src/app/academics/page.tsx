import Image from 'next/image';
import type { Metadata } from 'next';
import { BookOpen, GraduationCap, Baby } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { academicPrograms, getPlaceholderImage } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Schools',
  description: 'Explore the academic programs at Fahad Memorial Int\'l School, from Preschool to College.',
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Our Schools"
        subtitle="We offer complete and balanced education across three levels, guiding students from their earliest years through to graduation."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicPrograms.map((program) => {
             const programImage = getPlaceholderImage(program.image);
            return (
              <Card key={program.name} className="overflow-hidden group transition-shadow hover:shadow-xl">
                <div className="relative h-80 w-full">
                    <Image src={programImage.imageUrl} alt={program.name} fill className="object-cover transition-transform group-hover:scale-105" data-ai-hint={programImage.imageHint} />
                    <div className="absolute inset-0 bg-black/30" />
                    <CardHeader className="absolute bottom-0 text-white">
                        <CardTitle className="font-headline text-2xl">{program.name}</CardTitle>
                    </CardHeader>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm">{program.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        </div>
      </section>
    </>
  );
}
