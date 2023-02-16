import React from 'react';

interface Contact {
  email: string;
  phone: string;
  location: string;
  image_url: string;
  linkedin_url: string;
  github_url: string;
}

const Contact: React.FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <section className="dark:bg-slate-800 dark:text-white p-6 flex flex-col items-center justify-center rounded my-4">
      {/* <h2 className="text-xl font-medium dark:text-slate-100 text-gray-900 mt-2">
        Contact
      </h2> */}
      <p className="text-sm dark:text-slate-200 text-gray-600 mt-2">
        {contact.email}
      </p>
      <p className="text-sm dark:text-slate-200 text-gray-600 mt-2">
        {contact.phone}
      </p>
      <p className="text-sm dark:text-slate-200 text-gray-600 mt-2">
        {contact.location}
      </p>
      <p className="text-sm dark:text-slate-200 text-gray-600 mt-2">
        open to relocation
      </p>
    </section>
  );
};

export default Contact;
