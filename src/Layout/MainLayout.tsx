import Navbar from "../Components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
