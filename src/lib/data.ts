// Lily Suda Brand Hub - Mock Data
// Blog posts, podcast episodes, and featured content

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'parenting' | 'luxury-health' | 'pet-care' | 'lifestyle';
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  slug: string;
  description: string;
  guest?: string;
  guestBio?: string;
  duration: string;
  date: string;
  audioUrl: string;
  coverImage: string;
  keyTakeaways: string[];
  relatedPosts: string[];
}

export const categories = {
  parenting: { name: 'Parenting Tips', color: 'pink' },
  'luxury-health': { name: 'Luxury Health & Wellness', color: 'yellow' },
  'pet-care': { name: 'Pet Care & Training', color: 'pink' },
  lifestyle: { name: 'Lifestyle Insights', color: 'yellow' },
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Morning Routines with Toddlers',
    slug: 'mastering-morning-routines-with-toddlers',
    category: 'parenting',
    excerpt: 'Transform chaotic mornings into peaceful, productive starts with these proven strategies for busy parents.',
    content: 'Full article content here...',
    image: '/placeholder-blog-1.jpg',
    date: '2025-12-01',
    readTime: '8 min',
    tags: ['morning routines', 'toddlers', 'time management'],
  },
  {
    id: '2',
    title: 'Luxury Skincare Ingredients That Actually Work',
    slug: 'luxury-skincare-ingredients-that-actually-work',
    category: 'luxury-health',
    excerpt: 'Cut through the marketing hype and discover the scientifically-proven ingredients worth investing in.',
    content: 'Full article content here...',
    image: '/placeholder-blog-2.jpg',
    date: '2025-11-28',
    readTime: '12 min',
    tags: ['skincare', 'clean beauty', 'wellness'],
  },
  {
    id: '3',
    title: 'Training Techniques That Won Bella the Championship',
    slug: 'training-techniques-that-won-bella-the-championship',
    category: 'pet-care',
    excerpt: 'Behind-the-scenes look at the award-winning training methods that led to competition success.',
    content: 'Full article content here...',
    image: '/placeholder-blog-3.jpg',
    date: '2025-11-25',
    readTime: '10 min',
    tags: ['pet training', 'competition', 'bella'],
  },
  {
    id: '4',
    title: 'Creating Calm Bedtime Routines',
    slug: 'creating-calm-bedtime-routines',
    category: 'parenting',
    excerpt: 'End the bedtime battles with gentle, effective routines that help children wind down naturally.',
    content: 'Full article content here...',
    image: '/placeholder-blog-4.jpg',
    date: '2025-11-20',
    readTime: '7 min',
    tags: ['bedtime', 'sleep training', 'routines'],
  },
  {
    id: '5',
    title: 'Morning Rituals for Energy and Clarity',
    slug: 'morning-rituals-for-energy-and-clarity',
    category: 'luxury-health',
    excerpt: 'Discover the luxurious self-care practices that set the tone for a productive, energized day.',
    content: 'Full article content here...',
    image: '/placeholder-blog-5.jpg',
    date: '2025-11-15',
    readTime: '9 min',
    tags: ['wellness', 'morning rituals', 'self-care'],
  },
  {
    id: '6',
    title: 'Choosing Premium Pet Nutrition',
    slug: 'choosing-premium-pet-nutrition',
    category: 'pet-care',
    excerpt: 'Navigate the world of high-end pet food to find the best nutrition for your furry companions.',
    content: 'Full article content here...',
    image: '/placeholder-blog-6.jpg',
    date: '2025-11-10',
    readTime: '11 min',
    tags: ['pet nutrition', 'premium food', 'pet health'],
  },
  {
    id: '7',
    title: 'Handling Picky Eaters Without Stress',
    slug: 'handling-picky-eaters-without-stress',
    category: 'parenting',
    excerpt: 'Practical strategies to expand your child\'s palate without mealtime power struggles.',
    content: 'Full article content here...',
    image: '/placeholder-blog-7.jpg',
    date: '2025-11-05',
    readTime: '8 min',
    tags: ['picky eaters', 'nutrition', 'parenting'],
  },
  {
    id: '8',
    title: 'Clean Beauty Products Worth the Investment',
    slug: 'clean-beauty-products-worth-the-investment',
    category: 'luxury-health',
    excerpt: 'My curated list of clean, effective beauty products that deliver real results.',
    content: 'Full article content here...',
    image: '/placeholder-blog-8.jpg',
    date: '2025-11-01',
    readTime: '10 min',
    tags: ['clean beauty', 'product reviews', 'skincare'],
  },
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: '1',
    episodeNumber: 47,
    title: 'Mindful Parenting in Chaotic Times',
    slug: 'mindful-parenting-in-chaotic-times',
    description: 'Join Dr. Sarah Chen and me as we explore practical mindfulness techniques for overwhelmed parents. Learn how to stay present and calm even in the most hectic moments.',
    guest: 'Dr. Sarah Chen',
    guestBio: 'Clinical psychologist specializing in family wellness and mindfulness-based parenting',
    duration: '42:18',
    date: '2025-12-05',
    audioUrl: '/audio/episode-47.mp3',
    coverImage: '/placeholder-podcast-1.jpg',
    keyTakeaways: [
      'Three breathing techniques you can use during toddler tantrums',
      'How to create mindful moments in everyday routines',
      'Building emotional resilience in both parents and children',
    ],
    relatedPosts: ['1', '4'],
  },
  {
    id: '2',
    episodeNumber: 46,
    title: 'Luxury Health on a Budget',
    slug: 'luxury-health-on-a-budget',
    description: 'You don\'t need to break the bank to prioritize wellness. I share my favorite affordable luxury health practices that deliver premium results.',
    duration: '35:22',
    date: '2025-11-28',
    audioUrl: '/audio/episode-46.mp3',
    coverImage: '/placeholder-podcast-2.jpg',
    keyTakeaways: [
      'DIY spa treatments using kitchen ingredients',
      'Budget-friendly alternatives to expensive wellness treatments',
      'How to create a luxury wellness routine under $50/month',
    ],
    relatedPosts: ['2', '5'],
  },
  {
    id: '3',
    episodeNumber: 45,
    title: 'Pet Training Success Stories: Bella\'s Championship Journey',
    slug: 'pet-training-success-bella-championship',
    description: 'A deep dive into the training journey that led Bella to become a champion. I share the techniques, setbacks, and breakthroughs along the way.',
    duration: '38:45',
    date: '2025-11-20',
    audioUrl: '/audio/episode-45.mp3',
    coverImage: '/placeholder-podcast-3.jpg',
    keyTakeaways: [
      'Foundation training methods that build competition-level skills',
      'How to identify your pet\'s unique strengths',
      'Overcoming training plateaus with creativity and patience',
    ],
    relatedPosts: ['3', '6'],
  },
  {
    id: '4',
    episodeNumber: 44,
    title: 'Building Emotional Intelligence in Children',
    slug: 'building-emotional-intelligence-children',
    description: 'Learn how to help your children develop crucial emotional skills that will serve them throughout life.',
    guest: 'Maria Rodriguez, Child Development Expert',
    guestBio: 'Early childhood educator with 20+ years experience in emotional learning',
    duration: '44:12',
    date: '2025-11-12',
    audioUrl: '/audio/episode-44.mp3',
    coverImage: '/placeholder-podcast-4.jpg',
    keyTakeaways: [
      'Age-appropriate strategies for teaching emotional awareness',
      'The power of emotional vocabulary in young children',
      'Games and activities that build EQ naturally',
    ],
    relatedPosts: ['1', '7'],
  },
];

export const featuredContent = {
  hero: {
    title: 'Living Life with Intention',
    subtitle: 'Parenting wisdom, luxury wellness, and joy-filled moments',
    description: 'Welcome to my corner of the internet where I share authentic insights on raising children, prioritizing wellness, and celebrating the little victories—from morning routines to championship pet training.',
    ctaText: 'Explore Latest Posts',
    ctaLink: '/blog',
  },
  highlights: [
    {
      title: 'Latest Parenting Breakthrough',
      description: 'Discover the morning routine that transformed our family\'s chaos into calm',
      link: '/blog/mastering-morning-routines-with-toddlers',
      icon: '🌅',
    },
    {
      title: 'Luxury Wellness for Busy Moms',
      description: 'Premium self-care practices that fit into your packed schedule',
      link: '/blog/morning-rituals-for-energy-and-clarity',
      icon: '✨',
    },
    {
      title: 'Champion Pet Training Secrets',
      description: 'The proven techniques that led Bella to victory',
      link: '/blog/training-techniques-that-won-bella-the-championship',
      icon: '🏆',
    },
  ],
};
