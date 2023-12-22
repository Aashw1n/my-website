import React from "react";

export default function Footer() {
  return (<>
    <footer className=" bottom-0 mb-auto mt-44 px-4 text-center text-gray-500 items-center align-center justify-center sm:mt-44">
      <small className="mb-2 block text-xs">
        &copy; 2023 Aashwin Ranjan. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
    </footer>
    </>
  );
}