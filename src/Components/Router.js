import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Pages/Landing/LandingPage';
import RiskForm from './RiskFORM/RiskForm';

const Router = () => {

    return (
        <Routes>
            <Route exact path='/' caseSensitive={false} element={<LandingPage />} />
            <Route exact path='/riskform' element={<RiskForm />} />

        </Routes>
    )
}
export default Router