
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";
import CinematicIntro from "@/components/intro/CinematicIntro";



export default function Home() {
  const reducedMotion = useReducedMotion();
const [isFormOpen, setIsFormOpen] = useState(false);
const [formStatus, setFormStatus] = useState<
  "idle" | "sending" | "success" | "error"
>("idle");

async function handleInquirySubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  setFormStatus("sending");

  try {
    const response = await fetch("https://formspree.io/f/xnpdgpvr", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  } catch {
    setFormStatus("error");
  }
}
  const reveal = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main id="top" className="min-h-screen bg-[#100d0c] text-[#f1e8d9]">
      <CinematicIntro />
      
      <div className="film-grain" />

      {/* Navigation */}
      <nav className="fixed left-0 top-0 z-30 flex w-full items-center justify-between border-b border-[#c69a52]/10 bg-[#100d0c]/85 px-6 py-5 backdrop-blur-xl md:px-14">
        <a href="/" className="font-display text-3xl text-[#c69a52]">
          
        </a>

        <div className="hidden gap-10 font-mono text-[10px] tracking-[0.2em] md:flex">
          <a href="#about" className="transition-colors hover:text-[#c69a52]">ABOUT</a>
          <a href="#skills" className="transition-colors hover:text-[#c69a52]">
  SKILLS
</a>
<a href="#services" className="transition-colors hover:text-[#c69a52]">
  SERVICES
</a>
          <a href="#projects" className="transition-colors hover:text-[#c69a52]">PROJECTS</a>
          <a href="#contact" className="transition-colors hover:text-[#c69a52]">CONTACT</a>
        </div>

        <a
          href="#contact"
          className="border border-[#c69a52]/60 px-5 py-3 font-mono text-[10px] tracking-widest text-[#c69a52] transition-all hover:bg-[#c69a52] hover:text-black"
        >
          LISTEN WE NEED TO TALK! ↗
        </a>
      </nav>

      {/* Hero */}
      <motion.section
  id="projects"
  initial={reducedMotion ? false : { opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="bg-[#171210] px-6 py-28 md:px-16"
>
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#641e25]/20 blur-[150px]" />

        <div className="relative z-[1] mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Left side */}
          <div className="order-2 lg:order-1">
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 font-mono text-[10px] tracking-[0.35em] text-[#c69a52]"
            >
            
             But you know the business. And I know the code  <br></br>
             I'm thinking... maybe you and I could partner up
            </motion.p>


<motion.h1
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1.5,
        delayChildren: 1.5,
      },
    },
  }}
  className="font-display text-[clamp(4rem,10vw,9.5rem)] leading-[0.83] tracking-[-0.035em]"
>
  <motion.span
    className="block"
    variants={{
      hidden: { opacity: 0, y: 100, filter: "blur(15px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 2.2, ease: "easeOut" },
      },
    }}
  >
    SHUBHAM
  </motion.span>

  <motion.span
    className="outline-text block"
    variants={{
      hidden: { opacity: 0, y: 100, filter: "blur(15px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 2.2, ease: "easeOut" },
      },
    }}
  >
    REDDY.
  </motion.span>
</motion.h1>


           <motion.div
  data-lenis-prevent
  initial={{ opacity: 0, y: 40, scale: 0.96 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.45 }}
              className="mt-10"
            >
              <p className="font-display text-3xl tracking-wide text-[#c69a52] md:text-4xl">
                WEB DEVELOPER
              </p>

              <p className="mt-4 max-w-lg text-sm leading-8 text-[#b5a99a]">
                Tech enthusiast. Creative problem solver. Building
                meaningful digital experiences through code, creativity
                and curiosity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/projects"
                className="bg-[#c69a52] px-7 py-4 font-mono text-[10px] tracking-widest text-[#100d0c] transition-transform hover:-translate-y-1"
              >
                VIEW PROJECTS ↗
              </a>

              <a
                href="#about"
                className="border border-[#c69a52]/50 px-7 py-4 font-mono text-[10px] tracking-widest transition-all hover:bg-[#641e25]"
              >
                MY STORY
              </a>
            </motion.div>

            <div className="mt-14 flex gap-8 font-mono text-[9px] tracking-widest text-[#a49a8e]">
             The internet is my canvas. Code is my medium.
            </div>
          </div>

          {/* Right side - Cinematic portrait */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[390px]">

              <div className="absolute -inset-4 rounded-sm border border-[#c69a52]/30" />

              <div className="absolute -inset-8 rounded-full bg-[#8e482e]/10 blur-[70px]" />

              <div className="relative aspect-[4/5] overflow-hidden border border-[#c69a52]/60 bg-[#211713]">
                <Image
               src="/shubh-cinematic.png"
                  alt="Shubh Reddy in a cinematic vintage portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 390px"
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#100d0c]/80 via-transparent to-[#100d0c]/10" />

                <div className="absolute bottom-5 left-5 font-mono text-[9px] tracking-[0.25em] text-[#e7bd78]">
                  
                </div>

                
              </div>

              <div className="mt-5 flex justify-between font-mono text-[9px] tracking-widest text-[#a49a8e]">
                <span>WRITTEN & DIRECTED BY SHUBH</span>
                <span>2026 · INDIA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About */}
    
