'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  GlobeAltIcon,
  CurrencyDollarIcon,
  GiftIcon,
  PhoneIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,    
  TrophyIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ClockIcon,
  CheckCircleIcon,
  CreditCardIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
// solid star icon not used here

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Commissions Premium',
    description: '20% fixe sur chaque vente • Paiements mensuels garantis',
    color: 'from-emerald-500 to-green-500',
    highlight: 'TOP TAUX',
  },
  {
    icon: GlobeAltIcon,
    title: 'Code Promo Unique',
    description: 'Suivi analytique en temps réel • Tableau de bord personnalisé',
    color: 'from-blue-500 to-cyan-500',
    highlight: 'ANALYTICS',
  },
  {
    icon: ChartBarIcon,
    title: 'Conversion Maximisée',
    description: 'Outils marketing pro • Landing pages optimisées',
    color: 'from-purple-500 to-pink-500',
    highlight: 'OPTIMISÉ',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Support Élite',
    description: 'Coach dédié • Ressources exclusives • Formation continue',
    color: 'from-amber-500 to-orange-500',
    highlight: 'PRIORITAIRE',
  },
];

const ambassadorLevels = [
  {
    level: 'Bronze',
    clients: '1-5 clients',
    reward: 'Site web + Hébergement 1 an',
    color: 'from-amber-700 to-yellow-600',
    commission: '20%',
  },
  {
    level: 'Silver',
    clients: '6-10 clients',
    reward: 'Application mobile personnalisée',
    color: 'from-gray-400 to-slate-500',
    commission: '22%',
  },
  {
    level: 'Gold',
    clients: '11-15 clients',
    reward: 'Formation professionnelle certifiée',
    color: 'from-yellow-500 to-amber-400',
    commission: '25%',
  },
  {
    level: 'Platinum',
    clients: '16+ clients',
    reward: 'Package business complet + Mentoring',
    color: 'from-cyan-500 to-blue-500',
    commission: '30%',
  },
];

const successStories = [
  {
    name: 'Tech Partners',
    revenue: '450K FCFA',
    period: '3 mois',
    testimonial: 'Le meilleur programme partenariat au Cameroun !',
    avatar: 'TP',
  },
  {
    name: 'Digital Agency',
    revenue: '1.2M FCFA',
    period: '6 mois',
    testimonial: 'Support exceptionnel et paiements toujours à temps.',
    avatar: 'DA',
  },
  {
    name: 'StartUp Lab',
    revenue: '750K FCFA',
    period: '4 mois',
    testimonial: 'Des outils qui font vraiment la différence.',
    avatar: 'SL',
  },
];

