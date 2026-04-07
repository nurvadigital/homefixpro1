export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export const SERVICES: Service[] = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Expert leak repairs, pipe installations, and emergency plumbing services.',
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description: 'Safe wiring, panel upgrades, and lighting installations by certified electricians.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gardening',
    title: 'Gardening & Landscaping',
    description: 'Professional lawn care, garden design, and seasonal maintenance.',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'painting',
    title: 'Painting & Decorating',
    description: 'Interior and exterior painting with premium finishes and attention to detail.',
    icon: 'Paintbrush',
    image: 'https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hvac',
    title: 'HVAC Services',
    description: 'Air conditioning and heating system repairs, maintenance, and installs.',
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cleaning',
    title: 'Deep Cleaning',
    description: 'Comprehensive residential cleaning services for a spotless home.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Signs You Need a Professional Plumber',
    excerpt: 'Don\'t wait for a flood. Learn the early warning signs of plumbing issues.',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800',
    category: 'Plumbing'
  },
  {
    id: '2',
    title: 'Energy Saving Tips for Your Home This Winter',
    excerpt: 'Simple steps to reduce your energy bills and stay warm.',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    category: 'Electrical'
  },
  {
    id: '3',
    title: 'Preparing Your Garden for the Spring Season',
    excerpt: 'A complete guide to getting your outdoor space ready for blooming.',
    date: 'Oct 18, 2023',
    image: 'https://images.unsplash.com/photo-1416870230247-d0a2906d896c?auto=format&fit=crop&q=80&w=800',
    category: 'Gardening'
  }
];
