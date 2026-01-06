'use client';

import Link from 'next/link';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Site vitrine', icon: GlobeAltIcon, href: '/services#web' },
    { name: 'Site e-commerce', icon: ShoppingCartIcon, href: '/services#ecommerce' },
    { name: 'Application mobile', icon: DevicePhoneMobileIcon, href: '/services#mobile' },
    { name: 'Design graphique', icon: PaintBrushIcon, href: '/services#design' },
    { name: 'Marketing digital', icon: MegaphoneIcon, href: '/services#marketing' },
    { name: 'Site professionnel', icon: CodeBracketIcon, href: '/services#pro' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top grid */}
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Digital Switch
              </h3>
              <div className="mt-3 w-14 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Agence digitale spécialisée dans la création de solutions web
              et mobiles sur mesure. Nous accompagnons les entreprises
              dans leur transformation digitale.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-6 pb-2 border-b border-gray-800">
              Services
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="p-2 bg-gray-900 rounded-lg group-hover:bg-cyan-900/20 transition-colors">
                      <service.icon className="h-4 w-4 text-cyan-500" />
                    </span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation + Contact */}
          <div className="lg:col-span-4 grid gap-10 sm:grid-cols-2">

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-6 pb-2 border-b border-gray-800">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-white">Réalisations</Link></li>
                <li><Link href="/about" className="hover:text-white">À propos</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6 pb-2 border-b border-gray-800">
                Contact
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <PhoneIcon className="h-4 w-4 text-cyan-400" />
                  +237 696 49 20 29
                </li>
                <li className="flex items-center gap-3">
                  <EnvelopeIcon className="h-4 w-4 text-cyan-400" />
                  info@digitalswitch.cm
                </li>
                <li className="flex items-center gap-3">
                  <MapPinIcon className="h-4 w-4 text-cyan-400" />
                  Douala, Cameroun
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <span>
            © {currentYear} Digital Switch. Tous droits réservés.
          </span>

          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-gray-300">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-gray-300">
              Confidentialité
            </Link>
            <Link href="/cgu" className="hover:text-gray-300">
              CGU
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}