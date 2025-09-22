import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import rLogo from './assets/r_logo_white.svg';
import gearLogo from './assets/gear_white.svg';
import graydonHoare from './assets/graydon_hoare.jpg';

function GearDivider() {
  const ref = useRef(null);

  // Track scroll progress relative to this component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Rotate as user scrolls (full spin = 360°)
  const rotateLeft = useTransform(scrollYProgress, [0, 5], [0, 360]);
  const rotateRight = useTransform(scrollYProgress, [0, 5], [0, -360]);

  return (
    <div ref={ref} className="relative flex justify-between items-center my-20">
      <motion.img
        src={gearLogo}
        alt="Gear Left"
        className="absolute -right-55 w-md"
        style={{ rotate: rotateLeft }}
      />
      <motion.img
        src={gearLogo}
        alt="Gear Right"
        className="absolute -left-55 w-md"
        style={{ rotate: rotateRight }}
      />
    </div>
  );
}

export default function Portfolio() {
  // Simple typewriter effect
  const text = "Selamat Datang di Portfolio Kelompok Rust";

  // Split the text into characters
  const letters = text.split("");

  const members = [
    "Member 1", "Member 2", "Member 3", "Member 4", "Member 5",
    "Member 6", "Member 7", "Member 8", "Member 9", "Member 10"
  ];

  const timeline = [
    { date: "13 September", event: "Pembukaan" },
    { date: "20 September", event: "Mabim 1" },
    { date: "27 September", event: "Mabim 2" },
    { date: "3 Oktober", event: "Mabim 3" },
    { date: "9-11 Oktober", event: "PBO" }
  ];

  return (
    <div className="bg-black text-white overflow-hidden scroll-smooth">
      <section className="h-screen flex flex-col gap-15 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center mt-32"
          >
            <img src={rLogo} alt="Rust Logo" className="absolute right-[33px] w-50" />
            <img src={gearLogo} alt="Rust Logo" className="animate-spin [animation-duration:18s] w-68" />
        </motion.div>
        <div>
          <h1 className="max-w-5xl text-4xl md:text-6xl text-center font-egiziano">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.0001 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>
      </section>

      <GearDivider />

      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <motion.article
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 max-w-3xl text-left"
        >
          <figure className="flex-shrink-0">
            <img
              src={graydonHoare}
              alt="Graydon Hoare, pencipta bahasa Rust"
              className="rounded-md mx-auto w-60"
            />
            <figcaption className="text-sm text-gray-400 mt-2 text-center">
              Graydon Hoare, pencipta Rust
            </figcaption>
          </figure>

          <div>
            <header>
              <h2 className="text-3xl mb-4 font-egiziano">Sejarah Rust</h2>
            </header>
            <p className="mb-3">
              Rust pertama kali dikembangkan pada tahun 2006 oleh{" "}
              Graydon Hoare, seorang insinyur di Mozilla.
              Bahasa ini awalnya merupakan proyek pribadi sebelum akhirnya
              mendapatkan dukungan resmi dari Mozilla pada tahun 2009.
            </p>
            <p className="mb-3">
              Tujuan utama Rust adalah menyediakan bahasa pemrograman yang{" "}
              <em>aman, cepat,</em> dan <em>konkuren</em> tanpa mengorbankan
              performa rendah tingkat seperti C dan C++.
            </p>
            <p>
              Sejak perilisan stabil pertamanya pada tahun 2015, Rust terus
              berkembang pesat dan telah dipilih sebagai{" "}
              <strong>“Most Loved Language”</strong> di survei Stack Overflow
              selama bertahun-tahun.
            </p>
          </div>
        </motion.article>
      </section>

      <GearDivider />

      <section className="min-h-screen px-6 py-12">
        <h2 className="text-3xl text-center mb-10">Profil Kelompok</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white text-black rounded-md p-4 text-center"
            >
              {m}
            </motion.div>
          ))}
        </div>
      </section>

      <GearDivider />
      
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <h2 className="text-3xl mb-10">Monitor 2k25</h2>
        <div className="relative border-l-4 border-white pl-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="mb-8"
            >
              <div className="text-xl">{item.event}</div>
              <p>{item.date}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
