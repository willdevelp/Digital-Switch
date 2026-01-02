"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  GlobeAltIcon,
  CodeBracketIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  MegaphoneIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";

const services = [
  {
    id: "web",
    title: "Site vitrine",
    price: "75 000 FCFA",
    icon: GlobeAltIcon,
    color: "from-blue-500 to-cyan-500",
    features: [
      "5 pages maximum",
      "Design responsive & moderne",
      "Formulaire de contact avancé",
      "Interface d'administration intuitive",
      "Optimisation SEO basique",
      "Hébergement 1 an inclus",
    ],
    popular: true,
    delivery: "7-10 jours",
    support: "3 mois inclus",
  },
  {
    id: "pro",
    title: "Site professionnel",
    price: "150 000 FCFA",
    icon: CodeBracketIcon,
    color: "from-purple-500 to-pink-500",
    features: [
      "10 pages maximum",
      "Backend d'administration complet",
      "Galerie photos/vidéos",
      "Blog intégré",
      "Référencement SEO avancé",
      "Analytics & tracking",
      "Maintenance 6 mois",
    ],
    popular: false,
    delivery: "15-20 jours",
    support: "6 mois inclus",
  },
  {
    id: "ecommerce",
    title: "Site e-commerce",
    price: "300 000 FCFA",
    icon: ShoppingCartIcon,
    color: "from-emerald-500 to-green-500",
    features: [
      "Catalogue produits illimité",
      "Paiement en ligne sécurisé",
      "Gestion des stocks",
      "Gestion des commandes",
      "Rapports analytiques",
      "Mobile-first design",
      "Formation utilisateur",
    ],
    popular: true,
    delivery: "25-30 jours",
    support: "12 mois inclus",
  },
  {
    id: "mobile",
    title: "Applications mobiles",
    price: "200 000 FCFA",
    icon: DevicePhoneMobileIcon,
    color: "from-orange-500 to-red-500",
    features: [
      "Design UI/UX sur mesure",
      "Performance optimisée",
      "Publication stores inclus",
      "Notifications push",
      "Backend API",
      "Maintenance 6 mois",
      "Mises à jour gratuites",
    ],
    popular: false,
    delivery: "30-45 jours",
    support: "6 mois inclus",
  },
  {
    id: "design",
    title: "Design graphique",
    price: "25 000 FCFA",
    icon: PaintBrushIcon,
    color: "from-violet-500 to-purple-500",
    features: [
      "Logo professionnel unique",
      "Charte graphique complète",
      "5 révisions incluses",
      "Fichiers sources vectoriels",
      "Guide d'utilisation",
      "Support personnalisé",
    ],
    popular: false,
    delivery: "5-7 jours",
    support: "1 mois inclus",
  },
  {
    id: "marketing",
    title: "Marketing digital",
    price: "50 000 FCFA",
    icon: MegaphoneIcon,
    color: "from-amber-500 to-yellow-500",
    features: [
      "Stratégie digitale complète",
      "Analyse de concurrence",
      "Plan multicanal (SEO/SEA)",
      "Création de contenu",
      "Reporting mensuel",
      "Optimisation continue",
      "ROI mesurable",
    ],
    popular: true,
    delivery: "10-15 jours",
    support: "3 mois inclus",
  },
  {
    id: "seo",
    title: "Référencement (SEO)",
    price: "40 000 FCFA",
    icon: ChartBarIcon,
    color: "from-cyan-500 to-blue-500",
    features: [
      "Audit SEO complet",
      "Optimisation on-page",
      "Optimisation technique",
      "Stratégie de contenu",
      "Suivi positionnement",
      "Reporting mensuel",
      "Conseils d'expert",
    ],
    popular: false,
    delivery: "7-14 jours",
    support: "3 mois inclus",
  },
  {
    id: "community",
    title: "Community Management",
    price: "60 000 FCFA / mois",
    icon: UserGroupIcon,
    color: "from-pink-500 to-rose-500",
    features: [
      "Plan de contenu mensuel",
      "Animation quotidienne",
      "Création de visuels",
      "Modération & engagement",
      "Analyse de performance",
      "Croissance communauté",
      "Rapports détaillés",
    ],
    popular: false,
    delivery: "Immédiat",
    support: "Continuel",
  },
  {
    id: "email",
    title: "Email Marketing",
    price: "20 000 FCFA",
    icon: EnvelopeIcon,
    color: "from-indigo-500 to-blue-500",
    features: [
      "Segmentation avancée",
      "Templates responsives",
      "Automatisations",
      "A/B testing",
      "Analytics détaillées",
      "Optimisation taux d'ouverture",
      "Support technique",
    ],
    popular: false,
    delivery: "5-10 jours",
    support: "2 mois inclus",
  },
  {
    id: "maintenance",
    title: "Maintenance Premium",
    price: "30 000 FCFA / mois",
    icon: ShieldCheckIcon,
    color: "from-slate-600 to-gray-500",
    features: [
      "Mises à jour permanentes",
      "Support 24/7",
      "Sauvegardes quotidiennes",
      "Sécurité renforcée",
      "Monitoring continu",
      "Optimisations",
      "Rapports mensuels",
    ],
    popular: true,
    delivery: "Immédiat",
    support: "Illimité",
  },
];

