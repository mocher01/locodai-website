import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Chargement automatique des articles avec leurs métadonnées
const modules = import.meta.glob('./articles/*.jsx', { eager: true });

const articles = Object.entries(modules).map(([path, mod]) => {
  const slug = path.split('/').pop().replace('.jsx', '');
  return {
    slug,
    ...mod.meta,
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

const perPage = 10;

const BlogPage = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(articles.length / perPage);
  const paginated = articles.slice(page * perPage, (page + 1) * perPage);

  return (
    <div className="pt-20">
      <section className="page-header hero-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold sm:text-5xl mb-6 text-blue-500"
            >
              Notre blog – Automatisation, IA & Processus métiers
            </motion.h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Retrouvez tous nos articles dédiés à l'automatisation, aux outils low-code et à l'intelligence artificielle.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12 px-4 max-w-5xl mx-auto text-slate-800">
        <div className="space-y-8">
          {paginated.map((article) => (
            <div
              key={article.slug}
              className="bg-white border rounded p-6 shadow-sm hover:shadow-md transition"
            >
              {article.date && !isNaN(new Date(article.date)) && (
                <p className="text-sm text-slate-500 mb-1">
                  Publié le {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                  })}
                </p>
              )}
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                <Link
                  to={`/blog/${article.slug}`}
                  className="hover:text-blue-600 transition"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="text-slate-600 text-base">{article.excerpt}</p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-4">
            {page > 0 && (
              <button
                onClick={() => setPage((p) => p - 1)}
                className="text-blue-600"
              >
                Page précédente
              </button>
            )}
            {page < totalPages - 1 && (
              <button
                onClick={() => setPage((p) => p + 1)}
                className="text-blue-600"
              >
                Page suivante
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;