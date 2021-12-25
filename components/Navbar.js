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
            <button className="btn-logo">КУЛЬТУРНЫЙ МОСТ</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}