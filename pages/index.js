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
          
          <div className='premiere-text-block'>
            <Link href={"post"}>
              <h1>Ты Тоже Виновен</h1>
            </Link>

            <p className='premiere-text'>
            Кобо Абэ - великий японский писатель 20 века. Его пьеса «Ты тоже виновен», была написана  в зрелом возрасте, после принесших ему успех  шедевров «Женщина в песках», «Чужое лицо» и «Сожжённая карта». 
            Пьеса, прежде не ставившаяся в России,  точно выверенная, изящная по форме и ситуации она совмещает в себе актуальность, зашкаливающую до предела ситуацию выбора, легкость языка, японскую мифологию и сюр. Все это - есть наша жизнь, обнаженная и взвинченная до предела, на которую мы не хотим открывать глаза.  Все это теперь - твоя жизнь, твой выбор, твоя яма, из которой выбираться тебе.
            </p>
            <h2>Сценическая адаптация и постановка - Владимир Бельдиян</h2>
            <h4>Роли исполняли:</h4>
            <ul>
              <li>Писатель - Антон  Васильев</li>
              <li>Убийца - Сергей Маковецкий</li>
              <li>Жена - Маша Волкова</li>
            </ul>
            <p className='text-sm'><i>Премьера состоялась 24 ноября 2021 года.<br />
            Организатор проекта АНО «Зеркало Искусства»
            при поддержке АНО "Новый век"</i></p>
          </div>
        </div>
      </div>


      <div className='flex-container'>
        <div className='card'>
          <Image className='image' src='/avant.jpg' width="400" height="562" />

          <Link href={"post"}>
            <h2>Avant Garde</h2>
          </Link>

          <p>Мультимедийный проект посвящен реформаторскому театру ХХ века, завоевавшего мировую славу как «Искусство русского авангарда». Утверждение театра как самостоятельного вида искусства, попытки частичного, а иногда и полного отказа от привносимых литературой смыслов, использования сцены и актеров как медиума для литературы, а также подражательного характера сценического искусства. </p>

        </div>

        <div className='card'>
          <Image className='image' src='/you-guilty-aswell.jpg' width="400" height="562" />

          <Link href={"post"}>
            <h2>Ты Тоже Виновен</h2>
          </Link>

          <p>Кобо Абэ - великий японский писатель 20 века. Его пьеса «Ты тоже виновен», была написана  в зрелом возрасте, после принесших ему успех  шедевров «Женщина в песках», «Чужое лицо» и «Сожжённая карта». </p>

        </div>

        <div className='card'>
          <Image className='image' src='/schelkunch.jpg' width="400" height="562" />

          <Link href={"post"}>
            <h2>Щелкунчик</h2>
          </Link>

          <p>Проект приурочен к юбилею  Мариуса Петипа и посвящен легендарному «Щелкунчику»  - сказке Э.Гофманна и его многочисленным и многожанровым интерпретациям на протяжении 19-20 веков. </p>

        </div>
      </div>
    </main>
  );
}
