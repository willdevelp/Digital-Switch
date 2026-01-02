import Link from "next/link";
import React     from "react";
import Image from "next/image";


export default function Header() {

    return (
    <header className="flex justify-between items-center px-8 border-b border-gray-200">
            <Image 
                src="/logo.png" 
                alt="Logo" 
                width={80} 
                height={80}
            />

            <div>
               <ul className="flex gap-x-8 font-medium text-gray-700">
                <li className="hover:underline"><Link href="/">Accueil</Link></li>
                <li className="hover:underline"><Link href="/a-propos">À Propos</Link></li>
                <li className="hover:underline"><Link href="/devenirs-partenaires">Devenirs Partenaires</Link></li>
                <li className="hover:underline"><Link href="/portfolio">Portfolio</Link></li>
                <li className="hover:underline"><Link href="/services">Services</Link></li>
                <li className="hover:underline"><Link href="/contact">Contact</Link></li>
               </ul>
            </div>
       </header>
    );
}