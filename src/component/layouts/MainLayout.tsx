import { Footer, Header } from "../common";

const MainLayout = ({ children }: any) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="min-h-screen p-2">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
