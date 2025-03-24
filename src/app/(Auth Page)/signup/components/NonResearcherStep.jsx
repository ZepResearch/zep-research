// src/components/register/NonResearcherStep.jsx
export default function NonResearcherStep({ onSelect }) {
    return (
      <div className="py-4">
        <h2 className="text-xl font-semibold mb-6 text-center">Is your work scientific in nature?</h2>
        
        <div className="space-y-4">
          <button 
            onClick={() => onSelect(true)}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center"
          >
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium">Yes, my work is scientific</h3>
              <p className="text-sm text-gray-500">I work with scientific concepts or methodologies</p>
            </div>
          </button>
          
          <button 
            onClick={() => onSelect(false)}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center"
          >
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium">No, my work is not scientific</h3>
              <p className="text-sm text-gray-500">I'm interested in science but don't work directly with it</p>
            </div>
          </button>
        </div>
      </div>
    );
  }