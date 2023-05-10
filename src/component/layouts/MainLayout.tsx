import { Footer, Header } from "../common";

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen p-2">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
