import styles from "./Hero.module.css";
function Hero(){
    return<section className={styles.container}>
        <img src="../../assets/heroImage.png" className={styles.heroImg}></img>
        <div className={styles.content}>
            <h1 className={styles.title}>Hii I am Sanjana</h1>
            <p className={styles.desc}>I am a B.Tech CSE student at CGC Jhanjeri.I love programmimg and DSA.To Contact me click the button below</p>
            <a href="mailto:chauhansanjana965@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <div className={styles.topBlur} />

    </section>
}
export default Hero;