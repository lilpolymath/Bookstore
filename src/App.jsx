import React from 'react';
import Book from './components/Book';
import SidebarItem from './components/SidebarItem';

function App() {
  return (
    <div className='App'>
      <h3>Welcome to Quidax</h3>
      <div className='test'>
        <SidebarItem name='Profile' active={true} badge='3' />
        <SidebarItem name='Profile' badge='3' />
        <SidebarItem name='Home' />
        <Book />
        <Book />
      </div>
    </div>
  );
}

export default App;
