import styles from "./About.module.css";
import EduItem from "./EduItem";
import Allinfo from "../data/Allinfo.json"
function About(){
   
    return <section className={styles.container} id="About">
        <h2 className={styles.title}>My Education</h2>
        <div className={styles.educationBox}>
            <div className={styles.eduItems}>
               {
                Allinfo.map((item) => (
                    <EduItem info={item}></EduItem>
                ))
               } 
            </div>
            <img src="../../assets/education.png" className={styles.eduImg}></img>
        </div>
       
    </section>
}

export default About;