export default function DevenirPartenaire() {
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
        className="relative pt-16 pb-24 px-6 md:px-12 overflow-hidden bg-sky-950"
      >
        {/* Background with Parallax */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        />
        
        {/* Floating Elements */}
        {/* <motion.div 
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
        /> */}
        
        {/* <motion.div 
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        /> */}

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Programme Partenaire Premium
            </span>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="bg-white bg-clip-text text-transparent">
                Transformez votre réseau en revenus
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              <span className="block text-cyan-300 font-semibold mt-2">
                20% de commission • Support premium • Récompenses exclusives
              </span>
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: "20%", label: "Commission moyenne", icon: ChartBarIcon },
              { value: "<48h", label: "Paiements rapides", icon: ClockIcon },
              { value: "100+", label: "Partenaires actifs", icon: UserGroupIcon },
              { value: "4.9★", label: "Satisfaction", icon: StarIcon },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          >
            <motion.a
              href="#inscription"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-emerald-600 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-emerald-600 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative flex items-center justify-center gap-3">
                Rejoindre le programme
                <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#details"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-white/20 transition-all duration-300"
            >
              Voir les détails
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="details" className="py-20 px-6 md:px-12 relative ">
        <div className="absolute inset-0" />
        
        <div className='space-y-24'>
          <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-sky-950 bg-clip-text text-transparent">
                Votre Package Partenaire
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour générer des revenus passifs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const bgGradient = (() => {
                try {
                  if (!benefit || !benefit.color) return "linear-gradient(to bottom right, rgba(14,165,164,0.06), rgba(14,165,164,0.12))";
                  const parts = benefit.color.split(" ");
                  const fromToken = parts.find((p) => p.startsWith("from-"));
                  const toToken = parts.find((p) => p.startsWith("to-"));
                  const from = fromToken ? fromToken.replace("from-", "") : "#06b6d4";
                  const to = toToken ? toToken.replace("to-", "") : "#0ea5a4";
                  if (!from.startsWith("#") && from.includes("-")) return "linear-gradient(to bottom right, rgba(14,165,164,0.06), rgba(14,165,164,0.12))";
                  if (!to.startsWith("#") && to.includes("-")) return "linear-gradient(to bottom right, rgba(14,165,164,0.06), rgba(14,165,164,0.12))";
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
                className="group relative"
              >
                <div className="absolute inset-0 bg-sky-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl"
                  style={{ background: bgGradient }}
                />

                <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-sky-950/90`}>
                    {benefit.highlight}
                  </div>

                  <div className={`flex justify-center mb-6 p-4 rounded-2xl bg-sky-950 w-fit mx-auto`}>
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>

        {/* Detailed Cards */}
            <div className="grid gap-8 md:grid-cols-3 mb-16 relative max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="col-span-1 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-lg"
                >
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Programme de Code Promo</h2>
                    <p className="text-slate-600 mb-6">Recevez un code unique et suivez en temps réel les ventes générées. Tableaux de bord clairs, export facile et rapports par période.</p>
                    <ul className="text-slate-700 space-y-3">
                        <li className="flex items-start gap-3"><span className="text-sky-950 mt-1">•</span> Suivi des conversions</li>
                        <li className="flex items-start gap-3"><span className="text-sky-950 mt-1">•</span> Paiements transparents</li>
                        <li className="flex items-start gap-3"><span className="text-sky-950 mt-1">•</span> Support prioritaire</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="col-span-1 bg-sky-950 text-white rounded-3xl p-8 shadow-2xl"
                >
                    <h2 className="text-2xl font-bold mb-4">Commissions</h2>
                    <p className="text-white/90 mb-6">20% sur chaque vente réalisée via votre code. Exemple : 30,000 FCFA pour une vente à 150,000 FCFA.</p>
                    <div className="text-white/95 font-extrabold text-3xl">30,000 FCFA</div>
                    <div className="text-white/80 text-sm mt-2">Paiements mensuels, pas de surprises.</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="col-span-1 bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-lg"
                >
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Récompenses Ambassadeurs</h2>
                    <p className="text-slate-600 mb-6">Atteignez des paliers et bénéficiez d&apos;avantages exclusifs : hébergement, application, formations et matériel.</p>
                    <div className="grid gap-3">
                        <div className="flex items-center justify-between text-slate-700">
                            <span className="font-medium">5 clients</span>
                            <span className="text-sky-950 font-semibold">Site & hébergement</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                            <span className="font-medium">10 clients</span>
                            <span className="text-sky-950 font-semibold">App mobile</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                            <span className="font-medium">15 clients</span>
                            <span className="text-sky-950 font-semibold">Formation pro</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-sky-950 bg-clip-text text-transparent">
                Comment Ça Marche ?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 étapes simples pour commencer à générer des revenus
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inscription Gratuite",
                description: "Créez votre compte partenaire en 2 minutes",
                icon: UserGroupIcon,
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "02",
                title: "Recevez Vos Outils",
                description: "Code promo, liens de tracking, ressources marketing",
                icon: GiftIcon,
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "03",
                title: "Générez des Ventes",
                description: "Partagez et suivez vos conversions en temps réel",
                icon: RocketLaunchIcon,
                color: "from-emerald-500 to-green-500",
              },
              {
                step: "04",
                title: "Encaissesez",
                description: "Paiements mensuels automatiques sur votre compte",
                icon: CurrencyDollarIcon,
                color: "from-amber-500 to-orange-500",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`text-4xl font-bold bg-sky-950 bg-clip-text text-transparent`}>
                      {step.step}
                    </div>
                    <div className={`p-3 rounded-xl bg-sky-950`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Connecting Line */}
                  {/* {index < 3 && (
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                      <ArrowRightIcon className="h-8 w-8 text-gray-300" />
                    </div>
                  )} */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscription" className="py-32 px-6 md:px-12 relative overflow-hidden bg-sky-950">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-10" />
        
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 20, ease: "linear" },
            scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
          }}
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Prêt à Rejoindre l&apos;Élite ?
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Rejoignez les partenaires qui génèrent déjà des revenus passifs significatifs
              avec notre programme premium.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <CheckCircleIcon className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Inscription Gratuite</h4>
                <p className="text-blue-100">Aucun frais d&apos;entrée, aucun engagement minimum</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <ShieldCheckIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">Support Dédié 24/7</h4>
                <p className="text-blue-100">Coach personnel et assistance technique prioritaire</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/inscription-partenaire"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-6 bg-emerald-600 text-white font-bold text-xl rounded-3xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-emerald-600 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-3">
                  S&apos;inscrire maintenant
                  <ArrowRightIcon className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="tel:+237696492029"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-xl rounded-3xl shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-3">
                  <PhoneIcon className="h-6 w-6" />
                  Nous appeler
                </span>
              </motion.a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-emerald-200">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-emerald-500/20">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <span>Pas de frais cachés</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-cyan-500/20">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <span>Paiements sous 48h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-500/20">
                  <ShieldCheckIcon className="h-5 w-5" />
                </div>
                <span>Contrat sécurisé</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}