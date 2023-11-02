import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 fixed left-0 top-0 flex flex-col justify-between -z-50">
      <div className="flex items-center justify-center h-16 bg-indigo-500 text-white font-bold text-2xl">Logo</div>
      <nav className="flex-1">
        <a href="#" className="block py-2 px-4 text-white hover:bg-indigo-600">Menu Item 1</a>
        <a href="#" className="block py-2 px-4 text-white hover:bg-indigo-600">Menu Item 2</a>
        <a href="#" className="block py-2 px-4 text-white hover:bg-indigo-600">Menu Item 3</a>
      </nav>
      <div className="py-2 px-4 bg-indigo-500 text-white hover:bg-indigo-600">Logout</div>
    </div>
  );
}

export default Sidebar;
