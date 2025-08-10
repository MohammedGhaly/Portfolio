import "./globals.css";
import "./app.css";

export const metadata = {
  title: "Ghaly | Portfolio",
  description: "Mohamed Ghaly's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-oswald">
      <body className={`font-oswald antialiased`}>{children}</body>
    </html>
  );
}
