'use client';

import { useState } from "react";

export default function Nav() {
  const [showFullNav, setShowFullNav] = useState(true);

  return (
    <nav
      className={`
        bg-sky-600 p-3 flex flex-col w-full
        ${showFullNav ? 'sm:w-64 h-fit sm:h-full space-y-3' : 'sm:w-14'}
        transition-all duration-100 ease-in-out
      `}
    >
      <div className="flex justify-between">
        <button className={`p-1 rounded border w-fit sm:w-full ${showFullNav ? '' : 'sm:opacity-0 sm:invisible'} transition-all duration-75 ease-in-out`}>Action Button</button>
        <button className="p-1 rounded border sm:hidden" onClick={() => setShowFullNav(!showFullNav)}>{showFullNav ? 'minimize' : 'expand'}</button>
      </div>

      <div
        className={`
          ${showFullNav ? ' flex flex-col space-y-3 ' : 'h-0 opacity-0 p-0 invisible'}
          grow transition-all duration-75 ease-in-out
        `}
      >
        <ul className="grow">
          <li>some</li>
          <li>links</li>
          <li>and</li>
          <li>stuff</li>
          <li>like</li>
          <li>that</li>
        </ul>

        <div>
          <p>user</p>
          <p>logout</p>
        </div>
      </div>

      <button className="p-1 rounded border hidden sm:block" onClick={() => setShowFullNav(!showFullNav)}>{showFullNav ? '<<' : '>>'}</button>
    </nav>
  );
}