import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";
import Link from "next/link";
import { LayoutMountTime } from "./layout-mount-time";

function Navbar() {
  const items = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Privacy policy", href: "/privacy" },
    { name: "Terms of service", href: "/terms" },
  ];
  const pathname = staticGenerationAsyncStorage.getStore()?.urlPathname;
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{ fontWeight: pathname === item.href ? "bold" : "normal" }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LayoutMountTime />
        <hr />
        <div>{children}</div>
        <hr />
        <a href="https://github.com/joulev/get-pathname-in-server-components">
          GitHub
        </a>
      </body>
    </html>
  );
}
