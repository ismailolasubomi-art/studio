
import type { ImagePlaceholder } from './placeholder-images';
import data from './placeholder-images.json';

// In a real application, you would fetch this data from a CMS or database.
const typedData: { placeholderImages: ImagePlaceholder[] } = data;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Our Schools' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact Us' },
];

export const schoolInfo = {
  name: "Fahad Memorial Int'l School",
  shortName: 'Fahad Memorial',
  address: "Bachirawa, Opposite Maryam S. Dantata's Mosque, Along Katsina Road, Kano, Nigeria",
  phone: '09037272329',
  phone2: '08068136287',
  email: 'info@fahadmemorial.com',
  tagline: 'Knowledge and Discipline',
  officeHours: 'Monday - Friday: 8:00 AM - 4:00 PM',
};

export const about = {
  welcome: "Fahad Memorial Int'l School is a distinguished educational institution located in the heart of Bachirawa, Kano. Since 1996, we have offered comprehensive education from Preschool through Secondary School, combining academic rigor with strong moral values. Our goal is to provide quality education that nurtures discipline, creativity, leadership, and a lifelong love of learning, preparing students not just for exams, but for life.",
  mission: "Our mission at Fahad Memorial Int'l School is to foster an environment of discipline, moral integrity, and academic excellence. We aim to inspire young minds to believe in themselves, embrace responsibility, and strive toward achieving success in their future endeavors.",
  vision: "Our vision is to become a center of excellence dedicated to imparting high-quality education that prepares younger generations for future societal needs and equips them with the skills to thrive in an ever-changing world.",
  principal: {
    name: "Hassan K. Ismail",
    title: "Proprietor (Secondary School)",
    message: "Welcome to Fahad Memorial Int'l School. Since our establishment in 1996, we have remained committed to one unwavering principle: education built on knowledge and discipline transforms lives. Our Secondary School program is designed to do more than prepare students for examinations, we prepare them for life. We believe that true education develops character alongside intellect, instilling values of integrity, responsibility, and excellence that last a lifetime. As we continue to evolve and meet the demands of modern education, our commitment to quality remains constant. Every student who walks through our doors is a future leader, and we take that responsibility seriously. Together with our dedicated staff and supportive parents, we are building a generation equipped not just with certificates, but with the wisdom, discipline, and resilience to succeed in any endeavor. Thank you for entrusting us with your children's education. We don't take it lightly."
  },
  proprietress: {
    name: "Maryam F. Ismail",
    title: "Proprietress (Primary/Preschool)",
    message: "Welcome to the Fahad Memorial family. There is something truly special about the early years of a child's education, it's where curiosity is sparked, confidence is built, and lifelong learning begins. In our Preschool and Primary sections, we understand that every child is unique, with their own pace, strengths, and potential. Our approach is simple: we create a nurturing environment where children feel safe to explore, ask questions, and grow both academically and emotionally. From Prep 1 to Grade 5, we lay strong foundations in literacy, numeracy, and character. We provide foundations that will support them throughout their educational journey. I am deeply proud of our teachers who pour their hearts into every lesson and our parents who partner with us in raising well-rounded children. Together, we are not just educating students; we are shaping the future. Thank you for choosing Fahad Memorial Int'l School. Let's build that future together."
  }
};

export const academicPrograms = [
  {
    name: "Preschool & Primary",
    description: "Our Preschool and Primary programs provide a warm, stimulating environment where the youngest learners discover the joy of learning. From Prep 1 through Grade 5, we focus on building foundational skills in literacy, numeracy, and social interaction while encouraging curiosity and creativity.",
    icon: 'Baby',
    image: 'academics-preschool',
    href: '/preschool-primary'
  },
  {
    name: "Junior School",
    description: "The Junior School years are critical for academic and personal development. Our JSS 1-3 program offers a well-rounded curriculum that strengthens core knowledge while developing critical thinking skills. Students benefit from engaging lessons, dedicated teachers, and a supportive atmosphere that encourages both academic excellence and character development.",
    icon: 'BookOpen',
    image: 'academics-primary',
    href: '/junior-school'
  },
  {
    name: "Senior School",
    description: "Our Senior School prepares students for success in WAEC and NECO examinations while developing them into critical thinkers and responsible citizens. Through rigorous academics, practical skills training, and values-based education, we ensure our SS 1-3 students graduate ready to face the challenges of higher education and beyond.",
    icon: 'GraduationCap',
    image: 'academics-secondary',
    href: '/senior-school',
  },
];

