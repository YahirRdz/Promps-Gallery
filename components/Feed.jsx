"use client";

import { useState, useEffect } from "react";

import PrompsCard from "./PrompsCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      Texto
      {data.map((post) => {
        <PrompsCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />;
      })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setsearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {};
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };
    fetchPost();
  }, []);
  return (
    <section className='feed'>
      <form className='relative w-full flex-center' action=''>
        <input
          placeholder='Ingresa'
          value={searchText}
          onChange={handleSearchChange}
          required
          type='text'
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
