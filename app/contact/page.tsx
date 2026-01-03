'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as SolidCheckCircleIcon } from '@heroicons/react/24/solid';

const contactMethods = [
  {
    icon: PhoneIcon,
    title: "Téléphone",
    details: ["+237 696 49 20 29", "+237 695 46 12 04"],
    color: "bg-sky-950",
    description: "Appelez-nous pour une consultation rapide",
    action: "Appeler maintenant",
    link: "tel:+237696492029",
  },
  {
    icon: EnvelopeIcon,
    title: "Email",
    details: ["info@digitalswitch.cm", "contact@digitalswitch.cm"],
    color: "bg-sky-950",
    description: "Réponse sous 24h maximum",
    action: "Envoyer un email",
    link: "mailto:info@digitalswitch.cm",
  },
  // {
  //   icon: MapPinIcon,
  //   title: "Adresse",
  //   details: ["Douala, Cameroun", "Zone industrielle"],
  //   color: "from-emerald-500 to-green-500",
  //   description: "Bureau disponible sur rendez-vous",
  //   action: "Voir sur la carte",
  //   link: "https://maps.google.com",
  // },
  {
    icon: ClockIcon,
    title: "Horaires",
    details: ["Lun - Ven: 8h - 18h", "Samedi: 9h - 13h"],
    color: "bg-sky-950",
    description: "Support disponible 6j/7",
    action: "Prendre rendez-vous",
    link: "/rendez-vous",
  },
];

