import Image from "next/image";
import { useEffect, useState } from "react";
import useDarkMode from "@/hook/dark_mode";

// Company Icons
import destar from "@/assets/icon/destar-nobg.png";
import urban from "@/assets/icon/urban-nobg.png";
import aksara from "@/assets/icon/aksara-nobg.png";

// Project Images
import dinaran from "@/assets/img/dinaran.png";
import bbp from "@/assets/img/bbp.png";
import clinic from "@/assets/img/clinic.png";
import hairkatz from "@/assets/img/hairkatz.png";

// Profile Image
import profileImage from "@/assets/img/den's square.png";

// Components
import { Chips, ChipsSmall } from "@/ui/v3/components/chips";
import Card from "@/ui/v3/components/card";

// Icons
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { SiFlutter, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineMoon } from "react-icons/ai";
import { MdOutlineWbSunny } from "react-icons/md";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deny Wijaya",
};

// Types
interface ExperienceItem {
  company: string;
  period: string;
  logo: any;
  alt: string;
}

interface ProjectData {
  type: "Web" | "Mobile App";
  image: any;
  title: string;
  description: string;
  technologies: string[];
}

const HomePage3 = () => {
  const [isDark, setIsDark] = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Data
  const experiences: ExperienceItem[] = [
    {
      company: "Aksara Algoritma Nusantara",
      period: "2021 - Present",
      logo: aksara,
      alt: "Aksara Algoritma Nusantara",
    },
    {
      company: "Urban Beauty Indonesia",
      period: "2019 - Present",
      logo: urban,
      alt: "Urban Beauty Indonesia",
    },
    {
      company: "Destar Studio",
      period: "2018 - 2019",
      logo: destar,
      alt: "Destar Studio",
    },
  ];

  const projects: ProjectData[] = [
    {
      type: "Mobile App",
      image: hairkatz,
      title: "Hairkatz",
      description:
        "A booking application that connects customers with capsters. It features AI-powered booking to make the process easier for customers.",
      technologies: ["Flutter", "Dart"],
    },
    {
      type: "Web",
      image: dinaran,
      title: "Dinaran Gold",
      description:
        "Gold investment platform allowing users to buy and sell gold with various features. My team managed the entire mobile, web, backend, and DevOps systems, and I'm responsible for building their web dashboard.",
      technologies: ["React", "Tailwind", "Typescript"],
    },
    {
      type: "Mobile App",
      image: bbp,
      title: "Bali Bird Park App",
      description:
        "A mobile app for tour guides assisting visitors to the Bali Bird Park. The app tracks points earned by guides for each visitor they accompany.",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      type: "Web",
      image: clinic,
      title: "MK Skin Clinic POS",
      description:
        "POS system developed to streamline patient treatment bookings, tailored specifically to MS Glow Aesthetic Clinic requirements by adapting their existing manual system into a computerized solution.",
      technologies: ["Next", "Tailwind", "Typescript"],
    },
  ];

  const skills = [
    {
      icon: <FaReact className="text-primary dark:text-white" />,
      text: "React",
    },
    {
      icon: <SiTypescript className="text-primary dark:text-white" />,
      text: "Typescript",
    },
    {
      icon: <SiFlutter className="text-primary dark:text-white" />,
      text: "Flutter",
    },
    {
      icon: <RiNextjsFill className="text-primary dark:text-white" />,
      text: "Next.js",
    },
    {
      icon: <RiTailwindCssFill className="text-primary dark:text-white" />,
      text: "Tailwind CSS",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/denywijaya14/",
      icon: <FaLinkedin className="text-primary p-2 text-[32px]" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/deny-wijaya",
      icon: <FaGithub className="text-primary p-2 text-[32px]" />,
      label: "GitHub",
    },
    {
      href: "mailto:denyekayana@gmail.com",
      icon: <IoMdMail className="text-primary p-2 text-[32px]" />,
      label: "Email",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-primary transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="space-y-16 lg:space-y-20">
          {/* Hero Section */}
          <header
            className={`transition-all duration-700 ease-out delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl">
                    <Image
                      src={profileImage}
                      alt="Deny Wijaya"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-grow text-center lg:text-left space-y-4">
                <h1 className="den-title text-4xl lg:text-5xl">
                  Hi, I&apos;m Deny Wijaya
                </h1>
                <h2 className="den-subtitle text-xl lg:text-2xl">
                  Frontend Engineer
                </h2>
                <div className="w-20 h-1 bg-primary dark:bg-white mx-auto lg:mx-0 rounded-full"></div>
              </div>
            </div>
          </header>

          {/* About Section */}
          <section
            className={`transition-all duration-700 ease-out delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              <h3 className="den-heading text-2xl lg:text-3xl">About</h3>
              <div className="prose prose-lg max-w-none">
                <p className="den-heading-item text-base lg:text-lg leading-relaxed">
                  Professional coder who loves solving problems with simplicity.
                  Passionate about researching Frontend technology and AI
                  products. Currently, I&apos;m collaborating with my team on{" "}
                  <a
                    className="text-primary dark:text-white font-medium hover:underline transition-all duration-200"
                    href="https://hairkatz.com/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hairkatz
                  </a>{" "}
                  which is our own digital product.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section
            className={`transition-all duration-700 ease-out delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-8">
              <h3 className="den-heading text-2xl lg:text-3xl">Experience</h3>
              <div className="space-y-3">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={exp.alt}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-poppins text-base font-medium text-primary dark:text-white">
                        {exp.company}
                      </h4>
                      <p className="den-heading-item text-sm">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            className={`transition-all duration-700 ease-out delay-[400ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              <h3 className="den-heading text-2xl lg:text-3xl">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Chips key={index} icon={skill.icon} text={skill.text} />
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section
            className={`transition-all duration-700 ease-out delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="den-heading text-2xl lg:text-3xl">
                  Featured Projects
                </h3>
                <p className="den-heading-item text-base">
                  Here are some of my selected works that showcase my skills and
                  experience.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    type={project.type}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <ChipsSmall key={techIndex} text={tech} />
                    ))}
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            className={`text-center transition-all duration-700 ease-out delay-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 py-16">
              <div className="space-y-4">
                <h1 className="den-title text-3xl lg:text-4xl">
                  Let&apos;s Work Together
                </h1>
                <h2 className="den-subtitle text-lg lg:text-xl">
                  Ready to chat! →
                </h2>
                <p className="den-heading-item text-base max-w-md mx-auto">
                  Or just say hi, I don&apos;t bite (unless you&apos;re a taco).
                  🌮
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Floating Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white dark:bg-gray-800 p-3 shadow-lg flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}

          <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 mx-1"></div>

          <button
            className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <AiOutlineMoon className="text-primary p-2 text-[32px]" />
            ) : (
              <MdOutlineWbSunny className="text-primary p-2 text-[32px]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;
