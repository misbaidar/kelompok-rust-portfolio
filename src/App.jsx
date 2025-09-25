import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import rLogo from './assets/r_logo_white.svg';
import gearLogo from './assets/gear_white.svg';
import gearWhiteTransparent from './assets/gear_white_transparent.svg';
import gearTransparent from './assets/gear_transparent.svg';
import graydonHoare from './assets/graydon_hoare.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.png";
import img5 from "./assets/images/5.jpg";


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
    <div ref={ref} className="relative flex justify-between items-center">
      <motion.img
        src={gearLogo}
        alt="Gear Left"
        className="absolute -right-55 w-sm"
        style={{ rotate: rotateLeft }}
      />
      <motion.img
        src={gearLogo}
        alt="Gear Right"
        className="absolute -left-55 w-sm"
        style={{ rotate: rotateRight }}
      />
    </div>
  );
}

export default function Portfolio() {
const [selectedIndex, setSelectedIndex] = useState(null);
const [direction, setDirection] = useState(0);

const openModal = (i) => {
  setSelectedIndex(i);
  setDirection(1); // first open has no direction
};

const closeModal = () => setSelectedIndex(null);

const prevMember = () => {
  setDirection(-1);
  setSelectedIndex((i) => (i > 0 ? i - 1 : members.length - 1));
};

const nextMember = () => {
  setDirection(1);
  setSelectedIndex((i) => (i < members.length - 1 ? i + 1 : 0));
};

const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 150 : -150, // start off-screen
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -150 : 150, // exit opposite side
    opacity: 0,
  }),
};

  // Simple typewriter effect
  const text = "Selamat Datang di Portfolio Kelompok Rust";

  // Split the text into characters
  const letters = text.split("");

  const members = [
    {
      id: "Mentor",
      nama: "Mentor 1",
      nim: "123456789",
      motto: "Belajar tanpa henti.",
      tujuan: "Menyelesaikan 5 proyek dalam 1 tahun.",
      photo: "/assets/members/member1.jpg",
    },
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
    {
      date: "13 September",
      event: "Pembukaan",
      status: "completed",
      subjects: [
        {
          title: "Sambutan Ketua",
          presenter: "Bapak A",
          summary: "Acara dimulai dengan sambutan ketua panitia...",
          photo: "/photos/sambutan.jpg"
        },
        {
          title: "Motivasi Mahasiswa",
          presenter: "Ibu B",
          summary: "Memberikan motivasi kepada mahasiswa baru...",
          photo: "/photos/motivasi.jpg"
        }
      ]
    },
    {
      date: "20 September",
      event: "Mabim 1",
      status: "completed",
      subjects: [
        {
          title: "Materi Kepemimpinan",
          presenter: "Pak C",
          summary: "Peserta diperkenalkan pada dasar-dasar kepemimpinan...",
          photo: "/photos/kepemimpinan.jpg"
        }
      ]
    },
    { date: "27 September", event: "Mabim 2", status: "in-progress" },
    { date: "4 Oktober", event: "Mabim 3", status: "incoming" },
    { date: "5 Oktober", event: "Mabim 4", status: "incoming" },
    { date: "9-11 Oktober", event: "PDO", status: "incoming" }
  ];

const [selectedEvent, setSelectedEvent] = useState(null);
const [subjectIndex, setSubjectIndex] = useState(0);

