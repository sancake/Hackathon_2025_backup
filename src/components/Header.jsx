// import Reacts from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Header.module.css';
import logo from '../Image/logo.png';



const Header = () => {
    const navigator = useNavigate();

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
                <div className={styles.siteItem} onClick={() => navigator('/CodeImprovement')}>
                    코드개선
                </div>
            </div>
        
        <nav className={styles.nav}>
            <div className={styles.navItem} onClick={() => navigator('/login')}>
                로그인
            </div>
        </nav>
    </header>
  );
}

export default Header;
