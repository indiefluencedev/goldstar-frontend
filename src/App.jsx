import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga4'
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { QueryClient, QueryClientProvider } from 'react-query';
import MetaTag from './utils/meta';
import PacmanLoader from './components/PacmanLoader';
import { AuthProvider } from './Authcontext';
import NavBar from './components/header';
import Footer from './components/Footer';
import CustomCursor from './CustomCurser';
// import Tracker from './utils/Tracker';
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
const Notfound = lazy(() => import('../src/pages/NotFound'));


const MySwal = withReactContent(Swal);
const queryClient = new QueryClient();

function App() {

  ReactGA.initialize(import.meta.env.VITE_GA_ID);

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
      <CustomCursor/>

        <AuthProvider>
          <Router>
            <NavBar language={language} setLanguage={setLanguage} />
            <Suspense fallback={<PacmanLoader />}>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/categories/:seriesId/:seriesName" element={<Categories addToCompare={addToCompare} compareList={compareList} />} />
                <Route path="/models/:modelType/:modelId" element={<ModelDetails addToCompare={addToCompare} compareList={compareList} />} />
                <Route path="/series" element={<SeriesModelList />} />
                <Route path="/compare" element={<Compare compareList={compareList} setCompareList={setCompareList} />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/stitchtable" element={<Stichtable />} />
                <Route path="/comparisontable" element={<ComparisonTable />} />
                <Route path="/form" element={<DynamicForm />} />
                <Route path="/usecases" element={isMobile ? <MobileProgress /> : <ProgressComponent />} />
                <Route path="/update-form/:modelId" element={<UpdateForm />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
              <Footer />
            </Suspense>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
