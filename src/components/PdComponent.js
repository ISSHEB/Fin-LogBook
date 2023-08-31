import { PdPm } from './Todo/PdPm'
import React, { useState } from 'react'
import PmPdMenu from './menu/PmPdMenu'

export const PdComponent = () => {
  const [PmPdMenuData, setPmPdMenuData]     = useState({});
  const [NoPmPdMenuOpen, setNoPmPdMenuOpen] = useState(false);

  return (
    <div>
      <PmPdMenu
        PmPdMenuData={PmPdMenuData}
        setPmPdMenuData={setPmPdMenuData}
        NoPmPdMenuOpen={NoPmPdMenuOpen}
        setNoPmPdMenuOpen={setNoPmPdMenuOpen}
      />
      <PdPm
        PmPdMenuData={PmPdMenuData}
        setPmPdMenuData={setPmPdMenuData}
        NoPmPdMenuOpen={NoPmPdMenuOpen}
        setNoPmPdMenuOpen={setNoPmPdMenuOpen}
      />
    </div>
  )
}
