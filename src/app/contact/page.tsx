'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Mail, MessageSquare, Send, MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <MessageSquare className="h-4 w-4" />
                Get in Touch
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground lg:text-7xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Let's Connect
              </h1>
              <p className="text-xl text-muted-foreground lg:text-2xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                I'd love to hear from you! Whether you have questions, collaboration ideas, or just want to say hello
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Send Me a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and I'll get back to you as soon as possible. I read every message personally!
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <p className="font-semibold">Thank you for reaching out!</p>
                    <p className="text-sm mt-1">I'll get back to you within 24-48 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="collaboration">Collaboration Opportunity</option>
                      <option value="podcast">Podcast Guest Request</option>
                      <option value="media">Media/Press</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell me what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Other Ways to Connect
                </h2>
                <p className="text-muted-foreground mb-8">
                  Prefer a different way to reach out? Here are some other options:
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-card to-muted/50 border border-border/40">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        For business inquiries and collaborations
                      </p>
                      <a href="mailto:hello@lilysuda.com" className="text-primary hover:text-primary/80 font-medium">
                        hello@lilysuda.com
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-card to-muted/50 border border-border/40">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-secondary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Response Time
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        I typically respond within 24-48 hours during weekdays. Thank you for your patience!
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/40">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Follow My Journey
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Connect with me on social media for daily inspiration, behind-the-scenes content, and community conversations
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="#"
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        Facebook
                      </a>
                      <a
                        href="#"
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        Twitter/X
                      </a>
                      <a
                        href="#"
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* FAQ Callout */}
                <div className="mt-8 p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Before reaching out, you might find your answer in our FAQ section covering common questions about content, collaborations, and more.
                  </p>
                  <a
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-foreground hover:text-primary transition-colors"
                  >
                    Visit Blog & FAQ
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to meaningful collaborations that align with my values of authenticity, wellness, and intentional living
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎙️</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Podcast Guest
                </h3>
                <p className="text-muted-foreground text-sm">
                  Invite me to share insights on parenting, wellness, or lifestyle topics
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">✍️</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Brand Partnerships
                </h3>
                <p className="text-muted-foreground text-sm">
                  Collaborate on products and services that genuinely benefit my community
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎤</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Speaking Events
                </h3>
                <p className="text-muted-foreground text-sm">
                  Book me for workshops, conferences, and speaking engagements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Stay in the Loop
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to my newsletter for weekly insights, exclusive content, and first access to new resources
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                No spam, unsubscribe anytime. Your privacy matters to me.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
