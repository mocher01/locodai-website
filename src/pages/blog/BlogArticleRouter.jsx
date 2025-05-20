import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

// Charger tous les articles de façon dynamique
const modules = import.meta.glob('./articles/*.jsx');

const BlogArticleRouter = () => {
  const { slug } = useParams();
  const path = `./articles/${slug}.jsx`;

  const ArticleComponent = lazy(modules[path]);

  return (
    <Suspense fallback={<div className="text-center py-20">Chargement de l’article...</div>}>
      <ArticleComponent />
    </Suspense>
  );
};

export default BlogArticleRouter;