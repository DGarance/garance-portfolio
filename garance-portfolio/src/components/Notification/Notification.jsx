import React from "react";

export default function Notification({ message, type, onClose }) {
  return (
    <div className={`m-4 p-4 rounded ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
      {message}
      <button
        className="ml-4"
        onClick={onClose}>
        Fermer
      </button>
      <div
        class="font-regular relative block w-full rounded-lg bg-gradient-to-tr from-red-600 to-red-400 px-4 py-4 text-base text-white"
        data-dismissible="alert">
        <div class="absolute top-4 left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="h-6 w-6">
            <path
              fill-rule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <div class="ml-8 mr-12">Sorry, something went wrong please try again.</div>
        <div
          class="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
          data-dismissible-target="alert">
          <div
            role="button"
            class="w-max">
            <button
              class="select-none rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
