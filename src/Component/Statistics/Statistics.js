import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rechart = () => {
    const {status,data} = useLoaderData();


    return (
        <div className=' container border'>

            <div className=''>

                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#F56E04" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    </LineChart>
            
            </div>
            


        </div>
    );
};

export default Rechart;