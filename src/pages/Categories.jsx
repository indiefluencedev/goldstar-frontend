import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSeriesById } from '../services/api';
import CategoryDropdown from '../components/catagory/CategoryDropdown';
import ModelCard from '../components/catagory/ModelCard';
import PacmanLoader from '../components/PacmanLoader';
import axios from '../api';
import AuthContext from '../AuthContext'; // Ensure correct import path

const Categories = ({ addToCompare, compareList }) => {
    const { seriesId } = useParams();
    const navigate = useNavigate();
    const { loggedIn } = useContext(AuthContext); // Use AuthContext to get loggedIn state
    const [seriesName, setSeriesName] = useState('');
    const [modelDetails, setModelDetails] = useState([]);
    const [seriesData, setSeriesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const seriesData = await getSeriesById(seriesId);
                console.log('Series Data:', seriesData);
                setSeriesName(seriesData.name);
                setSeriesData(seriesData);

                const modelDetailPromises = seriesData.models.map(async (model) => {
                    const response = await fetch(`https://testing-backend-s0dg.onrender.com/api/models/${seriesData.modelType}/${model._id}`);
                    const detail = await response.json();
                    return detail;
                });

                const modelsDetails = await Promise.all(modelDetailPromises);
                console.log('Models Details:', modelsDetails);
                setModelDetails(modelsDetails);

                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching series or models:', error);
                setError('Failed to fetch series or models');

                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchData();
    }, [seriesId]);

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

    if (loading) {
        return <PacmanLoader />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="xl:max-w-[1440px] mx-auto px-6 xl:px-20 pt-32">
            <div className="flex mb-4 justify-between">
                <CategoryDropdown
                    selectedSeriesName={seriesName}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 xl:max-w[1440px]">
                {modelDetails.map((model) => (
                    <ModelCard
                        key={model._id}
                        model={model}
                        addToCompare={addToCompare}
                        compareList={compareList}
                        onClick={() => handleModelClick(model)}
                        loggedIn={loggedIn} // Pass loggedIn prop to ModelCard
                    />
                ))}
            </div>
        </div>
    );
};

export default Categories;
