import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rechart = () => {
    const {status,data} = useLoaderData();


    return (
        <div className=' container border my-5 p-3 rounded d-flex justify-content-around'>

            <div className=''>
                <div>
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#F56E04" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    </LineChart>
                </div>
            </div>
            


        </div>
    );
};

export default Rechart;