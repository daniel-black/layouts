'use client';

import { useState } from "react";

export default function Navbar() {
  const [showFullNav, setShowFullNav] = useState<boolean>(true);

  return (
    <nav
      className={`
        bg-sky-600 p-3 flex flex-col w-full
        ${showFullNav ? 'sm:w-64 h-fit sm:h-full space-y-3' : 'sm:w-14'}
        transition-all duration-100 ease-in-out
      `}
    >
      {/* Nav header */}
      <div className="flex justify-between">
        {/* The main action button or link for the nav */}
        <button className={`p-1 rounded border w-fit sm:w-full ${showFullNav ? '' : 'sm:opacity-0 sm:invisible'} transition-all duration-75 ease-in-out`}>Action Button</button>
        {/* Toggle for showing and hiding Nav when screen is small  */}
        <button
          className="p-1 rounded border sm:hidden"
          onClick={() => setShowFullNav(!showFullNav)}
        >
          {showFullNav ? 'minimize' : 'expand'}
        </button>
      </div>

      {/* Nav body */}
      <div
        className={`
          ${showFullNav ? 'flex flex-col space-y-3 ' : 'h-0 opacity-0 invisible'}
          grow transition-all duration-75 ease-in-out
        `}
      >
        {/* The main links go here. This grows to take up space. */}
        <ul className="grow">
          <li>some</li>
          <li>links</li>
          <li>and</li>
          <li>stuff</li>
          <li>like</li>
          <li>that</li>
        </ul>

        {/* Nav footer. Items in this div are forced down to the bottom of the screen when screen is big */}
        <div>
          <p>user</p>
          <p>logout</p>
        </div>
      </div>

      {/* Toggle for showing and hiding Nav when screen is big and navbar shows as a sidebar */}
      <button
        className="p-1 rounded border hidden sm:block"
        onClick={() => setShowFullNav(!showFullNav)}
      >
        {/* Can use icons or arrows or whatever here */}
        {showFullNav ? '<<' : '>>'}
      </button>
    </nav>
  );
}