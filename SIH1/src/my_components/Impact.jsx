export default function Impact() {
    return (
        <div className="min-h-screen bg-gray-100 ">
           
            <Impact_1 />
            <Impact_2 />
            <Impact_3 />
        </div>
    );
}

export function Impact_1() {
    return (
        <div className="bg-center bg-cover" style={{ backgroundImage: "url('/bgs/2.png')" }}>
             <div className="p-8 mb-8 text-6xl font-bold text-center text-white">Why Navix Matters</div>
            <div className="flex flex-col items-center justify-center p-8 lg:flex-row">
            <div className="w-full p-4 lg:w-1/2 lg:ml-16">
                <div className="mb-4 text-gray-700">
                    <div className="mb-2 text-4xl font-semibold text-">Fuel Savings:</div>
                    <div className="text-2xl text-white">
                    The optimized routes reduce fuel consumption, cutting costs and increasing profit margins for shipping.
                    </div>
                    {/* <div className="text-2xl text-white">Navix can reduce fuel consumption by up to 15%, leading to significant cost savings. For an average cargo ship, this could amount to saving $3,000 to $6,000 per voyage.</div> */}
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <img className="object-cover w-1/2 h-auto" src="fuel_consump_final.png" alt="Fuel Consumption" />
            </div>
        </div>
        </div>
    );
}

export function Impact_2() {
    return (
        <div className="bg-center bg-cover" style={{ backgroundImage: "url('/bgs/3.png')" }}>
         <div className="flex flex-col items-center justify-center p-8 lg:flex-row">
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <img className="object-cover w-1/2 h-auto" src="Family_secutrity.png" alt="Family Safety" />
            </div>
            <div className="w-full p-4 lg:w-1/2 lg:ml-16">
                <div className="mb-4 text-xl text-gray-700">
                    <div className="mb-2 text-4xl font-semibold text-white">Improved Comfort and Safety:</div>
                    <div className="text-2xl text-white">With real-time weather analysis, Navix reduces the risk of delays, enhancing passenger comfort and safety during the voyage.</div>
                    <div className="mt-4 mb-2 text-4xl font-semibold text-white">Route Safety:</div>
                    <div className="text-2xl text-white">Ensures safe passage by avoiding severe weather conditions and dangerous waters, protecting both passengers and crew.</div>
                </div>
            </div>
        </div>
       </div>
    );
}

export function Impact_3() {
    return (
        <div className="bg-center bg-cover" style={{ backgroundImage: "url('/bgs/4.png')" }}>
            <div className="flex flex-col items-center justify-center p-8 lg:flex-row">
            <div className="w-full p-4 lg:w-1/2 lg:ml-16">
                <div className="mb-4 text-xl text-gray-700">
                    <div className="mb-2 text-4xl font-semibold text-white">Reduced Travel Time:</div>
                    <div className="text-2xl text-white">Optimized routes can shorten travel times, helping shipping vessels complete voyages efficiently and decreasing the cost of the overall voyage</div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <img className="object-cover w-1/2 h-auto" src="Time_saving_final.png" alt="Time Reduced" />
            </div>
        </div>
        </div>
    );
}