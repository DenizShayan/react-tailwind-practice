function ButtonVariants() {
    return (
        <div className="text-center space-y-6 mt-10">
            {/* Button Variants */}
            <h2 className="text-white text-2xl font-semibold">Button Variants</h2>

            {/* first row of main buttons */}
            <div className="flex gap-4 justify-center ">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transion-all duration-300 shadow-md">
                    primary
                </button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md">
                    Outline
                </button>
                <button className="border border-red-600 bg-red-500 text-white hover:bg-red-700 hover:scale-110 transition-all duration-300 py-2 px-3 rounded-md shadow-md">
                    Danger
                </button>
            </div>
            {/* second row of other buttons */}
            <div className="flex justify-cent3er gap-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" >success </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600" >secondary </button>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500" >warning </button>
            </div>

            {/* third row of different buttons */}
            <div className="flex justify-center gap-4">
                <button disabled className="bg-gray-500 text-white px-4 py-2 rounded-md opacity-70 cursor-not-allowed">Disabled</button>
                <button className="bg-blue-600 text-white px-4 py-2 flex items-center rounded-md gap-2">
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                    Loading...
                </button>
            </div>
        </div>
    );
}

export default ButtonVariants;
