import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const premier = null; // firestore.collection('posts').doc(premier) == true/false

export default function Home() {
  return (
    <main className={styles.container}>
      <div className='premiere'>
        <Image className='image-banner' src='/chestnutman.jpeg' width="1800px" height="1024" />
      </div>

      <div className='grid-container'>

        <div className='card'>
          <div className='image-block'>
            <Image className='image' src='/ostrovskiy.jpeg' width="400" height="562" />
          </div>
          <div className='card-text'>
            <Link href={"post"}>
              <h2>Спектакль «Последняя жертва» по пьесе А.Островского</h2>
            </Link>

            <p>
              Спектакль о любви и деньгах под музыку Бизе. Молодые актеры Санкт-Петербургского
              государственного института культуры МАСТЕРСКАЯ З.А.РСФСР М.И.САМОЧКО Хронометраж 2.5 ч с
              антрактом
            </p>
          </div>
        </div>



        <div className='card'>
          <Image className='image' src='/ostrovskiy.jpeg' width="400" height="562" />

          <div className='card-text'>
            <Link href={"post"}>
              <h2>Спектакль «Последняя жертва» по пьесе А.Островского</h2>
            </Link>

            <p>
              Спектакль о любви и деньгах под музыку Бизе. Молодые актеры Санкт-Петербургского
              государственного института культуры МАСТЕРСКАЯ З.А.РСФСР М.И.САМОЧКО Хронометраж 2.5 ч с
              антрактом
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