const faqs = [
  {
    question: "Quel est le délai de réponse ?",
    answer: "Nous répondons à tous les messages dans les 24 heures ouvrables, souvent plus rapidement.",
  },
  {
    question: "Proposez-vous des consultations gratuites ?",
    answer: "Oui, nous offrons une consultation gratuite de 30 minutes pour discuter de votre projet.",
  },
  {
    question: "Quelle est la meilleure façon de vous contacter ?",
    answer: "Le formulaire de contact est idéal pour les demandes détaillées. Pour les urgences, préférez le téléphone.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/20">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative pt-20 pb-16 px-6 md:px-12 overflow-hidden bg-sky-950"
      >
        {/* Background with Parallax */}
        {/* <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
        /> */}
        
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue- rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
              Réponse garantie sous 24h
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="bg-white bg-clip-text text-transparent">
                Contactez-Nous
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Prêt à donner vie à votre projet digital ? 
              <span className="block text-cyan-300 font-semibold mt-2">
                Discutons de votre vision dès aujourd&apos;hui.
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
            {[
              { value: "<24h", label: "Temps de réponse" },
              { value: "98%", label: "Satisfaction client" },
              { value: "30min", label: "Consultation gratuite" },
              { value: "24/7", label: "Support technique" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:-translate-y-2 overflow-hidden">
                  {/* Background Effect */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${method.color} opacity-5 rounded-full blur-2xl -translate-y-16 translate-x-16`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${method.color} shadow-lg`}>
                        <method.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{method.description}</p>
                    
                    <div className="space-y-2 mb-8">
                      {method.details.map((detail, i) => (
                        <p key={i} className="text-gray-800 font-medium">{detail}</p>
                      ))}
                    </div>
                    
                    <motion.a
                      href={method.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center justify-center w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-br ${method.color} shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                    >
                      <span className="flex items-center gap-3">
                        {method.action}
                        <ArrowRightIcon className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Background Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl -translate-y-32 translate-x-32" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-sky-950 shadow-lg">
                      <ChatBubbleLeftRightIcon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      Envoyez-nous un Message
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-10 text-lg">
                    Décrivez votre projet et nous vous répondrons avec une proposition personnalisée.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                          <SolidCheckCircleIcon className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Message envoyé avec succès !
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Nous vous répondrons dans les plus brefs délais. Merci pour votre confiance.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Envoyer un nouveau message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <UserIcon className="h-4 w-4 text-sky-950" />
                            Nom complet *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                            placeholder="Votre nom et prénom"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <EnvelopeIcon className="h-4 w-4 text-sky-950" />
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <PhoneIcon className="h-4 w-4 text-sky-950" />
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                            placeholder="+237 XXX XX XX XX"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <BuildingOfficeIcon className="h-4 w-4 text-sky-950" />
                            Service intéressé
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 bg-gray-50/50"
                          >
                            <option value="">Sélectionnez un service</option>
                            <option value="site-vitre">Site vitrine</option>
                            <option value="ecommerce">Site e-commerce</option>
                            <option value="mobile">Application mobile</option>
                            <option value="design">Design graphique</option>
                            <option value="marketing">Marketing digital</option>
                            <option value="seo">Référencement SEO</option>
                            <option value="other">Autre</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <ChatBubbleLeftRightIcon className="h-4 w-4text-sky-950" />
                          Votre message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 resize-none"
                          placeholder="Décrivez votre projet, vos objectifs, votre budget et vos délais..."
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative w-full py-5 bg-sky-950 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <PaperAirplaneIcon className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              Envoyer mon message
                            </>
                          )}
                        </span>
                      </motion.button>
                      
                      <p className="text-center text-sm text-gray-500">
                        En cliquant sur &quot;Envoyer&quot;, vous acceptez nos conditions de traitement des données.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Info & FAQ */}
            <div className="space-y-12">
              {/* About Contact */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-sky-950 rounded-3xl p-10 text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-5" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-emerald-500 shadow-lg">
                      <ShieldCheckIcon className="h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-bold">Pourquoi Nous Contacter ?</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-cyan-500/20 mt-1">
                        <CheckCircleIcon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Expertise dédiée</h4>
                        <p className="text-blue-100">Un expert vous accompagne personnellement</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-blue-500/20 mt-1">
                        <CheckCircleIcon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Proposition sur mesure</h4>
                        <p className="text-blue-100">Devis personnalisé adapté à vos besoins</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-emerald-500/20 mt-1">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Suivi personnalisé</h4>
                        <p className="text-blue-100">Accompagnement à chaque étape du projet</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-blue-700">
                    <h4 className="font-bold text-lg mb-4">Notre engagement</h4>
                    <p className="text-blue-100">
                      Nous nous engageons à vous répondre sous 24h maximum et à vous fournir 
                      une consultation initiale gratuite pour évaluer votre projet.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                      <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-3">
                        <div className="p-2 rounded-lg">
                          <QuestionMarkCircleIcon className="h-5 w-5 text-sky-950" />
                        </div>
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 pl-11">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-gray-600 text-sm">
                    Vous avez d&apos;autres questions ? N&apos;hésitez pas à nous appeler directement.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-sky-950 bg-clip-text text-transparent">
                Notre Localisation
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Situés au cœur de Douala, nous sommes facilement accessibles
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <GlobeAltIcon className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Digital Switch CM</h3>
                    <p>Douala, Cameroun</p>
                    <p className="text-sm mt-4">(Carte interactive à intégrer)</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations pratiques</h3>
              
              <div className="space-y-6">
                {/* <div className="flex items-start gap-4">
                  <MapPinIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Adresse complète</h4>
                    <p className="text-gray-600">Zone Industrielle, Douala</p>
                    <p className="text-gray-600">Cameroun</p>
                  </div>
                </div> */}
                
                <div className="flex items-start gap-4">
                  <ClockIcon className="h-6 w-6 text-sky-950 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Horaires de bureau</h4>
                    <p className="text-gray-600">Lundi - Vendredi: 8h - 18h</p>
                    <p className="text-gray-600">Samedi: 9h - 13h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <BuildingOfficeIcon className="h-6 w-6 text-sky-950 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Visite sur rendez-vous</h4>
                    <p className="text-gray-600">Contactez-nous pour planifier une visite</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <motion.a
                  href="/rendez-vous"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-full py-4 bg-sky-950 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Prendre rendez-vous
                    <ArrowRightIcon className="h-5 w-5" />
                  </span>
                </motion.a>
              </div>
            </motion.div>
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