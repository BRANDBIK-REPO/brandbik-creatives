import RafiHeader from "@/components/Rafih/Navbar";

// This layout intentionally omits the default Header and Footer for rafih-book
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RafiHeader />
      {children}
      
    </>
  );
}
