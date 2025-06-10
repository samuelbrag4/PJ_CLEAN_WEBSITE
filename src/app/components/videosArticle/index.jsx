import styles from "./videosArticle.module.css";

const VideosArticle = ({ videos = [] }) => {
  return (
    <>
      <h2 className={styles.sectionVideoTitle}>Assista mais sobre!</h2>
      <div className={styles.videosRow}>
        {videos.map((video, idx) => (
          <div className={styles.videoCard} key={idx}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <div className={styles.videoThumb}>
                <img
                  src={video.thumb}
                  alt={video.title}
                  className={styles.videoImg}
                />
                <span className={styles.playIcon}>&#9658;</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideosArticle;