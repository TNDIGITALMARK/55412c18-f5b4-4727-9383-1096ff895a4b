import Link from 'next/link';
import { BlogPost, categories } from '@/lib/data';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const categoryInfo = categories[post.category];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl overflow-hidden bg-card border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[16/9] bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <span className="text-6xl opacity-20">{post.category === 'parenting' ? '👶' : post.category === 'luxury-health' ? '✨' : post.category === 'pet-care' ? '🐾' : '💫'}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
              categoryInfo.color === 'pink'
                ? 'bg-primary/10 text-primary'
                : 'bg-secondary/10 text-secondary-foreground'
            }`}
          >
            {categoryInfo.name}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-heading)' }}>
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
