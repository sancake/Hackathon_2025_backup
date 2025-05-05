import React from "react";
import styles from "../css/Footer.module.css"
const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className = {styles.company}>dlc</p>
                <p className = {styles.content}><span className= {styles.bold}>이메일</span> aaaaa@aaa.aa</p>
                <p className = {styles.content}><span className= {styles.bold}>주소</span> 대림대 전산관</p>
                <p className = {styles.content}><span className= {styles.bold}>대표자</span> 이동주</p>
            </div>
        </footer>

    );
}

export default Footer;