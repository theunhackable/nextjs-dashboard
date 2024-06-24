<<<<<<< HEAD
=======
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
>>>>>>> 4ae508c39fcfece5ed3de108c182ff9ff2f27bb3
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>{children}</body>
=======
      <body className={`${inter.className} antialiased`}>{children}</body>
>>>>>>> 4ae508c39fcfece5ed3de108c182ff9ff2f27bb3
    </html>
  );
}
