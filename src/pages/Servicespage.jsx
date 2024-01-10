import React, { useEffect } from 'react'
import Services from '../components/Services/Services'

const Servicespage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
      <Services/>
    </div>
  )
}

export default Servicespage

