import { Poppins } from 'next/font/google';
import "./globals.css";

// Font loading with crossorigin set to 'anonymous'
const inter = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  crossorigin: 'anonymous'
});

export const metadata = {
  title: "Chincodex",
  description: "Embark on your startup journey with a captivating website powered by my tailored software engineering portfolio. Discover how my expertise in WordPress development can elevate your small business's online presence. From dynamic web applications to mobile-responsive designs, each project in my portfolio is meticulously crafted to fuel growth and success for startups like yours. With a strategic focus on SEO optimization, I ensure your website stands out amidst the digital noise, attracting organic traffic and maximizing visibility. Let's redefine the possibilities together and propel your startup to new heights in the digital landscape. Fuel the success of your restaurant, car rental service, blog, or online shop with a captivating website powered by my specialized software engineering portfolio",
  // Ensure proper CSP configuration
  headers: {
    "Content-Security-Policy": "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-eval'"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* HTTP Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="deny" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
        <meta name="referrer" content="no-referrer" />
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
