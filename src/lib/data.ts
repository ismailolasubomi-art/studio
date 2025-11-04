
import type { ImagePlaceholder } from './placeholder-images';
import data from './placeholder-images.json';

// In a real application, you would fetch this data from a CMS or database.
const typedData: { placeholderImages: ImagePlaceholder[] } = data;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Our Schools' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/gallery', label: 'LIS Life'},
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact Us' },
];

export const schoolInfo = {
  name: "Fahad Memorial Int'l School",
  shortName: 'Fahad Memorial',
  address: 'Bachirawa, opposite Maryam S. Dantata\'s Mosque, along Katsina Road, Kano.',
  phone: '+234 123 456 7890',
  email: 'info@fahadmemorial.com',
  tagline: 'Knowledge and Discipline',
};

export const about = {
  welcome: "Fahad Memorial Int'l School is a distinguished educational institution located in the heart of Bachirawa, Kano. Since 1996, we have offered comprehensive education from Preschool through Secondary School, combining academic rigor with strong moral values. Our goal is to provide quality education that nurtures discipline, creativity, leadership, and a lifelong love of learning-preparing students not just for exams, but for life.",
  mission: "Our mission at Fahad Memorial International School is to foster an environment of discipline, moral integrity, and academic excellence. We aim to inspire young minds to believe in themselves, embrace responsibility, and strive toward achieving success in their future endeavors.",
  vision: "Our vision is to become a center of excellence dedicated to imparting high-quality education that prepares younger generations for future societal needs and equips them with the skills to thrive in an ever-changing world.",
  principal: {
    name: "Hassan K. Ismail",
    title: "Proprietor (Secondary School)",
    message: "Welcome to Fahad Memorial International School. Since our establishment in 1996, we have remained committed to one unwavering principle: education built on knowledge and discipline transforms lives. Our Secondary School program is designed to do more than prepare students for examinations, we prepare them for life. We believe that true education develops character alongside intellect, instilling values of integrity, responsibility, and excellence that last a lifetime. As we continue to evolve and meet the demands of modern education, our commitment to quality remains constant. Every student who walks through our doors is a future leader, and we take that responsibility seriously. Together with our dedicated staff and supportive parents, we are building a generation equipped not just with certificates, but with the wisdom, discipline, and resilience to succeed in any endeavor. Thank you for entrusting us with your children's education. We don't take it lightly."
  }
};

export const academicPrograms = [
  {
    name: "Preschool",
    description: "Our Preschool program provides a warm, stimulating environment where the youngest learners discover the joy of learning. From Prep 1 through Grade 5 (including Prep 1, Prep 2, Prep 3, Pre-Elementary 1, Pre-Elementary 2, and Grades 1-5), we focus on building foundational skills in literacy, numeracy, and social interaction while encouraging curiosity and creativity.",
    icon: 'Baby',
    image: 'academics-preschool',
  },
  {
    name: "Junior School",
    description: "The Junior School years are critical for academic and personal development. Our JSS 1-3 program offers a well-rounded curriculum that strengthens core knowledge while developing critical thinking skills. Students benefit from engaging lessons, dedicated teachers, and a supportive atmosphere that encourages both academic excellence and character development.",
    icon: 'BookOpen',
    image: 'academics-primary',
  },
  {
    name: "Senior School",
    description: "Our Senior School prepares students for success in WAEC and NECO examinations while developing them into critical thinkers and responsible citizens. Through rigorous academics, practical skills training, and values-based education, we ensure our SS 1-3 students graduate ready to face the challenges of higher education and beyond.",
    icon: 'GraduationCap',
    image: 'academics-secondary',
  },
];

export const newsArticles = [
  {
    id: 1,
    title: "Food Bazzre",
    date: "2024-05-15",
    summary: "A delicious showcase of culinary talents from our students and parents.",
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
