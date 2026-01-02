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
    id: 1,
    title: "Cabinet de conseil - Site vitrine premium",
    category: "web",
    icon: BuildingOffice2Icon,
    client: "Strategy Consulting Group",
    description: "Site vitrine moderne et responsive pour renforcer la crédibilité et présenter les services de consulting de manière professionnelle.",
    technologies: ["Next.js 14", "Tailwind CSS", "Framer Motion", "SEO Avancé"],
    results: [
      { label: "Trafic", value: "+300%" },
      { label: "Conversion", value: "+45%" },
      { label: "Performance", value: "98/100" },
    ],
    duration: "3 semaines",
    featured: true,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Boutique mode - Plateforme e-commerce",
    category: "ecommerce",
    icon: ShoppingCartIcon,
    client: "FashionStyle CM",
    description: "Boutique en ligne complète avec catalogue produits, paiements sécurisés et dashboard administrateur pour gestion simplifiée.",
    technologies: ["Next.js", "Stripe", "MongoDB", "Cloudinary"],
    results: [
      { label: "Ventes", value: "+200%" },
      { label: "Panier moyen", value: "+35%" },
      { label: "Retour", value: "1.8%" },
    ],
    duration: "6 semaines",
    featured: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "App mobile - Service de réservation",
    category: "mobile",
    icon: DevicePhoneMobileIcon,
    client: "BookEasy Services",
    description: "Application mobile native permettant la réservation de services en temps réel avec interface intuitive et notifications push.",
    technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
    results: [
      { label: "Téléchargements", value: "10K+" },
      { label: "Note", value: "4.8/5" },
      { label: "Réservations", value: "+150%" },
    ],
    duration: "8 semaines",
    featured: false,
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 4,
    title: "Identité visuelle - Startup Fintech",
    category: "design",
    icon: PaintBrushIcon,
    client: "PayFlex Africa",
    description: "Design complet d'identité visuelle incluant logo, charte graphique et supports marketing pour lancement de startup.",
    technologies: ["Figma", "Adobe Suite", "Branding", "Motion Design"],
    results: [
      { label: "Reconnaissance", value: "+180%" },
      { label: "Engagement", value: "+65%" },
      { label: "Satisfaction", value: "100%" },
    ],
    duration: "2 semaines",
    featured: false,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    title: "Site institutionnel - Entreprise B2B",
    category: "web",
    icon: GlobeAltIcon,
    client: "Industrial Solutions Ltd",
    description: "Site web corporate avec présentation des services, références clients et génération de leads qualifiés.",
    technologies: ["Next.js", "Tailwind", "Headless CMS", "Analytics"],
    results: [
      { label: "Leads", value: "+120%" },
      { label: "Trafic organique", value: "+250%" },
      { label: "Temps moyen", value: "4:30" },
    ],
    duration: "4 semaines",
    featured: false,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 6,
    title: "Dashboard analytique - SaaS",
    category: "dashboard",
    icon: ChartBarIcon,
    client: "DataInsights Pro",
    description: "Tableau de bord interactif en temps réel pour analyse de données et prise de décision stratégique.",
    technologies: ["Next.js", "D3.js", "WebSockets", "API REST"],
    results: [
      { label: "Efficacité", value: "+70%" },
      { label: "Précision", value: "99.8%" },
      { label: "Adoption", value: "95%" },
    ],
    duration: "5 semaines",
    featured: true,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 7,
    title: "Marketplace - Plateforme B2C",
    category: "ecommerce",
    icon: ShoppingCartIcon,
    client: "MarketHub Africa",
    description: "Place de marché multi-vendeurs avec système de commissions, évaluations et gestion des transactions.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    results: [
      { label: "Vendeurs", value: "200+" },
      { label: "Transaction", value: "500K+" },
      { label: "Croissance", value: "+300%" },
    ],
    duration: "10 semaines",
    featured: true,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: 8,
    title: "App fitness - Suivi santé",
    category: "mobile",
    icon: DevicePhoneMobileIcon,
    client: "FitTrack Pro",
    description: "Application de suivi fitness avec intégration wearables, plans personnalisés et communauté sociale.",
    technologies: ["React Native", "GraphQL", "AWS", "HealthKit"],
    results: [
      { label: "Utilisateurs actifs", value: "50K+" },
      { label: "Rétention", value: "85%" },
      { label: "Engagement", value: "25min/jour" },
    ],
    duration: "12 semaines",
    featured: false,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 9,
    title: "Redesign - Marque de luxe",
    category: "design",
    icon: PaintBrushIcon,
    client: "LuxeConcept Paris",
    description: "Redesign complet de l'identité visuelle et de l'expérience digitale pour une marque de luxe internationale.",
    technologies: ["WebGL", "Three.js", "GSAP", "UI/UX Design"],
    results: [
      { label: "Perception", value: "+40%" },
      { label: "Trafic premium", value: "+180%" },
      { label: "Conversion", value: "+35%" },
    ],
    duration: "6 semaines",
    featured: true,
    color: "from-amber-500 to-yellow-500",
  },
];

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

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/20">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative pt-32 pb-24 px-6 md:px-12 overflow-hidden"
      >
        {/* Background with Parallax */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900"
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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-white bg-clip-text text-transparent">
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

      {/* Controls Section */}
      <section className="py-12 px-6 md:px-12 bg-white/50 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-gray-200"
                  }`}
                >
                  {category.label}
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id 
                      ? "bg-white/20" 
                      : "bg-gray-100"
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    viewMode === "grid" 
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Grille
                </button>
                <button
                  onClick={() => setViewMode("detail")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    viewMode === "detail" 
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Détails
                </button>
              </div>

              <div className="hidden md:flex items-center gap-2 text-gray-600">
                <FilmIcon className="h-4 w-4" />
                <span className="text-sm">
                  {filteredProjects.length} projets affichés
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      } 
                    },
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative"
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute -top-3 left-4 z-10">
                      <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm rounded-full shadow-lg flex items-center gap-2">
                        <SolidStarIcon className="h-4 w-4" />
                        MIS EN AVANT
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    {/* Image/Header Section */}
                    <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-6 right-6">
                        <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                          <project.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6">
                        <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Client */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-white flex items-center justify-center border border-gray-200">
                          <span className="text-sm font-bold text-gray-700">
                            {project.client.split(' ').map(w => w[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Client</p>
                          <p className="font-semibold text-gray-900">{project.client}</p>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-gradient-to-br from-gray-50 to-white text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {project.results.map((result, i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg font-bold text-gray-900">{result.value}</div>
                            <div className="text-xs text-gray-500">{result.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                          <EyeIcon className="h-4 w-4" />
                          Voir l&apos;étude de cas
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 hover:from-blue-100 hover:to-cyan-100 transition-all"
                        >
                          <LinkIcon className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Detailed View */
            <div className="space-y-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="lg:grid lg:grid-cols-3">
                      {/* Image/Color Side */}
                      <div className={`lg:col-span-1 h-64 lg:h-auto relative overflow-hidden bg-gradient-to-br ${project.color}`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-8 left-8">
                          {project.featured && (
                            <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm rounded-full shadow-lg inline-flex items-center gap-2">
                              <SolidStarIcon className="h-4 w-4" />
                              PROJET PRÉFÉRÉ
                            </div>
                          )}
                        </div>
                        <div className="absolute bottom-8 left-8 right-8">
                          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                            <div className="flex items-center gap-4">
                              <div className="p-3 rounded-xl bg-white">
                                <project.icon className="h-8 w-8 text-gray-800" />
                              </div>
                              <div>
                                <p className="text-white text-sm">Client</p>
                                <p className="text-white font-bold text-lg">{project.client}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="lg:col-span-2 p-8">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-2">
                                <CalendarIcon className="h-4 w-4" />
                                {project.duration}
                              </span>
                              <span className="flex items-center gap-2">
                                <CodeBracketIcon className="h-4 w-4" />
                                {project.technologies.length} technologies
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 hover:from-blue-100 hover:to-cyan-100 transition-all"
                            >
                              <EyeIcon className="h-5 w-5" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all"
                            >
                              <LinkIcon className="h-5 w-5" />
                            </motion.button>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mb-8">
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <TrophyIcon className="h-5 w-5 text-amber-500" />
                            Résultats obtenus
                          </h4>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {project.results.map((result, i) => (
                              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                                <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                                <div className="text-sm text-gray-500">{result.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CodeBracketIcon className="h-5 w-5 text-blue-500" />
                            Stack technique
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-700 font-medium rounded-full border border-blue-100 flex items-center gap-2"
                              >
                                <CheckCircleIcon className="h-4 w-4" />
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Load More / Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-12 text-center relative overflow-hidden">
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
                    className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
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