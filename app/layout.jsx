import "@styles/globals.css";

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
          <main className='app'>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
