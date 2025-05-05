import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../css/ComplexityAssessment2.module.css";

const CodeImprovement = () => {
    const [codingTitleText, setCodingTitleText] = useState("문제 제목");
    const [codingStatementText, setCodingStatementText] = useState("이거는 이런 저런 이러쿵 저러쿵 샬라샬라 내용입니다");
    const [language, setLanguage] = useState("프로그래밍 언어");
    const [problemType, setProblemType] = useState("문제 유형");
    const [problemDifficulty, setProblemDifficulty] = useState("");

    const languageExplanation = {
        "프로그래밍 언어" : "프로그래밍 언어 설명",
        python: "가장 많이 사용됨. 알고리즘/데이터 분석/AI 문제에 최적",
        java: "백엔드/객체지향/알고리즘 문제에 자주 사용",
        c: "메모리/포인터 관련 문제 출제에 적합",
        cpp: "알고리즘/경량 STL 사용 문제",
        javascript: "웹 로직/프론트엔드/Node.js 백엔드 코드 생성 가능",
        typescript: "정적 타입 기반 JS 문제도 대응 가능",
        csharp: ".NET 또는 유니티 관련 문제 작성 가능",
        go: "병렬 처리/간결한 서버 사이드 문제 가능",
        rust: "안전성/메모리/성능 관련 문제 작성 가능",
        kotlin: "안드로이드 앱/Java 대체 문제 작성 가능",
        swift: "iOS 앱 문제 또는 기본 알고리즘 문제 대응 가능",
        ruby: "간단한 웹 문제(Rails)나 알고리즘 문제 작성 가능",
        php: "웹 백엔드 관련 문제 생성 가능",
        sql: "복잡한 쿼리 작성/최적화 문제 가능",
        bash: "리눅스 명령어/스크립트 문제 생성 가능",
        r: "통계/데이터 분석 문제 대응 가능",
        html: "웹 페이지 구조 작성에 사용되는 언어",
        css: "웹 페이지 스타일링에 사용되는 언어",
        json: "데이터 교환 형식으로 사용되는 경량 포맷",
    };

    const problemExplanation = {
        "문제 유형" : "문제 유형 설명",
        "출력,변수": "기초적인 출력과 변수 선언/사용에 대한 문제",
        "자료형": "숫자, 문자열, 불리언 등 다양한 자료형의 특징을 묻는 문제",
        "배열": "배열을 선언하고 인덱스로 접근하거나 순회하는 문제",
        "문자열": "문자열을 조작하거나 특정 조건을 검사하는 문제",
        "조건문": "if, switch 등을 활용한 조건 분기 로직을 요구하는 문제",
        "반복문": "for, while 등 반복문을 활용하여 연산을 수행하는 문제",
        "함수": "함수 정의와 호출, 파라미터와 반환값을 다루는 문제",
        "정렬": "버블/삽입/병합/퀵 등 정렬 알고리즘의 구현 또는 응용 문제",
        "탐색": "선형 탐색, 이진 탐색 등을 통해 특정 값을 찾는 문제",
        "스택": "LIFO 구조의 스택을 이용한 연산 문제",
        "큐": "FIFO 구조의 큐를 이용한 문제",
        "해시": "해시맵/딕셔너리를 활용하여 빠른 검색 또는 카운팅을 수행하는 문제",
        "세트": "중복 제거와 집합 연산에 대한 문제",
        "맵": "Key-Value 구조를 사용하는 Map 자료구조 활용 문제",
        "완전탐색": "모든 경우를 시도해보는 브루트포스 방식 문제",
        "백트래킹": "재귀를 통해 가능한 모든 경우를 시도하되, 가지치기를 수행하는 방식의 문제",
        "DFS": "깊이 우선 탐색(Depth First Search)을 사용하는 그래프 탐색 문제",
        "BFS": "너비 우선 탐색(Breadth First Search)을 사용하는 그래프 탐색 문제",
        "그리디": "매 선택마다 최선의 선택을 하는 탐욕 알고리즘 문제",
        "동적계획법": "부분 문제를 저장해가며 해결하는 최적화 문제",
        "이분탐색": "정렬된 배열에서 값을 빠르게 찾는 문제",
        "비트연산": "비트 단위 연산자(&, |, ^ 등)을 사용하는 문제",
        "그래프": "노드와 간선으로 이루어진 자료구조를 활용하는 문제",
        "최단경로": "그래프 내에서 두 노드 간 최단 거리를 구하는 문제",
        "위상정렬": "순서가 정의된 DAG(방향 비순환 그래프)를 정렬하는 문제",
        "트리": "계층적 구조를 갖는 트리 자료구조 관련 문제",
        "힙": "우선순위 큐의 일종으로, 최대/최소값을 빠르게 찾는 문제",
        "우선순위큐": "우선순위를 기준으로 정렬된 큐를 활용하는 문제",
        "시뮬레이션": "조건을 그대로 구현하거나 상황을 재현하는 문제",
        "수학": "수식 계산, 약수/배수, 소수 판별 등 수학적 개념을 다루는 문제",
        "재귀": "함수가 자기 자신을 호출하는 재귀적 방식의 문제",
        "비트마스킹": "정수를 비트 단위로 다루며, 상태 추적 등을 효율적으로 처리하는 문제",
        "정규표현식": "문자열에서 특정 패턴을 찾거나 검증하는 문제",
        "웹 개발": "웹 애플리케이션 구현 관련 문제",
        "API 개발": "RESTful API 설계 및 구현 문제",
        "데이터베이스": "데이터베이스 설계 및 쿼리 최적화 문제",
        "UI 구현": "사용자 인터페이스 구현 문제",
        "상태관리": "애플리케이션 상태 관리 구현 문제",
        "인증/보안": "사용자 인증 및 보안 관련 문제",
        "테스트": "단위 테스트, 통합 테스트 작성 문제"
    };

    // 각 언어에 맞는 문제 유형만 필터링
    const validProblems = {
        python: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "재귀", "수학", "비트연산", "백트래킹", "데이터베이스", "API 개발", "테스트"],
        java: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "재귀", "수학", "비트연산", "백트래킹", "웹 개발", "API 개발", "데이터베이스"],
        c: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "재귀", "수학", "비트연산", "백트래킹"],
        cpp: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "재귀", "수학", "비트연산", "백트래킹"],
        javascript: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "웹 개발", "API 개발", "UI 구현", "상태관리", "테스트"],
        typescript: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "웹 개발", "API 개발", "UI 구현", "상태관리", "테스트"],
        html: ["웹 페이지 구조", "UI 구현", "폼 구현", "반응형 디자인", "웹 접근성"],
        css: ["스타일링", "반응형 디자인", "애니메이션", "Flexbox/Grid 레이아웃", "UI 디자인"],
        json: ["데이터 파싱", "데이터 구조 변환", "API 요청 처리", "상태관리"],
        go: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "API 개발", "데이터베이스"],
        rust: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "재귀", "수학", "비트연산", "백트래킹"],
        kotlin: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "재귀", "수학", "비트연산", "백트래킹", "웹 개발", "API 개발"],
        swift: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "재귀", "수학", "비트연산", "백트래킹", "UI 구현"],
        ruby: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "재귀", "수학", "비트연산", "백트래킹", "웹 개발"],
        php: ["출력,변수", "자료형", "배열", "문자열", "조건문", "반복문", "함수", "정렬", "탐색", "DFS", "BFS", "그리디", "동적계획법", "재귀", "수학", "비트연산", "백트래킹", "웹 개발", "데이터베이스"],
        bash: ["스크립트 작성", "파일 처리", "리눅스 명령어 활용", "텍스트 처리", "시스템 관리"],
        r: ["통계 분석", "데이터 분석", "벡터 연산", "통계 모델링", "데이터 시각화"],
        sql: ["쿼리 작성", "데이터베이스 최적화", "조인", "서브쿼리", "트랜잭션 처리", "데이터 집계", "인덱싱"]
    };
    
    // 난이도 설명
    const difficultyExplanation = {
        "": "난이도를 선택해주세요",
        "novice": "프로그래밍을 처음 접하는 사람을 위한 기초적인 문제",
        "beginner": "기본 문법과 간단한 알고리즘을 이해한 사람을 위한 문제",
        "intermediate": "여러 알고리즘과 자료구조를 활용할 수 있는 사람을 위한 문제",
        "advanced": "복잡한 알고리즘과 최적화 기법을 이해하는 사람을 위한 문제",
        "expert": "고난도 알고리즘과 심화 개념을 마스터한 사람을 위한 문제"
    };

    // 언어 선택 변경 시 문제 유형 옵션을 필터링
    useEffect(() => {
        setProblemType("문제 유형");
    }, [language]);

    // 분석 시작 버튼 클릭 이벤트 핸들러
    const handleAnalyze = () => {
        if (language === "프로그래밍 언어" || problemType === "문제 유형" || !problemDifficulty) {
            alert("언어, 문제 유형, 난이도를 모두 선택해주세요.");
            return;
        }
        
        // 여기에 분석 로직 추가
        console.log("분석 시작:", {
            language,
            problemType,
            problemDifficulty
        });
    };

    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.topMain}>
                    <div className={styles.codingProblem}>
                        <div className={styles.codingProblemTitle}>
                            <div className={styles.codingProblemTitleText}>
                                {codingTitleText}
                            </div>
                        </div>
                        <div className={styles.codingProblemText}>
                            <div className={styles.codingProblemStatementText}>
                                <h1>문제 설명</h1>
                                <p>{codingStatementText}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.codingProblemMenu}>
                        <div className={styles.codingProblemOptions}>
                            <div className={styles.codingProblemOptionsText}>
                                <h1>프로그래밍 언어, 문제 유형 선택</h1>
                            </div>
                            <nav className={styles.selectBoxGroup}>
                                <select
                                    name="lang"
                                    className={styles.selectBoxLang}
                                    value={language}
                                    onChange={(e) => {
                                        setLanguage(e.target.value);
                                    }}
                                >
                                    <option value="프로그래밍 언어" disabled>언어 선택</option>
                                    <option value="javascript">JavaScript</option>
                                    <option value="typescript">TypeScript</option>
                                    <option value="python">Python</option>
                                    <option value="java">Java</option>
                                    <option value="cpp">C / C++</option>
                                    <option value="go">Go</option>
                                    <option value="php">PHP</option>
                                    <option value="html">HTML</option>
                                    <option value="css">CSS</option>
                                    <option value="json">JSON</option>
                                </select>
                                <select 
                                    name="problem" 
                                    className={styles.selectBoxAlgo}
                                    value={problemType}
                                    onChange={(e) => setProblemType(e.target.value)}
                                    disabled={language === "프로그래밍 언어"}
                                >
                                    <option value="문제 유형" disabled>문제 유형 선택</option>
                                    {validProblems[language]?.map((problem) => (
                                        <option key={problem} value={problem}>{problem}</option>
                                    ))}
                                </select>
                                <select
                                    name="difficulty"
                                    className={styles.selectBoxDifficulty}
                                    value={problemDifficulty}
                                    onChange={(e) => setProblemDifficulty(e.target.value)}
                                >
                                    <option value="" disabled>난이도를 선택</option>
                                    <option value="novice">입문자 (Novice)</option>
                                    <option value="beginner">초급자 (Beginner)</option>
                                    <option value="intermediate">중급자 (Intermediate)</option>
                                    <option value="advanced">상급자 (Advanced)</option>
                                    <option value="expert">전문가 (Expert)</option>
                                </select>
                            </nav>
                            <div className={styles.elementDescriptionText}>
                                <p><strong>언어:</strong> {language !== "프로그래밍 언어" ? `${language} - ${languageExplanation[language]}` : "언어를 선택해주세요"}</p>
                                <br />
                                <p><strong>문제 유형:</strong> {problemType !== "문제 유형" ? `${problemType} - ${problemExplanation[problemType]}` : "문제 유형을 선택해주세요"}</p>
                                <br />
                                <p><strong>난이도:</strong> {difficultyExplanation[problemDifficulty]}</p>
                            </div>
                        </div>
                        <div className={styles.codingProblemResult}>
                            <button 
                                className={styles.analyzeBtn}
                                onClick={handleAnalyze}
                            >
                                문제 받기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CodeImprovement;