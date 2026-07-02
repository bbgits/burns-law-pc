import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

function formatCategoryLabel(category) {
  if (category === "all") {
    return "view all";
  }

  return category.replaceAll("-", " ");
}

const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 mx-5 md:mx-10">
      <p className="mb-3 text-base md:text-lg font-semibold capitalize">add filter</p>
      <div className="flex items-start flex-wrap font-medium">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/blog/${cat}`}
          name={formatCategoryLabel(cat)}
          active={currentSlug === slug(cat)}
        />
      ))}
      </div>
    </div>
  );
};

export default Categories;