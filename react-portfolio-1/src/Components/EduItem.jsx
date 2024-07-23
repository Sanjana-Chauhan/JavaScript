import styles from "./EduItem.module.css";
import { getImgUrl } from "../utils";
function EduItem(props) {
  return (
    <div className={styles.education}>
      <img src={getImgUrl("eduBuilding.png")} className={styles.eduIcons} />
      <div>
        <p className={styles.eduTitle}>{props.info.eduTitle}</p>
        <p className={styles.eduDesc}>{props.info.orgName}</p>
        <p className={styles.eduDesc}>
        {props.info.eduBoard} <span className={styles.marks}> ({props.info.marks} )</span>
        </p>
      </div>
    </div>
  );
}

export default EduItem;
