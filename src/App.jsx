import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { QueryClient, QueryClientProvider } from 'react-query';
import MetaTag from './utils/meta';
import PacmanLoader from './components/PacmanLoader';
import { AuthProvider } from './Authcontext';
import NavBar from './components/header';
import Footer from './components/Footer';

// Lazy load components
const About = lazy(() => import('../src/pages/About'));
const Categories = lazy(() => import('../src/pages/Categories'));
const ContactUs = lazy(() => import('../src/pages/Contactus'));
const ModelDetails = lazy(() => import('./pages/ModelDetail'));
const Compare = lazy(() => import('./pages/Compare'));
const AuthPage = lazy(() => import('./pages/Authpage'));
const DynamicForm = lazy(() => import('./pages/DynamicForm'));
const UpdateForm = lazy(() => import('./pages/UpdateForm'));
const Stichtable = lazy(() => import('./pages/Stichtable'));
const ComparisonTable = lazy(() => import('./pages/Comparisontable'));
const ProgressComponent = lazy(() => import('../src/components/about/ProgressComponent'));
const MobileProgress = lazy(() => import('./components/about/MobileProgress'));
const SeriesModelList = lazy(() => import('./components/Seriesdata'));
const HomePage = lazy(() => import('./pages/Homepage'));

const MySwal = withReactContent(Swal);
const queryClient = new QueryClient();

function App() {
  const { i18n } = useTranslation();
  const [compareList, setCompareList] = useState([]);
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);
  const [language, setLanguage] = useState(sessionStorage.getItem('language') || i18n.language);

  const addToCompare = (model) => {
    setCompareList((prevList) => {
      if (prevList.find(item => item._id === model._id)) {
        return prevList; // Prevent duplicates
      }
      return [...prevList, model];
    });
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(max-width: 768px)');
    const listener = (event) => setIsMobile(event.matches);

    mediaQueryList.addEventListener('change', listener);

    // Cleanup listener on unmount
    return () => mediaQueryList.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem('languagePromptShown')) {
      setTimeout(() => {
        MySwal.fire({
          title: 'Switch to English?',
          text: 'Do you want to switch the language to English?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.isConfirmed) {
            i18n.changeLanguage('en');
            setLanguage('en');
            sessionStorage.setItem('language', 'en');
          }
          sessionStorage.setItem('languagePromptShown', 'true');
        });
      }, 1000); // Add a delay of 1 second
    } else {
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);

  return (
    <>
      <MetaTag title="GoldStar Sewing Machine" />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <NavBar language={language} setLanguage={setLanguage} />
            <Suspense fallback={<PacmanLoader />}>
              <Routes>
                <Route path="/" element={<PageWrapper refreshOnNavigate><About /></PageWrapper>} key="/" />
                <Route path="/categories/:seriesId/:seriesName" element={<PageWrapper><Categories addToCompare={addToCompare} compareList={compareList} /></PageWrapper>} key="/categories/:seriesId/:seriesName" />
                <Route path="/models/:modelType/:modelId" element={<PageWrapper><ModelDetails addToCompare={addToCompare} compareList={compareList} /></PageWrapper>} key="/models/:modelType/:modelId" />
                <Route path="/series" element={<PageWrapper><SeriesModelList /></PageWrapper>} key="/series" />
                <Route path="/compare" element={<PageWrapper><Compare compareList={compareList} setCompareList={setCompareList} /></PageWrapper>} key="/compare" />
                <Route path="/auth" element={<PageWrapper><AuthPage /></PageWrapper>} key="/auth" />
                <Route path="/stitchtable" element={<PageWrapper><Stichtable /></PageWrapper>} key="/stitchtable" />
                <Route path="/comparisontable" element={<PageWrapper><ComparisonTable /></PageWrapper>} key="/comparisontable" />
                <Route path="/form" element={<PageWrapper><DynamicForm /></PageWrapper>} key="/form" />
                <Route path="/usecases" element={isMobile ? <MobileProgress /> : <ProgressComponent />} key="/usecases" />
                <Route path="/update-form/:modelId" element={<PageWrapper><UpdateForm /></PageWrapper>} key="/update-form/:modelId" />
                <Route path="/contact" element={<PageWrapper><ContactUs /></PageWrapper>} key="/contact" />
                <Route path="/test" element={<PageWrapper><HomePage /></PageWrapper>} key="/test" />
              </Routes>
              <Footer />
            </Suspense>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

const PageWrapper = ({ children, refreshOnNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [prevPath, setPrevPath] = useState(null);

  useEffect(() => {
    
    if (refreshOnNavigate && location.pathname === '/') {
      if (prevPath && prevPath !== location.pathname) {
        if (!sessionStorage.getItem('reloaded')) {
          sessionStorage.setItem('reloaded', 'true');
          window.location.reload();
        }
      }
    } else {
      sessionStorage.removeItem('reloaded');
    }
    setPrevPath(location.pathname);
  }, [location.pathname, prevPath, refreshOnNavigate]);

  return <>{children}</>;
};

export default App;
