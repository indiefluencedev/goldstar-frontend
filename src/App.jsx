import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import NavBar from '../src/components/header';
import About from '../src/pages/About';
import Categories from '../src/pages/Categories';
import ContactUs from '../src/pages/Contactus';
import Footer from '../src/components/Footer';
import ModelDetails from './pages/ModelDetail';
import Compare from './pages/Compare';
import AuthPage from './pages/Authpage';
import DynamicForm from './pages/DynamicForm';
import UpdateForm from './pages/UpdateForm';
import { AuthProvider } from './Authcontext';
import Stichtable from './pages/Stichtable';
import ComparisonTable from './pages/Comparisontable';
import ProgressComponent from '../src/components/about/ProgressComponent';
import MobileProgress from './components/about/MobileProgress';
import SeriesModelList from './components/Seriesdata';
import MetaTag from './utils/meta';

const MySwal = withReactContent(Swal);

function App() {
  const { i18n } = useTranslation();
  const [compareList, setCompareList] = useState([]);
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

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
      }
    });
  }, [i18n]);

  return (
    <>
    <MetaTag title="GoldStar Sewing Machine"/>
    <AuthProvider>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/categories/:seriesId" element={<Categories addToCompare={addToCompare} compareList={compareList} />} />
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
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;