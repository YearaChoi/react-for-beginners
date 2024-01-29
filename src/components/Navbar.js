import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList";

function Navbar() {
  return (
    // Navigation Bar
    <div className={styles.container}>
      {/* 페이지 이름 */}
      <div className={styles.pageName}>
        <Link to={"/"}>Movie Home</Link>
      </div>

      {/* group링크 */}
      <div className={styles.GroupLink}>
        {/* Group_key_arr 배열을 순회하면서 각 요소에 대한 작업을 수행 */}
        {Group_key_arr.map((key) => {
          // key는 그룹의 이름을 표시하는 텍스트
          return (
            // map 함수에서 반환되는 각각의 그룹 링크를 감싸는 div
            <div className={styles.Link} key={key}>
              {/* 해당 키에 해당하는 Group_obj의 값을 이용해 동적인 경로를 생성 */}
              <div className={styles.Link_sep}>
                <Link to={`/page/${Group_obj[key]}/1`}>{key}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
