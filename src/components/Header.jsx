// import Reacts from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Header.module.css';
import logo from '../Image/logo.png';
import React from 'react';


const Header = () => {
    const navigator = useNavigate();
    const GitLogin = () => {
        window.location.href = "https://dong.comon.kr/login/oauth2/code/gitlab";
    }
    <a href="https://www.flaticon.com/kr/free-icons/github" title="github 아이콘">Github 아이콘 제작자: Pixel perfect - Flaticon</a>
  return (
    <header className={styles.container}>
        <div className={styles.logo}>
            <div className={styles.logo} onClick={() => navigator('/')}>
                <img src={logo} alt="logo" className={styles.img}/>
                <div className={styles.title}>The Coder</div>
            </div>    
                <div className={styles.siteItem} onClick={() => navigator('/CodeAnalysis')}>
                    코드분석
                </div>
                <div className={styles.siteItem} onClick={() => navigator('/ComplexityAssessment')}>
                    문제풀기
                </div>
                <div className={styles.siteItem} onClick={() => navigator('/CodeImprovement')}>
                    코드개선
                </div>
            </div>
        
        <nav className={styles.nav}>
            {/* <div className={styles.navItem} onClick={() => GitLogin}>
                로그인
            </div> */}
            <i class="fi fi-brands-github"><button onClick={GitLogin} className={styles.navItem}>깃허브 로그인</button></i>
            
        </nav>
    </header>
  );
}

export default Header;
