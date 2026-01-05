'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import {
  GlobeAltIcon,
  CodeBracketIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  DocumentTextIcon,
 MegaphoneIcon,
  ArrowRightIcon,
  UsersIcon,
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ChevronDownIcon,
  CalendarIcon,
  TrophyIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const services = [
  {
    id: "pro",
    title: "Creation de Sites Web",
    icon: CodeBracketIcon,
    color: "",
    description: "Boostez votre entreprise à travers un Site Vitrine dynamiques, Site E-Commerce robuste, une application Web adaptés à tout type d'écran, sécurisé et optimisé. Avec des interfaces intuitives, une structure SEO-friendly et des fonctionnalités sur mesure pour garantir fiabilité, rapidité et évolutivité. ",
    features: [
      "Site Vitrine(site pour la présentation d'une entreprise)",
      "Site E-Commerce",
      "Application Web",
      "Application Mobile",
    ],
    popular: false,
    delivery: "15-20 jours",
    support: "6 mois inclus",
  },
  {
    id: "design",
    title: "Conception graphique",
    icon: PaintBrushIcon,
    color: "",
    description: "Obtenez une identité visuelle forte avec nos services de conception graphique. Nous créons des logos uniques, des chartes graphiques cohérentes et des supports marketing percutants qui reflètent l'essence de votre marque et captivent votre audience.",
    features: [
      "Logo professionnel",
      "Flyers et brochures",
      "Cartes de visites",
      "Bannières pour réseaux sociaux",
    ],
    popular: false,
    delivery: "5-7 jours",
    support: "1 mois inclus",
  },
  {
    id: "marketing",
    title: "Marketing digital",
    icon: MegaphoneIcon,
    color: "",
    description: "Augmentez votre visibilité en ligne et attirez plus de clients avec nos services de marketing digital. Nous élaborons des stratégies personnalisées incluant SEO, campagnes publicitaires, gestion des réseaux sociaux et email marketing pour maximiser votre retour sur investissement.",
    features: [
      "Stratégie digitale complète",
      "Campagnes publicitaires ciblées",
      "Gestion des réseaux sociaux",
      "Analyse et reporting",
    ],
    popular: true,
    delivery: "10-15 jours",
    support: "3 mois inclus",
  },
  // {
  //   id: "conception",
  //   title: "Conception de Logiciel de Gestion",
  //   icon: ChartBarIcon,
  //   color: "",
  //   description:"Concevez des logiciels de gestion sur mesure pour optimiser vos processus internes. Nous développons des solutions personnalisées qui automatisent vos tâches récurrentes, centralisent vos données et améliorent la productivité de votre équipe.",
  //   features: [
  //     "Logiciel de gestion sur mesure",
  //     "Automatisation des processus",
  //     "Centralisation des données",
  //     "Interface intuitive",
  //   ],
  //   popular: false,
  //   delivery: "7-14 jours",
  //   support: "3 mois inclus",
  // }
];

const advantages = [
  {
    title: "Support 24/7",
    description: "Assistance technique disponible jour et nuit",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "Livraison rapide",
    description: "Délais respectés avec suivi en temps réel",
    icon: BoltIcon,
  },
  {
    title: "Qualité garantie",
    description: "Code propre, design moderne, performance optimale",
    icon: ShieldCheckIcon,
  },
  {
    title: "Solutions sur-mesure",
    description: "Adaptées à vos besoins spécifiques",
    icon: SparklesIcon,
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    quote: "Digital Switch CM a transformé notre présence en ligne ! Notre trafic a augmenté de 300% en 3 mois.",
    role: "PDG, TechInnovate",
    avatar: "SK",
    rating: 5,
    project: "Site e-commerce",
  },
  {
    name: "Marc T.",
    quote: "Service exceptionnel, équipe réactive et professionnelle. Notre application mobile est un succès.",
    role: "Directeur, FoodDelivery Pro",
    avatar: "MT",
    rating: 5,
    project: "Application mobile",
  },
  {
    name: "Fatou D.",
    quote: "Le design de notre site a été unanimement salué. Recommandé sans hésitation !",
    role: "Entrepreneure, BelleAfrique",
    avatar: "FD",
    rating: 5,
    project: "Design & Branding",
  },
];

