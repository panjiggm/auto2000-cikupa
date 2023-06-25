import './globals.css';

import { Footer, NavBar } from '@components';

export const metadata = {
  title: 'Toyota Auto2000 Cikupa',
  description: "Discover world's best car showcase application",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative" suppressHydrationWarning={true}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
