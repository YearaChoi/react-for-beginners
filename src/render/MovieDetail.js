import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";
import default_Img from "./Img/default_Img.jpg";
import default_Back_Img from "./Img/default_Back_Img.jpg";

// 이미지 로딩 중 오류가 발생했을 때 처리할 콜백함수 지정
const onErrorImg = (e) => {
  e.target.src = default_Img;
};

const onErrorBackImg = (e) => {
  e.target.src = default_Back_Img;
};

// MovieDetail 부모 컴포넌트에서 전달된 프로퍼티들을 인자로 받아 사용. 해당 영화의 세부 정보를 동적으로 표시할 수 있음
function MovieDetail({
  background_image_original,
  coverImg,
  rating,
  runtime,
  description_full,
  title,
  genres,
}) {
  return (
    <div className={styles.movie}>
      {/* 배경이미지 */}
      <div className={styles.background}>
        <img
          className={styles.Detail_bg}
          src={background_image_original}
          alt=""
          onError={onErrorBackImg}
        />
      </div>
      {/* ShortView (Img, Title, rating, runtime...) */}
      <div className={styles.show}>
        <div className={styles.shortView}>
          {/* 이미지 */}
          <div className={styles.shortView_Img}>
            <img src={coverImg} alt={title} onError={onErrorImg} />
          </div>
          {/* title, rating, runtime, genre */}
          <div className={styles.shortView_letters}>
            <h3>{title}</h3>
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
            {genres ? (
              // 장르는 배열로
              <div>
                <b>{"genres"}</b>
                <ul>
                  {genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {/* Description */}
        {description_full ? (
          <div className={styles.descript}>
            <p>{description_full}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

MovieDetail.prototypes = {
  background_image_original: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description_full: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
