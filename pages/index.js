import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const premier = null; // firestore.collection('posts').doc(premier) == true/false

export default function Home() {
  return (
    <main className={styles.container}>
      <div className='premiere'>
        <Image className='image-banner' src='/you-guilty-banner.jpeg' width="2700" height="1000" />

        <div className='premiere-content'>
          <Image className='image' src='/you-guilty-aswell.jpg' width="400" height="562" />
            <div className='premiere-text'>
              <Link href={"post"}>
                <h1>Avant Garde</h1>
              </Link>
            
              <p>Кобо Абэ - великий японский писатель 20 века. Его пьеса «Ты тоже виновен», была написана  в зрелом возрасте, после принесших ему успех  шедевров «Женщина в песках», «Чужое лицо» и «Сожжённая карта». </p>
            </div>
          </div>
      </div>


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
