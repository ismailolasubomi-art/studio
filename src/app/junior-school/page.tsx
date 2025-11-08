
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, ArrowRight } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { getPlaceholderImage, schoolInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Junior School',
  description: `Building tomorrow's leaders today. Discover our Junior Secondary School (JSS 1-3) program at ${schoolInfo.name}.`,
};

function HeroSection() {
    const heroImage = getPlaceholderImage('academics-primary');
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
                    Building Tomorrow's Leaders Today
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    Junior Secondary School (JSS 1-3)
                </p>
            </div>
        </section>
    );
}

const facilities = [
    {
        id: 'gallery-7',
        title: 'Modern Computer Laboratory',
        description: "Technology powers the future. Our well-equipped computer lab features modern systems where students learn Microsoft Office, internet research, and digital citizenship. Hands-on practice ensures students are tech-confident and ready for the digital age.",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/studio-6593612663-293d1.firebasestorage.app/o/2.jpg?alt=media&token=6b0c4fc9-1347-4f53-a340-8299959b0fcc"
    },
    {
        id: 'gallery-9',
        title: 'Science Laboratory',
        description: "Theory meets practice! Our science lab allows students to conduct experiments, observe phenomena, and understand scientific principles through direct experience.",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/studio-6593612663-293d1.firebasestorage.app/o/WhatsApp%20Image%202025-11-01%20at%2019.17.20.jpeg?alt=media&token=11ea3cef-837d-4161-8cc6-7cc429ea4508"
    },
    {
        id: 'about-mission',
        title: 'Well-Ventilated Classrooms',
        description: "Conducive learning environments matter. Our JSS classrooms are designed for focused study—equipped with teaching aids, adequate seating, proper lighting, and ventilation that keeps students comfortable and engaged throughout lessons."
    },
    {
        id: 'gallery-4',
        title: 'Football Field & Sports Facilities',
        description: "Athletics build character. Our football field hosts Physical education classes and recreational activities where students stay active and healthy. We believe sports teach discipline, teamwork, resilience, and sportsmanship—lessons that translate to academic success."
    },
];

const curriculumSubjects = [
    "English Language: Advanced grammar, composition, literature, comprehension",
    "Mathematics: Algebra, geometry, statistics, problem-solving",
    "Basic Science & Technology: Physics, chemistry, biology fundamentals, practical experiments",
    "Social Studies: History, geography, civics, current affairs",
    "Religious Studies (Islamic/Christian): Moral and spiritual education",
    "Computer Studies: Introduction to computers, typing skills, internet awareness",
    "Creative & Cultural Arts: Fine arts, music, drama, cultural studies",
    "Physical & Health Education: Sports, fitness, health awareness",
    "Home Economics & Agricultural Science: Practical life skills",
];

export default function JuniorSchoolPage() {
    return (
        <>
            <HeroSection />
            <section className="py-16 md:py-24 bg-background">
                <div className="container max-w-4xl mx-auto text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                        Introduction
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        The junior secondary years are transformative. At Fahad Memorial Int'l School, JSS 1-3 students transition from childhood to adolescence in an environment that challenges them academically while supporting their personal growth. We prepare students not just for senior secondary, but for life—equipping them with knowledge, skills, and values that last forever.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-primary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Our Program (JSS 1-3)</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <Card>
                            <CardHeader><CardTitle className="font-headline">JSS 1 - The Foundation Year</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">Students transition from primary to secondary education, adjusting to subject-specific teachers, deeper content, and increased academic expectations. We focus on building study habits, time management, and independent learning skills.</p></CardContent>
                        </Card>
                         <Card>
                            <CardHeader><CardTitle className="font-headline">JSS 2 - The Development Year</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">With foundations established, students tackle more complex concepts across all subjects. Critical thinking, analytical skills, and subject mastery intensify. Co-curricular activities expand, allowing students to discover their passions.</p></CardContent>
                        </Card>
                         <Card>
                            <CardHeader><CardTitle className="font-headline">JSS 3 - The Preparation Year</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">The final junior year prepares students for senior secondary challenges. Academic rigor peaks as students solidify their understanding across all subjects, preparing for BECE/entrance exams and senior school selection.</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Our Curriculum</h2>
                         <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">A comprehensive curriculum meeting national standards.</p>
                    </div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {curriculumSubjects.map(subject => (
                            <div key={subject} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                                <p className="text-muted-foreground">{subject}</p>
                            </div>
                        ))}
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
                            let facilityImage;
                            if ('imageUrl' in facility && facility.imageUrl) {
                                facilityImage = { imageUrl: facility.imageUrl, imageHint: 'school facility' };
                            } else {
                                facilityImage = getPlaceholderImage(facility.id);
                            }
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
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Beyond Academics</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">Extracurricular Activities</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-muted-foreground">
                                <p>✓ Debate and Literary Society</p>
                                <p>✓ Science Club</p>
                                <p>✓ Mathematics Club</p>
                                <p>✓ Sports Teams (Football, Athletics, Table Tennis)</p>
                                <p>✓ Drama and Cultural Performances</p>
                                <p>✓ Quiz Competitions</p>
                                <p>✓ Leadership Training</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">Character Development</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <p className="text-muted-foreground">We don't just build smart students—we build good people. Through daily interactions, moral lessons, and our "Knowledge and Discipline" motto, students develop integrity, respect, responsibility, and empathy.</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">Exam Preparation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Structured revision programs, past question practices, and mock examinations prepare JSS 3 students thoroughly for Basic Education Certificate Examination (BECE) and senior school transition.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
             </section>

            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-4xl mx-auto">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Why Choose Our Junior School?</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /><p>Qualified, experienced subject teachers</p></div>
                        <div className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /><p>Balanced academic and character development</p></div>
                        <div className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /><p>Modern facilities supporting 21st-century learning</p></div>
                        <div className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /><p>Strong discipline and moral foundation</p></div>
                        <div className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /><p>Proven track record of excellent exam results</p></div>
                        <div className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /><p>Safe, supportive learning environment</p></div>
                        <div className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /><p>Active parent-school partnership</p></div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-primary">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Enroll your child in a junior school that prepares them for success.</h2>
                    <p className="mt-4 max-w-xl mx-auto text-muted-foreground">Contact us today!</p>
                    <div className="mt-8">
                        <Button size="lg" variant="secondary" asChild>
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
