import React from "react";

export default function CardIntro({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center max-w-sm bg-martinique-200 border border-martinique-200 rounded-lg shadow dark:bg-martinique-900 dark:border-martinique-700 w-full h-full p-4">
      <span className="text-2xl my-3 text-martinique-600">{icon}</span>
      <h3 className="mb-2 text-base text-center font-bold tracking-tight text-martinique-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-2 text-xs text-center text-gray-700 dark:text-martinique-50">{subtitle}</p>
    </div>
  );
}
