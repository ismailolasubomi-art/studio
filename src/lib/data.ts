
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
  email: 'fahadmemorialschool@proton.me',
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
    title: "Upcoming Intercontinental Food Bazzre 2025",
    slug: "food-bazzre-2025",
    date: "2025-11-24",
    summary: "Experience a culinary journey around the world at our upcoming Intercontinental Food Bazzre! Savor authentic dishes from across the globe.",
    image: "news-sports-day",
    content: `
      <p class="text-center text-xl mb-4">🍽️ <strong>Intercontinental Food Bazzre at Fahad Memorial Int'l School!</strong> 🌍</p>
      <p class="text-center text-lg mb-6">Experience a Culinary Journey Around the World!</p>
      <p>We're excited to announce our upcoming Food Bazzre featuring an incredible selection of intercontinental cuisines that will take your taste buds on a global adventure!</p>
      
      <h3 class="font-bold text-lg mt-6 mb-2">Event Highlights:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Diverse Cuisines:</strong> Savor authentic dishes from Asia, Europe, Africa, the Americas, and the Middle East.</li>
        <li><strong>Fresh Preparations:</strong> All meals prepared with quality ingredients and traditional cooking methods.</li>
        <li><strong>Cultural Experience:</strong> Learn about different food cultures while you dine.</li>
        <li><strong>Family-Friendly:</strong> Something delicious for everyone!</li>
      </ul>

      <h3 class="font-bold text-lg mt-6 mb-2">Event Details:</h3>
      <ul class="list-none space-y-2">
          <li><strong>📅 Date:</strong> To Be Decided</li>  
          <li><strong>⏰ Time:</strong> To Be Decided</li>  
          <li><strong>📍 Venue:</strong> Fahad Memorial Int'l School Campus</li>
      </ul>

      <p class="mt-6">Whether you're craving Italian pasta, Asian stir-fry, Middle Eastern kebabs, African jollof, or American classics, <strong>we have it all under one roof!</strong></p>
      <p class="mt-4"><em>All proceeds support school programs and activities.</em></p>
      <p class="mt-6">For more information, contact the school administration.</p>
      <p class="text-center font-bold text-xl mt-8">See you there! Let's celebrate diversity, one plate at a time! 🎉</p>
    `
  },
  {
    id: 2,
    title: "Annual Inter-House Sport Activity",
    slug: "inter-house-sports-2025",
    date: "2025-07-19",
    summary: "A vibrant showcase of athleticism and team spirit. Students will compete in various sporting events.",
    image: "news-cultural-day",
    content: `
      <p>Our annual Inter-House Sports day was a massive success! The school grounds were transformed into a vibrant tapestry of colors, sounds, and sportsmanship as students and staff proudly represented their houses: Red, Blue, Yellow, and Green.</p>
      <p>The day was filled with exciting activities that showcased the athletic talents and team spirit of our students. From the opening march-past to the final awards ceremony, the energy was electrifying. It was a beautiful reminder of the unity in our diversity and the importance of physical education in building character and discipline.</p>

      <div class="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <img src="https://firebasestorage.googleapis.com/v0/b/studio-6593612663-293d1.firebasestorage.app/o/one.jpeg?alt=media&token=ef4f27f4-cbb0-4086-b532-22e2e802f346" alt="Students competing in a race" class="rounded-lg shadow-md object-cover w-full h-full">
        <img src="https://firebasestorage.googleapis.com/v0/b/studio-6593612663-293d1.firebasestorage.app/o/two.jpeg?alt=media&token=8ef713e6-9270-466c-a7d8-0e3f8bc02ac6" alt="Students in their house colors" class="rounded-lg shadow-md object-cover w-full h-full">
        <img src="https://firebasestorage.googleapis.com/v0/b/studio-6593612663-293d1.firebasestorage.app/o/three.jpeg?alt=media&token=3ad4b427-9b89-41e6-8420-396c46e3ee8d" alt="Award presentation" class="rounded-lg shadow-md object-cover w-full h-full">
      </div>

       <h3 class="font-bold text-xl mt-6 mb-3">Highlights of the Day:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Opening Ceremony:</strong> A colorful parade of houses, with each team marching proudly with their banners.</li>
        <li><strong>Track and Field Events:</strong> Fierce but friendly competition in sprints, relays, long jump, and high jump.</li>
        <li><strong>Novelty Races:</strong> Fun-filled events like the sack race and three-legged race that brought laughter and joy.</li>
        <li><strong>Award Ceremony:</strong> Recognition of outstanding athletes and the crowning of the overall winning house.</li>
      </ul>
      <p class="mt-6">We extend our heartfelt gratitude to all parents, guardians, and staff who joined us and contributed to making the day truly memorable. Your support and enthusiasm were invaluable. We look forward to an even grander celebration next year!</p>
    `
  },
  {
    id: 3,
    title: "WAEC Registration Now Open",
    slug: "waec-registration-open",
    date: "2025-11-04",
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