export const newsArticles = [
  {
    id: 1,
    title: "Food Bazzre 2025",
    slug: "food-bazzre-2025",
    date: "2025-11-24",
    summary: "A delicious celebration of culinary creativity! Our annual Food Bazzre will showcase the talents of our students and teachers.",
    image: "news-sports-day",
    content: `
      <p>Get ready for a delicious celebration! Our annual Food Bazzre returns on November 24th, 2025, showcasing the culinary creativity of our teachers and students. Participants will prepare and present their finest dishes to a panel of judges, competing for exciting cash prizes.</p>
      <p>This event is a wonderful opportunity for our school community to come together and celebrate the diverse cultures and talents within Fahad Memorial Int'l School. From traditional Nigerian dishes to international cuisine, there will be something to delight every palate.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">Event Details:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Date:</strong> Monday, November 24, 2025</li>
        <li><strong>Time:</strong> 10:00 AM - 3:00 PM</li>
        <li><strong>Location:</strong> School Grounds</li>
        <li><strong>Participation:</strong> Open to all students, teachers, and parent teams.</li>
      </ul>
      <p class="mt-4">It's a day filled with flavor, fun, and friendly competition. We invite all parents and family members to join us and support our budding chefs!</p>
    `
  },
  {
    id: 2,
    title: "Cultural Day Celebration",
    slug: "cultural-day-2024",
    date: "2024-02-18",
    summary: "A vibrant showcase of our rich cultural heritage. Students and staff celebrated with traditional attire, food, and performances.",
    image: "news-cultural-day",
    content: `
      <p>Our annual Cultural Day was a massive success! On February 18, 2024, our school grounds were transformed into a vibrant tapestry of colors, sounds, and traditions. Students and staff proudly wore stunning traditional attire, representing the diverse ethnic groups within our school community.</p>
      <p>The day was filled with exciting activities, including electrifying dance performances, dramatic presentations, and a delicious spread of traditional foods. It was a beautiful reminder of the unity in our diversity and the importance of preserving our cultural heritage.</p>
       <h3 class="font-bold text-lg mt-4 mb-2">Highlights of the Day:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Parade of Nations featuring various cultural outfits.</li>
        <li>Traditional dance-off between houses.</li>
        <li>A feast of cultural delicacies.</li>
        <li>Spoken word poetry and drama sketches.</li>
      </ul>
      <p class="mt-4">We thank all parents and guardians who joined us and made the day truly memorable. We look forward to an even grander celebration next year!</p>
    `
  },
  {
    id: 3,
    title: "WAEC Registration Now Open",
    slug: "waec-registration-open",
    date: "2025-12-31",
    summary: "The West African Examinations Council (WAEC) registration is now officially open for all eligible SS3 students. Registration is ongoing.",
    image: "news-waec-logo",
    content: `
      <p>The West African Examinations Council (WAEC) registration is now officially open for all eligible SS3 students. This is an important milestone in your academic journey, marking the first step towards your final secondary school examinations.</p>
      <p>Parents and students are advised to complete the registration process promptly to secure examination slots. The deadline for registration will be announced soon, but we encourage everyone to register early to avoid any last-minute rush.</p>
      <h3 class="font-bold text-lg mt-4 mb-2">How to Register:</h3>
      <ol class="list-decimal list-inside space-y-1">
        <li>Visit the school's administrative office to pick up the registration forms.</li>
        <li>Fill out the forms completely and accurately.</li>
        <li>Attach all required documents, including passport photographs and birth certificates.</li>
        <li>Submit the completed forms and payment to the admissions office.</li>
      </ol>
      <p class="mt-4">Our staff is available to provide guidance and support throughout the registration process. Don't miss this critical deadline—your future begins here!</p>
    `
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
