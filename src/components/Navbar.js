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
        {Group_key_arr.map((key) => {
          return (
            <div className={styles.Link} key={key}>
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