{/* About */}
<motion.section
  id="about"
  initial={reducedMotion ? false : { opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="border-t border-[#c69a52]/20 px-6 py-32 md:px-16"
>
  <div className="mx-auto max-w-[1200px]">

    <p className="font-mono text-xs tracking-[0.3em] text-[#c69a52]">
      SCENE 01 — THE STORY SO FAR
    </p>

    <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

      <div>
        <h2 className="font-display text-6xl leading-[0.95] md:text-8xl">
          MORE THAN
          <br />
          JUST <span className="gold-text">CODE.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-8 text-[#c1b5a6]">
          Hey reader, I'm Shubham, a BCA student, web developer and tech enthusiast with a curiosity for how things work and a
          passion for creating things that matter.
        </p>

        <p className="mt-6 max-w-2xl text-sm leading-8 text-[#a49a8e]">
          My journey started in sales, where I learned to understand
          people, communicate ideas and recognise what businesses
          actually need. That experience shaped the way I approach
          development today.
        </p>

        <p className="mt-6 max-w-2xl text-sm leading-8 text-[#a49a8e]">
          Now, I'm exploring the world of web development, building
          websites and applications, experimenting with new
          technologies and turning ideas into digital experinces that are useful, engaging and meaningful.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-5">

        <div className="border-l border-[#c69a52]/60 py-3 pl-6">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c69a52]">
            THE MINDSET
          </p>
          <h3 className="mt-3 font-display text-3xl">
            ALWAYS CURIOUS.
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#a49a8e]">
            Exploring technology, AI and better ways to solve problems.
          </p>
        </div>

        <div className="border-l border-[#c69a52]/60 py-3 pl-6">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c69a52]">
            THE APPROACH
          </p>
          <h3 className="mt-3 font-display text-3xl">
            PEOPLE FIRST.
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#a49a8e]">
            Understanding the problem before thinking about the code.
          </p>
        </div>

        <div className="border-l border-[#c69a52]/60 py-3 pl-6">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#c69a52]">
            THE AMBITION
          </p>
          <h3 className="mt-3 font-display text-3xl">
            BUILD SOMETHING REAL.
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#a49a8e]">
            Creating useful digital products and meaningful experiences.
          </p>
        </div>

      </div>
    </div>

    <div className="film-divider mt-20" />

    <p className="mt-8 font-mono text-[10px] tracking-[0.25em] text-[#c69a52]">
      CODE IS THE MEDIUM. CURIOSITY IS THE DRIVER.
    </p>

  </div>
</motion.section>








{/* Skills */}
<motion.section
  id="skills"
  initial={reducedMotion ? false : { opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="border-t border-[#c69a52]/20 px-6 py-28 md:px-16"
>
  <div className="mx-auto max-w-[1200px]">

    <p className="font-mono text-xs tracking-widest text-[#c69a52]">
      SCENE 02 — THE TOOLKIT
    </p>

    <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.8fr]">

      <div>
        <h2 className="font-display text-6xl leading-none md:text-8xl">
          BUILT WITH
          <br />
          <span className="gold-text">CURIOSITY.</span>
        </h2>

        <p className="mt-8 max-w-lg text-sm leading-8 text-[#a49a8e]">
          Technologies and tools I use to turn ideas into functional,
          engaging and meaningful digital experiences.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-4">

        {/* Frontend */}
        <div className="border border-[#c69a52]/20 bg-[#171210] p-6">
          <p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-[#c69a52]">
            01 / FRONTEND — THE VISUAL GAME
          </p>
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"].map((skill) => (
              <span key={skill} className="border border-[#c69a52]/20 px-4 py-2 text-xs text-[#f1e8d9] transition-colors hover:border-[#c69a52] hover:text-[#c69a52]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="border border-[#c69a52]/20 bg-[#171210] p-6">
          <p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-[#c69a52]">
            02 / BACKEND & DATABASE — THE ENGINE ROOM
          </p>
          <div className="flex flex-wrap gap-3">
            {["PHP", "Node.js", "MySQL", "MongoDB"].map((skill) => (
              <span key={skill} className="border border-[#c69a52]/20 px-4 py-2 text-xs text-[#f1e8d9] transition-colors hover:border-[#c69a52] hover:text-[#c69a52]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="border border-[#c69a52]/20 bg-[#171210] p-6">
          <p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-[#c69a52]">
            03 / TOOLS & WORKFLOW — BEHIND THE SCENES
          </p>
          <div className="flex flex-wrap gap-3">
            {["GitHub", "VS Code", "ChatGPT", "Claude "].map((skill) => (
              <span key={skill} className="border border-[#c69a52]/20 px-4 py-2 text-xs text-[#f1e8d9] transition-colors hover:border-[#c69a52] hover:text-[#c69a52]">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</motion.section>











{/* What I Do */}
<motion.section
  id="services"
  initial={reducedMotion ? false : { opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="border-t border-[#c69a52]/20 bg-[#100d0c] px-6 py-28 md:px-16"
>
  <div className="mx-auto max-w-[1200px]">

    <p className="font-mono text-xs tracking-widest text-[#c69a52]">
      SCENE 03 — WHAT I DO
    </p>

    <h2 className="mt-8 max-w-3xl font-display text-6xl leading-none md:text-8xl">
      IDEAS INTO
      <br />
      <span className="gold-text">DIGITAL REALITY.</span>
    </h2>

    <p className="mt-7 max-w-xl text-sm leading-8 text-[#a49a8e]">
   There's more to the web than what you see on the screen.
    </p>

    <div className="mt-16 grid gap-5 md:grid-cols-3">

      {/* Service 01 */}
      <div className="group border border-[#c69a52]/20 bg-[#171210] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c69a52]/70">
        <span className="font-mono text-xs text-[#c69a52]">
          01 / WEBSITES
        </span>

        <h3 className="mt-10 font-display text-4xl">
          WEBSITE
          <br />
          DEVELOPMENT
        </h3>

        <p className="mt-6 text-sm leading-7 text-[#a49a8e]">
          Responsive business websites, landing pages and
          professional online experiences designed around
          your brand.
        </p>

        <div className="mt-10 h-px w-full bg-[#c69a52]/20 transition-all duration-500 group-hover:bg-[#c69a52]" />
      </div>

      {/* Service 02 */}
      <div className="group border border-[#c69a52]/20 bg-[#171210] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c69a52]/70">
        <span className="font-mono text-xs text-[#c69a52]">
          02 / WEB APPS
        </span>

        <h3 className="mt-10 font-display text-4xl">
          WEB
          <br />
          APPLICATIONS
        </h3>

        <p className="mt-6 text-sm leading-7 text-[#a49a8e]">
          Custom dashboards, management systems and
          interactive web applications built to solve
          business problems.
        </p>

        <div className="mt-10 h-px w-full bg-[#c69a52]/20 transition-all duration-500 group-hover:bg-[#c69a52]" />
      </div>

      {/* Service 03 */}
      <div className="group border border-[#c69a52]/20 bg-[#171210] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c69a52]/70">
        <span className="font-mono text-xs text-[#c69a52]">
          03 / CREATIVE
        </span>

        <h3 className="mt-10 font-display text-4xl">
          CREATIVE
          <br />
          DEVELOPMENT
        </h3>

        <p className="mt-6 text-sm leading-7 text-[#a49a8e]">
          Modern interfaces, thoughtful interactions and
          engaging animations that make digital experiences
          memorable.
        </p>

        <div className="mt-10 h-px w-full bg-[#c69a52]/20 transition-all duration-500 group-hover:bg-[#c69a52]" />
      </div>

    </div>
  </div>
</motion.section>












      {/* Projects */}
     <motion.section
  id="projects"
  initial={reducedMotion ? false : { opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="bg-[#171210] px-6 py-28 md:px-16"
>
        <div className="mx-auto max-w-[1200px]">
          <p className="font-mono text-xs tracking-widest text-[#c69a52]">
            SCENE 04 — SELECTED PRODUCTIONS
          </p>

          <h2 className="mt-6 font-display text-6xl md:text-8xl">
            THE WORKS.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#a49a8e]">
            A collection of digital experiences, experiments and projects.
            Every project has its own story.
          </p>

          <a
            href="/projects"
            className="mt-10 inline-block border-b border-[#c69a52] pb-2 font-mono text-xs tracking-widest text-[#c69a52]"
          >
            EXPLORE ALL PROJECTS ↗
          </a>
        </div>
     </motion.section>

      {/* Contact */}

{/* Contact */}
<section id="contact" className="border-t border-[#c69a52]/20 px-6 py-32 text-center md:px-16">
  <p className="font-mono text-xs tracking-widest text-[#c69a52]">
    FINAL SCENE — YOUR INVITATION
  </p>

  <h2 className="mt-8 font-display text-6xl md:text-9xl">
    LET'S CREATE
    <br />
    <span className="gold-text">SOMETHING.</span>
  </h2>

<button
  type="button"
  onClick={() => {
    setFormStatus("idle");
    setIsFormOpen(true);
  }}
  className="mt-12 inline-block border border-[#c69a52] px-10 py-5 font-mono text-xs tracking-widest text-[#c69a52] transition-all duration-300 hover:bg-[#c69a52] hover:text-[#100d0c]"
>
  GET IN TOUCH ↗
</button>
  <div className="mt-10 flex justify-center gap-8 font-mono text-xs tracking-widest">
    <a
      href="https://www.linkedin.com/in/shubhred"
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 text-[#c69a52] transition-colors duration-300 hover:text-white"
    >
      LINKEDIN ↗
    </a>


    <a
  href="https://github.com/shubhcodes0101"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-10 text-[#c69a52] transition-colors duration-300 hover:text-white"
>
  GITHUB ↗
</a>





<a
  href="https://wa.me/919327859377"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-10 text-[#c69a52] transition-colors duration-300 hover:text-white"
>
  WHATSAPP ↗
</a>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-[#c69a52]/20 px-6 py-8 md:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-4 font-mono text-[9px] tracking-widest text-[#a49a8e]">
          <span>© 2026 SHUBHAM REDDY</span>
          <span>END CREDITS? NOT EVEN CLOSE</span>
          <a href="#top" className="text-[#c69a52]">BACK TO TOP ↑</a>
        </div>







{/* Inquiry Form Modal */}
{isFormOpen && (
  <div


  className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/85 px-4 py-4 backdrop-blur-md"
 
  >
  <motion.div
  data-lenis-prevent
  initial={{ opacity: 0, y: 40, scale: 0.96 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.45 }}
  role="dialog"
  aria-modal="true"
  aria-labelledby="inquiry-title"
  onClick={(event) => event.stopPropagation()}
  className="relative max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto overscroll-contain border border-[#c69a52]/40 bg-[#171210] p-6 shadow-2xl sm:p-10 [&::-webkit-scrollbar]:hidden"
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    WebkitOverflowScrolling: "touch",
  }}
>
      <button
        type="button"
        onClick={() => setIsFormOpen(false)}
        aria-label="Close inquiry form"
        className="absolute right-5 top-5 font-mono text-xl text-[#c69a52] hover:text-white"
      >
        ×
      </button>

      <p className="font-mono text-[10px] tracking-[0.3em] text-[#c69a52]">
        PROJECT ENQUIRY
      </p>

      <h2
        id="inquiry-title"
        className="mt-6 font-display text-5xl text-[#f1e8d9] sm:text-6xl"
      >
        LET'S TALK<span className="gold-text">.</span>
      </h2>

      <p className="mt-3 text-sm leading-7 text-[#a49a8e]">
        Have an idea or project in mind? Tell me a little about it.
      </p>

      {formStatus === "success" ? (
        <div className="mt-10 border border-[#c69a52]/40 bg-[#100d0c] p-8 text-center">
          <p className="font-display text-3xl text-[#c69a52]">
            MESSAGE RECEIVED.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#a49a8e]">
            Thank you for reaching out. I'll get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setIsFormOpen(false)}
            className="mt-7 border border-[#c69a52] px-6 py-3 font-mono text-xs tracking-widest text-[#c69a52] hover:bg-[#c69a52] hover:text-[#100d0c]"
          >
            CLOSE
          </button>
        </div>
      ) : (
        <form onSubmit={handleInquirySubmit} className="mt-8 space-y-5">

          <div>
            <label htmlFor="inquiry-name" className="mb-2 block font-mono text-[10px] tracking-widest text-[#c69a52]">
              YOUR NAME *
            </label>
            <input
              id="inquiry-name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border border-[#c69a52]/25 bg-[#100d0c] px-4 py-3 text-sm text-[#f1e8d9] outline-none placeholder:text-[#746b61] focus:border-[#c69a52]"
            />
          </div>

          <div>
            <label htmlFor="inquiry-email" className="mb-2 block font-mono text-[10px] tracking-widest text-[#c69a52]">
              EMAIL ADDRESS *
            </label>
            <input
              id="inquiry-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-[#c69a52]/25 bg-[#100d0c] px-4 py-3 text-sm text-[#f1e8d9] outline-none placeholder:text-[#746b61] focus:border-[#c69a52]"
            />
          </div>

          <div>
            <label htmlFor="inquiry-service" className="mb-2 block font-mono text-[10px] tracking-widest text-[#c69a52]">
              SERVICE REQUIRED *
            </label>
            <select
              id="inquiry-service"
              name="service"
              required
              defaultValue=""
              className="w-full border border-[#c69a52]/25 bg-[#100d0c] px-4 py-3 text-sm text-[#f1e8d9] outline-none focus:border-[#c69a52]"
            >
              <option value="" disabled>Select a service</option>
              <option value="Business Website">Business Website</option>
              <option value="Web Application">Web Application</option>
              <option value="E-commerce Website">E-commerce Website</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="inquiry-budget" className="mb-2 block font-mono text-[10px] tracking-widest text-[#c69a52]">
              ESTIMATED BUDGET (OPTIONAL)
            </label>
            <select
              id="inquiry-budget"
              name="budget"
              defaultValue=""
              className="w-full border border-[#c69a52]/25 bg-[#100d0c] px-4 py-3 text-sm text-[#f1e8d9] outline-none focus:border-[#c69a52]"
            >
              <option value="">Prefer not to say</option>
              <option value="Below ₹5,000">Below ₹5,000</option>
              <option value="₹5,000 – ₹15,000">₹5,000 – ₹15,000</option>
              <option value="₹15,000 – ₹30,000">₹15,000 – ₹30,000</option>
              <option value="₹30,000 – ₹50,000">₹30,000 – ₹50,000</option>
              <option value="Above ₹50,000">Above ₹50,000</option>
            </select>
          </div>

          <div>
            <label htmlFor="inquiry-message" className="mb-2 block font-mono text-[10px] tracking-widest text-[#c69a52]">
              TELL ME ABOUT YOUR PROJECT *
            </label>
            <textarea
              id="inquiry-message"
              name="message"
              required
              rows={4}
              placeholder="Describe your idea or requirements..."
              className="w-full resize-y border border-[#c69a52]/25 bg-[#100d0c] px-4 py-3 text-sm text-[#f1e8d9] outline-none placeholder:text-[#746b61] focus:border-[#c69a52]"
            />
          </div>

          {formStatus === "error" && (
            <p role="alert" className="text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={formStatus === "sending"}
            className="w-full bg-[#c69a52] px-6 py-4 font-mono text-xs tracking-widest text-[#100d0c] transition-colors hover:bg-[#e0b875] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {formStatus === "sending" ? "SENDING..." : "SEND INQUIRY ↗"}
          </button>

          <p className="text-center font-mono text-[9px] tracking-wider text-[#746b61]">
            YOUR DETAILS WILL ONLY BE USED TO RESPOND TO YOUR ENQUIRY.
          </p>
        </form>
      )}
    </motion.div>
  </div>
)}

      </footer>
    </main>
  );
}
