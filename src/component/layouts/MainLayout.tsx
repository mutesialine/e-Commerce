import { Footer, Header } from "../common";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="min-h-screen p-2 max-w-screen-2xl mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
