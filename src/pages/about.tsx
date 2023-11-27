import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Divider from "components/Divider/Divider";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainAbout}>
        <h2 className="text-xl mb-8">Про індекс</h2>
        <div className="entry-content">
          <Divider heading="Індекс моніторингу реформ" openable={false} />
          <p>
            <span style={{ fontWeight: "400" }}>
              {" "}
              – це аналітичний інструмент, призначений надати кількісну оцінку
              прогресу економічних реформ в Україні. Він базується на оцінці
              експертами змін у регуляторному середовищі, які можна вважати
              реформаторськими або анти-реформаторськими.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>
              Головною метою Індексу є інформування суспільства щодо швидкості
              та глибини процесу реформ в країні. Недостатня інформованість
              пов’язана з тим, що кожна державна інституція виконує свою частину
              роботи в межах певного вузького напрямку, а ЗМІ найчастіше
              приділяють увагу лише найбільш резонансним темам. Крім того,
              неспеціалістам часто важко оцінити, наскільки суттєвими та
              важливими були ті чи інші нормативні зміни.
            </span>
          </p>
          <Divider heading="Історія створення" openable={false} />

          <p>
            <span style={{ fontWeight: "400" }}>
              Індекс моніторингу реформ був заснований на початку 2015 року
              аналітичною платформою VoxUkraine. Ідею створити інструмент для
              моніторингу реформ запропонував професор Олександр Мотиль
              (американський історик українського походження,{" "}
            </span>
            <a href="https://www.newark.rutgers.edu/about-us/have-you-met-rutgers-newark/alexander-motyl">
              <span style={{ fontWeight: "400" }}>професор політології</span>
            </a>
            <span style={{ fontWeight: "400" }}>
              {" "}
              в Ратгерському університеті США
            </span>
            <span style={{ fontWeight: "400" }}>
              ). Заснували Індекс та розробили методологію розрахунку члени{" "}
            </span>
            <span style={{ fontWeight: "400" }}>
              редколегії VoxUkraine: Олена Білан, Вероніка Мовчан та Ілона
              Сологуб, за активної участі Віталія Ваврищука. З серпня 2016 року
              керівником проекту іМоРе призначено Тетяну Тищук. &nbsp;
            </span>
          </p>
          <Divider heading="Структура Індексу" openable={false} />

          <p>
            <span style={{ fontWeight: "400" }}>
              Індекс моніторингу реформ має п’ять складових. І1. Урядування, І2.
              Державні фінанси, І3. Монетарна система, І4. Бізнес середовище,
              І5. Енергетика, I6. Людський капітал. Кожна складова охоплює
              декілька напрямків реформ, а саме*.
            </span>
          </p>

          <h3 className="mt-6 font-bold">І1. Урядування:</h3>

          <ul>
            <li>
              <span style={{ fontWeight: "400" }}> Боротьба з корупцією</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Децентралізація</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>Державна служба</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>Адміністративні послуги</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Державна власність</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Інше в урядуванні</span>
            </li>
          </ul>
          <p>
            <h3 className="mt-6 font-bold">І2. Державні фінанси:</h3>
          </p>
          <ul>
            <li>
              <span style={{ fontWeight: "400" }}> Податкова система</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Державні закупівлі</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>
                {" "}
                Ефективність державних видатків
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>
                {" "}
                Управління державним боргом
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>
                {" "}
                Інше в державних фінансах
              </span>
            </li>
          </ul>
          <p>
            <h3 className="mt-6 font-bold">І3. Монетарна система:</h3>
          </p>
          <ul>
            <li>
              <span style={{ fontWeight: "400" }}> Валютне регулювання</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Ринки капіталу</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Банківський сектор</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Незалежність НБУ</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>
                Інше в монетарній системі
              </span>
            </li>
          </ul>
          <p>
            <h3 className="mt-6 font-bold">І4. Бізнес середовище:</h3>
          </p>
          <ul>
            <li>
              <span style={{ fontWeight: "400" }}> Регулювання бізнесу</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Конкурентна політика</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Зовнішня торгівля</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>
                {" "}
                Корпоративне управління
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Права власності</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>
                Інше в бізнес середовищі
              </span>
            </li>
          </ul>
          <p>
            <h3 className="mt-6 font-bold">І5. Енергетика</h3>
          </p>
          <ul>
            <li>
              <span style={{ fontWeight: "400" }}>
                Енергетична незалежність
              </span>
            </li>
          </ul>
          <p>
            <h3 className="mt-6 font-bold">І6. Людський капітал:</h3>
          </p>
          <ul>
            <li>
              <span style={{ fontWeight: "400" }}> Освіта</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Охорона здоров’я</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Ринок праці</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Соціальний захист</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}> Культура</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>
                Інше у людському капіталі
              </span>
            </li>
          </ul>
          <p className="mt-8 text-[13px]">
            <em>
              *Нотатка: Структура Індексу може змінюватись за результатами{" "}
              <a href="https://reforms.voxukraine.org/wordpress/wp-content/uploads/2022/06/Audit-protocol_2016-2022.pdf">
                щорічного аудиту
              </a>
              . &nbsp;
            </em>
          </p>
        </div>
      </main>
    </>
  );
}
