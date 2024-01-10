import React, { useEffect } from 'react'
import Solutions from '../components/Solutions/Solutions'

const Solutionspage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
      <Solutions/>
    </div>
  )
}

export default Solutionspage

