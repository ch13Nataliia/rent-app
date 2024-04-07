import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';

export const metadata = {
  title: 'Rent App',
  description: 'rent app clone',
};

const font = Nunito({
  subsets: ['latin'],
});


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
