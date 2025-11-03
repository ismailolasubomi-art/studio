'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Phone, MapPin } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { schoolInfo } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500),
});

export default function ContactPage() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We will get back to you soon.",
        });
        form.reset();
    }

    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Get in touch with us for any inquiries."
            />
            <section className="py-16 md:py-24">
                <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <Card className="p-4 sm:p-6 md:p-8">
                             <CardHeader>
                                <CardTitle className="font-headline text-3xl text-foreground">Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Your Name</FormLabel>
                                                        <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Your Email</FormLabel>
                                                        <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <FormField
                                            control={form.control}
                                            name="subject"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Subject</FormLabel>
                                                    <FormControl><Input placeholder="What is your message about?" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Message</FormLabel>
                                                    <FormControl><Textarea placeholder="Type your message here..." rows={6} {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit" size="lg" variant="secondary">Send Message</Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="lg:col-span-1 space-y-8">
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-foreground">Our Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-secondary mt-1" />
                                    <address className="not-italic text-muted-foreground">{schoolInfo.address}</address>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-6 w-6 text-secondary" />
                                    <a href={`tel:${schoolInfo.phone}`} className="hover:text-secondary transition-colors text-muted-foreground">{schoolInfo.phone}</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="h-6 w-6 text-secondary" />
                                    <a href={`mailto:${schoolInfo.email}`} className="hover:text-secondary transition-colors text-muted-foreground">{schoolInfo.email}</a>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="aspect-video w-full">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.181831818822!2d8.530501814792135!3d12.06733219146869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae815b34204899%3A0x67343731d054de40!2sBachirawa%2C%20Kano!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen={false}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-md"
                                title="School Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
