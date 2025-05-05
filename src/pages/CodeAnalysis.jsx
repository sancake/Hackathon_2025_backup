import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeEditor from "../components/CodeEditor";
import styles from "../css/CodeAnalysis.module.css";
import RadarChart from "../components/RadarChart";

// 언어별 기본 템플릿
const languageTemplates = {
  javascript: `function hello() {\n  console.log("Hello, JavaScript!");\n}`,
  typescript: `function hello(): void {\n  console.log("Hello, TypeScript!");\n}`,
  python: `def hello():\n    print("Hello, Python!")`,
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
  cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, C++!" << std::endl;\n    return 0;\n}`,
  go: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, Go!")\n}`,
  php: `<?php\necho "Hello, PHP!";\n?>`,
  html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello HTML</title>\n</head>\n<body>\n  <h1>Hello, HTML!</h1>\n</body>\n</html>`,
  css: `body {\n  background-color: #f0f0f0;\n  color: #333;\n}`,
  json: `{\n  "message": "Hello, JSON!"\n}`
};

const CodeAnalysis = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(languageTemplates["javascript"]);
  const [showChart, setShowChart] = useState(false);
  const [scores, setScores] = useState([0, 0, 0, 0, 0]);
  const [pageMode, setPageMode] = useState("text");
  const [fileList, setFileList] = useState([]);  // 파일 목록 상태 추가

  const calculateScores = () => {
    return Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 41) + 60
    );
  };

  const handleAnalyzeClick = () => {
    // 코드 분석
    setScores(calculateScores());
    setShowChart(true);
  };

  // 파일 업로드 처리 함수
  const handleFileChange = (event) => {
    const files = event.target.files;
    const newFileList = Array.from(files).map((file) => file.name); // 파일 이름만 추출
    setFileList(newFileList); // 상태에 파일 목록 저장
  };

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.editorPading}>
          <div className={styles.editor}>
            <div className={styles.selectBoxColleact}>
              <select
                className={styles.selectBox}
                value={language}
                onChange={(e) => {
                  const selectedLang = e.target.value;
                  setLanguage(selectedLang);
                  setCode(languageTemplates[selectedLang]); // 언어 변경 시 코드도 즉시 변경
                }}
              >
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
                className={styles.selectBox}
                value={pageMode}
                onChange={(e) => {
                  const selectPageMode = e.target.value;
                  setPageMode(selectPageMode);
                  if (selectPageMode === "text") {
                    setFileList([]); // text로 바꿀 때 파일 리스트 초기화
                    
                  }
                }}
              >
                <option value="text">text</option>
                <option value="zip">zip</option>
              </select>
              {(fileList.length > 0 || pageMode === "text")&& (
                <button className={styles.analyzeBtn} onClick={handleAnalyzeClick}>
                코드 분석
              </button>
              )}
              
            </div>

            {pageMode === "text" && (
              
              <CodeEditor
                key={language} // 강제 리렌더링 보장
                code={code}
                setCode={setCode}
                language={language}
              />
            )}

            {pageMode === "zip" && (
              <>
                <div className= {styles.fileInputBox}>
                  <input
                    type="file"
                    name="userCodingFile"
                    id="fileInput"
                    multiple
                    onChange={handleFileChange} // 파일 선택 시 호출되는 함수
                    className={styles.fileInput}
                />
                <label htmlFor="fileInput" className={styles.fileInputLabel} >클릭하여 파일을 추가 해주세요</label>
                </div>
                <>
                  <h3>선택된 파일 목록:</h3>
                  <ul>
                    {fileList.map((fileName, index) => (
                      <li key={index}>{fileName}</li> // 파일 이름을 리스트로 표시
                    ))}
                  </ul>
                </>
              </>
            )}

            
          </div>
        </div>

        <div className={styles.radarchart}>
          <h1 className={styles.radarChartText}>코드 분석 결과</h1>
          {showChart && (
            <div className={styles.radarchartImg}>
              <RadarChart ratings={scores} />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CodeAnalysis;
