import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>
          Copyright &copy; 2015-{new Date().getFullYear()} Waitech Computer
          Engineering{" "}
          <a href="" className="font-bold">
            Powered by Godspower
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
