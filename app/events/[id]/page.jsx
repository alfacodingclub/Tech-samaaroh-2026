"use client";

import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import {
  ArrowLeft,
  MapPin,
  Users,
  Trophy,
  CheckCircle,
  AlertCircle,
  Phone,
  Calendar,
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import ElegantShape from "@/components/elegantShape";

// 🧩 Event data
const eventData = {
  // ALFA DATA
  "codex-build": {
    id: "codex-build",
    name: "CODEX Build",
    fees: "₹50 Per Member",
    deadline: "February 26",
    tagline: "Code the future, one byte at a time.",
    timing: "February 26, TBA",
    location: "305 Lab",
    teamSize: "Individual",
    description: [
      "CODEX Build is a fast-paced development challenge where participants create innovative applications powered by Artificial Intelligence. Link of website will be shared in groups and the problem statement will be found on the website. Participants will find a solution and build a platform (web, app, or software etc.). The event culminates in a live demonstration of their “AI-first” application to a panel of experts.",
    ],
    prizes: [
      { rank: "1st Place", reward: "TBA" },
      { rank: "2nd Place", reward: "TBA" },
      { rank: "3rd Place", reward: "TBA" },
      {
        rank: "All Participants",
        participation: "E-certificates to all Participants",
      },
    ],
    rules: [
      "Devices: Teams must bring their own laptops; high-speed internet will be provided.",
      "AI Tools: Use of AI APIs (OpenAI, Gemini, Anthropic) and coding assistants is required.",
      "Plagiarism: Copying complete pre-existing projects is strictly prohibited.",
    ],
    requirements: ["Laptop", "Id card"],
    organizers: [
      { name: "Abhinav Mehta ", phone: "+91 9811812178" },
      { name: "Sahil Handa", phone: "+91 9821742657" },
    ],
    poster:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    LeftPoster: "",
  },
  "fire-bound": {
    id: "fire-bound",
    name: "Firebound",
    fees: "₹100 Per Team",
    deadline: "February 26",
    tagline: "forged in fire, unleashed in strength",
    timing: "February 26, TBA",
    location: "3rd and 4th floor",
    teamSize: "2 Members",
    description: [
      "The Treasure Hunt is a fun-based offline event where participants work in teams to solve a series of clues and challenges. Each clue leads to the next location, gradually guiding teams closer to the final treasure. Participants must think logically, manage time efficiently, and collaborate effectively. The team that finds the treasure first by following all rules will be declared as winner.",
    ],
    prizes: [
      {
        rank: "1st Place",
        reward: "₹1500 + Certificate + Swags + Internship Opportunity",
      },
      { rank: "2nd Place", reward: "₹800 + Certificate + Swags " },
      { rank: "3rd Place", reward: "Certificate " },
      { rank: "All Participants", participation: "keychains + E-certificate" },
    ],
    rules: [
      "Mobile phones are allowed only for QR scanning",
      "No time boundation.",
      "Internet usage is not allowed unless specified.",
      "No external help from non-participants.",
      "Teams must follow the sequence of clues strictly.",
      "Any form of cheating or rule violation will lead to disqualification.",
      "Late completion beyond the time limit will not be considered",
      "Teams must stay together during the event",
      "QR codes must not be damaged",
      "No unfair means allowed",
    ],
    requirements: ["Id card", "Pen"],
    organizers: [
      { name: "Kashvi Anand", phone: "+91 98716 80537" },
      { name: "Prince Singh", phone: "+91 88605 50502" },
    ],
    poster:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  // CYBER KNIGHT DATA
  "shadow-trace": {
    id: "Shadow-trace",
    // name: "Shadow Trace",
    fees: "₹ 150 Per Team",
    deadline: "February 26",
    // tagline: "Uncover the system behind the data",
    timing: "February 26, TBA",
    location: "305 at Trinity Dwarka",
    teamSize: "3 members in each team ",
    description: [
      "Digital Crime Scene Investigation (DCSI) is a laptop-based cyber forensics event where students act as digital investigators. A cybercrime has already happened, and participants do not hack or code. Instead, they analyze digital evidence such as access logs, emails, chat screenshots, file timestamps, and company policies provided through a secure drive link. The goal is to understand how the data breach occurred, who was responsible, what data was affected, and which mistake or policy violation allowed it. Teams work together to build a timeline, connect clues, and submit a final investigation report. The event helps students develop logical thinking, cybersecurity awareness, and real-world investigation skills in an ethical and engaging way.",
    ],
    prizes: [
      { rank: "1st Place", reward: "₹500(cash) + trophy + certificate" },
      { rank: "2nd Place", reward: "₹300(cash) + medal+ certificate" },
      { rank: "3rd Place", reward: "₹200(cash) + medal+ certificate " },
      {
        rank: "All Participants",
        participation:
          "Everyone will get digital certificates of participation",
      },
    ],
    rules: [
      "Phones are prohibited",
      "Usage of ai is not allowed",
      "Anyone caught cheating immediately they are out",
      "Only teams are allowed",
      "Single person team is not allowed",
    ],
    requirements: ["Laptop/id card", "Pen"],
    organizers: [{ name: "Shivam goel", phone: "+91 9891169971" }],
    poster:
      "/WebAssets/cyberknight/ck-logos/WhatsApp Image 2026-01-30 at 7.41.10 AM.jpeg",
  },
  "cyber-tok": {
    id: "Cyber-tok",
    // name: "Cyber Tok",
    fees: "₹80",
    deadline: "February 26",
    // tagline: "Crack it, Reel it, Win it",
    timing: "February 26, TBA",
    location: "ROOM NO. 402",
    teamSize: "2 Members Per team",
    description: [
      "Cyber Quest is a multi-round cybersecurity challenge designed to test participants’ awareness, creativity, and logical thinking in a fun and engaging format. The event blends real-life cyber and networking scenarios with content creation and riddle-solving to create a fast-paced learning experience. Participants begin by analyzing cyber cases, move on to creating awareness reels, and finally compete in a high-energy cyber riddle finale. Open to both technical and non-technical students, Cyber Quest encourages teamwork, communication, and quick decision-making while promoting cyber awareness in a creative way. It is an ideal event for beginners and advanced participants alike, making cybersecurity learning interactive, practical, and exciting.",
    ],
    prizes: [
      { rank: "1st Place", reward: "₹500(cash) + trophy + certificate" },
      { rank: "2nd Place", reward: "₹300(cash)+ medal+ certificate" },
      { rank: "3rd Place", reward: "₹200(cash)+ medal+ certificate " },
      { rank: "All Participants", participation: "Participation Certificate" },
    ],
    rules: [
      "Team size strictly limited to 2 members",
      "Internet usage not allowed in Round 1",
      "Mobile phones allowed only in Round 2",
      "No pre-recorded or pre-prepared reels",
      "Any misconduct leads to direct disqualification",
      "Judges’ decision will be final and binding",
    ],
    requirements: [
      "Valid College ID Card",
      "Smartphone (only for Round 2 – Reel Creation)",
      "Basic cybersecurity awareness",
      "Creativity & teamwork skills",
    ],
    organizers: [{ name: " Ishita Sharma", phone: "+91 9810581549 " }],
    poster:
      "/WebAssets/cyberknight/ck-logos/WhatsApp Image 2026-01-30 at 10.45.34 PM.jpeg",
  },
  // FACTSMITH DATA
  "the-scholar-stage": {
    id: "the-scholar-stage",
    // name: "THE SCHOLAR’S STAGE",
    fees: "₹100",
    deadline: "February 26",
    // tagline: "Presenting Perspectives, Defining Possibilities!",
    timing: "February 26, TBA",
    location: "Conference Room",
    teamSize: "2 Members",
    EventRegister: "https://forms.gle/E3Y7K4TUR6RZ5tvy7",
    description: [
      "The Scholar’s Stage is a research-based presentation event designed to provide a platform for students to showcase their analytical thinking and innovation on emerging technologies and their impact on the future. Participants will present well-structured research presentations evaluated on research methodology, content depth, and presentation skills. This competition is more than just a presentation; it is a challenge to think critically, communicate effectively, and engage in meaningful intellectual discussions with peers and experts. It provides a unique opportunity to bridge the gap between academic knowledge and real-world innovation.",
    ],
    prizes: [
      { rank: "1st Place", reward: "₹500(cash) +  Certificates + medals" },
      { rank: "2nd Place", reward: "₹300(cash) + Certificates + medals" },
      { rank: "3rd Place", reward: "Certificates + medals+ Hamper(₹ 150) " },
      {
        rank: "All Participants",
        participation: "Certificate of Participation",
      },
    ],
    rules: [
      "Each team is allowed a maximum of 10 slides for their presentation.",
      "Maximum 2 participants per team.",
      "Each team will get a total of 7 minutes (5 minutes for the presentation and 2 minutes for a Q&A session).",
      "Presentation content must be original and related to the specified topic.",
      "Presentation should be submitted before the event. ",
      "Participants must maintain professional decorum during event.",
    ],
    requirements: [
      "College ID Card (mandatory)",
      "Laptop for presentation",
      "Presentation (compatible with MS PowerPoint)",
    ],
    organizers: [
      { name: "Nidhi", phone: "+91 93159 57256" },
      { name: "Yuvika", phone: "+91 78385 30752" },
    ],
    poster:
      "/WebAssets/factsmith/factsmith-logos/WhatsApp Image 2026-01-30 at 7.32.59 AM.jpeg",
  },
  "pitch-perfect": {
    id: "pitch-perfect",
    // name: "PITCH PERFECT",
    fees: "₹100",
    deadline: "February 26",
    // tagline: "Innovate. Pitch. Inspire.",
    timing: "February 26, TBA",
    location: "Room 204",
    teamSize: "1–2 members",
    EventRegister: "https://forms.gle/zHeQ4aoY7a9nEwbJ9",
    description: [
      "Pitch Perfect is a dynamic idea-presentation event organised by the Factsmith Research Club, designed to provide a platform for individuals and teams to showcase innovative ideas and practical solutions. Participants will present their concepts along with prototypes, focusing on originality, feasibility, and market potential. Theme of the event is Tech for Societal Welfare. The event encourages creative thinking, problem-solving, and effective communication skills. Each participant will have the opportunity to defend their idea before a panel of judges through presentations and Q&A sessions. Pitch Perfect aims to nurture innovation, promote entrepreneurial thinking, and empower students to transform ideas into impactful solutions.",
    ],
    prizes: [
      { rank: "1st Place", reward: "₹500(cash) Certificates + medals" },
      { rank: "2nd Place", reward: "₹300(cash) + Certificates + medals" },
      { rank: "3rd Place", reward: "Certificates + medals+ Hamper (₹ 150)" },
      {
        rank: "All Participants",
        participation: "Certificate of Participation",
      },
    ],
    rules: [
      "Participation is open to individuals or teams of up to two members.",
      "Ideas must be original and submitted before the event.",
      "Each participant/team will get 5 minutes for presentation and 5 + 2 minutes for prototype demonstration and Q&A.",
      "Professional conduct is mandatory.",
      "Participants retain full ownership of their ideas.",
    ],
    requirements: [
      "Laptop (mandatory)",
      "College/School ID Card",
      "Presentation (PPT)",
    ],
    organizers: [
      { name: "Khushi Bishtania", phone: "+91 99110 57463" },
      { name: "Shabnam", phone: "+91 93174 44542" },
    ],
    poster:
      "/WebAssets/factsmith/factsmith-logos/WhatsApp Image 2026-01-30 at 7.31.38 AM.jpeg",
  },
  // APEX DATA
  "brand-bot": {
    id: "brand-bot",
    // name: "Brand Bot",
    fees: "TBA",
    deadline: "18 February 2026",
    // tagline: "Prompt the Future. Pitch the Vision.",
    timing: "February 26, TBA",
    location: "Room 407 ",
    teamSize: "Min 2 and Max 4 participants",
    EventRegister: "https://forms.gle/gr4kM2Amg95UNayB9",
    description: [
      "A branding challenge where participants use Generative AI to design a visual identity and pitch a solution for a Crisis Brand",
    ],
    prizes: [
      { rank: "1st Place", reward: "₹500" },
      { rank: "2nd Place", reward: "₹300" },
    ],
    rules: [
      "AI Integration: Use of Generative AI tools (DALL-E, Midjourney, etc.) is mandatory for visual assets, but the Brand Name and Slogan must be original.",
      "Transparency: Teams must submit a Prompt Log (screenshots or text) showing the iteration of their AI prompts.",
      "Human Touch: Final output must be a cohesive Brand Poster created by the student using the AI-generated elements.",
      "Pitching: Each team must be prepared for a 90-second Power Pitch immediately following the 60-minute creation window.",
      "Academic Integrity: Use of pre-made brand templates or plagiarizing existing company logos will lead to immediate disqualification.",
    ],
    requirements: [
      "Use of pre-made templates are not allowed.",
      "Brand Name and Slogan must be completely original and created during the event.",
      "Brand type and crisis brief will be revealed on the spot at the start of the event.",
    ],
    organizers: [
      { name: "Charu Kakkar", phone: "+91 8368411655" },
      { name: "Vaibhav Sharma", phone: "+91 9873600910" },
    ],
    poster:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  "pixel-pulse": {
    id: "pixel-pulse",
    // name: "Pixel Pulse",
    fees: "₹60 per team",
    deadline: "February 26, TBA",
    // tagline: "Freeze the Frame. Master the Edit.",
    timing: "February 20, 60 minutes",
    location: "Room 407 (Campus Photo Hunt Area)",
    teamSize: "2 Members",
    EventRegister: "https://forms.gle/4ymoWwPF3srX4CbW9",
    description: [
      "Pixel Pulse is a high-speed photography and editing challenge that puts creativity and quick thinking to the test. The event kicks off with an exciting round of Tech Charades, designed to assess participants’ visual and media awareness. Once the theme is unlocked, teams race across the campus to capture a compelling photograph using only their mobile phones. The captured image must then be edited within the given time using free mobile editing applications. With no professional equipment, no pre-set filters, and strict time constraints, Pixel Pulse challenges participants to rely purely on their vision, storytelling skills, and editing instincts to create a striking visual narrative.",
    ],
    prizes: [
      { rank: "1st Place", reward: "₹500(cash) + Certificate" },
      { rank: "2nd Place", reward: "₹300 (Cash) + Certificate" },
      { rank: "3rd Place", reward: "Certificate" },
      { rank: "All Participants", participation: "Participation Certificate" },
    ],
    rules: [
      "Participation is allowed only in teams of two",
      "Only mobile phones are permitted; DSLRs and pre-shot images are strictly prohibited",
      "Round 1 (Tech Charades) must be completed to unlock the photo theme",
      "No pre-set filters or professional editing software allowed",
      "Editing must be done from scratch within the 60-minute duration",
      "One Raw JPEG and one Edited JPEG must be submitted before time ends",
      "Late or incomplete submissions will not be accepted",
    ],
    requirements: [
      "Smartphone with camera",
      "Free mobile editing apps (Lightroom Mobile, Snapseed, etc.)",
      "College ID Card",
      "Internet access (for submission if required)",
    ],
    organizers: [
      { name: "Dev", phone: "+91 7042077948" },
      { name: "Aarav", phone: "+91 7834995446" },
    ],
    poster:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  // ARCLIGHT DATA
  "genre-jeopardy": {
    id: "genre-jeopardy",
    // name: "Genre Jeopardy",
    fees: "₹100",
    deadline: "February 26",
    // tagline: "Greater the Risk, Sweeter the victory",
    timing: "February 26, TBA",
    location: "Room no 402(tentative)",
    teamSize: "Individual ",
    description: [
      "Genre Jeopardy is an exciting quiz competition that challenges participants' knowledge across various entertainment genres, including movies, music, literature, and pop culture.",
    ],
    prizes: [
      { rank: "1st Place", reward: "Trophy + Certificate" },
      { rank: "2nd Place", reward: "Medal+Certificate" },
      { rank: "3rd Place", reward: "Medal + Certificate" },
    ],
    rules: [
      "Questions have different point values based on difficulty (e.g., 100, 200, 300 points).",
      "Correct answers earn points; incorrect answers will lead to deductions.",
      "Each player has 3 skips to pass a question.",
      "The host will read each question, and players will have 10 seconds to respond.",
      "There will be 2 rounds.",
      "In first round players will play individually.",
      "In second round participants will be randomly merged to form a duo.",
      "The highest-scoring player at the end wins.",
      "In case of a tie, a tie-breaker question will be asked.",
    ],
    requirements: ["College ID"],
    organizers: [{ name: "Sneha", phone: "+91  85059 39335" }],
    poster:
      "/WebAssets/arclight/arclight-logos/WhatsApp Image 2026-01-31 at 7.26.41 AM.jpeg",
  },
  "hack-my-mind": {
    id: "hack-my-mind",
    // name: "Hack My Mind",
    fees: "₹100",
    deadline: "February 26",
    // tagline: "Soch lao, card uthao, dimag hilao",
    timing: "February 26, TBA",
    location: "Conference Room (tentative)",
    teamSize: "Individual or Duo",
    description: [
      "Two contestants face off with one bold, funny, or controversial statement on the screen. One contestant must defend the statement, while the other tries to change their opponent’s mind using logic, humour, and smart persuasion.",
    ],
    prizes: [
      { rank: "1st Place", reward: "Trophy + Certificate" },
      { rank: "2nd Place", reward: "Medal+Certificate" },
      { rank: "3rd Place", reward: "Medal + Certificate" },
    ],
    rules: [
      "Participants will compete in structured opinion based game format",
      "They will be presented with a controversial yet safe statement on-screen",
      "Participants must take a stance in the given preparation time",
      "Power cards must be drawn, introducing twists",
      "Judges will evaluate participants based on the predefining score criteria",
      "Top scoring participants will qualify for the next round",
    ],
    requirements: ["College ID"],
    organizers: [{ name: "Bhumi", phone: "+91 87459 32303" }],
    poster:
      "/WebAssets/arclight/arclight-logos/WhatsApp Image 2026-01-31 at 7.26.41 AM (1).jpeg",
  },
  // ALFA AND APEX DATA
  "the-404-makeover": {
    id: "the-404-makeover",
    // name: "The 404 Makeover",
    fees: "₹50 for Individual and ₹80 for Team",
    deadline: "February 26",
    // tagline: "Lost in Code. Found in Design.",
    timing: "February 26, TBA",
    location: "305 Lab Trinity Dwarka",
    teamSize: "Individual And Team",
    description: [
      "The 404 Makeover is a fast-paced creative challenge where design and code collide. Teams of two reimagine a boring 404 error page into a fun, interactive experience based on a unique company persona. Using only HTML, CSS, and basic JavaScript, participants blend strong visual design, clever UX micro-copy, and playful interactions to prove that even errors can leave a great impression.",
    ],
    prizes: [
      { rank: "1st Place", reward: "TBA" },
      { rank: "2nd Place", reward: "TBA" },
    ],
    rules: [
      "The Duo: Must be a team of 2 (1 Designer + 1 Coder). If a student comes alone, the organizers will match-make them.",
      "The Tech Stack: Coders are limited to HTML, CSS, and basic JavaScript. Designers can use Figma, Canva, or Photoshop to create assets.",
      "Core Requirement: The page must contain at least one interactive element (e.g., a button that does something funny, a hover effect, or a mini-game).",
      "The Human Element: The page must include a Back to Home link and a creative UX Micro-copy (a funny or helpful message explaining the error).",
      "Submission: A live preview (using GitHub Pages, Netlify, or simply opening the local file on the judge's screen).",
    ],
    requirements: ["College ID", "Laptop"],
    organizers: [
      { name: "ALFA", phone: "+91 1234567890" },
      { name: "APEX", phone: "+91 1234567890" },
    ],
    poster:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
};

const EventSection = ({ title, children, icon }) => (
  <div className="mb-12 text-left relative z-10">
    <div className="flex items-center mb-6">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 text-[#e99b63]">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white tracking-widest uppercase">
        {title}
      </h3>
    </div>
    <div className="pl-0 md:pl-14">{children}</div>
  </div>
);

export default function EventPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = params?.id?.toLowerCase?.();

  const [event, setEvent] = useState(undefined);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Instant Scroll Reset
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. Fetch data
  useEffect(() => {
    if (!eventId) return;
    const data = eventData[eventId];
    setEvent(data || null);
  }, [eventId]);

  // 3. Redirect
  useEffect(() => {
    if (event === null) router.replace("/events");
  }, [event, router]);

  // 4. Mobile Detect
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 5. Prevent "Footer Jump" by returning a placeholder with height
  if (!event) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center" />
    );
  }
  return (
    <div className="relative min-h-screen w-full text-white font-sans bg-[#0a0a0a] overflow-hidden">
      {/* ✨ Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={10}
          gradient="from-[#e99b63]/[0.8] to-[#ffcc8f]/[0.6]"
          className="left-[-15%] md:left-[-8%] top-[25%]"
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
          className="flex items-center text-[10px] font-bold text-gray-500 hover:text-[#e99b63] transition-colors tracking-widest mt-20 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          BACK TO EVENTS
        </button>
      </div>

      {/* 🖼️ Hero Poster */}
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-[40px] overflow-hidden border border-white/10 shadow-xl">
          <img
            src={event.poster}
            alt="Event Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-10 left-10 right-10">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-2">
              {event.name}
            </h1>
            <p className="text-[#e99b63] text-lg md:text-xl font-light italic">
              {event.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* 📄 Main Content */}
      <div className="container mx-auto px-6 max-w-7xl pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            {/* Tags Row */}
            <div className="flex flex-wrap gap-3 mb-16">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-gray-100">
                <Calendar className="w-4 h-4 text-[#e99b63]" /> {event.timing}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-gray-100">
                <MapPin className="w-4 h-4 text-[#e99b63]" /> {event.location}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase text-gray-100">
                <Users className="w-4 h-4 text-[#e99b63]" /> {event.teamSize}
              </div>
            </div>

            {/* Description */}
            <EventSection
              title="Description"
              icon={<AlertCircle className="w-5 h-5" />}
            >
              <div className="text-gray-100 text-base md:text-lg leading-relaxed space-y-4 font-light">
                {event.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </EventSection>

            {/* Prizes */}
            <EventSection title="Prizes" icon={<Trophy className="w-5 h-5" />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.prizes.map((prize, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-[24px] bg-white/[0.03] border border-white/5"
                  >
                    <h4 className="text-white font-bold text-lg uppercase">
                      {prize.rank}
                    </h4>
                    <p className="text-[#e99b63] text-sm font-medium mt-1">
                      {prize.reward}
                    </p>
                    <p className="text-[#e99b63] text-sm font-medium mt-1">
                      {prize.participation}
                    </p>
                  </div>
                ))}
              </div>
            </EventSection>

            {/* Rules */}
            <EventSection
              title="Rules"
              icon={<CheckCircle className="w-5 h-5" />}
            >
              <ul className="space-y-4">
                {event.rules.map((rule, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-gray-100 text-sm md:text-base"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e99b63] shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </EventSection>

            {/* Requirements */}
            {event.requirements && (
              <EventSection
                title="Requirements"
                icon={<CheckCircle className="w-5 h-5" />}
              >
                <ul className="space-y-4">
                  {event.requirements.map((req, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-gray-100 text-sm md:text-base"
                    >
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e99b63] shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </EventSection>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-12 space-y-6">
              {/* Entry Details */}
              <div className="hidden md:block bg-white/[0.03] border border-white/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-center text-sm font-black mb-6 uppercase tracking-[0.2em] text-[#e99b63]">
                    Entry Details
                  </h3>
                  <div className="space-y-4 mb-8 text-[11px] uppercase tracking-widest font-bold">
                    <div className="flex justify-between pb-4 border-b border-white/5">
                      <span className="text-gray-100">Registration Fees</span>
                      <span className="text-white">{event.fees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-100">
                        Registration Deadline
                      </span>
                      <span className="text-white">{event.deadline}</span>
                    </div>
                  </div>
                  <a href={event.EventRegister}>
                    <button className="cursor-pointer w-full py-4 rounded-xl bg-[#e99b63] text-black font-black text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-[#e99b63]/10">
                      JOIN EVENT NOW
                    </button>
                  </a>
                </div>
              </div>

              {/* Coordinators */}
              <div className="hidden md:block bg-white/[0.03] border border-white/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-center text-sm font-black mb-6 uppercase tracking-[0.2em] text-[#e99b63]">
                    Coordinators
                  </h3>
                  <div className="divide-y divide-white/10 text-[11px] uppercase tracking-widest font-bold">
                    {event.organizers.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-3">
                        <span className="text-gray-100">{item.name}</span>
                        <span className="text-white">{item.phone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Event Poster below Coordinators */}
              <div className="mt-6 rounded-[24px] overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={event.LeftPoster || event.poster}
                  alt="Event Poster"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📱 Mobile CTA */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 p-6 backdrop-blur-xl border-t border-white/10 z-50">
          <a href={event.EventRegister}>
            <button className="w-full py-4 rounded-xl bg-[#e99b63] text-black font-black text-[10px] tracking-[0.2em]">
              REGISTER FOR EVENT
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
