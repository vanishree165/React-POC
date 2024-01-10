import React from 'react';
import LineChart from "./LineChart"
import BarChart from "./BarChart";
const Dashboard = () => {
    return <div>
        <div className='container'>
            <div className='row'>
                <h1 className='my-5 fs22 fw-600'>AmChart Dashboard</h1>
                <div className='col-6'>
                    <LineChart />
                </div>
                <div className='col-6'>
                    <BarChart />
                </div>
            </div>
        </div>
    </div>;
};

export default Dashboard;
