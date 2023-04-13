import './globals.css';
import { Comfortaa } from 'next/font/google';
import Navbar from './components/navbar';
import ScreenContainer from './components/screen-container';

const comforta = Comfortaa({ subsets: ['latin'] });

export const metadata = {
  title: 'Layouts',
  description: 'A playground for experimenting with UI layouts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={comforta.className}>
      <body className='bg-stone-800 text-stone-200'>
        <ScreenContainer>
          <Navbar />
          {children}
        </ScreenContainer>
      </body>
    </html>
  );
}
