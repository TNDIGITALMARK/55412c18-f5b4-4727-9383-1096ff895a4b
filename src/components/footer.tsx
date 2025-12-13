import Link from 'next/link';
import { Instagram, Youtube, Mail, Heart, Facebook } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Lily Suda
            </h3>
            <p className="text-muted-foreground text-sm">
              Sharing authentic lifestyle insights on parenting, wellness, and the joy of everyday moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  All Blog Posts
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-muted-foreground hover:text-primary transition-colors">
                  Podcast Episodes
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Lily
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog?category=parenting" className="text-muted-foreground hover:text-primary transition-colors">
                  Parenting Tips
                </Link>
              </li>
              <li>
                <Link href="/blog?category=luxury-health" className="text-muted-foreground hover:text-primary transition-colors">
                  Luxury Health
                </Link>
              </li>
              <li>
                <Link href="/blog?category=pet-care" className="text-muted-foreground hover:text-primary transition-colors">
                  Pet Care
                </Link>
              </li>
              <li>
                <Link href="/blog?category=lifestyle" className="text-muted-foreground hover:text-primary transition-colors">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/littletigerlillylife"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/lilyofthevalleyart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@tomlyblwl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <SiTiktok className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@LivingYourBestLifeWoth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@lilysuda.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              For collaborations and inquiries, reach out via email.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lily Suda. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 fill-primary text-primary" /> for families everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
