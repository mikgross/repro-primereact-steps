import "react-perfect-scrollbar/dist/css/styles.css";
import "../styles/tailwind.css";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { twMerge } from "tailwind-merge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
