import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero_Header() {
    const navigate = useNavigate();

    const handleMapClick = () => {
        navigate('/map');
    };

    return (
        <div className="flex min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('hero_bg_main.jpg')" }}>
            <div className="w-1/2 h-screen p-2">
                <div className="grid h-full place-content-center">
                    <div className="pl-1 mb-4 font-bold text-8xl">NaviX</div>
                    <div className="mb-8 text-2xl">Advanced Ship Routing Solution</div>
                    <div className="flex justify-center space-x-4">
                        <Button onClick={handleMapClick}>Map</Button>
                        <div className="p-2 pl-4 underline cursor-pointer">Explore</div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-screen">
                <img className="object-cover w-full h-full" src="boat.svg" alt="Container ship" />
            </div>
        </div>
    );
}