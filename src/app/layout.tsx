import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bisquit | Бенто, торты, макарон в Калуге на заказ',
  description:
    'Домашняя кондитерская в Калуге. У меня Вы можете заказать торты, бенто-торты, макарон, трайфлы, капкейки, ириски, печенье.',
  keywords:
    'Торты, Бенто-торты, Макарон, Трайфлы, капкейки, ириски, печенье на заказ в Калуге',
  openGraph: {
    type: 'website',
    url: 'url',
    images: '/img/logo.png',
    title: 'Bisquit | Бенто, торты, макарон в Калуге на заказ',
    description:
      'Домашняя кондитерская в Калуге. У меня Вы можете заказать торты, бенто-торты, макарон, трайфлы, капкейки, ириски, печенье.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
