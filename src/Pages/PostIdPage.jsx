import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/loader/Loader';
import cl from '../styles/PostIdPage.module.css';

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
      {isComsLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className={cl.title}>Comments:</h1>
          {/* decompose */}
          <div>
            {coms.map((comm) => (
              <div className={cl.comm_body} key={comm.id}>
                <h3 className={cl.comm_title}>{comm.email}</h3>
                <div className={cl.comm_text}>{comm.body}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
