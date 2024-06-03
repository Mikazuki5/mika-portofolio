import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState<Number>(0)

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      const final: number = Number(Number(currentProgress / scrollHeight).toFixed(2))

      if (scrollHeight) {
        setCompletion(final * 100)
      }
    }

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    }
  }, [])
  

  return completion;
};

export default useScrollProgress;