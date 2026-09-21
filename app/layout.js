import "./globals.css";

export const metadata = {
  title: "Baking Compendium",
  description: "Meine persönliche Rezeptsammlung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
