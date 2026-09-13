import "./globals.css";

export const metadata = {
  title: "Global GPI | Sustainable Materials & Governed AI Systems",
  description:
    "Global GPI engineers sustainable material platforms and intelligent systems from Newfoundland & Labrador, Canada. Harmonic Certified Distribution Partner of Moral Clarity AI.",
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
