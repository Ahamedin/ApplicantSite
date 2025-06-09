import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlignStartVertical, Bold, BrickWall, Heart, Inbox, MapPinHouse, ShoppingCartIcon } from "lucide-react";
import ThemeSelector from './ThemeSelector';

function Navbar() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Fetch logged-in user info from backend
    fetch('http://localhost:3000/auth/user', {
      credentials: 'include', // Important: send cookies
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setUser(data);
          setIsAdmin(data.isAdmin);
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">

          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <BrickWall className="size-9 text-primary" />
                <span
                  className="font-semibold font-mono tracking-widest text-2xl
                             bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                              
                  BLOCKSTORE
                </span>
              </div>
            </Link>
          </div>

          <div className=" gap-4">
            <div className='mr-80'>
              <a href="/" className='mr-4'>Home</a>
              <a href="/modals" className=''>Modal</a>
              <a href="/aboutuspage" className='ml-4 -mr-5'>About</a>
            </div>
            
            <a href="/contactpage"><MapPinHouse className='size-5 btn btn-ghost btn-square'/></a>
            <ThemeSelector />
            {!isAdmin && (
              <Link to={`/savedpage`} className='btn btn-ghost btn-circle -ml-4'>
              <Heart className='size-5' />
            </Link>
            )}
            
            {user ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.photo}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm">{user.displayName}</span>
                <a
                  href="http://localhost:3000/auth/logout"
                  className="btn btn-sm btn-outline"
                >
                  Logout
                </a>
              </div>
            ) : (
              <a
                href="http://localhost:3000/auth/google"
                className="btn btn-sm btn-primary"
              >
                Login
              </a>
            )}

            {isAdmin && (
              <a href='/bookpage'><Inbox className='size-5 btn btn-circle btn-ghost'/></a>
            )} 
              
            

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
