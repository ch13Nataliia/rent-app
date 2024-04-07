import { Nunito } from 'next/font/google';
import './globals.css'
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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
