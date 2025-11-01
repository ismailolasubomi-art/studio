import Image from 'next/image';
import type { Metadata } from 'next';
import { BookOpen, GraduationCap, Baby } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { academicPrograms, getPlaceholderImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Academics',
  description: 'Explore the academic programs at Fahad Memorial Int\'l School, from Preschool to Secondary School.',
};

const iconMap: { [key: string]: React.ElementType } = {
  BookOpen,
  GraduationCap,
  Baby,
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Our Academic Programs"
        subtitle="Fostering intellectual growth and curiosity at every level of education."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicPrograms.map((program) => {
              const Icon = iconMap[program.icon];
              const programImage = getPlaceholderImage(program.image);
              return (
                <Card key={program.name} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
                  <div className="relative h-56 w-full">
                    <Image 
                        src={programImage.imageUrl} 
                        alt={program.name} 
                        fill 
                        className="object-cover" 
                        data-ai-hint={programImage.imageHint}
                    />
                  </div>
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <CardTitle className="font-headline text-2xl">{program.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{program.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
