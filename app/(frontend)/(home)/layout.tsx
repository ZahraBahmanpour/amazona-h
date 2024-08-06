import Header from "@/components/header/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <footer className="flex justify-center items-center p-4 text-grayHoverColor">
        <p>Copyright © 2024 - All right reserved by Amazona</p>
      </footer>
    </div>
  );
}
