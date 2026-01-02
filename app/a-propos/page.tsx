'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  CodeBracketIcon,
  UsersIcon,
  ArrowRightIcon,
  EyeIcon,
  RocketLaunchIcon,
  HeartIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  TrophyIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid';

const teamMembers = [
  {
    name: "Jean K.",
    role: "Lead Développeur",
    expertise: "Full-Stack & Mobile",
    avatar: "JK",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Marie T.",
    role: "Designer UX/UI",
    expertise: "Design Graphique & Branding",
    avatar: "MT",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Samuel D.",
    role: "Chef de Projet",
    expertise: "Stratégie Digitale",
    avatar: "SD",
    color: "from-emerald-500 to-green-500",
  },
  {
    name: "Amina B.",
    role: "Développeuse Frontend",
    expertise: "React & Next.js",
    avatar: "AB",
    color: "from-orange-500 to-amber-500",
  },
];

const values = [
  {
    icon: LightBulbIcon,
    title: 'Innovation Continue',
    description: 'Nous adoptons les dernières technologies et méthodes pour des solutions avant-gardistes.',
    color: 'from-blue-500 to-cyan-500',
    delay: 0.1,
  },
  {
    icon: UsersIcon,
    title: 'Orientation Client',
    description: 'Votre succès guide chacune de nos décisions. Nous écoutons, comprenons et délivrons.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.2,
  },
  {
    icon: ShieldCheckIcon,
    title: 'Intégrité & Transparence',
    description: 'Communication claire, processus transparents et éthique professionnelle irréprochable.',
    color: 'from-emerald-500 to-green-500',
    delay: 0.3,
  },
  {
    icon: RocketLaunchIcon,
    title: 'Excellence Opérationnelle',
    description: "Nous visons l'excellence dans chaque détail, de la conception à la livraison.",
    color: 'from-orange-500 to-red-500',
    delay: 0.4,
  },
  {
    icon: HeartIcon,
    title: 'Passion Digitale',
    description: "Nous aimons ce que nous faisons, et cela se ressent dans la qualité de notre travail.",
    color: 'from-rose-500 to-pink-500',
    delay: 0.5,
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Collaboration Active',
    description: 'Nous travaillons main dans la main avec vous à chaque étape du projet.',
    color: 'from-violet-500 to-purple-500',
    delay: 0.6,
  },
];

const milestones = [
  { year: "2021", event: "Fondation de Digital Switch CM", description: "Début de notre aventure digitale" },
  { year: "2022", event: "50+ projets réalisés", description: "Expansion de notre portfolio client" },
  { year: "2023", event: "Équipe de 10 experts", description: "Croissance de notre équipe" },
  { year: "2024", event: "Certification qualité", description: "Reconnaissance de notre expertise" },
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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7,
      // easing removed to satisfy framer-motion TypeScript types
    }
  },
};

