export default function Tab() {
    return (
        <div className="flex justify-center mx-auto my-6">
            <div className="isolate inline-flex rounded-md shadow-sm">
                <button
                    type="button"
                    className="relative inline-flex items-center rounded-l-md bg-yellow-300 px-3 sm:px-5 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                >
                    All
                </button>
                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center bg-white px-5 sm:px-8 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                >
                    Completed!
                </button>
                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 sm:px-5 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                >
                    Active
                </button>
            </div>
        </div>

    )
}
