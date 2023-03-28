import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/loader/Loader';
import cl from '../styles/PostIdPage.module.css';
import CommsItem from '../components/CommsItem';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [coms, setComs] = useState([]);
  const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchCommentsById, isComsLoading, comsError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    setComs(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsById(params.id);
  }, []);

  return (
    <div style={{ marginTop: '160px' }}>
      {isPostLoading ? (
        <Loader />
      ) : (
        <div className={cl.post_body}>
          <h1 className={cl.post_title}>
            {post.id}. {post.title}
          </h1>
          <div className={cl.post_text}>{post.body}</div>
        </div>
      )}
      <hr size="4" color="rgb(43, 40, 40)" className={cl.line} />
      {isComsLoading ? <Loader /> : <CommsItem coms={coms} />}
    </div>
  );
};

export default PostIdPage;
