import { useEffect } from 'react';

export default loadData =>
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY < document.body.scrollHeight)
        return;

      loadData();
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  });
