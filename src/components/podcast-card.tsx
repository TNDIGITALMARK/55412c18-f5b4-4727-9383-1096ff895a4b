import Link from 'next/link';
import { PodcastEpisode } from '@/lib/data';
import { Calendar, Clock, Play } from 'lucide-react';

interface PodcastCardProps {
  episode: PodcastEpisode;
}

export function PodcastCard({ episode }: PodcastCardProps) {
  return (
    <Link
      href={`/podcast/${episode.slug}`}
      className="group block rounded-2xl overflow-hidden bg-card border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-square bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
            <Play className="relative h-16 w-16 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-foreground">
            Episode {episode.episodeNumber}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-heading)' }}>
          {episode.title}
        </h3>
        {episode.guest && (
          <p className="text-sm text-muted-foreground mb-2">
            with <span className="font-medium text-foreground">{episode.guest}</span>
          </p>
        )}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{episode.description}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(episode.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {episode.duration}
          </span>
        </div>
      </div>
    </Link>
  );
}
