import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bisсuit-bakery-shop.ru'),
  title: 'Biscuit | бенто, торты, макарон в Калуге на заказ',
  description:
    'Домашняя кондитерская в Калуге. У меня Вы можете заказать торты, бенто-торты, макарон, трайфлы, капкейки, ириски, печенье.',
  keywords:
    'Торты, Бенто-торты, Макарон, Трайфлы, капкейки, ириски, печенье на заказ в Калуге',
  openGraph: {
    type: 'website',
    url: 'url',
    images: 'img/logo.png',
    title: 'Biscuit | бенто, торты, макарон в Калуге на заказ',
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
        <link rel="shortcut icon" href="favicon.ico" />
        <meta
          property="og:image"
          content="https://biscuit-bakery-shop.ru/img/logo.png"
        />
        <meta property="og:image:width" content="<120>" />
        <meta property="og:image:height" content="<68>" />
        <meta name="yandex-verification" content="e8e54da190d1e770" />
        <meta
          name="google-site-verification"
          content="nuU03J33jljzauUHL3LliZn9O7Kxjc4EzuH9d0K4jeM"
        />
      </head>
      <body className={jost.className}>{children}</body>
    </html>
  );
}
