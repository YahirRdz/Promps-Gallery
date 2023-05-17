import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promps Galery",
  description: "Discover & Share AI Propts",
};
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className='main'>
          <div className='gradient' />
          <main className='app'>
            <Nav/>
            {children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
