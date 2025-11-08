import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, Users, Sun, Heart, ArrowRight } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { getPlaceholderImage, schoolInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Preschool & Primary',
  description: `Where learning begins with joy. Discover our Preschool and Primary programs at ${schoolInfo.name}.`,
};

function HeroSection() {
    const heroImage = getPlaceholderImage('academics-preschool');
    return (
        <section className="relative h-[60vh] w-full flex items-center justify-center text-center text-white">
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 container px-4">
                <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">
                    Where Learning Begins with Joy
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    Preschool & Primary Education at Fahad Memorial (Prep 1 - Grade 5)
                </p>
            </div>
        </section>
    );
}

const facilities = [
    {
        id: 'gallery-5',
        title: 'Outdoor Play Areas',
        description: "Childhood isn't complete without play! Our expansive playground features modern swings, slides, and climbing structures where children develop gross motor skills, confidence, and social bonds. Supervised playtime ensures safety while encouraging active, healthy lifestyles."
    },
    {
        id: 'gallery-9',
        title: 'Trampoline Zone',
        description: "A favorite among our students! Our designated trampoline area provides fun exercise that improves balance, coordination, and physical fitness. It's where laughter meets learning, building strong bodies and joyful memories."
    },
    {
        id: 'gallery-4',
        title: 'Football Field',
        description: "Even our youngest students love football! Our well-maintained field hosts PE classes, inter-house competitions, and free play sessions. Sports teach teamwork, discipline, and perseverance—values that extend beyond the pitch."
    },
    {
        id: 'about-mission',
        title: 'Bright, Spacious Classrooms',
        description: "Our classrooms are designed for young learners; colorful, well-lit, and equipped with age-appropriate furniture and learning materials. Each classroom creates an inviting atmosphere where students feel comfortable to explore, ask questions, and grow."
    }
]

export default function PreschoolPrimaryPage() {
    return (
        <>
            <HeroSection />
            <section className="py-16 md:py-24 bg-background">
                <div className="container max-w-4xl mx-auto text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                        Introduction
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        At Fahad Memorial International School, we believe the early years shape a lifetime. Our Preschool and Primary section provides a safe, nurturing environment where children from Prep 1 to Grade 5 develop academically, socially, and emotionally. Through play-based learning, structured curriculum, and values education, we build confident, curious learners ready for tomorrow's challenges.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-primary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Our Classes</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <Card>
                            <CardHeader><CardTitle className="font-headline">Prep 1, 2 & 3 (Ages 3-5)</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">The foundation years where learning feels like play. Our youngest students explore colors, shapes, numbers, and letters through songs, stories, and hands-on activities. We focus on social skills, motor development, and building classroom routines that prepare them for formal learning.</p></CardContent>
                        </Card>
                         <Card>
                            <CardHeader><CardTitle className="font-headline">Pre-Elementary 1 & 2 (Ages 5-7)</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">The bridge between play and structured learning. Children develop early literacy and numeracy skills while maintaining the joy of discovery. Our teachers balance phonics, basic math, creative arts, and physical activities to ensure holistic development.</p></CardContent>
                        </Card>
                         <Card>
                            <CardHeader><CardTitle className="font-headline">Grade 1-5 (Ages 7-11)</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">Where academic foundations solidify. Students master reading, writing, mathematics, sciences, and social studies through engaging lessons. We introduce critical thinking, independent learning, and collaborative projects while maintaining strong emphasis on discipline and moral values.</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Our Curriculum</h2>
                        <div className="mt-6 space-y-6">
                            <div>
                                <h3 className="font-semibold text-xl text-secondary">Early Years Foundation (Prep 1-3 & Pre-Elementary 1-2)</h3>
                                <p className="text-muted-foreground mt-2">Our youngest learners experience a play-based curriculum focusing on foundational skills: early literacy and numeracy, social-emotional development, motor skills, creative expression, Islamic values, and outdoor play. Learning happens through songs, stories, games, and hands-on exploration.</p>
                            </div>
                             <div>
                                <h3 className="font-semibold text-xl text-secondary">Primary Education (Grade 1-5)</h3>
                                <p className="text-muted-foreground mt-2">Students follow a comprehensive curriculum including: English Language, Mathematics, Basic Science & Technology, Social Studies, Religious Studies, Creative & Cultural Arts, Physical & Health Education, Computer Studies, and Quantitative/Verbal Reasoning.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                        <Image src={getPlaceholderImage('gallery-2').imageUrl} alt="Students in an art class" fill className="object-cover" data-ai-hint={getPlaceholderImage('gallery-2').imageHint} />
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-primary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Our Facilities</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map(facility => {
                            const facilityImage = getPlaceholderImage(facility.id);
                            return (
                                <Card key={facility.id} className="overflow-hidden group">
                                    <div className="relative h-48 w-full">
                                        <Image src={facilityImage.imageUrl} alt={facility.title} fill className="object-cover" data-ai-hint={facilityImage.imageHint} />
                                    </div>
                                    <CardHeader><CardTitle className="font-headline">{facility.title}</CardTitle></CardHeader>
                                    <CardContent><p className="text-muted-foreground text-sm">{facility.description}</p></CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Why Choose Us?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <Heart className="mx-auto h-12 w-12 text-secondary mb-4" />
                            <h3 className="font-headline text-xl font-semibold text-foreground">Nurturing Environment</h3>
                            <p className="text-muted-foreground mt-2">We provide a safe, caring space where every child feels valued and supported.</p>
                        </div>
                         <div className="text-center p-6">
                            <Sun className="mx-auto h-12 w-12 text-secondary mb-4" />
                            <h3 className="font-headline text-xl font-semibold text-foreground">Play-Based Learning</h3>
                            <p className="text-muted-foreground mt-2">Our curriculum balances structured lessons with joyful exploration and hands-on activities.</p>
                        </div>
                        <div className="text-center p-6">
                            <Users className="mx-auto h-12 w-12 text-secondary mb-4" />
                            <h3 className="font-headline text-xl font-semibold text-foreground">Experienced Teachers</h3>
                            <p className="text-muted-foreground mt-2">Our dedicated educators are passionate about early childhood development and growth.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container text-center text-secondary-foreground">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Join Our Family?</h2>
                    <p className="mt-4 max-w-xl mx-auto">Take the first step in your child's educational journey. Apply for admission today!</p>
                    <div className="mt-8">
                        <Button size="lg" variant="default" asChild>
                            <Link href="/admissions">
                                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
