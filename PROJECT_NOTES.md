# Lily Suda Personal Brand Hub

A beautiful lifestyle blog and personal brand website featuring clean pink and yellow design aesthetic.

## Features Implemented

### Design System
- **Color Palette**: Soft blush pink (#EC9AAA) and warm yellow (#F5D76E)
- **Typography**: Playfair Display for elegant headings, Inter for modern body text
- **Spacing**: Generous white space for luxury feel
- **Components**: Rounded corners (0.75rem), subtle shadows, smooth transitions

### Pages

#### Homepage (`/`)
- Hero section with gradient background
- Featured content highlights (3 cards)
- Latest blog posts (3 posts)
- Recent podcast episodes (2 episodes)
- Newsletter signup section
- Responsive navigation with mobile menu

#### Blog Page (`/blog`)
- Category filtering (Parenting, Luxury Health, Pet Care, Lifestyle)
- Search functionality
- Responsive grid layout
- Category badges with brand colors
- Metadata (date, read time)

#### Podcast Page (`/podcast`)
- Featured latest episode with detailed view
- Episode library grid
- Platform links (Apple Podcasts, Spotify, RSS)
- Episode cards with play icons
- Subscribe call-to-action

### Components
- `Header`: Sticky navigation with mobile menu
- `Footer`: Multi-column footer with social links
- `BlogCard`: Reusable blog post card
- `PodcastCard`: Reusable podcast episode card

### Data Structure
All content stored in `src/lib/data.ts`:
- 8 blog posts across 4 categories
- 4 podcast episodes with guest information
- Featured content and hero text
- Category definitions

## Design Highlights

### Color Usage
- **Primary (Pink)**: Buttons, links, category badges for parenting/pet content
- **Secondary (Yellow)**: Accent buttons, category badges for health/lifestyle content
- **Cards**: Soft pink tint (HSL 340 40% 98%)
- **Borders**: Pink-tinted gray (HSL 340 20% 88%)

### Typography Scale
- **H1**: 2.5rem - 4rem (responsive with clamp)
- **H2**: 2rem - 3rem
- **H3**: 1.5rem - 2rem
- **Body**: 1rem with 1.7 line-height
- **Headings**: Playfair Display, serif
- **Body**: Inter, sans-serif

### Interactive Elements
- Hover effects with gentle color transitions (pink → yellow)
- Smooth transform animations (-1px translateY on hover)
- Rounded buttons with shadow-lg
- Focus states with ring in brand colors

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- Touch-optimized navigation
- Smooth scrolling enabled

## Content Organization

### Blog Categories
1. **Parenting Tips**: Morning routines, bedtime, picky eaters
2. **Luxury Health & Wellness**: Skincare, rituals, clean beauty
3. **Pet Care & Training**: Bella's championship, nutrition
4. **Lifestyle Insights**: General lifestyle content

### Podcast Episodes
- Episode 47: Mindful Parenting in Chaotic Times
- Episode 46: Luxury Health on a Budget
- Episode 45: Pet Training Success Stories
- Episode 44: Building Emotional Intelligence in Children

## Future Enhancements
- Individual blog post pages (`/blog/[slug]`)
- Individual podcast episode pages (`/podcast/[slug]`)
- Audio player integration
- Comment system
- Newsletter API integration
- Social media sharing
- Search with autocomplete
- Related content suggestions
