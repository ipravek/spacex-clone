import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Button from "@/components/button/Button";

const font = localFont({
  src: [
    {
      path: "../public/fonts/D-DIN.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/D-DIN-Bold.otf",
      weight: "900",
      style: "bold",
    },
  ],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>SpaceX</title>
        <meta name="description" content="SpaceX clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={font.className}>
        <div className={styles.main}>
          <Navbar />
        </div>
        <>
          <div className={styles.section}>
            <div className={`${styles.section} ${styles.sectionOne}`}></div>
            <div className={styles.container}>
              <div className={styles.innerLeftBottom}>
                <h4>Recent Launch</h4>
                <h2>Intelsat IS-40e Mission</h2>

                <div className={styles.buttonCtr}>
                  <Button name="Rewatch" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={`${styles.section} ${styles.sectionTwo}`}></div>
            <div className={styles.container}>
              <div className={styles.innerLeftBottom}>
                <h2>Starship Update</h2>

                <div className={styles.buttonCtr}>
                  <Button name="Learn More" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={`${styles.section} ${styles.sectionThree}`}></div>
            <div className={styles.container}>
              <div className={styles.innerLeftBottom}>
                <h2>
                  Starship Selected by NASA to Support Sustained Lunar
                  Exploration
                </h2>

                <div className={styles.buttonCtr}>
                  <Button name="Learn More" />
                </div>
              </div>
            </div>
          </div>
        </>
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    </>
  );
}
