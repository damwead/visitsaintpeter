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
          <Image className='image' src='/overview.jpeg' width="400" height="562" />
          
          <div className='premiere-text-block'>
            <Link href={"post"}>
              <h1>Фестиваль «Культурный мост»</h1>
            </Link>

            <p className='premiere-text'>
            Это международный творческий проект, который пройдет в период с 13 по 20 декабря в Санкт-Петербурге 
            и Екатеринбурге.В рамках фестиваля пройдут концерты, спектакли в Санкт-Петербурге и Екатеринбурге, 
            в которых примут участие театральные ифилармонические коллективы и солисты, молодые и 
            известные российские и зарубежные исполнители.</p>
            
            <p className='text-sm'><i>В программе фестиваля – современные сценические интерпретации 
              музыкальных сочинений: И.С.Баха, П.И.Чайковского, В.А.Моцарта, Ф.Шуберта, А.Дворжака, 
              И.Брамса, Ю.Жиро. В. Косма и театральных произведений: А.Островского, М.Рощина, П.Бессона, 
              Ли Бо, а также оригинальные сценарии.</i></p>
          </div>
        </div>
      </div>


      <div className='flex-container'>
        <div className='card'>
          <Image className='image' src='/we_and_russia.jpeg' width="400" height="562" />

          <Link href={"post"}>
            <h2>Фестиваль «Я, ты, мы -Россия!»</h2>
          </Link>

          <p>Это международный творческий проект, который пройдет в период с 13 по 20 декабря
            в Санкт-Петербурге, Екатеринбурге, Свердловской области, Астрахани и Нальчике. 
            В рамках фестиваля пройдут концерты, спектакли, в которых примут участие театральные и
             филармонические коллективы и солисты, молодые и известные российские и 
             зарубежные исполнители.</p>

        </div>

        <div className='card'>
          <Image className='image' src='/ostrovskiy.jpeg' width="400" height="562" />

          <Link href={"post"}>
            <h2>Спектакль «Последняя жертва» по пьесе А.Островского</h2>
          </Link>

          <p>Спектакль о любви и деньгах под музыку Бизе. Молодые актеры Санкт-Петербургского 
            государственного института культуры МАСТЕРСКАЯ З.А.РСФСР М.И.САМОЧКО Хронометраж 2.5 ч с 
            антрактом</p>

        </div>
      </div>
    </main>
  );
}
