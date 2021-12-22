import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const premier = null; // firestore.collection('posts').doc(premier) == true/false

export default function Home() {
  return (
    <main className={styles.container}>
      <div className='flex-container'>
        <div className='card'>
          <Image className='image' src='/avant.jpg' width="400" height="562" />

          <Link href={"post"}>
            <h2>Avant Garde</h2>
          </Link>

          <p>Кобо Абэ - великий японский писатель 20 века. Его пьеса «Ты тоже виновен», была написана  в зрелом возрасте, после принесших ему успех  шедевров «Женщина в песках», «Чужое лицо» и «Сожжённая карта». </p>

        </div>

        <div className='card'>
          <Image className='image' src='/you-guilty-aswell.jpg' width="400" height="562" />

          <Link href={"post"}>
            <h2>Avant Garde</h2>
          </Link>

          <p>Кобо Абэ - великий японский писатель 20 века. Его пьеса «Ты тоже виновен», была написана  в зрелом возрасте, после принесших ему успех  шедевров «Женщина в песках», «Чужое лицо» и «Сожжённая карта». </p>

        </div>

        <div className='card'>
          <Image className='image' src='/schelkunch.jpg' width="400" height="562" />

          <Link href={"post"}>
            <h2>Avant Garde</h2>
          </Link>

          <p>Кобо Абэ - великий японский писатель 20 века. Его пьеса «Ты тоже виновен», была написана  в зрелом возрасте, после принесших ему успех  шедевров «Женщина в песках», «Чужое лицо» и «Сожжённая карта». </p>

        </div>
      </div>
    </main>
  );
}
