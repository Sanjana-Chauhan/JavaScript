import styles from "./Connect.module.css"
import links from "../data/Links.json";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
function Connect(){

    return <footer id="Connect" >
            <div className={styles.footerContent}>
                <h1>Lets Connect</h1>
                <p>Feel free to connect !</p>
            </div>

            <div className={styles.linkBox}>
                    <ul>
                        <li><FaLinkedin/><a href={links.LinkedIn} target="blank">Linkedin/Sanjana</a></li>
                        <li><CgMail/><a href={`mailto:${links.Gmail}`} target="blank">Gmail/Sanjana</a></li>
                        <li><FaGithubSquare/><a href={links.GitHub} target="blank">GitHub/Sanjana</a></li>
                    </ul>
            </div>
    </footer>
}
export default Connect;