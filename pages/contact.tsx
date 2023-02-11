import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-slate-100 text-3xl font-bold mb-6">Contact Me</h1>
        <div className="bg-slate-100 p-6 rounded-lg">
          <p className="text-slate-800 font-bold mb-2">Social Media</p>
          <div className="flex items-center mb-6">
            <a
              href="https://www.twitter.com/yourusername"
              className="text-slate-800 mr-3 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              className="text-slate-800 mr-3 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.github.com/yourusername"
              className="text-slate-800 hover:underline"
            >
              GitHub
            </a>
          </div>
          <p className="text-slate-800 font-bold mb-2">Email</p>
          <p className="text-slate-600 mb-6">
            <a
              href="mailto:your@email.com"
              className="text-slate-600 hover:underline"
            >
              your@email.com
            </a>
          </p>
          <p className="text-slate-800 font-bold mb-2">Phone</p>
          <p className="text-slate-600">(123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
