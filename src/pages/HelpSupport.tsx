
import React from "react";
import Header from "../components/Layout/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, FileText } from "lucide-react";
import { toast } from "sonner";

const HelpSupport = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you soon.");
  };

  const faqData = [
    {
      question: "How do I connect my social media accounts?",
      answer: "Go to the Accounts page and click 'Connect Account' for each platform. You'll be redirected to authenticate with the respective social media platform."
    },
    {
      question: "How often is the analytics data updated?",
      answer: "Analytics data is updated every 4 hours. You can see the last update time on each dashboard."
    },
    {
      question: "Can I export my reports?",
      answer: "Yes! Use the Export button on any analytics page to download your data as PDF or Excel files."
    },
    {
      question: "How do I change my account language?",
      answer: "You can change the language from the login page or in the Settings page under General Settings."
    },
    {
      question: "What social media platforms are supported?",
      answer: "Currently we support Facebook, Instagram, TikTok, and Google Ads. More platforms will be added soon."
    },
    {
      question: "How do I reset my password?",
      answer: "On the login page, click 'Forgot Password' and follow the instructions sent to your email."
    }
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      <Header title="Help & Support" />

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <MessageCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant help from our support team
              </p>
              <Button size="sm">Start Chat</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Mail className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Send us an email and we'll respond within 24 hours
              </p>
              <Button size="sm" variant="outline">
                support@socialcrm.com
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Phone className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Call us for urgent issues
              </p>
              <Button size="sm" variant="outline">
                +1 (555) 123-4567
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>
              Find answers to common questions about using SocialCRM.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Can't find what you're looking for? Send us a message and we'll help you out.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What can we help you with?" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your issue or question..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpSupport;
