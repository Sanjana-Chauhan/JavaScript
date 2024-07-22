import styles from "./Skills.module.css";
import SkillsInfo from "../data/SkillsInfo.json";
import Projects from "./Projects";
function Skills() {
  return (
    <section id="Skills" className={styles.container}>
      <div className={styles.SkillSubSec}>
        <h1 className={styles.skillsHeading}>My Skills</h1>

        {/* Skill Box Component */}
        <div className={styles.skillBox}>
          {SkillsInfo.map((item) => (
            <div className={styles.skill}>
              <img src={item.image} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* skill box component closes */}
      </div>
          <Projects/>
    
    </section>
  );
}
export default Skills;
