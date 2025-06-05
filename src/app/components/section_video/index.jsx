import styles from "./section_video.module.css";

const SectionVideo = () => {
  return (
    <section className={styles.sectionVideo}>
      <div className={styles.card}>
        {/* Primeiro Subcard */}
        <div className={styles.subCard}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h2 className={styles.statTitle}>84%</h2>
              <p className={styles.statText}>
                dos brasileiros buscam ter uma rotina de autocuidado, mas apenas
                um terço consegue, revela pesquisa.
              </p>
            </div>
            <div className={styles.stat}>
              <h2 className={styles.statTitle}>97%</h2>
              <p className={styles.statText}>
                dos brasileiros buscam ter uma rotina de autocuidado, mas apenas
                um terço consegue, revela pesquisa.
              </p>
            </div>
          </div>
          <p className={styles.mainText}>
            61,7% dos brasileiros adotaram algum ritual de autocuidado. Este
            dado é um sinal positivo de que cada vez mais pessoas estão
            reconhecendo a necessidade de equilibrar a saúde mental e física em
            suas vidas.
          </p>

          <p className={styles.mainText}>
            Você sabia que autocuidado é tão importante como cuidar da saúde?
            Vivemos em um mundo tão agitado que, pensar em parar uns minutos
            para cuidar de si mesmo, pode não ser tão fácil assim.
          </p>
        </div>

        {/* Segundo Subcard */}
        <div className={styles.videoCard}>
          <div className={styles.sideText}>
            <h3>Autocuidado: importância, como praticar e dicas</h3>
            <p>By Clean</p>
          </div>
          {/* Vídeo do YouTube */}
          <iframe
            width="650"
            height="330"
            src="https://www.youtube.com/embed/g9DoQlCJ1yQ?si=IujdHFaClCPzZs_p"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SectionVideo;
