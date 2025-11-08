
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, ArrowRight, BookOpen, FlaskConical, BarChart3, Medal, BrainCircuit, Users } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { getPlaceholderImage, schoolInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: 'Senior School',
  description: `Excellence. Discipline. Success. Discover our Senior Secondary School (SS 1-3) program at ${schoolInfo.name}.`,
};

function HeroSection() {
    const heroImage = getPlaceholderImage('academics-secondary');
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
                    Excellence. Discipline. Success.
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                   Senior Secondary School (SS 1-3) - Your Path to WAEC & NECO Success
                </p>
            </div>
        </section>
    );
}

const scienceSubjects = ["Physics", "Chemistry", "Biology", "Further Mathematics (optional)", "Technical Drawing/Computer Science"];
const artsSubjects = ["Literature in English", "Government", "History", "CRS/IRS", "Geography"];
const commercialSubjects = ["Economics", "Accounting", "Commerce", "Business Studies", "Government"];
const coreSubjects = ["English Language", "Mathematics", "Civic Education", "One Nigerian Language (Hausa)"];

const facilities = [
    { id: 'gallery-9', title: 'Fully-Equipped Science Laboratories', description: "Practical knowledge matters for WAEC/NECO success. Our chemistry, physics, and biology labs provide hands-on experience with experiments, equipment handling, and scientific methodology turning theoretical knowledge into practical understanding." },
    { id: 'gallery-4', title: 'Football Field', description: "Sports remain vital even at senior level. Our football field hosts PE classes and athletic activities where students stay physically fit and mentally refreshed. We've nurtured students who balance athletic passion with academic excellence, proving that a healthy body supports a sharp mind." },
    { id: 'about-mission', title: 'Modern, Focused Learning Spaces', description: "Senior students need serious learning environments. Our SS classrooms are designed for mature learners—spacious, well-equipped with teaching materials, minimal distractions, and conducive for the concentrated study senior school demands." },
];

export default function SeniorSchoolPage() {
    return (
        <>
            <HeroSection />
            <section className="py-16 md:py-24 bg-background">
                <div className="container max-w-4xl mx-auto text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                        Introduction
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Senior Secondary School at Fahad Memorial Int'l School is where futures are decided. Over three critical years (SS 1-3), students master their chosen subjects, prepare for WAEC and NECO examinations, and develop into mature, responsible adults ready for university and career challenges. We combine academic excellence with character formation, ensuring our graduates succeed not just in exams, but in life.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-primary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Our Program (SS 1-3)</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader><CardTitle className="font-headline">SS 1 - Subject Selection & Foundation</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">Students choose their academic path—Sciences, Arts, or Commercial and begin focused study in their selected subjects. We help students make informed decisions based on their strengths, interests, and career goals.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle className="font-headline">SS 2 - Mastery & Application</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">The depth increases. Students tackle advanced concepts, conduct extensive practical work, and develop examination strategies. Co-curricular activities continue as students balance academics with personal development.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle className="font-headline">SS 3 - Final Push & Examination Preparation</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">Everything converges here. Intensive revision, mock examinations, past question practices, and focused teaching prepare students thoroughly for WAEC and NECO. Our goal: excellent grades and university admission.</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Our Curriculum</h2>
                         <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">Our curriculum is structured into three tracks, allowing students to specialize based on their career aspirations, alongside a set of core subjects for all.</p>
                    </div>
                    <Card className="max-w-5xl mx-auto">
                        <CardContent className="p-6">
                            <h3 className="font-headline text-2xl font-bold text-center mb-6 text-foreground">Core Subjects (All Students)</h3>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {coreSubjects.map(subject => (
                                    <div key={subject} className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                                        <CheckCircle className="h-5 w-5 text-secondary" />
                                        <span className="font-medium text-muted-foreground">{subject}</span>
                                    </div>
                                ))}
                            </div>
                            <Tabs defaultValue="science" className="w-full">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="science"><FlaskConical className="mr-2"/>Science</TabsTrigger>
                                    <TabsTrigger value="arts"><BookOpen className="mr-2"/>Arts</TabsTrigger>
                                    <TabsTrigger value="commercial"><BarChart3 className="mr-2"/>Commercial</TabsTrigger>
                                </TabsList>
                                <TabsContent value="science" className="mt-6">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {scienceSubjects.map(subject => <p key={subject} className="text-muted-foreground p-3 bg-primary rounded-md">✓ {subject}</p>)}
                                    </div>
                                </TabsContent>
                                <TabsContent value="arts" className="mt-6">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {artsSubjects.map(subject => <p key={subject} className="text-muted-foreground p-3 bg-primary rounded-md">✓ {subject}</p>)}
                                    </div>
                                </TabsContent>
                                <TabsContent value="commercial" className="mt-6">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {commercialSubjects.map(subject => <p key={subject} className="text-muted-foreground p-3 bg-primary rounded-md">✓ {subject}</p>)}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
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
                                    <div className="relative h-64 w-full">
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
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Examination Excellence</h2>
                        <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">Our students consistently achieve excellent results in WAEC and NECO, gaining admission to top universities across Nigeria and beyond.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-secondary">WAEC Preparation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />Comprehensive syllabus coverage</p>
                                <p className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />Regular mock examinations</p>
                                <p className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />Past question analysis and practice</p>
                                <p className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />Exam techniques and time management training</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-secondary">NECO Preparation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />Parallel preparation ensuring students excel in both exams</p>
                                <p className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />Extra lessons for challenging topics</p>
                                <p className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />Practical examination training for science students</p>
                                <p className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />Continuous assessment tracking</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
             </section>

             <section className="py-16 md:py-24 bg-primary">
                <div className="container">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Beyond the Classroom</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card>
                            <CardHeader className="items-center"><Users className="h-10 w-10 text-secondary" /></CardHeader>
                            <CardContent className="text-center">
                                <h3 className="font-headline text-xl font-semibold mb-2">Leadership Development</h3>
                                <p className="text-muted-foreground text-sm">Prefectship opportunities, student council, mentorship programs, and public speaking training.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="items-center"><Medal className="h-10 w-10 text-secondary" /></CardHeader>
                            <CardContent className="text-center">
                                <h3 className="font-headline text-xl font-semibold mb-2">Student Life</h3>
                                <p className="text-muted-foreground text-sm">A balanced school life with football tournaments, cultural days, and social events.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="items-center"><BrainCircuit className="h-10 w-10 text-secondary" /></CardHeader>
                            <CardContent className="text-center">
                                <h3 className="font-headline text-xl font-semibold mb-2">Character Development</h3>
                                <p className="text-muted-foreground text-sm">We build well-rounded individuals through moral lessons and our 'Knowledge and Discipline' motto.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Your future starts here.</h2>
                    <p className="mt-4 text-lg">Join Fahad Memorial Int'l School and prepare for success in WAEC, NECO, and beyond. Contact us today to begin your journey!</p>
                    <div className="mt-8">
                        <Button size="lg" asChild>
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
