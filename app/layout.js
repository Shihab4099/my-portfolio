import "./globals.css";

export const metadata = {
  title: "My_Portfolio",
  description:
    "Portfolio of Ahmad Abdallah Khamis, a Computer Science student and software developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}