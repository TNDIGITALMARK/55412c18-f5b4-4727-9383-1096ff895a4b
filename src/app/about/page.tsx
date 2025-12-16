import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Sparkles, Heart, BookOpen, Award } from 'lucide-react';

export default function AboutPage() {
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
                <Heart className="h-4 w-4" />
                About Lily
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground lg:text-7xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Helping You Live Your Best Life
              </h1>
              <p className="text-xl text-muted-foreground lg:text-2xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                From parenting to wellness, I'm here to share my journey with authenticity and heart
              </p>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img
                    src="/images/lily/img_3120.png"
                    alt="Lily Suda"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl p-6 shadow-xl max-w-xs">
                  <p className="text-sm font-semibold text-secondary-foreground">
                    "Every day is an opportunity to choose intention over habit, and growth over comfort."
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  My Journey
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi, I'm Lily Suda—a mom, wellness enthusiast, and lifelong learner on a mission to help others find balance in the beautiful chaos of everyday life.
                  </p>
                  <p>
                    My journey began like many others: navigating the overwhelming world of parenting advice, skincare ingredients, and wellness trends. I quickly realized that what I craved wasn't perfection—it was authenticity, practicality, and community.
                  </p>
                  <p>
                    That's why I started this platform. To share the lessons I've learned, the mistakes I've made, and the victories I've celebrated along the way. Whether you're here for parenting tips, wellness wisdom, or pet training insights (yes, Bella has taught me a thing or two!), I'm glad you found this space.
                  </p>
                  <p>
                    Through my blog, podcast, and upcoming books, I strive to create content that empowers you to make intentional choices—one small step at a time. Because at the end of the day, living well isn't about doing it all—it's about doing what matters most to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where It All Began */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Where It All Began
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Looking back at old photos always brings a smile to my face. This little girl playing outside had no idea what adventures were ahead—but she had the same curiosity and joy for life that I carry with me today.
                  </p>
                  <p>
                    Growing up, I learned the value of simplicity, family, and finding joy in the small moments. Those lessons shaped who I am as a parent, a wellness advocate, and a content creator.
                  </p>
                  <p>
                    Every experience—from childhood play to motherhood challenges—has contributed to the wisdom I share today. And I'm grateful for every step of the journey.
                  </p>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
                  <img
                    src="/images/lily/img_1955.png"
                    alt="Young Lily Suda"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 bg-primary/90 text-primary-foreground rounded-2xl px-6 py-3 shadow-xl">
                  <p className="text-sm font-semibold">
                    A Glimpse into the Past ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Family & Values */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/lily/img_3159.png"
                    alt="Lily Suda with family"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Family & Values
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Family is at the heart of everything I do. The relationships we nurture, the memories we create, and the traditions we build—these are the moments that truly matter.
                  </p>
                  <p>
                    I'm incredibly grateful for the support system that has shaped my journey. From childhood lessons to present-day wisdom, family has been my anchor through every season of life.
                  </p>
                  <p>
                    Through this platform, I hope to honor those values by helping other families build stronger connections, create meaningful routines, and find joy in the everyday moments we often take for granted.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Family First
                  </div>
                  <div className="bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Intentional Living
                  </div>
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Continuous Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                What I Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I create content that empowers, educates, and inspires across multiple platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border/40 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">✍️</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Blog Writing
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sharing authentic insights on parenting, wellness, and intentional living through thoughtful articles
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border/40 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">🎙️</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Podcasting
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Hosting conversations that inspire and empower parents and wellness enthusiasts
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border/40 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">📖</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Book Writing
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Creating transformative guides for both adults and children on health, fitness, and mindful living
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border/40 shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">🧘‍♀️</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                  Yoga Instruction
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Offering guided yoga sessions that transform both body and mind through movement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  My Approach
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide everything I create and share
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    Authenticity
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Real experiences, honest advice, and genuine connection—no filters, no facades
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    Education
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Evidence-based information that empowers you to make informed decisions
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    Empowerment
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Tools and insights that help you create the life you truly want to live
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary/10 to-primary/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join me on this journey of intentional living, authentic parenting, and holistic wellness
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1"
                >
                  Get in Touch
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground shadow-lg hover:bg-secondary/90 transition-all hover:-translate-y-1"
                >
                  Subscribe to Newsletter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
