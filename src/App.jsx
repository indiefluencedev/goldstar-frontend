import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/header'; // Adjust the path as necessary
import About from '../src/pages/About'; // Adjust the path as necessary
import Categories from '../src/pages/Categories'; // Adjust the path as necessary
import ContactUs from '../src/pages/Contactus'; // Adjust the path as necessary
import Footer from '../src/components/Footer'; // Adjust the path as necessary
import ModelDetails from './pages/ModelDetail';
import Compare from './pages/Compare';
import AuthPage from './pages/Authpage';
import DynamicForm from './pages/DynamicForm';
import UpdateForm from './pages/UpdateForm'; // Import the UpdateForm component
import { AuthProvider } from './Authcontext';

function App() {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (model) => {
    setCompareList((prevList) => {
      if (prevList.find(item => item._id === model._id)) {
        return prevList; // Prevent duplicates
      }
      return [...prevList, model];
    });
  };

  return (
    <AuthProvider>
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/categories/:seriesId" element={<Categories addToCompare={addToCompare} compareList={compareList} />} />
        <Route path="/models/:modelType/:modelId" element={<ModelDetails addToCompare={addToCompare} compareList={compareList} />} />
        <Route path="/compare" element={<Compare compareList={compareList} setCompareList={setCompareList} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/form" element={<DynamicForm />} /> 
        <Route path="/update-form/:modelId" element={<UpdateForm />} /> {/* Add the route for UpdateForm */}
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
