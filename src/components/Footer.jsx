import React from 'react';

const Footer = () => {
  return (
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            sruthi™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  );
};

export default Footer; 