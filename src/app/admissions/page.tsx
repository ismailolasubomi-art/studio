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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters."),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date."),
  parentName: z.string().min(2, "Parent's name must be at least 2 characters."),
  parentEmail: z.string().email("Invalid email address."),
  parentPhone: z.string().min(10, "Phone number seems too short."),
  gradeLevel: z.string({ required_error: "Please select a grade level."}),
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
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-primary">Admission Process</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                            <p>Submit the online application form with all required details.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                            <p>Our admissions team will review your application and contact you.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                            <p>Schedule an entrance assessment and interview with the school.</p>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">4</div>
                            <p>Receive an admission offer and complete the enrollment process.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                <Card className="p-4 sm:p-6 md:p-8">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">Application Form</CardTitle>
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
                                        <FormLabel>Applying for Grade</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a grade level" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            <SelectItem value="preschool">Preschool</SelectItem>
                                            <SelectItem value="primary">Primary</SelectItem>
                                            <SelectItem value="secondary">Secondary</SelectItem>
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

                                <Button type="submit" size="lg">Submit Application <ArrowRight className="ml-2 h-5 w-5"/></Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>
    </>
  );
}