const openModalMonitor = (event) => {
  setSelectedEvent(event);
  setSubjectIndex(0);
};

  const statusCircle = {
    completed: "bg-white border-2 border-white",              // full white
    "in-progress": "border-4 border-white animate-pulse outline-2 outline-white outline-offset-4 bg-black animate-pulse-outline", // outline effect
    incoming: "border-2 border-white bg-black"                // outlined only
  };

  const photos = [
    { id: 1, src: img1, caption: "Caption for Photo 1" },
    { id: 2, src: img2, caption: "Caption for Photo 2" },
    { id: 3, src: img3, caption: "Caption for Photo 3" },
    { id: 4, src: img4, caption: "Caption for Photo 4" },
    { id: 5, src: img5, caption: "Caption for Photo 5" },
  ];
  
  const [selected, setSelected] = useState(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between each child
      },
    },
  };

  // Variants for each photo
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="bg-black text-white overflow-hidden scroll-smooth">
      <section className="h-screen flex flex-col gap-12 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
          >
            <img src={rLogo} alt="Rust Logo" className="absolute right-[33px] w-50" />
            <img src={gearLogo} alt="Rust Logo" className="animate-spin [animation-duration:18s] w-68" />
        </motion.div>
        <div>
          <h1 className="max-w-5xl text-5xl text-center font-egiziano">
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
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center"
        >
          <header>
            <h2 className="text-3xl mb-6">Sejarah Rust</h2>
          </header>

          <figure className="float-left mr-6 w-72">
            <img
              src={graydonHoare}
              alt="Graydon Hoare, pencipta bahasa Rust"
              className="rounded-md"
            />
            <figcaption className="text-sm text-gray-400 mt-2 text-center" style={{ fontFamily: "Clarendon, serif" }}>
              Graydon Hoare
            </figcaption>
          </figure>

          <div style={{ fontFamily: "Clarendon, serif" }} className="text-justify space-y-4">
            <p>
              Seorang pengembang perangkat lunak Graydon Hoare menciptakan Rust pada 
              tahun 2006 saat bekerja di Mozilla Research, yang secara resmi 
              mensponsori proyek tersebut pada tahun 2009. 
              Rilis stabil pertamanya, Rust 1.0, diterbitkan pada Mei 2015. 
              Setelah PHK karyawan Mozilla pada Agustus 2020, empat perusahaan 
              lain bergabung dengan Mozilla dalam mensponsori Rust melalui 
              pembentukan Rust Foundation pada Februari 2021. 
            </p>
            <p>
              Rust telah diadopsi 
              oleh banyak proyek perangkat lunak, terutama layanan web dan 
              perangkat lunak sistem, dan merupakan bahasa pertama selain C 
              dan assembly yang didukung dalam pengembangan kernel Linux. 
              Bahasa ini telah dipelajari secara akademis dan memiliki 
              komunitas pengembang yang terus berkembang.
            </p>
          </div>
        </motion.article>
      </section>

      <GearDivider />

      <section className="min-h-screen px-6 pt-30 pb-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <header>
            <h2 className="text-3xl text-center mb-10">Profil Kelompok</h2>
          </header>
        </motion.div>
        <div className="flex flex-col items-center" style={{ fontFamily: "Clarendon, serif" }}>
          {/* Mentor Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <header>
            <h3 className="text-2xl text-center mb-5">Mentor</h3>
          </header>
        </motion.div>
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              key={0}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-md p-4 text-center group cursor-pointer"
              onClick={() => openModal(0)} // 👈 only card is clickable
            >
              <div className="mb-4">
                <img
                  src={gearWhiteTransparent}
                  alt="Gear Right"
                  className="absolute left-1/2 top-[6px] -translate-x-1/2 w-29 group-hover:animate-spin group-hover:[animation-duration:18s]"
                />
                <img
                  src={members[0].photo}
                  alt={members[0].nama}
                  className="bg-red-600 w-24 h-24 rounded-full object-cover"
                />
              </div>
              <h3>{members[0].nama}</h3>
              <p className="text-gray-400">{members[0].id}</p>
            </motion.div>
          </div>

          {/* Anggota Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <header>
              <h3 className="text-2xl text-center mb-5">Anggota</h3>
            </header>
          </motion.div>
          <div className="min-w-5xl grid grid-cols-5 gap-6">
            {members.slice(1).map((m, i) => (
              <motion.div
                key={i + 1}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-md group p-4 text-center cursor-pointer"
                onClick={() => openModal(i + 1)}
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
                <h3>{m.nama}</h3>
                <p className="text-gray-400">{m.id}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={selectedIndex}
                  className="bg-white text-black rounded-lg p-10 w-2xl relative"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >

                  {/* Content */}
                  <div className="flex gap-10 items-center mb-10">
                    <div className="flex items-center justify-center">
                      <img
                        src={gearTransparent}
                        alt="Gear Right"
                        className="absolute w-39 hover:animate-spin hover:[animation-duration:18s]"
                      />
                      <img
                        src={members[selectedIndex].photo}
                        alt={members[selectedIndex].nama}
                        className="bg-red-600 w-32 h-32 mx-auto rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl">{members[selectedIndex].nama}</h3>
                      <p className="text-gray-600 mb-5">
                        {members[selectedIndex].id}
                      </p>
                      <h3 className="text-xs">NIM</h3>
                      <p className="text-xl">{members[selectedIndex].nim}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs">Motto Hidup</h3>
                    <p className="text-xl mb-5">{members[selectedIndex].motto}</p>
                    <h3 className="text-xs">Tujuan S.M.A.R.T.</h3>
                    <p className="text-xl">{members[selectedIndex].tujuan}</p>
                  </div>

                  {/* Navigation buttons */}
                  <div className="absolute top-0 bottom-0 -left-10 flex">
                    <div className="self-center">
                    <button
                      onClick={prevMember}
                      className="text-white hover:cursor-pointer"
                    >
                      <FontAwesomeIcon size="xl" icon={faChevronLeft} />
                    </button>
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 -right-10 flex">
                    <div className="self-center">
                      <button
                        onClick={nextMember}
                        className="text-white hover:cursor-pointer"
                      >
                        <FontAwesomeIcon size="xl" icon={faChevronRight} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <GearDivider />
      
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12"> 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <header>
            <h2 className="text-3xl text-center mb-6">Monitor 2k25</h2>
          </header>
        </motion.div>
        <div className="relative pl-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ fontFamily: "Clarendon, serif" }}
              onClick={() => item.status === "completed" && openModalMonitor(item)}
              className={`relative py-5 flex items-start  ${
                item.status !== "completed" ? "" : "cursor-pointer group"
              }`}
            >
              {/* Vertical line with grow animation */}
              {i < timeline.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`absolute left-[11px] top-14 w-[2px] h-full origin-top
                    ${
                      item.status === "completed"
                        ? "bg-white"
                        : "border-l-2 border-dashed border-white"
                    }`}
                ></motion.div>
              )}

              {/* Circle */}
              <div
                className={`mt-3 w-6 h-6 rounded-full shrink-0 ${statusCircle[item.status]}`}
              ></div>

              {/* Content */}
              <div className="ml-6 transition-all group-hover:outline group-hover:outline-offset-2 p-2 rounded-sm">
                <div className="text-xl">{item.event}</div>
                <p className="text-sm">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              style={{ fontFamily: "Clarendon, serif" }}
            >
              <motion.div
                className="bg-white text-black rounded-lg p-8 w-[700px] min-h-screen overflow-x-hidden overflow-y-auto relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl">{selectedEvent.event}</h2>
                <p className="text-sm mb-6">{selectedEvent.date}</p>
                {/* Subject navigation buttons */}
                <div className="flex gap-2 justify-center mb-6">
                  {selectedEvent.subjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSubjectIndex(idx)}
                      className={`px-3 py-1 rounded ${
                        subjectIndex === idx
                          ? "bg-black text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      Subject {idx + 1}
                    </button>
                  ))}
                </div>
                {/* Subject page */}
                {selectedEvent.subjects && selectedEvent.subjects.length > 0 && (
                  <motion.div
                    key={subjectIndex} // 🔑 to re-trigger animation
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-xl font-bold">
                      {selectedEvent.subjects[subjectIndex].title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      oleh {selectedEvent.subjects[subjectIndex].presenter}
                    </p>
                    <img
                      src={selectedEvent.subjects[subjectIndex].photo}
                      alt={selectedEvent.subjects[subjectIndex].title}
                      className="w-full h-60 object-cover rounded-md mb-4"
                    />
                    <p className="mb-4">
                      {selectedEvent.subjects[subjectIndex].summary}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <GearDivider />

      <section className="min-h-screen flex flex-col items-center justify-center px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <header>
            <h2 className="text-3xl text-center mb-6">Galeri</h2>
          </header>
        </motion.div>

        {/* Grid of photos */}
        <div className="flex justify-center columns-4 gap-4 mt-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }} 
            className="columns-4 gap-4"
          >
            {photos.map((p) => (
              <motion.div
                key={p.id}
                layoutId={`photo-${p.id}`}
                variants={item}
                onClick={() => setSelected(p)}
                className="mb-4 cursor-pointer break-inside-avoid"
              >
                <motion.img
                  src={p.src}
                  alt=""
                  className="w-60 h-auto rounded-md"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { delay: 0.1 } // 👈 delay only on exit
              }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                layoutId={`photo-${selected.id}`}
                className="relative rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
              >
                <motion.img
                  src={selected.src}
                  alt={selected.caption}
                  className="max-h-[80vh] max-w-3xl"
                />
                <motion.div
                  initial={{ clipPath: "inset(100% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute w-full bottom-0 bg-black/60 text-center text-white"
                >
                  <div className="p-4" style={{ fontFamily: "Clarendon, serif" }}>{selected.caption}</div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
