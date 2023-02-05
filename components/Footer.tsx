import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <p className="text-center">
          Copyright &copy; Emerson Day {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
