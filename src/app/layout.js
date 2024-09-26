import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {timestamp}<br></br>
          Copyright Whale & Raccoon Inc. 2024
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