const stats = [
  { value: "150+", label: "Projets réalisés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "24/7", label: "Support disponible" },
  { value: "3x", label: "ROI moyen" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
    visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6
    } 
  },
};

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center bg-sky-950 overflow-hidden px-6 md:px-12 py-20"
      >
        {/* Background Effects */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" /> */}
        
        {/* Floating Elements */}
        <motion.div   
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Agence digitale leader au Cameroun
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-white bg-clip-text text-transparent">
                Transformez votre vision digitale en réalité. 
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              
              <span className="block text-cyan-200 font-semibold mt-2">
                Sites web, apps mobiles & design d&apos;exception.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              href="/devenir-partenaire"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-emerald-600 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative flex items-center justify-center">
                Devenir Partenaire
                <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.a>
            
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-white/20 transition-all duration-300"
            >
              Voir nos réalisations
            </motion.a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDownIcon className="h-8 w-8 text-white/60" />
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-32 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-sky-950 bg-clip-text text-transparent">
                Nos Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions digitales complètes pour propulser votre entreprise vers le succès
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          >
            {services.map((service, index) => {
              // compute a safe gradient background from the Tailwind-like color string
              const gradientBackground = (() => {
                try {
                  if (!service || !service.color) return "linear-gradient(to bottom right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                  const parts = service.color.split(" ");
                  // expected format: "from-<color> via-<color> to-<color>"
                  const fromPart = parts[1];
                  const toPart = parts[3];
                  const from = fromPart ? fromPart.replace("from-", "") : "#06b6d4"; // cyan-400
                  const to = toPart ? toPart.replace("to-", "") : "#0ea5a4"; // teal-500
                  // If the values look like Tailwind color names (e.g. indigo-200) we can't resolve them here
                  // so as a safe fallback, return a translucent teal gradient.
                  if (from.includes("-") || to.includes("-")) {
                    return "linear-gradient(to bottom right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                  }
                  return `linear-gradient(to bottom right, ${from}, ${to})`;
                } catch {
                  return "linear-gradient(to bottom right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                }
              })();

              return (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl"
                  style={{ background: gradientBackground }}
                />
                
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className={`flex justify-center mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.color ?? ''} w-fit mx-auto`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  
                  {/* <div className="text-center">
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-full text-sm">
                      {service.stats}
                    </span>
                  </div> */}
                  
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRightIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Link 
              href="/services" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Découvrir tous nos services
              <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
                Pourquoi Nous Choisir ?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La différence Digital Switch CM : qualité, rapidité et accompagnement personnalisé
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 mb-6">
                    <advantage.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
              
              <h2 className="text-5xl font-bold mb-8 relative">
                <span className="bg-gradient-to-r from-blue-800 to-cyan-700 bg-clip-text text-transparent">
                  Votre Partenaire Digital
                </span>
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Chez <span className="font-bold text-blue-700">Digital Switch CM</span>, nous croyons que chaque entreprise mérite une présence digitale exceptionnelle. 
                  Notre mission est de transformer vos idées en solutions digitales performantes.
                </p>
                
                <p>
                  Basée au Cameroun, notre agence combine expertise technique, créativité et compréhension des marchés 
                  africains pour vous offrir des solutions adaptées à vos besoins spécifiques.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <TrophyIcon className="h-8 w-8 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Excellence garantie</h4>
                    <p className="text-gray-600">Chaque projet est mené avec rigueur et passion</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CalendarIcon className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Process transparent</h4>
                    <p className="text-gray-600">Suivez l&apos;avancement de votre projet en temps réel</p>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-12"
              >
                <Link 
                  href="/a-propos" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Notre histoire
                  <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Équipe Digital Switch CM"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                      <UsersIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Équipe d&apos;experts</h4>
                      <p className="text-gray-600">Développeurs, designers & stratèges</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-32 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Ils Nous Ont Fait Confiance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de leur expérience avec Digital Switch CM
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <SolidStarIcon 
                      key={i} 
                      className="h-6 w-6 text-yellow-500 fill-yellow-500" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-lg mb-8 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.avatar}
                  </div>
                  
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <div className="mt-2">
                      <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs font-medium rounded-full">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-12 border-t border-gray-800"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "4.9/5", label: "Satisfaction client" },
                { value: "100%", label: "Projets livrés" },
                { value: "2x", label: "Growth moyen" },
                { value: "<24h", label: "Temps de réponse" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')]" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20" />
        </div>
        
        {/* Floating elements */}
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 20, ease: "linear" },
            scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
          }}
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Prêt à Révolutionner Votre Présence Digitale ?
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd&apos;hui pour une consultation gratuite 
              et un devis personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-3xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center justify-center">
                  Discuter de mon projet
                  <ArrowRightIcon className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-xl rounded-3xl shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                Voir nos réalisations
              </motion.a>
            </div>

            <p className="mt-8 text-blue-200">
              Réponse garantie sous 24 heures
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}