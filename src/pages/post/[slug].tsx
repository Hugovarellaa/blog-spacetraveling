import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post(): JSX.Element {
  return (
    <>
      <Header />
      <img src="/banner.svg" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo</h1>
            <ul>
              <li>
                <FiCalendar />
                12 Mar 2022
              </li>
              <li>
                <FiUser />
                Hugo Alves Varella
              </li>
              <li>
                <FiClock />5 minutos
              </li>
            </ul>
          </div>
          <article>
            <h2>Titulo secao</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              esse qui, delectus sunt accusantium corrupti unde nisi recusandae
              voluptate illum laborum hic reiciendis expedita. Esse impedit
              recusandae rem et excepturi! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur quaerat soluta ullam saepe
              ut id quo nam. Optio atque necessitatibus autem quas perspiciatis.
              Cumque consequuntur doloremque quos voluptas, beatae tenetur.
              Lorem ipsum,
              <strong>
                dolor sit amet consectetur adipisicing elit. Accusantium
                assumenda
              </strong>
              rerum perferendis
              <a href="/"> veritatis atque, hic molestias quibusdam </a>iusto
              sed nobis et facere vitae repudiandae. Odio eum incidunt quaerat
              minus rem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Illo cupiditate soluta rem dolor culpa atque at a odio vero
              ea officia, voluptatum ad enim sapiente iste. Sint delectus
              blanditiis nisi.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
