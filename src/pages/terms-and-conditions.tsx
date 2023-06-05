import React, { useEffect, useState } from 'react';

const TermsAndConditions: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/terms.txt')
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, []);

  return (
    <section className='bg-white'>
    <div className="container  mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
    </section>
  );
};

export default TermsAndConditions;
