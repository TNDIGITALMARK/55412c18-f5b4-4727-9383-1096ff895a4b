import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogCard } from '@/components/blog-card';
import { PodcastCard } from '@/components/podcast-card';
import { blogPosts, podcastEpisodes, featuredContent } from '@/lib/data';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3);
  const latestEpisodes = podcastEpisodes.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
          <div className="absolute inset-0 bg-[url('/generated/hero-background.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Welcome to my world
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground lg:text-7xl" style={{ fontFamily: 'var(--font-heading)' }}>
                {featuredContent.hero.title}
              </h1>
              <p className="mb-4 text-xl text-muted-foreground lg:text-2xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                {featuredContent.hero.subtitle}
              </p>
              <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
                {featuredContent.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={featuredContent.hero.ctaLink}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1"
                >
                  {featuredContent.hero.ctaText}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/podcast"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground shadow-lg hover:bg-secondary/90 transition-all hover:-translate-y-1"
                >
                  Listen to Podcast
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredContent.highlights.map((highlight, index) => (
                <Link
                  key={index}
                  href={highlight.link}
                  className="group relative rounded-2xl bg-gradient-to-br from-card to-muted/50 p-8 border border-border/40 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/generated/hero-background.png"
                    alt="Lily Suda - Lifestyle and Parenting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl p-6 shadow-xl max-w-xs">
                  <p className="text-sm font-semibold text-secondary-foreground">
                    "Intentional living is about making choices that align with your values—one morning routine at a time."
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Hi, I'm Lily
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a mom, wellness enthusiast, and proud pet parent to Bella, my champion-trained companion. My journey in parenting, luxury health, and mindful living has taught me that the small moments matter most.
                  </p>
                  <p>
                    Through this platform, I share authentic experiences—from navigating toddler tantrums to discovering skincare ingredients that actually work. My goal is to help you find balance between aspiration and reality, luxury and practicality.
                  </p>
                  <p>
                    Whether you're here for parenting tips, wellness wisdom, or pet training insights, I'm glad you found this space. Let's grow together.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Parenting Expert
                  </div>
                  <div className="bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Wellness Advocate
                  </div>
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Pet Trainer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Latest from the Blog
                </h2>
                <p className="text-muted-foreground text-lg">
                  Insights and tips for your lifestyle journey
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                View all posts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                View all posts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Podcast Episodes */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Recent Podcast Episodes
                </h2>
                <p className="text-muted-foreground text-lg">
                  Conversations that inspire and empower
                </p>
              </div>
              <Link
                href="/podcast"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                All episodes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestEpisodes.map((episode) => (
                <PodcastCard key={episode.id} episode={episode} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                All episodes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                What Readers Are Saying
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of parents, wellness enthusiasts, and pet lovers who have transformed their daily routines
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border/40 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-secondary text-2xl">★★★★★</span>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "Lily's morning routine tips completely transformed our family's chaotic starts. We're calmer, more connected, and actually enjoy our mornings now!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Sarah Mitchell</p>
                    <p className="text-xs text-muted-foreground">Mom of 2 toddlers</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border/40 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-secondary text-2xl">★★★★★</span>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "The skincare advice is gold! I finally understand what ingredients work and which are just marketing. My skin has never looked better."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground font-semibold">
                    EC
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Emma Chen</p>
                    <p className="text-xs text-muted-foreground">Wellness enthusiast</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border/40 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-secondary text-2xl">★★★★★</span>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "Bella's training journey inspired me to start training my own dog. The techniques are practical, proven, and easy to implement. Thank you!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    MR
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Michael Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Pet trainer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Join the Community
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get weekly insights on parenting, wellness, and living life with intention delivered straight to your inbox.
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