const benefits = [
  {
    icon: CheckBadgeIcon,
    title: "Garantie qualité",
    description: "Tous nos projets sont livrés avec une garantie satisfaction 100%"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Prix transparents",
    description: "Pas de frais cachés, tout est inclus dans nos tarifs"
  },
  {
    icon: ClockIcon,
    title: "Respect des délais",
    description: "Nous respectons scrupuleusement les échéances convenues"
  },
  {
    icon: ShieldCheckIcon,
    title: "Support continu",
    description: "Accompagnement personnalisé avant, pendant et après le projet"
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const categories = [
    { id: "all", label: "Tous les services" },
    { id: "web", label: "Sites Web" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
    { id: "marketing", label: "Marketing" },
    { id: "maintenance", label: "Maintenance" },
  ];

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.id === selectedCategory);

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
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Solutions sur mesure • Qualité garantie
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-white bg-clip-text text-transparent">
                Nos Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Des solutions digitales complètes pour transformer 
              <span className="block text-cyan-300 font-semibold mt-2">
                votre vision en réalité concrète
              </span>
            </p>
          </motion.div>

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-white text-blue-900 shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: "100+", label: "Projets réalisés" },
              { value: "98%", label: "Clients satisfaits" },
              { value: "24/7", label: "Support" },
              { value: "30j", label: "Garantie" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDownIcon className="h-8 w-8 text-white/60" />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
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
                      <benefit.icon className="h-12 w-12 text-blue-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
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
            {filteredServices.map((service, index) => {
              const gradientBR = (() => {
                try {
                  if (!service || !service.color) return "linear-gradient(to bottom right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                  const parts = service.color.split(" ");
                  const fromToken = parts.find((p) => p.startsWith("from-"));
                  const toToken = parts.find((p) => p.startsWith("to-"));
                  const from = fromToken ? fromToken.replace("from-", "") : "#06b6d4";
                  const to = toToken ? toToken.replace("to-", "") : "#0ea5a4";
                  // If tokens look like Tailwind names (e.g. blue-500) we cannot resolve them here; use fallback
                  if (!from.startsWith("#") && from.includes("-")) return "linear-gradient(to bottom right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                  if (!to.startsWith("#") && to.includes("-")) return "linear-gradient(to bottom right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                  return `linear-gradient(to bottom right, ${from}, ${to})`;
                } catch {
                  return "linear-gradient(to bottom right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                }
              })();

              const gradientRight = (() => {
                try {
                  if (!service || !service.color) return "linear-gradient(to right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                  const parts = service.color.split(" ");
                  const fromToken = parts.find((p) => p.startsWith("from-"));
                  const toToken = parts.find((p) => p.startsWith("to-"));
                  const from = fromToken ? fromToken.replace("from-", "") : "#06b6d4";
                  const to = toToken ? toToken.replace("to-", "") : "#0ea5a4";
                  if (!from.startsWith("#") && from.includes("-")) return "linear-gradient(to right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                  if (!to.startsWith("#") && to.includes("-")) return "linear-gradient(to right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                  return `linear-gradient(to right, ${from}, ${to})`;
                } catch {
                  return "linear-gradient(to right, rgba(14,165,164,0.08), rgba(14,165,164,0.16))";
                }
              })();

              return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
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
                {/* Badge Popular */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm rounded-full shadow-lg flex items-center gap-2">
                      <SolidStarIcon className="h-4 w-4" />
                      POPULAIRE
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Background Effect */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color ?? ''} opacity-5 rounded-full blur-2xl -translate-y-16 translate-x-16`} />
                  
                  {/* Icon */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color ?? ''} shadow-lg`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {service.title}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold bg-gradient-to-br bg-clip-text text-transparent"
                      style={{ background: gradientBR }}>
                      {service.price}
                    </div>
                    {service.id === "maintenance" || service.id === "community" ? (
                      <p className="text-sm text-gray-500 mt-1">Abonnement mensuel</p>
                    ) : (
                      <p className="text-sm text-gray-500 mt-1">Forfait unique</p>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex justify-center gap-6 mb-8 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <ClockIcon className="h-4 w-4 text-blue-500" />
                      <span>{service.delivery}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <ShieldCheckIcon className="h-4 w-4 text-green-500" />
                      <span>{service.support}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color ?? ''}`} />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group/btn"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                        style={{ background: gradientRight }} />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color ?? ''} opacity-10`} />
                      <span className="relative flex items-center justify-center gap-3 text-gray-900 group-hover/btn:text-white transition-colors duration-300">
                        Choisir ce service
                        <ArrowRightIcon className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                      </span>
                    </motion.button>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                    style={{ background: gradientRight }} />
                </div>
              </motion.div>
            );
            })}
          </motion.div>

          {/* Custom Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-5" />
              
              {/* Floating Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-x-32 translate-y-32" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Besoin d&apos;une solution sur mesure ?
                </h2>
                
                <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                  Votre projet est unique ? Contactez-nous pour un devis personnalisé 
                  adapté à vos besoins spécifiques.
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
                      Demander un devis personnalisé
                      <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </motion.a>

                  <motion.a
                    href="/portfolio"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Voir nos réalisations
                  </motion.a>
                </div>

                <p className="mt-8 text-blue-200 text-sm">
                  Réponse garantie sous 24 heures • Consultation gratuite
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Questions Fréquentes
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Les prix incluent-ils l'hébergement ?",
                answer: "Oui, nos forfait sites web incluent l'hébergement premium pendant 1 an. Pour les autres services, nous vous recommandons les meilleures options selon vos besoins."
              },
              {
                question: "Combien de révisions sont incluses ?",
                answer: "Tous nos forfaits incluent un nombre défini de révisions (généralement 3-5). Nous travaillons en collaboration avec vous jusqu'à ce que vous soyez entièrement satisfait."
              },
              {
                question: "Proposez-vous des solutions de paiement échelonné ?",
                answer: "Oui, pour les projets de plus de 200 000 FCFA, nous proposons un paiement en 2 ou 3 échéances : 50% à la commande, et le reste à la livraison."
              },
              {
                question: "Quel est le délai moyen de réalisation ?",
                answer: "Les délais varient selon la complexité du projet : sites vitrines (7-10 jours), e-commerce (25-30 jours), applications mobiles (30-45 jours). Nous établissons un calendrier précis dès le début."
              },
              {
                question: "Assurez-vous la maintenance après livraison ?",
                answer: "Oui, tous nos forfaits incluent une période de support technique gratuite. Nous proposons également des contrats de maintenance mensuelle pour une tranquillité d'esprit totale."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <QuestionMarkCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-11">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Component pour l'icône FAQ
function QuestionMarkCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}