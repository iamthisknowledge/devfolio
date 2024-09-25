// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Matomo from '../components/Matomo'; // Import the Matomo component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Devfolio | Rodrigo Teixeira – Web Content Manager',
    description: 'Devfolio showcases Rodrigo Teixeira’s skills in web content management, SEO optimization, and digital marketing strategies. Discover my projects and experience.',
  };

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* Other head elements */}
      </head>
      <body className={inter.className}>
        <Matomo /> {/* Include Matomo scripts */}
        {children}
      </body>
    </html>
  );
}

