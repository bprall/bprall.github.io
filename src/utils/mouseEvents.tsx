const ChangeIcon = (query: string, old: string, replace: string): void => {
    const target = document.querySelector(query);
  
    if (target) {
      target.classList.remove(old);
      target.classList.add(replace);
    }
  };
  

export default ChangeIcon