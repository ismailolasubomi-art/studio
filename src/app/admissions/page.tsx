'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { PageHeader } from '@/components/page-header';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, User, School } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters."),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date."),
  parentName: z.string().min(2, "Parent's name must be at least 2 characters."),
  parentEmail: z.string().email("Invalid email address."),
  parentPhone: z.string().min(10, "Phone number seems too short."),
  gradeLevel: z.string({ required_error: "Please select a school level."}),
});

export default function AdmissionsPage() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            studentName: "",
            parentName: "",
            parentEmail: "",
            parentPhone: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Application Submitted!",
            description: "Thank you for your interest. We will be in touch shortly.",
        });
        form.reset();
    }
  
  return (
    <>
      <PageHeader
        title="Admissions"
        subtitle="Join our community of learners and leaders."
      />
      <section className="py-16 md:py-24">
        <div className="container">
            <Tabs defaultValue="online" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto h-auto">
                <TabsTrigger value="online" className="py-3 px-4">
                    <User className="mr-2" />
                    Online Application
                </TabsTrigger>
                <TabsTrigger value="in-person" className="py-3 px-4">
                    <School className="mr-2" />
                    Visit Our School
                </TabsTrigger>
              </TabsList>
              <TabsContent value="online" className="mt-8">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-foreground">Online Admission Process</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">1</div>
                                    <p className="text-muted-foreground">Submit the online application form with all required details.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">2</div>
                                    <p className="text-muted-foreground">Our admissions team will review your application and contact you.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">3</div>
                                    <p className="text-muted-foreground">Schedule an entrance assessment and interview with the school.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">4</div>
                                    <p className="text-muted-foreground">Receive an admission offer and complete the enrollment process.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="lg:col-span-2">
                        <Card className="p-4 sm:p-6 md:p-8">
                            <CardHeader>
                                <CardTitle className="font-headline text-3xl text-foreground">Application Form</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <FormField
                                                control={form.control}
                                                name="studentName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Student's Full Name</FormLabel>
                                                        <FormControl><Input placeholder="e.g. John Doe" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="dateOfBirth"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Student's Date of Birth</FormLabel>
                                                        <FormControl><Input type="date" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <FormField
                                            control={form.control}
                                            name="gradeLevel"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel>Applying for School</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a school level" />
                                                    </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                    <SelectItem value="preschool">Preschool</SelectItem>
                                                    <SelectItem value="junior">Junior School</SelectItem>
                                                    <SelectItem value="senior">Senior School</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <FormField
                                                control={form.control}
                                                name="parentName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Parent/Guardian's Full Name</FormLabel>
                                                        <FormControl><Input placeholder="e.g. Jane Doe" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="parentEmail"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Parent/Guardian's Email</FormLabel>
                                                        <FormControl><Input type="email" placeholder="e.g. jane@example.com" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <FormField
                                            control={form.control}
                                            name="parentPhone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Parent/Guardian's Phone</FormLabel>
                                                    <FormControl><Input type="tel" placeholder="e.g. +234 123 456 7890" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="submit" size="lg" variant="secondary">Submit Application <ArrowRight className="ml-2 h-5 w-5"/></Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
              </TabsContent>
              <TabsContent value="in-person" className="mt-8">
                 <Card className="max-w-3xl mx-auto">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-foreground">Visit Us for In-Person Application</CardTitle>
                        <CardDescription>We welcome you to visit our school for a personalized admission experience.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">Our Location</h3>
                            <p className="text-muted-foreground">Bachirawa, opposite Maryam S. Dantata's Mosque, along Katsina Road, Kano.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground">What to Expect</h3>
                            <p className="text-muted-foreground">Our admissions team will guide you through the process while your child completes an assessment and interview. This visit also gives you the opportunity to explore our facilities and meet our dedicated staff.</p>
                        </div>
                         <div>
                            <h3 className="font-semibold text-lg text-foreground">School Hours</h3>
                            <p className="text-muted-foreground">For inquiries, please contact our admissions office or visit us during school hours (7:30 a.m. – 3:00 p.m.).</p>
                        </div>
                        <Button asChild>
                            <a href="/contact">Contact Admissions Office <ArrowRight className="ml-2 h-5 w-5"/></a>
                        </Button>
                    </CardContent>
                 </Card>
              </TabsContent>
            </Tabs>
        </div>
      </section>
    </>
  );
}

    