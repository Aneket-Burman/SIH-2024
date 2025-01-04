import React from 'react';

export default function Explanation() {
    return (
        <div >
            <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 bg-opacity-0 lg:flex-row">
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <img className="object-cover h-140px w-180px" src="logo/4.png" alt="Container ship" />
                </div>
                <div className="w-full p-4 lg:w-1/2 lg:ml-16">
                    <div className="mb-8 text-5xl font-bold text-center">What is NaviX?</div>
                    <div className="mb-8 text-2xl text-primary">
                        Navix is an intelligent ship routing solution that adapts in real-time to ocean conditions like  water currents, wind speed and waves for optimal navigation.
                    </div>
                    <div className="space-y-4 text-2xl text-primary">
                        <div className="flex items-center">
                            <img src="fuel.png" alt="Fuel Optimization" className="w-8 h-8 mr-4" />
                            <div>
                                <strong>Fuel Optimization:</strong> Reduces unnecessary fuel consumption.
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img src="time.png" alt="Travel Time Optimization" className="w-8 h-8 mr-4" />
                            <div>
                                <strong>Travel Time Optimization:</strong> Minimizes voyage duration by selecting the most efficient routes.
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img src="safety.png" alt="Safety First" className="w-8 h-8 mr-4" />
                            <div>
                                <strong>Safety First:</strong> Prioritizes safe routes to protect the ship, crew, and cargo.
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img src="versatile.png" alt="Versatile for All Ship Types" className="w-8 h-8 mr-4" />
                            <div>
                                <strong>Versatile for All Ship Types:</strong> Works with various ship designs and sizes, adjusting for drift and other conditions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}