# 📘 Guide de structuration et stylisation automatique des articles pour Locod.AI

Ce guide t'explique comment ajouter de nouveaux articles de blog qui seront :
✅ automatiquement détectés,
✅ stylisés correctement,
✅ et intégrés dans la page Blog sans aucune mise à jour manuelle de code.

---

## 📁 Dossier des articles
Tous les articles doivent être placés dans :
```
src/pages/blog/articles/
```

Chaque fichier est un composant React nommé, par exemple :
```
ArticleMonSujet.jsx
```

---

## 🧱 Structure d’un article
Chaque composant d’article doit respecter **cette structure minimale** :

```jsx
const Article = () => {
  return (
    <section className="article-container">
      <h1>Titre de l’article</h1>
      <p>Paragraphe introductif...</p>
      <h2>Sous-titre</h2>
      <p>Contenu...</p>
    </section>
  );
};

export const meta = {
  title: "Titre de l’article",
  date: "YYYY-MM-DD", // format ISO
  excerpt: "Résumé affiché dans la liste des articles"
};

export default Article;
```

---

## 🎨 Styles appliqués automatiquement

- `.article-container` : espace haut suffisant sous la navbar, centrage et largeur lisible
- `h1` : taille large, couleur bleue, centré
- `h2` : sous-titres de sections
- `p` : texte lisible avec bonne interligne

Le fichier CSS `page-layout.css` gère ces règles globales.

---

## 📄 Affichage automatique

Tous les fichiers `.jsx` dans `/articles/` sont détectés dynamiquement grâce à :

```js
const modules = import.meta.glob('./articles/*.jsx', { eager: true });
```

Et affichés dans la page `/blog`.

Aucune mise à jour de code n’est nécessaire.

---

## ✅ Checklist avant ajout

- [ ] Le fichier est bien dans `src/pages/blog/articles/`
- [ ] Il exporte une constante `meta` avec `title`, `date`, `excerpt`
- [ ] Il retourne une `section` avec la classe `article-container`
- [ ] Le fichier est nommé sans espace ni caractère spécial (`ArticleNomSujet.jsx`)

---

## 🧩 Exemple de nommage
✅ `ArticlePourquoiAutomatiser.jsx`  
✅ `ArticleLowCodeAvantages.jsx`  
❌ `blog1.js`  
❌ `nouvel article.jsx`

---

Tu peux maintenant intégrer des articles via Git ou automatisation n8n sans toucher au code React.