import Header from '../components/Header';
import Footer from '../components/Footer';
import LegacyScripts from '../components/LegacyScripts';

export const metadata = {
  title: 'Derma Plus Clinic | Best Hair Transplant & Skin Care in Gurgaon',
  description:
    'DermaPlus Clinic - Leading Hair Transplant & Skin Care Clinic in Gurgaon.',
  icons: { icon: '/images/favicon.png' },
};

export const viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, userScalable: false };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="/vendor/slick/slick.css" />
        <link rel="stylesheet" href="/vendor/animate/animate.min.css" />
        <link rel="stylesheet" href="/icons/style.css" />
        <link rel="stylesheet" href="/vendor/bootstrap-datetimepicker/bootstrap-datetimepicker.css" />
        <link rel="stylesheet" href="/vendor/twentytwenty/twentytwenty.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/color/color.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" referrerPolicy="no-referrer" />
      </head>
      <body className="shop-page">
        <Header />
        {children}
        <Footer />
        <LegacyScripts />
      </body>
    </html>
  );
}
