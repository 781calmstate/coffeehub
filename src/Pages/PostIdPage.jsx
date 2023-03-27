import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/loader/Loader';

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
        <div>
          <h1>
            {post.id}. {post.title}
          </h1>
          <div>{post.body}</div>
        </div>
      )}
      {isComsLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Comments:</h1>
          {/* decompose */}
          <div>
            {coms.map((comm) => (
              <div key={comm.id}>
                <h3>{comm.email}</h3>
                <div>{comm.body}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
