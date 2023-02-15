import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const premier = null; // firestore.collection('posts').doc(premier) == true/false

export default function Home() {
  return (
    <main className={styles.container}>
      <div className='premiere'>
        <Image className='image-banner' src='/chestnutman.jpeg' width="1800px" height="1024" alt="Постер"/>
      </div>

      <div className='grid-container'>

        <div className='card'>
          <div className='image-block'>
            <Image className='image' src='/overview.jpeg' width="400" height="562" alt="Постер"/>
          </div>
          <div className='card-text'>
            <Link href={"post"} passHref>
              <h2>Фестиваль &rdquo;Культурный мост&rdquo;</h2>
            </Link>

            <p>
            Это международный творческий проект, который пройдет в период с 13 по 20 декабря 
            в Санкт-Петербурге и Екатеринбурге.В рамках фестиваля пройдут концерты, спектакли в 
            Санкт-Петербурге и Екатеринбурге, в которых примут участие театральные и 
            филармонические коллективы и солисты, молодые и известные российские и 
            зарубежные исполнители.
            <br></br><br></br>
            В программе фестиваля – современные сценические интерпретации музыкальных сочинений: 
            И.С.Баха, П.И.Чайковского, В.А.Моцарта, Ф.Шуберта, А.Дворжака, И.Брамса, Ю.Жиро. 
            В. Косма и театральных произведений: А.Островского, М.Рощина, П.Бессона, Ли Бо, 
            а также оригинальные сценарии.
            </p>
          </div>
        </div>

        <hr></hr>

        <div className='card'>
          <div className='image-block'>
            <Image className='image' src='/we_and_russia.jpeg' width="400" height="562" alt="Постер"/>
          </div>
          <div className='card-text'>
            <Link href={"post"} passHref>
              <h2>Фестиваль &rdquo;Я, ты, мы -Россия!&rdquo;</h2>
            </Link>

            <p>
            Фестиваль посвящен художественному наследию народов России и его современному 
            творческому воплощению.<br></br>Это международный творческий проект, который пройдет в 
            период с 13 по 20 декабря в Санкт-Петербурге, Екатеринбурге, Свердловской области, 
            Астрахани и Нальчике. <br></br><br></br>
            В рамках фестиваля пройдут концерты, спектакли, в которых примут 
            участие театральные и филармонические коллективы и солисты, молодые и известные 
            российские и зарубежные исполнители. <br></br><br></br>
            В программе фестиваля в Санкт-Петербурге 
            драматический спектакль «Сказки бескрайнего неба» по мотивам авторских сказках 
            Велты Кирьяковой, в котором забытые легенды малых народов России обретают новую жизнь,
            звучат этнические инструменты в сопровождении ярких образов песочной анимации Показ 
            спектакля пройдет на камерной сцене Капеллы. Молодые артисты РГИСИ - 4 курс артистов 
            драмы мастерской А.М.Зеланда представят танцевальный спектакль «ПараФраз» в Белом зале 
            Студии Лендок. Это -пластическая композиция в двух фразах, рассказанная через синтез 
            танца, сценического движения и вокала.
            </p>
          </div>
        </div>

        <hr></hr>

        <div className='card'>
          <div className='image-block'>
            <Image className='image' src='/ostrovskiy.jpeg' width="400" height="562" alt="Постер"/>
          </div>
          <div className='card-text'>
            <Link href={"post"} passHref>
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
