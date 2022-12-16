import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Navbar() {
  // const { user, username } = useContext(UserContext)

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href="/">
            <h1 className="h1-logo">КУЛЬТУРНЫЙ МОСТ</h1>
          </Link>
        </li>
      </ul>
    </nav>
  )
}