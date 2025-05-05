import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import MainImg from '../Image/startpage.png';
import WyImg from '../Image/wy.png';
import CiIamge from '../Image/CodeImprovement.png';
import CaIamge from '../Image/CodeAnalysis.png';

import styles from '../css/MainPage.module.css'

const MainPage = () => {
    return (
        <>
            
            <Header />
            <div>
                <img src={MainImg} alt="MainImg" className={styles.MainImg}/>

                <section className={styles.mold}>
                    <h1 className={styles.title}>The coder?</h1>
                    <p className={styles.detail}>
                        저희 사이트는 사용자의 GitHub 코드나 직접 작성한 코드에 대한 코드 분석
                        코드의 구조적 복잡도, 품질 평가, 가독성, 유지보수성 지표 제공
                        AI 기반으로 코드 개선 사항을 추천하고
                        사용자의 실력에 맞는 맞춤형 문제를 추천하는 서비스입니다.
                    </p>
                </section>

                <section className={styles.mold}>
                    <h1 className={styles.title}>주요 기능</h1>
                    <div className={styles.bind}>
                        <div className={styles.member}>
                        <img src={CiIamge} alt="CiIamge" className={styles.memberPicture}/>
                        <p className={styles.detail}>코드 분석</p>
                        </div>

                        <div className={styles.member}>
                        <img src={CaIamge} alt="CaIamge" className={styles.memberPicture}/>
                        <p className={styles.detail}>문제 추천</p>
                        </div>
                        
                        <div className={styles.member}>
                        <img src={CaIamge} alt="CaIamge" className={styles.memberPicture}/>
                        <p className={styles.detail}>코드 개선</p>
                        </div>
                        

                        
                    </div>
                </section>

                <section className={styles.mold}>
                    <h1 className={styles.title}>팀원</h1>
                    <div className={styles.bind}>
                        <div className={styles.member}>
                            <img src={WyImg} alt="memberPicture" className={styles.memberPicture}/>
                            <h2>이동주</h2>
                            <p>맡은 일</p>
                        </div>

                        <div className={styles.member}>
                        <img src={WyImg} alt="memberPicture" className={styles.memberPicture}/>
                            <h2>임서연</h2>
                            <p>맡은 일</p>
                        </div>

                        <div className={styles.member}>
                        <img src={WyImg} alt="memberPicture" className={styles.memberPicture}/>
                            <h2>이자목</h2>
                            <p>맡은 일</p>
                        </div>

                        <div className={styles.member}>
                        <img src={WyImg} alt="memberPicture" className={styles.memberPicture}/>
                            <h2>정원영</h2>
                            <p>맡은 일</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default MainPage;
