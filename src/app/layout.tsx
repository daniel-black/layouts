import './globals.css';
import Navbar from './components/navbar';
import ScreenContainer from './components/screen-container';

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
    <html lang="en">
      <body className='text-white bg-red-500'>
        <ScreenContainer>
          <Navbar />
          {children}
        </ScreenContainer>
      </body>
    </html>
  );
}
