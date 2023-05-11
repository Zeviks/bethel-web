import Navbar from "@components/Navbar";
import "@styles/globals.css";

export const metadata = {
  title: "Bethel Pharr",
  description: "Experience god like never before.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900">
        <main className="main">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
