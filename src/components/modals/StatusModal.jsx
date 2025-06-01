export default function StatusModal({ toggleShowStatusModal, status, message, error }) {
    return (
        <div>
            <div className="fixed inset-0 bg-gray-900/50 flex justify-center items-center">
                <div className="bg-gray-800 border border-white rounded-lg shadow-lg p-6 w-96 relative">
                    <div className="flex justify-between items-center mb-4">
                        {status === 'error' &&
                        <h3 className="text-lg font-semibold text-red-500">
                        Error
                        </h3>}
                        {status === 'success' &&
                        <h3 className="text-lg font-semibold text-green-300">
                        Success
                        </h3>}
                        <button onClick={toggleShowStatusModal} className="text-gray-200 absolute right-0 top-0 p-2 rounded-tr-lg hover:bg-gray-600 hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <p className="text-white">{message}</p>
                    {status === 'error' && error &&
                    <ul className="mt-2">
                        {error && Object.values(error).flat().map((err, index) => (
                            <li key={index} className="text-red-500 mb-1">{err}</li>
                        ))}
                    </ul>}
                </div>
            </div>
        </div>
    )
}