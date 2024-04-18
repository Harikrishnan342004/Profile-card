import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <footer>
      {!drawerOpen && (
        <button onClick={toggleDrawer}>Open</button>
      )}
      {drawerOpen && (
        <>
          <button className="closeButton" onClick={closeDrawer}>Close</button>
          <div className="drawer">
            <h2>Drawer Content</h2>
            <p>This is the content of the drawer.</p>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
