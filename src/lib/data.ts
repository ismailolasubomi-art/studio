
import type { ImagePlaceholder } from './placeholder-images';
import data from './placeholder-images.json';

// In a real application, you would fetch this data from a CMS or database.
const typedData: { placeholderImages: ImagePlaceholder[] } = data;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact Us' },
];

export const schoolInfo = {
  name: "Fahad Memorial Int'l School",
  shortName: 'Fahad Memorial',
  address: 'Bachirawa, Kano, Nigeria',
  phone: '+234 123 456 7890',
  email: 'info@fahadmemorial.com',
  tagline: 'The British International School in Nigeria',
};

export const about = {
  welcome: "Fahad Memorial Int'l School is an all-through British International School located in the heart of Bachirawa, Kano. We offer a wealth of experience in British education, catering for children from Preschool to College. Our goal is to provide a world-class education that nurtures creativity, leadership, and a lifelong love of learning.",
  mission: "To provide a dynamic and inclusive learning environment that empowers students to become critical thinkers, compassionate leaders, and responsible global citizens.",
  vision: "To be a beacon of educational excellence, shaping future leaders and innovators for a better world.",
  principal: {
    name: "Mrs. Aisha Bello",
    message: "It is with great pride and excitement that I have been appointed as the founding Principal of Fahad Memorial Int'l School. Our school is a vibrant community where every child is valued and encouraged to reach their full potential. We are dedicated to maintaining a standard of excellence in all we do. A visit to our school will convince you of our commitment to providing a safe, friendly, and high-quality learning environment for your child."
  }
};

export const academicPrograms = [
  {
    name: "Preschool",
    description: "Nurturing the curiosity and creativity of our youngest learners.",
    icon: 'Baby',
    image: 'academics-preschool',
  },
  {
    name: "Junior School",
    description: "Building strong foundations in a supportive and engaging environment.",
    icon: 'BookOpen',
    image: 'academics-primary',
  },
  {
    name: "Senior School",
    description: "Developing critical thinkers and confident individuals ready for the future.",
    icon: 'GraduationCap',
    image: 'academics-secondary',
  },
];

export const newsArticles = [
  {
    id: 1,
    title: "Annual Sports Day a Roaring Success",
    date: "2024-05-15",
    summary: "A day of thrilling competition and sportsmanship.",
    image: "news-sports-day"
  },
  {
    id: 2,
    title: "Science Fair Showcases Young Innovators",
    date: "2024-04-22",
    summary: "A testament to our students' creativity and scientific curiosity.",
    image: "news-science-fair"
  },
  {
    id: 3,
    title: "WAEC Registration Ongoing",
    date: "2024-03-10",
    summary: "Registration for the West African Examinations Council (WAEC) is now open for all eligible students.",
    image: "news-debate-team"
  },
  {
    id: 4,
    title: "Cultural Day Celebration",
    date: "2024-02-18",
    summary: "A vibrant display of diversity and heritage.",
    image: "news-cultural-day"
  }
];

export const getPlaceholderImage = (id: string): ImagePlaceholder => {
    const image = typedData.placeholderImages.find((img) => img.id === id);
    if (!image) {
        // Return a default or throw an error
        return {
            id: 'default',
            description: 'Default placeholder image',
            imageUrl: 'https://picsum.photos/seed/default/1024/768',
            imageHint: 'placeholder'
        };
    }
    return image;
};
