import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Navbar() {
  // const { user, username } = useContext(UserContext)

  return (
    <nav className='navbar'>
      <ul className='menu'>
        <li className='push-right'>
          <Link href="/" passHref>
            <p className="">Культурный Мост</p>
          </Link>
        </li>
        <li>
          <Link href="/404" passHref>
            <p className="">Главная</p>
          </Link>
        </li>
        <li>
          <Link href="/404" passHref>
            <p className="">Галерея</p>
          </Link>
        </li>
      </ul>

    </nav>
  )
}