function ButtonVariants() {
    return (
        <div className="text-center space-y-6 mt-10">
            {/* Start */}
            <h2 className="text-white text-2xl font-semibold">Button Variants</h2>	
            <div className="flex gap-4 justify-center mt-10">
                <button className="mx-2 bg-blue-600 text-white px-4 py-2 rounded-md">
                    primary
                </button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md">
                    Outline
                </button>
                <button className="border bg-red-500 text-white hover:bg-red-700 hover:scale-110 transition-all duration-300 py-2 px-3 rounded-md shadow-md">
                    Danger
                </button>
            </div>
        </div>
    );
}

export default ButtonVariants;
