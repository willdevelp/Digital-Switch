'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  GlobeAltIcon,
  CodeBracketIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  UsersIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const servicesOverview = [
  {
    title: "Site vitrine",
    icon: GlobeAltIcon,
    description: "Présentez votre entreprise avec un site élégant et responsive.",
  },
  {
    title: "Site professionnel",
    icon: CodeBracketIcon,
    description: "Solutions avancées avec backend et référencement.",
  },
  {
    title: "Site e-commerce",
    icon: ShoppingCartIcon,
    description: "Vendez en ligne avec paiements sécurisés.",
  },
  {
    title: "Applications mobiles",
    icon: DevicePhoneMobileIcon,
    description: "Apps natives pour Android et iOS.",
  },
  {
    title: "Design graphique",
    icon: PaintBrushIcon,
    description: "Logos et chartes graphiques professionnelles.",
  },
  {
    title: "Conception graphique / Flyers",
    icon: DocumentTextIcon,
    description: "Supports marketing attractifs.",
  },
  {
    title: "Maintenance",
    icon: WrenchScrewdriverIcon,
    description: "Support continu pour vos projets digitaux.",
  },
];

const testimonials = [
  {
    name: "Client Satisfait",
    quote: "Digital Switch CM a transformé notre présence en ligne !",
    role: "PDG, Entreprise XYZ",
  },
  {
    name: "Autre Client",
    quote: "Service professionnel et résultats exceptionnels.",
    role: "Directeur Marketing, Société ABC",
  },
  {
    name: "Tiers Client",
    quote: "Recommandé pour tous vos besoins digitaux.",
    role: "Entrepreneur Indépendant",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-6 tracking-tight">
            Bienvenue chez Digital Switch CM
          </h1>
          <p className="text-xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Solutions digitales innovantes pour booster votre business. Sites web, apps mobiles, design graphique et plus.
          </p>
          <motion.a
            href="/devenir-partenaire"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
          >
            Devenir Partenaire
            <ArrowRightIcon className="ml-3 h-6 w-6" />
          </motion.a>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-800 text-center mb-12"
          >
            Nos Services
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {servicesOverview.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="flex justify-center mb-6">
                  <service.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-700 text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-blue-700 font-semibold hover:underline">
              Voir tous les services →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-800 mb-6">
              À Propos de Nous
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Digital Switch CM est une agence digitale basée au Cameroun, spécialisée dans le développement web, mobile et le design graphique. Nous aidons les entreprises à se digitaliser avec des solutions sur mesure.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <UsersIcon className="h-6 w-6 text-blue-600" />
                Équipe d&apos;experts passionnés
              </li>
              <li className="flex items-center gap-3">
                <StarIcon className="h-6 w-6 text-blue-600" />
                Satisfaction client garantie
              </li>
            </ul>
            <div className="mt-8">
              <Link href="/a-propos" className="text-blue-700 font-semibold hover:underline">
                En savoir plus →
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-64 md:h-96"
          >
            <Image
              src="/placeholder.svg?height=400&width=600" // Remplacer par une image réelle
              alt="Équipe Digital Switch CM"
              fill
              className="object-cover rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-800 text-center mb-12"
          >
            Ce Que Disent Nos Clients
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-blue-50 rounded-3xl p-8 shadow-lg"
              >
                <StarIcon className="h-8 w-8 text-yellow-500 mb-4 mx-auto" />
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold text-blue-700">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 text-center bg-blue-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Booster Votre Business Digital ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous dès aujourd&apos;hui pour une consultation gratuite.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Nous Contacter
            <ArrowRightIcon className="ml-3 h-6 w-6" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}