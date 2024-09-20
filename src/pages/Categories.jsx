import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MetaTag from '../utils/meta';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import CategoryDropdown from '../components/catagory/CategoryDropdown';
import Catagorybannerskeleton from '../components/skelten/Catagorybannerskeleton';
import { useAuth } from '../Authcontext';
import { useTranslation } from 'react-i18next';  // Import useTranslation hook
import bannerImage from '../assets/png/banner.png';
import bannerMobile from '../assets/png/bannermobile.png';
import PacmanLoader from '../components/PacmanLoader';
import './catagorys.css';

import lockstitchImage from '../assets/gridpannal/lockstitch.webp';
import overlockImage from '../assets/gridpannal/overlock.webp';
import interlockImage from '../assets/gridpannal/interlock.webp';
import heavyDutyImage from '../assets/gridpannal/heavy-duty.webp';
import specialImage from '../assets/gridpannal/special.webp';
import zigzagImage from '../assets/gridpannal/zigzag.webp';
import cuttingImage from '../assets/gridpannal/cutting.webp';
import Fusion from '../assets/gridpannal/fusion.webp';
import Heattransfer from '../assets/gridpannal/heattransfer.webp';
import Needledetector from '../assets/gridpannal/needledetector.webp';

const ModelCard = lazy(() => import('../components/catagory/ModelCard'));
const Catagoryfooter = lazy(() => import('../components/catagory/Catagoryfooter'));

const Categories = ({ addToCompare, compareList }) => {
  const { t } = useTranslation();  // Initialize translation function
  const { seriesId, seriesName: urlSeriesName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { loggedIn } = useAuth();
  const [seriesName, setSeriesName] = useState('');
  const [modelDetails, setModelDetails] = useState([]);
  const [seriesData, setSeriesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const imageUrl = location.state?.imageUrl;

  const seriesImages = {
    lockstitch: lockstitchImage,
    overlock: overlockImage,
    interlock: interlockImage,
    heavyduty: heavyDutyImage,
    specialseries: specialImage,
    zigzag: zigzagImage,
    cuttingseries: cuttingImage,
    fusingmachine: Fusion,
    heattransfer: Heattransfer,
    needledetector: Needledetector,
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const seriesResponse = await axios.get(`http://localhost:8001/api/series/${seriesId}`);
        const seriesData = seriesResponse.data;
        setSeriesName(seriesData.modelType);
        setSeriesData(seriesData);

        if (seriesData.modelType && seriesData.modelType.toLowerCase() !== urlSeriesName) {
          navigate(`/categories/${seriesData.modelType.toLowerCase()}`, { replace: true });
        }

        const modelDetailPromises = seriesData.models.map(async (model) => {
          const url = `http://localhost:8001/api/${seriesData.modelType.toLowerCase()}/${model._id}`;
          try {
            const response = await axios.get(url);
            return {
              ...response.data,
              series: seriesData,
            };
          } catch (error) {
            console.error(`Error fetching model: ${error.response?.data?.message}`);
            return { error: error.response?.data?.message };
          }
        });

        const modelsDetails = await Promise.all(modelDetailPromises);
        setModelDetails(modelsDetails);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError('Failed to fetch series or models');
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();

    return () => {
      setModelDetails([]);
      setSeriesName('');
      setSeriesData(null);
    };
  }, [seriesId, urlSeriesName, navigate]);

  const handleCompareClick = () => {
    if (compareList.length > 0) {
      navigate('/compare');
    }
  };

  const handleModelClick = (model) => {
    if (seriesData) {
      navigate(`/models/${seriesData.modelType}/${model._id}`, { state: { seriesName } });
    }
  };

  const handleCreateClick = () => {
    navigate('/form');
  };

  useEffect(() => {
    if (modelDetails.length < 4) {
      setShowMore(true);
    }
  }, [modelDetails]);

  if (loading) {
    return <Catagorybannerskeleton />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const seriesImage = imageUrl || (seriesName && seriesImages[seriesName.toLowerCase()]);
  const translatedSeriesName = t(seriesName);  // Translate the series name

  return (
    <>
      <MetaTag title={`GoldStar - ${translatedSeriesName} Series`} />
      <div className="xs:pt-[80px] md:pt-[65px]">
        {seriesImage && (
          <div className="relative w-full mb-6">
            <LazyLoad height={200} offset={100} once>
              <img src={bannerImage} alt="Banner" className="w-full hidden md:block h-auto object-cover" />
            </LazyLoad>
            <LazyLoad height={200} offset={100} once>
              <img src={bannerMobile} alt="Banner" className="w-full block md:hidden h-auto object-cover" />
            </LazyLoad>
            <div className="absolute top-0 left-0 w-full h-full flex xs:flex-col md:flex-row items-center justify-between ">
              <div className="px-4 sm:px-8 text-white">
                <h1 className="xs:text-[40px] xs:pt-9 sm:text-3xl lg:text-5xl font-bold">{translatedSeriesName}</h1>
              </div>
              <div className="h-full flex items-center justify-center">
                <LazyLoad height={200} offset={100} once>
                  <img src={seriesImage} alt={translatedSeriesName} className="xs:h-[200px] sm:h-[150px] md:h-[200px] xl:h-[300px] w-auto object-contain mr-4 sm:mr-8" />
                </LazyLoad>
              </div>
            </div>
          </div>
        )}
        <div className="xl:max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-20">
          <div className="flex mb-4 justify-between">
            <CategoryDropdown
              selectedSeriesName={translatedSeriesName}
              compareList={compareList}
              handleCompareClick={handleCompareClick}
            />
            {loggedIn && (
              <div className="flex space-x-4">
                <button
                  className="bg-green-500 text-white p-3 rounded-lg"
                  onClick={handleCreateClick}
                >
                  Create
                </button>
              </div>
            )}
          </div>
          <Suspense fallback={<PacmanLoader />}>
            <div className="grid">
              {modelDetails.slice(0, showMore ? modelDetails.length : 4).map((model, index) => (
                <ModelCard
                  key={model._id || index}
                  model={model}
                  addToCompare={addToCompare}
                  compareList={compareList}
                  onClick={() => handleModelClick(model)}
                  loggedIn={loggedIn}
                />
              ))}
            </div>
          </Suspense>
        </div>
        <Suspense fallback={<PacmanLoader />}>
          <Catagoryfooter seriesName={seriesName} />
        </Suspense>
      </div>
    </>
  );
};

export default Categories;
