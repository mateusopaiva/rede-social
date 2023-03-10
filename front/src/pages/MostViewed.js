import { useState, useEffect } from "react";

import Feed from '../components/Feed';
import { getMostViewedPostsList } from "../services/postsService";

export default function MostViewed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      try {
        const postsList = await getMostViewedPostsList();
      
        if(!getMostViewedPostsList) {
          setHasError(true);
          return;
        }

        setPosts(postsList);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <main className="most-viewed">
      <Feed
      isLoading = {isLoading}
      hasError = {hasError}
      posts={posts}
      title="Mais vistos"
      subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}