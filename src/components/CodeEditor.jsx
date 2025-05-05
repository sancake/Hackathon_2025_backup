import React, { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";
import { autocompletion } from "@codemirror/autocomplete";

import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { go } from "@codemirror/lang-go";
import { php } from "@codemirror/lang-php";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { json } from "@codemirror/lang-json";

const languageExtensions = {
  javascript: javascript({ typescript: false }),
  typescript: javascript({ typescript: true }),
  python: python(),
  java: java(),
  cpp: cpp(),
  go: go(),
  php: php(),
  html: html(),
  css: css(),
  json: json(),
};

const CodeEditor = ({ code, setCode, language = "javascript", height = "536px" }) => {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [fontSize, setFontSize] = useState(14); // 기본 폰트 사이즈

  // 폰트 사이즈를 적용하는 테마 생성
  const fontSizeTheme = EditorView.theme({
    "&": {
      fontSize: `${fontSize}px`,
    },
  });

  // 고정 높이 테마
  const fixedHeightTheme = EditorView.theme({
    "&": {
      height: height,
      overflow: "auto",
    },
  });

  // 폰트 사이즈 증가
  const increaseFontSize = () => {
    if (fontSize < 30) { // 최대 크기 제한
      setFontSize(prevSize => prevSize + 2);
    }
  };

  // 폰트 사이즈 감소
  const decreaseFontSize = () => {
    if (fontSize > 8) { // 최소 크기 제한
      setFontSize(prevSize => prevSize - 2);
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      if (viewRef.current) {
        viewRef.current.destroy();
      }

      const updateListener = EditorView.updateListener.of((v) => {
        if (v.docChanged || v.viewportChanged) {
          const value = v.state.doc.toString();
          setCode(value);

          // 줄 수가 29줄 넘으면 overflow 켜기
          const lineCount = v.state.doc.lines;
          setIsOverflowing(lineCount > 29);
        }
      });

      const startState = EditorState.create({
        doc: code,
        extensions: [
          basicSetup,
          oneDark,
          autocompletion(),
          languageExtensions[language] || javascript(),
          fixedHeightTheme,
          fontSizeTheme, // 폰트 사이즈 테마 적용
          updateListener,
        ],
      });

      viewRef.current = new EditorView({
        state: startState,
        parent: editorRef.current,
      });

      // 초기 줄 수 체크
      const initialLines = startState.doc.lines;
      setIsOverflowing(initialLines > 29);

      return () => {
        viewRef.current?.destroy();
      };
    }
  }, [language, fontSize]); // fontSize가 변경될 때도 에디터를 다시 렌더링

  return (
    <div>
      <div className="font-size-controls" 
        style={{ 
          marginBottom: "20px",
          justifyContent: "space-between"
        }}>
        <div style={{
          display: "flex"
        }}>
          <input
            type="number"
            value={fontSize}
            min={8}
            max={30}
            onChange={(e) => {
              const newSize = parseInt(e.target.value, 10);
              if (newSize >= 8 && newSize <= 30) {
                setFontSize(newSize);
              }
            }}
            style={{
              width: "60px",
              fontSize: "16px",
              textAlign: "center",
              borderRadius: "4px",
              border: "1px solid #ccc",
              height : "30px",
            }}
          />

          {/* <div style={{
            display: "flex",
            flexDirection: "column",
            width: "20px",
            height : "15px",
          }}>
            <button onClick={increaseFontSize}>▲</button>
            <button onClick={decreaseFontSize}>▼</button>
          </div> */}
        </div>
      </div>

      <div
        ref={editorRef}
        style={{
          height,
          overflow : "hidden",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
    </div>
  );
};

export default CodeEditor;
