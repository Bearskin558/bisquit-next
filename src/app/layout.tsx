import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Link from 'next/link';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bisquit-bakery-shop.ru'),
  title: 'Bisquit | бенто, торты, макарон в Калуге на заказ',
  description:
    'Домашняя кондитерская в Калуге. У меня Вы можете заказать торты, бенто-торты, макарон, трайфлы, капкейки, ириски, печенье.',
  keywords:
    'Торты, Бенто-торты, Макарон, Трайфлы, капкейки, ириски, печенье на заказ в Калуге',
  openGraph: {
    type: 'website',
    url: 'url',
    images: 'img/logo.png',
    title: 'Bisquit | бенто, торты, макарон в Калуге на заказ',
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
      <head>
        <link rel="shortcut icon" href="img/favicon.ico" />
        <meta property="og:image:width" content="<120>" />
        <meta property="og:image:height" content="<68>" />
      </head>
      <body className={jost.className}>{children}</body>
    </html>
  );
}
