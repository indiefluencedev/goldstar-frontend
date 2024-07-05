import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import CategoryDropdown from '../components/catagory/CategoryDropdown';
import PacmanLoader from '../components/PacmanLoader';

const SeriesModelList = () => {
    const { seriesId: initialSeriesId } = useParams();
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [seriesId, setSeriesId] = useState(initialSeriesId);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchModels = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://testing-backend-s0dg.onrender.com/api/series/${seriesId}/models`);
                console.log('Response data:', response.data);
                setModels(response.data);
            } catch (error) {
                console.error(`Error fetching models for series with ID ${seriesId}:`, error);
                setError('Failed to fetch models');
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        if (seriesId) {
            fetchModels();
        }
    }, [seriesId]);

    const handleSeriesChange = (newSeriesId) => {
        setSeriesId(newSeriesId);
        navigate(`/series/${newSeriesId}/models`);
    };

    if (loading) {
        return <PacmanLoader />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="mx-auto max-w-screen-xl pt-[100px] bg-white rounded-lg shadow-lg">
            <CategoryDropdown
                selectedSeriesName={models.find(model => model.seriesId === seriesId)?.name || ''}
                handleCompareClick={() => navigate('/compare')}
                compareList={models} // Adjust as per your actual compare list state
                onSeriesChange={handleSeriesChange}
            />
            <h1 className="text-2xl font-bold mb-4">Models in Series</h1>
            <ul>
                {models.map((model) => (
                    <li key={model._id} className="mb-2">
                        <a href={`/model/${model.seriesId}/${model._id}`} className="text-blue-500 hover:underline">
                            {model.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeriesModelList;
