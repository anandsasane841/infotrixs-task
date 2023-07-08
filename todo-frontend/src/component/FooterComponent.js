import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div>
        <span className='text-muted'>
            
          &copy; {new Date().getFullYear()} Todo List - TodoList Application. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
