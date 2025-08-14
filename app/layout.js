import "./globals.css";
import "./app.css";
import CustomCursor from "./_components/Others/CustomCursor";

export const metadata = {
  title: "Ghaly | Portfolio",
  description: "Mohamed Ghaly's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-oswald">
      <body className={`font-oswald antialiased`}>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
