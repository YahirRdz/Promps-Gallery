import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover and Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI-Powered Promps</span>
      </h1>
      <p className='desc text-center'>
        is an open-source AI prompting tool for mondern world to discover,
        create and share creative promps
      </p>

      <Feed/>
    </section>
  );
};

export default Home;
