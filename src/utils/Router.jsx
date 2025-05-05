import { createBrowserRouter, Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import CodeAnalysis from '../pages/CodeAnalysis';
import CodeImprovement from '../pages/CodeImprovement';
import ComplexityAssessment from '../pages/ComplexityAssessment' 
// import SignupPage from '../pages/SignupPage';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #1f2029;
  }

  ::-webkit-scrollbar-thumb {
    background: #464858;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #777a91;
  }
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <GlobalStyle />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: "/CodeAnalysis",
        element: <CodeAnalysis/> 
      },
      {
        path: 'CodeImprovement',
        element: <CodeImprovement/>
      },
      {
        path: 'ComplexityAssessment',
        element: <ComplexityAssessment/>
      },
    ],
  },
]);

export default router;
