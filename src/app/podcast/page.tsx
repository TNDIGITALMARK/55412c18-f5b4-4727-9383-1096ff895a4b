import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PodcastCard } from '@/components/podcast-card';
import { podcastEpisodes } from '@/lib/data';
import { Headphones, Rss, ExternalLink } from 'lucide-react';

export default function PodcastPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Headphones className="h-4 w-4" />
                The Lily Suda Podcast
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Conversations That Inspire
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join me for authentic conversations about parenting, wellness, and the journey of intentional living.
                New episodes every week featuring experts, real stories, and practical wisdom.
              </p>

              {/* Platform Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  Apple Podcasts
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  Spotify
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="/rss"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  <Rss className="h-4 w-4" />
                  RSS Feed
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Episode */}
        {podcastEpisodes.length > 0 && (
          <section className="py-16 lg:py-24 bg-background border-b border-border/40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Latest Episode
                </h2>
                <p className="text-muted-foreground">
                  The newest conversation you won't want to miss
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-square bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 rounded-3xl relative overflow-hidden flex items-center justify-center shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                      <div className="relative h-32 w-32 rounded-full bg-background/90 backdrop-blur flex items-center justify-center">
                        <Headphones className="h-16 w-16 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur px-4 py-2 text-sm font-semibold text-foreground">
                      Episode {podcastEpisodes[0].episodeNumber}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                    {podcastEpisodes[0].title}
                  </h3>
                  {podcastEpisodes[0].guest && (
                    <p className="text-lg text-muted-foreground mb-4">
                      with <span className="font-semibold text-foreground">{podcastEpisodes[0].guest}</span>
                    </p>
                  )}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {podcastEpisodes[0].description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Takeaways:</h4>
                    <ul className="space-y-2">
                      {podcastEpisodes[0].keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span>{podcastEpisodes[0].duration}</span>
                    <span>•</span>
                    <span>{new Date(podcastEpisodes[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg inline-flex items-center gap-2">
                    <Headphones className="h-5 w-5" />
                    Listen Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Episodes */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                All Episodes
              </h2>
              <p className="text-muted-foreground">
                Browse the complete archive of conversations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcastEpisodes.slice(1).map((episode) => (
                <PodcastCard key={episode.id} episode={episode} />
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Never Miss an Episode
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe on your favorite podcast platform and get notified when new episodes drop.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  Subscribe on Apple Podcasts
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  Follow on Spotify
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
