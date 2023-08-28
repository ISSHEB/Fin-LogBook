import './App.css';
import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar';
import { LifeBuoy, Receipt, Boxes, UserCircle, LayoutDashboard, Info, Settings } from 'lucide-react';
import { SidebarItem } from './components/Sidebar';
import { ControlPaymant } from './components/ControlPaymant';
import { Information } from './components/Information'
import { NoShowComponent } from './components/NoShowComponent'
import { PdComponent } from './components/PdComponent'
import { PmComponent } from './components/PmComponent'
import { MiniIfoComponent } from './components/MiniIfoComponent'
import { Setings } from './components/Settings';
import { Help } from './components/Help'
// import { socketInitializer } from './helpers/socket';


function App() {
  var [PageData, setPageData] = useState('/');
  // var [socket, setSocket] = useState(false);
  // var [SocketConnected, setSocketConnected] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     setSocket(await socketInitializer());
  //   })()
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     if (socket) {
  //       socket.on('connect', () => {
  //         setSocketConnected(true);
  //       });

  //       socket.on('disconnect', () => {
  //         setSocketConnected(false);
  //       });
  //     };
  //   })()
  // }, [socket]);

  return (
    <main className='App'>
      <Sidebar>
        <span onClick={(() => setPageData('/'))} >
          <SidebarItem icon={<Receipt size={20} />}
            text="Контроль оплат"
          />
        </span>
        <span onClick={(() => setPageData('/info'))}>
          <SidebarItem icon={<LayoutDashboard Receipt size={20} />} text="Информации" />
        </span>
        <span onClick={(() => setPageData('/noShow'))}>
          <SidebarItem icon={<UserCircle size={20} />} text="No show" />
        </span>
        <span onClick={(() => setPageData('/pd'))}>
          <SidebarItem icon={<Boxes size={20} />} text="Pd" />
        </span>
        <span onClick={(() => setPageData('/pm'))}>
          <SidebarItem icon={<Boxes size={20} />} text="Pm" />
        </span>
        <span onClick={(() => setPageData('/Miniinfo'))}>
          <SidebarItem icon={<Info size={20} />} text="Дополнительные информации" /> <hr className="my-3" />
        </span>
        <span onClick={(() => setPageData('/Setings'))}>
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </span>
        <span onClick={(() => setPageData('/help'))}>
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </span>

      </Sidebar>
      <div className='body'>
        {
          PageData === '/' ? (
            <ControlPaymant />
          ) : PageData === '/info' ? (
            <Information />

          ) : PageData === '/noShow' ? (
            <NoShowComponent />

          ) : PageData === '/pd' ? (
            <PdComponent />

          ) : PageData === '/pm' ? (
            <PmComponent />

          ) : PageData === '/Miniinfo' ? (
            <MiniIfoComponent />
          )
            : PageData === '/Setings' ? (
              <Settings />

            ) : PageData === '/help' ? (
              <Help />
            ) : null
        }
      </div>
    </main>

  );
}

export default App;
