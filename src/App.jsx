import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import rLogo from './assets/r_logo_white.svg';
import gearLogo from './assets/gear_white.svg';
import gearWhiteTransparent from './assets/gear_white_transparent.svg';
import gearTransparent from './assets/gear_transparent.svg';
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
  const [selected, setSelected] = useState(null);
  // Simple typewriter effect
  const text = "Selamat Datang di Portfolio Kelompok Rust";

  // Split the text into characters
  const letters = text.split("");

  const members = [
    {
      id: "#L1",
      nama: "Member 1",
      nim: "123456789",
      motto: "Belajar tanpa henti.",
      tujuan: "Menyelesaikan 5 proyek dalam 1 tahun.",
      photo: "/assets/members/member1.jpg",
    },
    {
      id: "#L2",
      nama: "Member 2",
      nim: "987654321",
      motto: "Hidup sederhana.",
      tujuan: "Menguasai front-end development.",
      photo: "/assets/members/member2.jpg",
    },
    {
      id: "#L3",
      nama: "Member 3",
      nim: "987654321",
      motto: "Hidup sederhana.",
      tujuan: "Menguasai front-end development.",
      photo: "/assets/members/member2.jpg",
    },
    {
      id: "#L4",
      nama: "Member 4",
      nim: "987654321",
      motto: "Hidup sederhana.",
      tujuan: "Menguasai front-end development.",
      photo: "/assets/members/member2.jpg",
    },
    {
      id: "#L5",
      nama: "Member 5",
      nim: "987654321",
      motto: "Hidup sederhana.",
      tujuan: "Menguasai front-end development.",
      photo: "/assets/members/member2.jpg",
    },
    {
      id: "#L6",
      nama: "Member 6",
      nim: "987654321",
      motto: "Hidup sederhana.",
      tujuan: "Menguasai front-end development.",
      photo: "/assets/members/member2.jpg",
    },
    {
      id: "#L7",
      nama: "Member 7",
      nim: "987654321",
      motto: "Hidup sederhana.",
      tujuan: "Menguasai front-end development.",
      photo: "/assets/members/member2.jpg",
    },
    {
      id: "#L8",
      nama: "Member 8",
      nim: "987654321",
      motto: "Hidup sederhana.",
      tujuan: "Menguasai front-end development.",
      photo: "/assets/members/member2.jpg",
    },
    {
      id: "#L9",
      nama: "Member 9",
      nim: "987654321",
      motto: "Hidup sederhana.",
      tujuan: "Menguasai front-end development.",
      photo: "/assets/members/member2.jpg",
    },
    {
      id: "#L10",
      nama: "Member 10",
      nim: "987654321",
      motto: "Hidup sederhana.",
      tujuan: "Menguasai front-end development.",
      photo: "/assets/members/member2.jpg",
    },
  ];


  const timeline = [
    { date: "13 September", event: "Pembukaan" },
    { date: "20 September", event: "Mabim 1" },
    { date: "27 September", event: "Mabim 2" },
    { date: "4 Oktober", event: "Mabim 3" },
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
                viewport={{ once: true }}
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
          className="prose prose-invert max-w-3xl text-center"
        >
          <header>
            <h2 className="text-3xl mb-6">Sejarah Rust</h2>
          </header>

          <figure className="float-left mr-6 w-48">
            <img
              src={graydonHoare}
              alt="Graydon Hoare, pencipta bahasa Rust"
              className="rounded-md shadow-lg"
            />
            <figcaption className="text-sm text-gray-400 mt-2 text-center" style={{ fontFamily: "Clarendon, serif" }}>
              Graydon Hoare
            </figcaption>
          </figure>

          <div style={{ fontFamily: "Clarendon, serif" }} className="text-justify space-y-4">
            <p>
              Rust pertama kali dikembangkan pada tahun 2006 oleh Graydon Hoare, seorang
              insinyur di Mozilla. Bahasa ini awalnya merupakan proyek pribadi sebelum
              akhirnya mendapatkan dukungan resmi dari Mozilla pada tahun 2009.
            </p>
            <p>
              Tujuan utama Rust adalah menyediakan bahasa pemrograman yang aman,
              cepat, dan konkuren tanpa mengorbankan performa rendah tingkat
              seperti C dan C++.
            </p>
            <p>
              Sejak perilisan stabil pertamanya pada tahun 2015, Rust terus berkembang
              pesat dan telah dipilih sebagai “Most Loved Language” di survei Stack
              Overflow selama bertahun-tahun.
            </p>
          </div>
        </motion.article>
      </section>

      <GearDivider />

      <section className="min-h-screen px-6 pt-30 pb-50">
        <h2 className="text-3xl text-center mb-10">Profil Kelompok</h2>
        <div className="flex justify-center" style={{ fontFamily: "Clarendon, serif" }}>
          <div className="min-w-5xl grid grid-cols-5 gap-6">
            {members.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-md group p-4 text-center cursor-pointer hover:shadow-lg"
                onClick={() => setSelected(m)}
              >
                <div className="relative flex items-center justify-center mb-4">
                  <img
                    src={gearWhiteTransparent}
                    alt="Gear Right"
                    className="absolute w-29 group-hover:animate-spin group-hover:[animation-duration:18s]"
                  />
                  <img
                    src={m.photo}
                    alt={m.nama}
                    className="bg-red-600 w-24 h-24 mx-auto rounded-full object-cover"
                  />
                </div>
                <h3 className="">{m.nama}</h3>
                <p className="text-gray-400">{m.id}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)} // close when clicking backdrop
            >
              <motion.div
                className="flex bg-white text-black rounded-lg p-10 max-w-2xl gap-10"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={gearTransparent}
                    alt="Gear Right"
                    className="absolute w-39 hover:animate-spin hover:[animation-duration:18s]"
                  />
                  <img
                    src={selected.photo}
                    alt={selected.nama}
                    className="bg-red-600 w-32 h-32 mx-auto rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl">{selected.nama}</h3>
                  <p className="text-gray-600 mb-2">{selected.id}</p>
                  <h3 className="text-xs">NIM</h3>
                  <p className="text-xl mb-2">{selected.nim}</p>
                  <h3 className="text-xs">Motto Hidup</h3>
                  <p className="text-xl mb-2">{selected.motto}</p>
                  <h3 className="text-xs">Tujuan S.M.A.R.T.</h3>
                  <p className="text-xl mb-2">{selected.tujuan}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
