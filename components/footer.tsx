'use client';

import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import type { SVGProps } from 'react';

/* Simple local SVG placeholders for social icons (use currentColor to inherit text color) */
const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const Twitter = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const Linkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const Youtube = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/digitalswitchcm', color: 'hover:text-blue-500' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/digitalswitchcm', color: 'hover:text-cyan-500' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/digitalswitchcm', color: 'hover:text-pink-500' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/digitalswitchcm', color: 'hover:text-blue-700' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@digitalswitchcm', color: 'hover:text-red-500' },
  ];

  const servicesLinks = [
    { label: 'Sites Vitrine', href: '/services#web' },
    { label: 'E-commerce', href: '/services#ecommerce' },
    { label: 'Applications Mobile', href: '/services#mobile' },
    { label: 'Design Graphique', href: '/services#design' },
    { label: 'Marketing Digital', href: '/services#marketing' },
    { label: 'Référencement SEO', href: '/services#seo' },
  ];

  const companyLinks = [
    { label: 'À Propos', href: '/a-propos' },
    { label: 'Notre Équipe', href: '/equipe' },
    { label: 'Portfolio', href: '/realisations' },
    { label: 'Blog', href: '/blog' },
    { label: 'Carrières', href: '/carrieres' },
    { label: 'Presse', href: '/presse' },
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: 'Conditions d\'utilisation', href: '/conditions' },
    { label: 'Cookies', href: '/cookies' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
                <GlobeAltIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
                    Digital Switch CM
                  </span>
                </h2>
                <p className="text-blue-100 text-sm">Excellence digitale au Cameroun</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-8 max-w-md leading-relaxed">
              Nous transformons vos idées en solutions digitales performantes. 
              De la conception à la maintenance, nous accompagnons votre succès en ligne.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <ShieldCheckIcon className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">Garantie qualité</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <ClockIcon className="h-4 w-4 text-cyan-400" />
                <span className="text-sm">Support 24/7</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <ChatBubbleLeftRightIcon className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Consultation gratuite</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">
                <PaperAirplaneIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Restez informé</h3>
            </div>
            
            <p className="text-blue-100 mb-6">
              Recevez nos conseils, nouveautés et offres exclusives directement dans votre boîte mail.
            </p>

            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <EnvelopeIcon className="h-5 w-5 text-blue-300" />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-3">
                  S&apos;abonner à la newsletter
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </form>

            <p className="text-blue-200 text-xs mt-4 text-center">
              En vous inscrivant, vous acceptez notre politique de confidentialité
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                <SparklesIcon className="h-4 w-4 text-cyan-400" />
              </span>
              Nos Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors group text-sm"
                  >
                    <ArrowRightIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <GlobeAltIcon className="h-4 w-4 text-purple-400" />
              </span>
              Entreprise
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors group text-sm"
                  >
                    <ArrowRightIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20">
                <ChatBubbleLeftRightIcon className="h-4 w-4 text-emerald-400" />
              </span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-blue-100 text-sm">+237 696 49 20 29</p>
                  <p className="text-blue-100 text-sm">+237 695 46 12 04</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-100 text-sm">info@digitalswitch.cm</p>
                  <p className="text-blue-100 text-sm">contact@digitalswitch.cm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-blue-100 text-sm">Douala, Cameroun</p>
                  <p className="text-blue-100 text-sm">Yaoundé, Cameroun</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Partenariat */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20">
                <SparklesIcon className="h-4 w-4 text-amber-400" />
              </span>
              Partenariat
            </h4>
            <div className="space-y-4">
              <p className="text-blue-100 text-sm">
                Devenez partenaire et générez des revenus avec notre programme d&apos;affiliation premium.
              </p>
              <motion.a
                href="/devenir-partenaire"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full text-sm hover:shadow-lg transition-shadow"
              >
                Devenir partenaire
                <ArrowRightIcon className="h-4 w-4" />
              </motion.a>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-blue-100 mb-3">Suivez-nous</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${social.color} transition-colors`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-blue-200 text-sm">
              &copy; {currentYear} Digital Switch CM. Tous droits réservés.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-blue-200 text-sm">Paiements acceptés :</span>
              <div className="flex gap-2">
                {['VISA', 'MasterCard', 'MTN', 'Orange'].map((method, index) => (
                  <div
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs text-blue-200"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="mt-8 flex justify-center">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 text-white hover:border-cyan-500/30 transition-all"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-90" />
              <span className="text-sm font-medium">Retour en haut</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="https://wa.me/237696492029"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
        >
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-20" />
            <ChatBubbleLeftRightIcon className="h-6 w-6 relative" />
          </div>
          <span className="hidden sm:inline">Discuter sur WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </motion.a>
      </motion.div>
    </footer>
  );
}