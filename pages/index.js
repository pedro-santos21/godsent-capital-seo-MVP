import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1>Godsent Capital SEO</h1>
        <a href="https://www.figma.com/file/OMXAVhveFEuNjVWhUAvzGC/STARTUP-IDEAS?type=whiteboard&node-id=0-1&t=a1Z4iFpVw6YLBy5Q-0">
          {' '}
          DESIGN FILE LINK
        </a>

        <Image
          src="https://raw.githubusercontent.com/pedro-santos21/godsent-capital-seo-MVP/main/pages/dog%20flower.jpg"
          alt="My Image"
          width={500}
          height={500}
        />
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
