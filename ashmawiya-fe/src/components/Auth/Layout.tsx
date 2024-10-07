export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 bg-gray-50 w-full h-screen">
      <div className="flex flex-col justify-center items-center p-6 bg-gray-100 min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          {children}
        </div>
      </div>
      <img src="./landing-bg.jpg" alt="hero" />
    </div>
  );
};
