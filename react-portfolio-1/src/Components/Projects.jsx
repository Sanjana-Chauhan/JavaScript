import styles from "./Skills.module.css";
import Project from "../data/Project.json";
function Projects() {
  return (
    <div className={styles.SkillSubSec} id="Projects">
      <h1 className={styles.skillsHeading}>My Projects</h1>
      {Project.map((item) => (
        <div className={styles.project}>
          <p className={styles.projectTitle}>{item.ProjTitle}</p>
          <div className={styles.projInfo}>
            <img src={item.ProjImg} className={styles.projImg}></img>
            <p className={styles.projectDesc}>{item.ProjDesc}</p>
            <a href="#" className={styles.ButtonLink}>
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projects;
