"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { useLayoutEffect } from "react";
import {
    ArrowLeft,
    Target,
    Lightbulb,
    Zap,
    Instagram,
    Linkedin,
    Calendar,
    ChevronRight,
    Users,
    Camera,
} from "lucide-react";
import ElegantShape from "@/components/elegantShape";
import { Dancing_Script } from "next/font/google";

// ✅ Font import at module scope
const dancingScript = Dancing_Script({
    weight: ["400"],
    subsets: ["latin"],
});

const ClubPage = () => {
    const params = useParams();
    const router = useRouter();

    // 🎯 Full Club Data
    const clubs = {
        alfa: {
            id: 1,
            name: "ALFA",
            tagline: "Code • Create • Conquer",
            banner: "/WebAssets/alfa/alfa-logos/WhatsApp Image 2025-12-28 at 9.03.33 PM.jpeg",
            logo: "/WebAssets/alfa/alfa-logos/WhatsApp Image 2025-12-28 at 9.03.33 PM.jpeg",
            established: "2022",
            inst: "https://www.instagram.com/alfa.coding.tips?igsh=MXBmcDdsbnlucHlmdg==",
            linkdin: "https://www.linkedin.com/company/alfa-the-coding-club-of-tips/",
            description:
                "ALFA Coding Club is the official coding club of the CS & IT Department at Trinity Institute of Professional Studies. It serves as a hub for tech enthusiasts, fostering a collaborative learning environment through workshops, hackathons, and coding competitions. The club empowers students with hands-on experience in web development, app development, competitive programming, and emerging technologies.",
            mission:
                "Our mission is to cultivate a community of passionate developers by fostering innovation, collaboration, and continuous learning. We aim to empower students with hands-on experience in coding, problem-solving, and emerging technologies through workshops, hackathons, and mentorship. By bridging the gap between academia and industry, we strive to nurture future-ready tech professionals who can excel in the ever-evolving digital world.",
            vision:
                "To be a leading student-driven tech community that inspires creativity, innovation, and excellence in coding. We envision a future where every member is equipped with industry-relevant skills, fostering a culture of problem-solving and leadership. Through continuous learning and collaboration, we aim to make a lasting impact in the tech ecosystem, empowering students to become pioneers of the digital era.",
            activities: [
                "Conduct hands-on workshops on web development, app development, AI/ML, cybersecurity, and more.",
                "Organize coding challenges and hackathons to encourage problem-solving and innovation.",
                "Invite industry experts to share insights on emerging technologies and career guidance.",
            ],
            team: [
                {
                    name: "Dhruv Pal",
                    role: "President",
                    image: "/WebAssets/alfa/alfa-core/img18.png",
                },
                {
                    name: "Sushil Kumar",
                    role: "Vice President",
                    image: "/WebAssets/alfa/alfa-core/img5.png",
                },
                {
                    name: "Abhimanyu Tyagi",
                    role: "Club Administrator",
                    image: "/WebAssets/alfa/alfa-core/img4.png",
                },
                {
                    name: "Rujul Varshney",
                    role: "Secretary",
                    image: "/WebAssets/alfa/alfa-core/img7.png",
                },
                {
                    name: "Harsh",
                    role: "Secretary",
                    image: "/WebAssets/alfa/alfa-core/img6.png",
                },
                {
                    name: "Mahi",
                    role: "Assistant Secretary",
                    image: "/WebAssets/alfa/alfa-core/WhatsApp Image 2026-01-30 at 8.00.40 AM.jpeg",
                },
                {
                    name: "Abhinav Mehta",
                    role: "Core Member",
                    image: "/WebAssets/alfa/alfa-core/Abhinav Mehta_ExecutiveHead.jpeg",
                },
                {
                    name: "Sania",
                    role: "Core Member",
                    image: "/WebAssets/alfa/alfa-core/img 19.jpg",
                },
                {
                    name: "Prince Singh",
                    role: "Core Member",
                    image: "/WebAssets/alfa/alfa-core/WhatsApp Image 2026-01-30 at 7.57.24 AM.jpeg",
                },
                {
                    name: "Sahil Handa",
                    role: "Core Member",
                    image: "/WebAssets/alfa/alfa-core/WhatsApp Image 2026-01-30 at 7.58.07 AM.jpeg",
                },
                {
                    name: "Megha Bhagat",
                    role: "Core Member",
                    image: "/WebAssets/alfa/alfa-core/img13.png",
                },
                {
                    name: "Kashvi",
                    role: "Core Member",
                    image: "/WebAssets/alfa/alfa-core/WhatsApp Image 2026-01-30 at 7.57.24 AM (1).jpeg",
                },
                 {
                    name: "Yugal Bisht",
                    role: "Core Member",
                    image: "/WebAssets/alfa/alfa-core/img11.png",
                },
            ],
            gallery: [
                { src: "/WebAssets/alfa/alfa-gallery/IMG-20251030-WA0079.jpg", alt: "image 1" },
                { src: "/WebAssets/alfa/alfa-gallery/img1.png", alt: "image 2" },
                { src: "/WebAssets/alfa/alfa-gallery/img2.jpg", alt: "image 3" },
                { src: "/WebAssets/alfa/alfa-gallery/img3.jpg", alt: "image 4" },
                { src: "/WebAssets/alfa/alfa-gallery/img3.png", alt: "image 5" },
                { src: "/WebAssets/alfa/alfa-gallery/WhatsApp Image 2025-09-07 at 22.13.56_a2188da5.jpg", alt: "image 6" },
            ],
            upcomingEvents: [
                {
                    id: "fire-bound",
                    name: "Firebound",
                    description: "forged in fire, unleashed in strength",
                },
                {
                    id: "codex-build",
                    name: "CODEX Build",
                    description: "Code the future, one byte at a time.",
                },
                {
                    id: "the-404-makeover",
                    name: "The 404 Makeover",
                    description: "Lost in Code. Found in Design.",
                },
            ],
        },

        cyberknight: {
            id: 2,
            name: "Cyber Knight",
            tagline: "We Defend We Protect",
            banner: "/WebAssets/cyberknight/ck-logos/WhatsApp Image 2026-01-30 at 7.04.16 AM.jpeg",
            logo: "/WebAssets/cyberknight/ck-logos/Cyber Knight logo.jpg",
            established: "2022",
            inst: "https://www.instagram.com/cyberknight.tips?igsh=YTJtZjJmcWttYmds",
            linkdin: "https://www.linkedin.com/company/cyber-knighttips/",
            description:
                "CYBER KNIGHT is the Networking and Security club of Trinity Institute of Professional Studies.Cyber Knight focuses on spreading awareness on cyber security and gives opportunities to the students who are enthusiastic about cyber security world and wanted to explore about Ethical hacking, Security and Networking by taking various seminars and sessions.",
            mission:
                "As Cyber Knight continues to grow, our vision is to become a leading cybersecurity community that empowers individuals with the knowledge and skills to defend against evolving cyber threats. We aim to host advanced workshops, hackathons, and ethical hacking challenges to enhance practical learning. Collaborating with industry experts and organizations, we strive to provide mentorship, certifications, and career opportunities for our members. Our long-term goal is to develop innovative cybersecurity solutions and raise awareness about digital safety, ensuring a secure cyber landscape for all. Together, we stand as the guardians of the digital realm.",
            vision:
                "The vision of Cyber Knight is to build a secure and resilient community equipped with the knowledge and skills to protect themselves and society from evolving cyber threats. By fostering awareness, promoting best practices, and encouraging proactive cybersecurity measures, Cyber Knight aims to create a safer digital environment where individuals and organizations can navigate the online world with confidence and security.",
            activities: [
                "At Cyber Knight, we focus on building a strong foundation in cybersecurity and networking.",
                "We offer interactive workshops, expert-led sessions, and knowledge-sharing events to enhance practical skills.",
                "Our club also conducts awareness programs in schools and NGOs on online safety and digital security.",
                "Through competitions and Capture The Flag (CTF) challenges, we provide students with opportunities to learn, collaborate, and grow in the cybersecurity field.",
            ],
            team: [
                {
                    name: "Madhur Sindhwani",
                    role: "President",
                    image: "/WebAssets/cyberknight/ck-core/madhur sindhwani_president.jpeg",
                },
                {
                    name: "Angel Kaur Kalra",
                    role: "Vice President",
                    image: "/WebAssets/cyberknight/ck-core/angel kaur kalra_vice president.jpg",
                },
                {
                    name: "Tamanna Vats",
                    role: "Secretary",
                    image: "/WebAssets/cyberknight/ck-core/Tamanna vats_Secretary.png",
                },
                {
                    name: "Rahul Pathak",
                    role: "Joint Secretary",
                    image: "/WebAssets/cyberknight/ck-core/RAHUL PATHAK_JOINT SECRETARY_.jpg",
                },
                 {
                    name: "Bargavi",
                    role: "Joint Secretary",
                    image: "/WebAssets/cyberknight/ck-core/bargavi_joint secretary 2.jpg",
                },
                 {
                    name: "Abhinav Mehta",
                    role: "Executive Head",
                    image: "/WebAssets/cyberknight/ck-core/Abhinav Mehta_ExecutiveHead.jpeg",
                },
                 {
                    name: "Shivam",
                    role: "Management Head",
                    image: "/WebAssets/cyberknight/ck-core/shivam_management head.jpg",
                },
                 {
                    name: "Rishav",
                    role: "Project Head",
                    image: "/WebAssets/cyberknight/ck-core/rishav_project head.jpg",
                },
            ],
            gallery: [
                { src: "/WebAssets/cyberknight/ck-gallery/1.jpeg", alt: "image 1" },
                { src: "/WebAssets/cyberknight/ck-gallery/5 (1).jpeg", alt: "image 2" },
                { src: "/WebAssets/cyberknight/ck-gallery/5.jpeg", alt: "image 2" },
                { src: "/WebAssets/cyberknight/ck-gallery/9.jpeg", alt: "image 3" },
                { src: "/WebAssets/cyberknight/ck-gallery/IMG-20251029-WA0078.jpg", alt: "image 4" },
                { src: "/WebAssets/cyberknight/ck-gallery/IMG-20251029-WA0090.jpg", alt: "image 5" },
            ],
            upcomingEvents: [
                {
                    id: "shadow-trace",
                    name: "Shadow Trace",
                    description: "Uncover the system behind the data",
                },
                {
                    id: "cyber-tok",
                    name: "Cyber TOK",
                    description: "Think Fast. Create Smart. Solve Sharp.",
                },
            ],
        },

        apex: {
            id: 3,
            name: "APEX",
            tagline: "",
            banner: "/WebAssets/alfa/alfa-logos/WhatsApp Image 2025-12-28 at 9.03.33 PM.jpeg",
            logo: "/WebAssets/apex/apex-logos/WhatsApp Image 2026-01-15 at 2.14.11 PM.jpeg",
            established: "2022",
            description:
                "APEX - Designing Society of Trinity, Dwarka, is the college’s creative arts hub, promoting innovation and collaboration in design, video production, photography, and more. The society offers students a platform to develop their skills through workshops, competitions, and hands-on projects across various creative fields.",
            mission:
                "To provide valuable internships, teach new software, and foster collaborations with institutes and companies for career growth.",
            vision:
                "To bridge education and industry, creating opportunities for skill development, real-world experience, and career advancement.",
            activities: [
                "Designing Society of Trinity, Dwarka, we foster creativity and innovation across multiple artistic disciplines.",
                "Founded in 2022, we unite students passionate about design and the arts, offering a platform to explore and develop skills in areas such as Graphic Design, Video Production, 3D Modelling, UI/UX Design, Photography, and Music Production.",
                "Our society emphasizes collaboration and learning, enabling members to work together, push creative boundaries, and grow both individually and as a team.",
                "Through our thriving departments, we provide opportunities for students to engage in real-world projects, enhance their creativity, and expand their artistic expertise.",
            ],
            team: [
                {
                    name: "Aryan Sharma",
                    role: "President",
                    image: "/WebAssets/team/aryan-sharma.jpg",
                },
                {
                    name: "Priya Patel",
                    role: "Vice President",
                    image: "/WebAssets/team/priya-patel.jpg",
                },
                {
                    name: "Rahul Verma",
                    role: "Technical Lead",
                    image: "/WebAssets/team/rahul-verma.jpg",
                },
                {
                    name: "Neha Singh",
                    role: "Event Coordinator",
                    image: "/WebAssets/team/neha-singh.jpg",
                },
            ],
            gallery: [
                { src: "/WebAssets/apex/apex-gallery/20250830_122916.jpg", alt: "image 1" },
                { src: "/WebAssets/apex/apex-gallery/20250830_124446.jpg", alt: "image 2" },
                { src: "/WebAssets/apex/apex-gallery/IMG_2166.HEIC", alt: "image 3" },
                { src: "/WebAssets/apex/apex-gallery/IMG_2185.HEIC", alt: "image 4" },
                { src: "/WebAssets/apex/apex-gallery/WhatsApp Image 2026-01-24 at 3.35.06 PM.jpeg", alt: "image 5" },
                { src: "/WebAssets/apex/apex-gallery/WhatsApp Image 2026-01-24 at 3.37.47 PM.jpeg", alt: "image 6" },
                { src: "/WebAssets/apex/apex-gallery/WhatsApp Image 2026-01-24 at 3.39.07 PM.jpeg", alt: "image 7" },
                { src: "/WebAssets/apex/apex-gallery/WhatsApp Image 2026-01-24 at 3.49.53 PM.jpeg", alt: "image 8" },
                { src: "/WebAssets/apex/apex-gallery/WhatsApp Image 2026-01-24 at 3.50.23 PM.jpeg", alt: "image 9" },
                { src: "/WebAssets/apex/apex-gallery/WhatsApp Image 2026-01-24 at 3.50.57 PM.jpeg", alt: "image 10" },

            ],
            upcomingEvents: [
                {
                    id: "brand-bot",
                    name: "Brand Bot",
                    description: "Prompt the Future. Pitch the Vision.",
                },
                {
                    id: "pixel-pulse",
                    name: "Pixel Pulse",
                    description: "Freeze the Frame. Master the Edit.",
                },
                {
                    id: "the-404-makeover",
                    name: "The 404 Makeover",
                    description: "Lost in Code. Found in Design.",
                },
            ],
        },
        bloggingclub: {
            id: 4,
            name: "FactSmith",
            tagline: "",
            banner: "/WebAssets/factsmith/factsmith-logos/WhatsApp Image 2026-01-30 at 7.03.55 AM.jpeg",
            logo: "/WebAssets/factsmith/factsmith-logos/WhatsApp Image 2026-01-23 at 5.13.52 PM.jpeg",
            established: "2023",
            description:
                "FactSmith is a student-driven research club under the CS & IT Department at Trinity Institute of Professional Studies our motto is to Innovating for a Better Future. The club is dedicated to fostering analytical thinking, innovation, and knowledge-sharing among students. It provides a platform for aspiring researchers to explore emerging technologies, conduct research, and participate in academic discussions.",
            mission:
                "FactSmith aims to foster a culture of research, critical thinking, and innovation among students of the CS & IT Department. The club is dedicated to providing a platform for knowledge-sharing, skill development, and academic exploration through workshops, seminars, research initiatives, and collaborative projects. By bridging the gap between theoretical learning and practical application, FactSmith strives to equip students with the necessary analytical and technical skills to excel in the field of technology and research.",
            vision:
                "To be a leading student-driven research club that nurtures intellectual curiosity, encourages interdisciplinary collaboration, and contributes to technological advancements. FactSmith envisions empowering students to become future researchers, data analysts, and tech innovators who drive impactful solutions in the digital era.",
            activities: [
                "Foster a Culture of Research: The research club can promote a culture of research among its members and encourage them to engage in research activities.",
                "Enhance Research Skills: The club can provide opportunities for members to develop their research skills through training sessions, workshops, and mentorship.",
                "Collaborate on Research Projects: Members can collaborate on research projects and share their knowledge and expertise with each other to produce high-quality research output.",
                "Encourage Interdisciplinary Research: The club can encourage members from different academic disciplines to come together and collaborate on interdisciplinary research projects.",
                "Publish Research Papers: Members can work together to produce research papers and submit them to academic journals or conferences.",
                "Participate in Research Competitions: The club can participate in research competitions and challenges to showcase their skills and knowledge.",
                "Create a platform for Discussion and Debate: The club can create a platform for members to discuss and debate various research topics, exchange ideas, and get feedback on their work.",
            ],
            team: [
                {
                    name: "Aryan Sharma",
                    role: "President",
                    image: "/WebAssets/team/aryan-sharma.jpg",
                },
                {
                    name: "Priya Patel",
                    role: "Vice President",
                    image: "/WebAssets/team/priya-patel.jpg",
                },
                {
                    name: "Rahul Verma",
                    role: "Technical Lead",
                    image: "/WebAssets/team/rahul-verma.jpg",
                },
                {
                    name: "Neha Singh",
                    role: "Event Coordinator",
                    image: "/WebAssets/team/neha-singh.jpg",
                },
            ],
            gallery: [
                { src: "/WebAssets/factsmith/factsmith-gallery/4baeba1d-73a7-4c09-af5f-256582bd3c9b.jpg", alt: "image 1" },
                { src: "/WebAssets/factsmith/factsmith-gallery/f6139eb5-8ba1-420c-b204-9cb3e38c9efd.jpg", alt: "image 2" },
                { src: "/WebAssets/factsmith/factsmith-gallery/IMG-20250828-WA0034.jpg", alt: "image 3" },
                { src: "/WebAssets/factsmith/factsmith-gallery/IMG-20250828-WA0105.jpg", alt: "image 4" },
                { src: "/WebAssets/factsmith/factsmith-gallery/IMG-20250901-WA0081.jpg", alt: "image 5" },
                { src: "/WebAssets/factsmith/factsmith-gallery/IMG-20250901-WA0121.jpg", alt: "image 6" },
                { src: "/WebAssets/factsmith/factsmith-gallery/Videoshot_20250812_224529.jpg", alt: "image 7" },
            ],
            upcomingEvents: [
                {
                    id: "the-scholar-stage",
                    name: "The Scholar’s Stage",
                    description: "Presenting Perspectives, Defining Possibilities!",
                },
                {
                    id: "pitch-perfect",
                    name: "Pitch Perfect",
                    description: "Innovate. Pitch. Inspire.",
                },
            ],
        },
        researchclub: {
            id: 5,
            name: "Arclight Blogging Club",
            tagline: "",
            banner: "/WebAssets/alfa/alfa-logos/WhatsApp Image 2025-12-28 at 9.03.33 PM.jpeg",
            logo: "/WebAssets/arclight/arclight-logos/WhatsApp Image 2026-01-23 at 5.14.50 PM.jpeg",
            established: "2023",
            description:
                "Arclight is the official blogging club of the CS & IT department at Trinity Institute of Professional Studies. The club encourages creativity, collaboration, and communication, serving as a platform for students to share ideas, experiences, and showcase their literary talents in various forms, from technical writing to storytelling.",
            mission:
                "To create a vibrant and inclusive platform for students to express their thoughts and showcase their writing talents.",
            vision:
                "To establish Arclight as a leading blogging community that inspires creativity and intellectual discussions among students.",
            activities: [
                "We host various events such as short story writing competitions, collaborate with other college clubs for events, and maintain a blog covering academic, cultural, and social topics. The club provides a space for students to improve their writing and digital content creation skills.",
            ],
            team: [
                {
                    name: "Aryan Sharma",
                    role: "President",
                    image: "/WebAssets/team/aryan-sharma.jpg",
                },
                {
                    name: "Priya Patel",
                    role: "Vice President",
                    image: "/WebAssets/team/priya-patel.jpg",
                },
                {
                    name: "Rahul Verma",
                    role: "Technical Lead",
                    image: "/WebAssets/team/rahul-verma.jpg",
                },
                {
                    name: "Neha Singh",
                    role: "Event Coordinator",
                    image: "/WebAssets/team/neha-singh.jpg",
                },
            ],
            gallery: [
                { src: "/WebAssets/arclight/arclight-gallery/IMG_1076.JPG", alt: "image 1" },
                { src: "/WebAssets/arclight/arclight-gallery/IMG-20250904-WA0016.jpg", alt: "image 2" },
                { src: "/WebAssets/arclight/arclight-gallery/IMG-20250905-WA0012.jpg", alt: "image 3" },
                { src: "/WebAssets/arclight/arclight-gallery/IMG-20250917-WA0043.jpg", alt: "image 4" },
                { src: "/WebAssets/arclight/arclight-gallery/IMG-20250917-WA0051.jpg", alt: "image 5" },
            ],
            upcomingEvents: [
                {
                    id: "genre-jeopardy",
                    name: "Genre Jeopardy",
                    description: "Greater the Risk, Sweeter the victory",
                },
                {
                    id: "hack-my-mind",
                    name: "Hack My Mind",
                    description: "Soch lao, card uthao, dimag hilao",
                },
            ],
        },
    };
    const clubId = params?.id?.toLowerCase?.();
    const club = clubs[clubId];

    // 1. Instant Scroll Reset (fires before the user sees the jump)
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    // 2. Handle the "Not Found" state without collapsing the page
    if (!club) {
        // We use a useEffect for the redirect to avoid side-effects during render
        useEffect(() => {
            router.replace("/clubs");
        }, [router]);

        // Return a full-height empty container so the scroll position 
        // stays at the top while the redirect happens
        return <div className="min-h-screen bg-[#0a0a0a]" />;
    }

    // Reusable Section Layout
    const ClubSection = ({ title, children, icon }) => (
        <div className="mb-16 text-left relative z-10">
            <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 text-white">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            </div>
            <div className="pl-0 md:pl-14">{children}</div>
        </div>
    );

    return (
        <div key={club.id} className="relative w-full text-white font-sans min-h-screen pb-20 overflow-hidden bg-[#0a0a0a]">
            {/* ✨ Themed Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={10}
                    gradient="from-[#e99b63]/[0.8] to-[#ffcc8f]/[0.6]"
                    className="left-[-15%] md:left-[-8%] top-[20%]"
                />
                <ElegantShape
                    delay={0.5}
                    width={480}
                    height={140}
                    rotate={-15}
                    gradient="from-[#ffb87a]/[0.6] to-[#e99b63]/[0.5]"
                    className="right-[-10%] md:right-[-5%] bottom-[25%]"
                />
            </div>

            {/* 🔙 Back Button */}
            <div className="relative container mx-auto px-6 py-8 z-10">
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-[10px] font-bold text-gray-100 hover:text-[#e99b63] transition-colors tracking-widest mt-20 cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    BACK TO CLUBS
                </button>
            </div>


            {/* 🏆 Hero Section */}
            <div className="relative container mx-auto px-6 mb-20 z-10 -mt-2">
                <div className="relative w-full bg-[#0a0a0a]/80 border border-white/5 rounded-[40px] overflow-hidden backdrop-blur-xl shadow-xl">
                    {/* 🖼️ Banner */}
                    {club.banner && (
                        <div className="relative w-full h-[280px] md:h-[400px]">
                            <img
                                src={club.banner}
                                alt={`${club.name} Banner`}
                                className="w-full h-full object-cover"
                            />

                            {/* Gradient for text visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent" />

                            {/* Club Info */}
                            <div className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row items-start md:items-end justify-start md:justify-between p-6 md:p-10">
                                <div className="flex flex-row items-center md:items-end gap-4 md:gap-6">
                                    <img
                                        src={club.logo}
                                        alt={club.name}
                                        className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-[#111] border border-white/10 object-contain shadow-lg"
                                    />
                                    <div className="text-left">
                                        <span className="text-[10px] font-bold tracking-[0.4em] text-[#e99b63] uppercase block mb-1">
                                            {club.tagline}
                                        </span>
                                        <h1
                                            className={`text-3xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#e99b63] via-[#ffcc8f] to-[#e99b63]/80 ${dancingScript.className}`}
                                        >
                                            {club.name}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* 📄 Main Content */}
            <div className="relative container mx-auto px-6 max-w-7xl z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* LEFT SECTION */}
                    <div className="lg:col-span-8">
                        <ClubSection title="About Us" icon={<Users className="w-5 h-5" />}>
                            <h4 className="text-xl text-gray-100  font-light mb-6">
                                {club.description}
                            </h4>
                        </ClubSection>

                        <ClubSection title="Our Mission" icon={<Lightbulb className="w-5 h-5" />}>
                            <p className="text-xl text-gray-100  font-light mb-6">
                                {club.mission}
                            </p>
                        </ClubSection>

                        <ClubSection title="Our Vision" icon={<Target className="w-5 h-5" />}>
                            <p className="text-xl text-gray-100  font-light mb-6">
                                {club.vision}
                            </p>
                        </ClubSection>

                        <ClubSection title="What We Do" icon={<Zap className="w-6 h-6" />}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {club?.activities?.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-6 rounded-[24px] bg-[#0a0a0a] border border-white/5"
                                    >
                                        {/* Perfect circular dot */}
                                        <div className="w-3 h-3 min-w-3 rounded-full bg-[#e99b63] shrink-0" />
                                        <span className="text-sm text-gray-100 font-medium leading-snug">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </ClubSection>

                        <ClubSection title="Gallery" icon={<Camera className="w-5 h-5" />}>
                            <div className="grid grid-cols-2 gap-4">
                                {club?.gallery?.map((img, i) => (
                                    <div
                                        key={img.src}
                                        className="relative aspect-video rounded-[24px] overflow-hidden border border-white/5 group"
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        </ClubSection>

                        <ClubSection title="Our Team" icon={<Users className="w-5 h-5" />}>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {club?.team?.map((member, i) => (
                                    <div key={i} className="group flex flex-col items-center md:items-start">
                                        <div className="relative w-full aspect-square rounded-[32px] overflow-hidden bg-[#0a0a0a] border border-white/5 mb-4">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                            />
                                        </div>
                                        <h4 className="text-white font-bold text-sm tracking-wide">{member.name}</h4>
                                        <p className="text-[10px] text-[#e99b63] font-bold uppercase tracking-[0.2em] mt-1 italic">
                                            {member.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </ClubSection>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[45px] p-10 flex flex-col items-center shadow-2xl">
                            <h3 className="text-[10px] font-bold text-gray-500 tracking-[0.5em] uppercase mb-10">
                                Our Events
                            </h3>
                            <div className="w-full space-y-10">
                                {club.upcomingEvents.map((event, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <Calendar className="w-4 h-4 text-[#e99b63] shrink-0 mt-1" />
                                            <div>
                                                <p className="text-[13px] text-gray-300 leading-tight font-bold">
                                                    {event.name}
                                                </p>
                                                <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => router.push(`/events/${event.id}`)}
                                            className="cursor-pointer w-full py-4 rounded-xl bg-[#e99b63] text-black font-black text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-[#e99b63]/10 flex items-center justify-center gap-2"
                                        >
                                            View Event Detail <ChevronRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SOCIALS */}
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[30px] p-6 flex items-center justify-between">
                            <div
                                className="flex-1 flex flex-col items-center group cursor-pointer"
                                onClick={() => window.open(club.inst, "_blank")}
                            >
                                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-[#e99b63] transition-colors mb-2" />
                                <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">
                                    Instagram
                                </span>
                            </div>
                            <div className="w-[1px] h-8 bg-white/5" />
                            <div
                                className="flex-1 flex flex-col items-center group cursor-pointer"
                                onClick={() => window.open(club.linkdin, "_blank")}
                            >
                                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-[#e99b63] transition-colors mb-2" />
                                <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">
                                    LinkedIn
                                </span>
                            </div>
                        </div>

                        <p className="text-center text-[8px] text-gray-700 font-bold uppercase tracking-[0.3em] pt-4">
                            Established {club.established} • Guided by Excellence
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubPage;
