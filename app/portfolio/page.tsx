"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  ArrowRightIcon,
  SparklesIcon,
  FilmIcon,
  EyeIcon,
  LinkIcon,
  CodeBracketIcon,
  UserGroupIcon,
  TrophyIcon,
  CalendarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";

const categories = [
  { id: "all", label: "Tous les projets", count: 12 },
  { id: "web", label: "Sites Web", count: 6 },
  { id: "mobile", label: "Applications", count: 3 },
  { id: "design", label: "Design", count: 2 },
  { id: "ecommerce", label: "E-commerce", count: 4 },
  { id: "dashboard", label: "Dashboards", count: 2 },
];

const projects = [
  {
    title: "Site vitrine – Cabinet de conseil",
    icon: BuildingOffice2Icon,
    description:
      "Création d’un site vitrine moderne et responsive pour un cabinet de conseil. L’objectif était de renforcer la crédibilité de l’entreprise et de présenter clairement ses services.",
    technologies: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    title: "Plateforme e-commerce – Boutique en ligne",
    icon: ShoppingCartIcon,
    description:
      "Développement d’une boutique e-commerce complète avec gestion des produits, commandes et paiements en ligne, optimisée pour les conversions.",
    technologies: ["Next.js", "Stripe", "Dashboard Admin"],
  },
  {
    title: "Application mobile – Service de réservation",
    icon: DevicePhoneMobileIcon,
    description:
      "Application mobile permettant aux utilisateurs de réserver des services en ligne avec une interface fluide et intuitive, disponible Android et iOS.",
    technologies: ["React Native", "API REST", "Firebase"],
  },
  {
    title: "Identité visuelle – Startup digitale",
    icon: PaintBrushIcon,
    description:
      "Conception complète de l’identité visuelle : logo, charte graphique et supports marketing afin d’assurer une image professionnelle et cohérente.",
    technologies: ["Branding", "Design UI/UX", "Illustrator"],
  },
  {
    title: "Site institutionnel – Entreprise locale",
    icon: GlobeAltIcon,
    description:
      "Réalisation d’un site institutionnel clair et structuré pour améliorer la visibilité en ligne et faciliter la prise de contact avec les clients.",
    technologies: ["HTML", "CSS", "Optimisation SEO"],
  },
  {
    title: "Dashboard web – Suivi d’activités",
    icon: ChartBarIcon,
    description:
      "Mise en place d’un tableau de bord interactif permettant le suivi des performances et statistiques en temps réel pour la prise de décision.",
    technologies: ["Next.js", "Charts", "API sécurisée"],
  },
];

/* Animations */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { value: "50+", label: "Projets réalisés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "40K+", label: "Utilisateurs impactés" },
  { value: "150+", label: "Technologies maîtrisées" },
];

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'detail'

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-16 pb-24 px-6 bg-sky-950 md:px-12 overflow-hidden"
      >
        {/* Background with Parallax */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0"
        />

        {/* Floating Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
            delay: 0.5
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Portfolio d&apos;excellence
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="bg-white bg-clip-text text-transparent">
                Nos Réalisations
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Des projets qui transforment des visions en succès digitaux
              <span className="block text-cyan-300 font-semibold mt-2">
                Innovation, performance et impact mesurable
              </span>
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* PROJECTS GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group relative rounded-3xl border border-blue-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-transform duration-300"
              >
                {/* ICON */}
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 group-hover:from-blue-700 group-hover:to-blue-500 transition">
                    <project.icon className="h-8 w-8 text-white transition" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-center text-blue-900">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 text-gray-700 text-center leading-relaxed">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Load More / Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-sky-950 rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-5" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Prêt pour votre propre succès digital ?
                </h2>

                <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                  Inspirez-vous de nos réalisations et laissez-nous transformer votre vision en un projet à succès.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-10 py-5 bg-emerald-600 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-emerald-600 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative flex items-center justify-center gap-3">
                      Discuter de mon projet
                      <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </motion.a>

                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Découvrir nos services
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}