export default function APropos() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/20">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative h-screen flex items-center justify-center overflow-hidden px-6 md:px-12"
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
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20
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
            delay: 0.5
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Depuis 2021 • Excellence Digitale
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-white bg-clip-text text-transparent">
                Notre Histoire
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Plus qu&apos;une agence, un partenaire de confiance pour votre 
              <span className="block text-cyan-300 font-semibold mt-2">
                transformation digitale en Afrique.
              </span>
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDownIcon className="h-8 w-8 text-white/60" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
                      <RocketLaunchIcon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      Notre Mission
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                      Chez <span className="font-bold text-blue-700">Digital Switch CM</span>, 
                      nous nous engageons à démocratiser l&apos;accès aux solutions digitales de qualité 
                      pour les entreprises africaines.
                    </p>
                    
                    <p>
                      Notre mission est de fournir des services de développement web, applications mobiles, 
                      design graphique et maintenance qui allient <span className="font-semibold text-cyan-600">innovation</span>, 
                      <span className="font-semibold text-blue-600"> accessibilité</span> et 
                      <span className="font-semibold text-emerald-600"> impact durable</span>.
                    </p>
                    
                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <ClockIcon className="h-5 w-5 text-blue-500" />
                        <span>Livraison dans les délais</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                        <TrophyIcon className="h-5 w-5 text-amber-500" />
                        <span>Qualité certifiée</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-5" />
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl -translate-x-16 -translate-y-16" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                      <EyeIcon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white">
                      Notre Vision
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-blue-100 text-lg leading-relaxed">
                    <p>
                      Nous aspirons à devenir le <span className="font-bold text-cyan-300">leader de la transformation digitale</span> en Afrique, 
                      en construisant des ponts technologiques qui permettent aux entreprises locales de rivaliser sur la scène internationale.
                    </p>
                    
                    <p>
                      Notre vision est de créer un écosystème numérique inclusif où chaque entrepreneur, 
                      startup ou grande entreprise peut <span className="font-semibold text-white">prospérer, innover et grandir</span> grâce à des solutions 
                      digitales adaptées à leurs besoins spécifiques.
                    </p>
                    
                    <div className="pt-6 border-t border-blue-700">
                      <div className="flex items-center gap-4 text-sm text-blue-200">
                        <BuildingOfficeIcon className="h-5 w-5 text-cyan-400" />
                        <span>Présence panafricaine d&apos;ici 2026</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-blue-200 mt-2">
                        <MapPinIcon className="h-5 w-5 text-cyan-400" />
                        <span>1000+ entreprises transformées</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Notre Parcours
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les étapes clés de notre croissance et de notre évolution
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500" />
            
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-end pr-12 md:pr-24' : 'justify-start pl-12 md:pl-24'}`}
                >
                  <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg border-4 border-white" />
                  </div>
                  
                  <div className={`max-w-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
                Nos Valeurs Fondamentales
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => {
              const gradientBackground = (() => {
                try {
                  if (!value || !value.color) return "linear-gradient(to bottom right, rgba(14,165,164,0.06), rgba(14,165,164,0.12))";
                  const parts = value.color.split(" ");
                  const fromPart = parts[0] ?? parts[1];
                  const toPart = parts[1] ?? parts[2] ?? parts[3];
                  const from = fromPart ? fromPart.replace("from-", "") : "#06b6d4";
                  const to = toPart ? toPart.replace("to-", "") : "#0ea5a4";
                  if (from.includes("-") || to.includes("-")) {
                    return "linear-gradient(to bottom right, rgba(14,165,164,0.06), rgba(14,165,164,0.12))";
                  }
                  return `linear-gradient(to bottom right, ${from}, ${to})`;
                } catch {
                  return "linear-gradient(to bottom right, rgba(14,165,164,0.06), rgba(14,165,164,0.12))";
                }
              })();

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="group relative"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl"
                    style={{ background: gradientBackground }}
                  />

                  <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className={`flex justify-center mb-6 p-4 rounded-2xl bg-gradient-to-br ${value.color ?? ''} w-fit mx-auto`}>
                      <value.icon className="h-10 w-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRightIcon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Rencontrez Notre Équipe
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés qui donnent vie à vos projets digitaux
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const avatarGradient = (() => {
                try {
                  if (!member || !member.color) return "linear-gradient(to bottom right, rgba(14,165,164,0.06), rgba(14,165,164,0.12))";
                  const parts = member.color.split(" ");
                  const fromPart = parts[0] ?? parts[1];
                  const toPart = parts[1] ?? parts[2] ?? parts[3];
                  const from = fromPart ? fromPart.replace("from-", "") : "#06b6d4";
                  const to = toPart ? toPart.replace("to-", "") : "#0ea5a4";
                  if (from.includes("-") || to.includes("-")) {
                    return "linear-gradient(to bottom right, rgba(14,165,164,0.06), rgba(14,165,164,0.12))";
                  }
                  return `linear-gradient(to bottom right, ${from}, ${to})`;
                } catch {
                  return "linear-gradient(to bottom right, rgba(14,165,164,0.06), rgba(14,165,164,0.12))";
                }
              })();

              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className={`relative mb-6 p-1 rounded-full bg-gradient-to-br ${member.color ?? ''}`}>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-br bg-clip-text text-transparent"
                          style={{ background: avatarGradient }}>
                          {member.avatar}
                        </span>
                      </div>

                      <div className="absolute -bottom-2 -right-2 p-2 bg-white rounded-full shadow-lg">
                        <CodeBracketIcon className="h-5 w-5 text-gray-700" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>

                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    
                    <p className="text-gray-600 text-sm mb-6">
                      {member.expertise}
                    </p>
                    
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <SolidStarIcon 
                          key={i} 
                          className="h-4 w-4 text-amber-500 fill-amber-500" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Une équipe diversifiée et complémentaire, unie par la passion 
              de créer des solutions digitales qui font la différence.
            </p>
            
            <Link 
              href="/equipe" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Découvrir toute l&apos;équipe
              <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />
        <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-10" />
        
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 20 },
            scale: { repeat: Infinity, duration: 3 }
          }}
          className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Prêt à Écrire la Prochaine Page de Notre Histoire ?
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Rejoignez les centaines d&apos;entreprises qui nous font confiance 
              pour leur transformation digitale réussie.
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
                  Démarrer mon projet
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

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-200">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-500/20">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <span>Consultation gratuite 30min</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-cyan-500/20">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                </div>
                <span>Expert dédié</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-emerald-500/20">
                  <ShieldCheckIcon className="h-5 w-5" />
                </div>
                <span>Garantie satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Ajoutez cette icône manquante
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}