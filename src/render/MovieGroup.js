import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieGroup.module.css";
import default_Img from "./Img/default_Img.jpg";

// 하나의 영화 카드

const onErrorImg = (e) => {
  e.target.src = default_Img;
};

// 함수형 컴포넌트를 정의. 부모 컴포넌트에서 전달된 프로퍼티들을 인자로 받아 사용. 각 인자는 특정 영화에 대한 정보를 나타냄
function MovieGroup({ id, coverImg, title, rating, runtime, year, summary }) {
  return (
    <div className={styles.movie}>
      {/* ShortView (Img, Title, rating, runtime..) */}
      <div className={styles.show}>
        {/* Img */}
        <div className={styles.Img}>
          <img src={coverImg} alt={title} onError={onErrorImg} />
        </div>
        {/* Letters */}
        <div className={styles.letters}>
          <div className={styles.title}>
            <div>
              <h3>
                <Link to={`/movie/${id}`}>
                  {title.length > 35 ? `${title.slice(0, 35)}...` : title}
                </Link>
              </h3>
            </div>
          </div>
          <p>{year ? `year: ${year}` : null}</p>
          <p>{rating ? `rating: ${rating} / 10` : null}</p>
          <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
          <p>
            {summary
              ? summary.length > 180
                ? `${summary.slice(0, 180)}...`
                : summary
              : null}
          </p>
        </div>
      </div>
    </div>
  );
}

MovieGroup.prototypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  download_count: PropTypes.number,
  summary: PropTypes.string,
};

export default MovieGroup;
