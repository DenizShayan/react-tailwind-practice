function ButtonVariants() {
    return (
        <div className="flex gap-4 justify-center mt-10">
            <button className="mx-2 bg-blue-600 text-white px-4 py-2 rounded-md">
                primary
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md">
                Outline
            </button>
            <button className="border bg-red-500 text-white hover:bg-red-700 px-3 hover:scale-110">
                Danger
            </button>
        </div>
    );
}

export default ButtonVariants;