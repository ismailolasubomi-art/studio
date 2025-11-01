import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export const schoolInfo = {
  name: "Fahad Memorial Int'l School, Bachirawa",
  address: 'Bachirawa, Kano, Nigeria',
  phone: '+234 123 456 7890',
  email: 'info@fahadmemorial.com',
  shortName: "Fahad Memorial",
};

export const about = {
  mission: "To provide a nurturing and stimulating environment where students can achieve their full academic potential and develop into responsible, compassionate, and well-rounded individuals.",
  vision: "To be a leading educational institution in Nigeria, recognized for its academic excellence, innovative teaching methods, and commitment to character development.",
  principal: {
    name: "Dr. Amina Yusuf",
    message: "Welcome to Fahad Memorial International School! We are a community of learners dedicated to fostering academic excellence, creativity, and personal growth. Our passionate educators are committed to providing a supportive and engaging learning environment for every student. We believe in a holistic approach to education, nurturing not just the minds but also the hearts of our students. We invite you to explore our website and discover the vibrant life and opportunities our school offers. We look forward to welcoming you to our family."
  }
};

export const academicPrograms = [
  {
    name: "Preschool",
    description: "Our preschool program focuses on play-based learning to develop social skills, creativity, and a love for learning in our youngest students.",
    icon: 'Baby',
    image: 'academics-preschool',
  },
  {
    name: "Primary School",
    description: "We offer a comprehensive primary curriculum that builds a strong foundation in core subjects while encouraging critical thinking and collaboration.",
    icon: 'BookOpen',
    image: 'academics-primary',
  },
  {
    name: "Secondary School",
    description: "Our secondary school prepares students for higher education and future careers with a rigorous academic program, leadership opportunities, and a wide range of extracurricular activities.",
    icon: 'GraduationCap',
    image: 'academics-secondary',
  },
];

export const newsArticles = [
  {
    id: 1,
    title: "Annual Sports Day a Roaring Success",
    date: "2024-05-15",
    summary: "Students, parents, and staff came together for a day of thrilling competition and sportsmanship. The Blue House emerged as the overall champion.",
    image: "news-sports-day"
  },
  {
    id: 2,
    title: "Science Fair Showcases Young Innovators",
    date: "2024-04-22",
    summary: "From erupting volcanoes to robotic arms, the annual science fair was a testament to our students' creativity and scientific curiosity.",
    image: "news-science-fair"
  },
  {
    id: 3,
    title: "School Debate Team Wins Regional Championship",
    date: "2024-03-10",
    summary: "Our talented debaters have brought home the trophy after a stunning performance at the regional finals. Congratulations to the team!",
    image: "news-debate-team"
  },
  {
    id: 4,
    title: "Cultural Day Celebration",
    date: "2024-02-18",
    summary: "A vibrant display of diversity and heritage, our Cultural Day featured traditional music, dance, and food from around the world.",
    image: "news-cultural-day"
  }
];

export const getPlaceholderImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find((img) => img.id === id);
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
