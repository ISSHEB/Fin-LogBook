import React, { useState } from 'react'
import { NoShow } from './Todo/NoShow'
import NoShowMenu from './menu/NoShowMenu';

export const NoShowComponent = () => {
  const [NoShowMenuData, setNoShowMenuData] = useState({});
  const [NoShowMenuOpen, setNoShowMenuOpen] = useState(false);
  
  return (
    
    <div> 
      <NoShowMenu
        NoShowMenuData={NoShowMenuData}
        setNoShowMenuData={setNoShowMenuData}
        NoShowMenuOpen={NoShowMenuOpen}
        setNoShowMenuOpen={setNoShowMenuOpen}
      />

      <NoShow 
        NoShowMenuOpen={NoShowMenuOpen}
        NoShowMenuData={NoShowMenuData}
        setNoShowMenuData={setNoShowMenuData}
        setNoShowMenuOpen={setNoShowMenuOpen} />
    </div>
  )
}
