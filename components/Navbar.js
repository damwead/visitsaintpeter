import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Navbar() {
  // const { user, username } = useContext(UserContext)

  return (
    <nav className='navbar'>
      <ul className='menu'>
        <li>
          <Link href="/">
            <h2 className="h1-logo">КУЛЬТУРНЫЙ МОСТ</h2>
          </Link>
        </li>
        <li>
        <Link href="/404">
            <h2 className="h1-logo">Галерея</h2>
          </Link>
        </li>
        <li>
        <Link href="/404">
            <h2 className="h1-logo">Партнеры</h2>
          </Link>
        </li>
      </ul>
    </nav>
  )
}