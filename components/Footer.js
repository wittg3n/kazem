import React from "react";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className=" fixed bottom-0 left-0 right-0 m-2 justify-center">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center">
        <span className="font-light text-gray-400">
          ساخته شده در{" "}
          <Link href="https://alephnullai.com/" legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 font-normal"
            >
              AlephNull
            </a>
          </Link>
        </span>
      </div>
    </footer>
  );
};
