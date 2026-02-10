import React, { useState, useEffect, useRef } from "react";
import yourPhoto from "../assets/your-photo.jpg";
import eCommerceApp from "../assets/e-commerce-app.jpg";
import financeDashboard from "../assets/Finance-Dashboard.jpg";
import travelBooking from "../assets/Travel-Booking.jpg";
import healthcareApp from "../assets/Healthcare-App.jpg";
import learningPlatform from "../assets/Learning-Platform.jpg";
import socialMediaApp from "../assets/Social-Media-App.jpg";

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/80 backdrop-blur-xl py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="font-heading text-2xl font-bold bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-400 hover:text-light transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gradient-start to-gradient-end group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-light transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-light transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-light transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-darker/95 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 text-gray-400 hover:text-light hover:bg-gray-800/50 transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

// Animated Background
const AnimatedBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-start/20 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-end/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-mid/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
  </div>
);

// Hero Section
const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ArilDani",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/p.starrrr7?igsh=MXNwNW1hcDJhcHJhNg%3D%3D",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@arutia?_r=1&_t=ZS-93nxnjO6UwS",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div
          className="transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
          <p className="text-gray-400 text-lg md:text-xl mb-4 animate-fade-in">
            Halo, saya
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              UI/UX Designer
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Menciptakan pengalaman digital yang memukau, fungsional, dan
            berpusat pada pengguna. Mengubah ide menjadi desain yang bermakna.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                {social.icon}
              </span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full font-medium overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">Lihat Karya Saya</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gradient-end to-gradient-start opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-gray-700 hover:border-gray-500 rounded-full font-medium transition-all duration-300 hover:bg-gray-800/50"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    "UI Design",
    "UX Research",
    "Prototyping",
    "Figma",
    "Adobe XD",
    "Design System",
    "User Testing",
    "Wireframing",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Photo */}
          <div className="relative group">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden">
              <img
                src={yourPhoto}
                alt="Foto Profil"
                className="w-full h-full object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-gradient-start to-gradient-mid rounded-2xl opacity-80 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-gradient-mid to-gradient-end rounded-xl opacity-80 animate-float" style={{ animationDelay: "1s" }} />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">
                Tentang Saya
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Passionate{" "}
                <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                  UI/UX Designer
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Saya adalah seorang UI/UX Designer dengan pengalaman dalam
                menciptakan pengalaman pengguna yang intuitif dan visual yang
                memukau. Fokus utama saya adalah memahami kebutuhan pengguna dan
                menerjemahkannya menjadi desain yang fungsional.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Dengan kombinasi kreativitas dan pemikiran analitis, saya
                berusaha menciptakan solusi desain yang tidak hanya indah secara
                visual tetapi juga memberikan nilai nyata bagi pengguna.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4">
                Keahlian
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800">
              {[
                { value: "3+", label: "Tahun Pengalaman" },
                { value: "50+", label: "Project Selesai" },
                { value: "30+", label: "Klien Puas" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce App",
      category: "Mobile App Design",
      description: "Aplikasi belanja online dengan pengalaman pengguna yang seamless dan interface modern.",
      image: eCommerceApp,
      link: "https://github.com/ArilDani",
    },
    {
      id: 2,
      title: "Finance Dashboard",
      category: "Web Application",
      description: "Dashboard keuangan dengan visualisasi data yang intuitif dan real-time analytics.",
      image: financeDashboard,
      link: "https://github.com/ArilDani",
    },
    {
      id: 3,
      title: "Travel Booking",
      category: "Mobile App Design",
      description: "Platform pemesanan perjalanan dengan fitur pencarian cerdas dan rekomendasi personalisasi.",
      image: travelBooking,
      link: "https://github.com/ArilDani",
    },
    {
      id: 4,
      title: "Healthcare App",
      category: "UI/UX Design",
      description: "Aplikasi kesehatan dengan fokus pada aksesibilitas dan kemudahan penggunaan.",
      image: healthcareApp,
      link: "https://github.com/ArilDani",
    },
    {
      id: 5,
      title: "Learning Platform",
      category: "Web Design",
      description: "Platform pembelajaran online dengan gamifikasi dan tracking progress interaktif.",
      image: learningPlatform,
      link: "https://github.com/ArilDani",
    },
    {
      id: 6,
      title: "Social Media App",
      category: "Mobile App Design",
      description: "Aplikasi media sosial dengan fitur unik dan desain yang engaging.",
      image: socialMediaApp,
      link: "https://github.com/ArilDani",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 relative bg-darker/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">
            Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Project{" "}
            <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
              Terbaru
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-accent text-sm mb-2">{project.category}</p>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Load solver script
      const script = document.createElement("script");
      script.src = "/sgcaptcha/solver.js";
      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load solver"));
        document.head.appendChild(script);
      });

      // Get challenge
      const challengeRes = await fetch("/sgcaptcha/challenge");
      const challenge = await challengeRes.text();

      // Solve challenge
      const pow = new (window as unknown as { sgpowcaptcha: { PoWSolver: new () => { start: (challenge: string) => Promise<string> } } }).sgpowcaptcha.PoWSolver();
      const solution = await pow.start(challenge);

      // Submit form
      const fd = new FormData();
      fd.append("message", `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`);
      fd.append("sol", solution);

      const res = await fetch("/sgcaptcha/contact", {
        method: "POST",
        body: fd,
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">
              Kontak
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Mari{" "}
              <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                Berkolaborasi
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Punya project menarik? Mari diskusikan bagaimana saya bisa membantu
              mewujudkan ide Anda.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm text-gray-400 mb-2">Nama</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300 text-light placeholder-gray-600"
                  placeholder="Nama lengkap Anda"
                />
              </div>
              <div className="group">
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300 text-light placeholder-gray-600"
                  placeholder="email@contoh.com"
                />
              </div>
            </div>
            <div className="group">
              <label className="block text-sm text-gray-400 mb-2">Pesan</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300 text-light placeholder-gray-600 resize-none"
                placeholder="Ceritakan tentang project Anda..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center">
                Pesan berhasil dikirim! Saya akan segera menghubungi Anda.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
                Gagal mengirim pesan. Silakan coba lagi.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-gradient-start to-gradient-end rounded-xl font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Mengirim...
                </span>
              ) : (
                "Kirim Pesan"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="py-8 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2025 Portfolio. Code by // Arutia
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ArilDani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/p.starrrr7?igsh=MXNwNW1hcDJhcHJhNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@arutia?_r=1&_t=ZS-93nxnjO6UwS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors duration-300"
          >
            TikTok
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main Portfolio Page
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-dark text-light overflow-x-hidden">
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}</style>
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;