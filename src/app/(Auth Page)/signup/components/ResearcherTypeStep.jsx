// src/components/register/ResearcherTypeStep.jsx
export default function ResearcherTypeStep({ onSelect }) {
    return (
      <div className="py-4">
        <h2 className="text-xl font-semibold mb-6 text-center">What type of researcher are you?</h2>
        
        <div className="space-y-4">
          <button 
            onClick={() => onSelect('academic')}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center"
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium">Academic or student</h3>
              <p className="text-sm text-gray-500">University students and faculty, institute members, and independent researchers</p>
            </div>
          </button>
          
          <button 
            onClick={() => onSelect('corporate')}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center"
          >
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium">Corporate, government, or NGO</h3>
              <p className="text-sm text-gray-500">Technology or product developers, R&D specialists, and government or NGO employees in scientific roles</p>
            </div>
          </button>
          
          <button 
            onClick={() => onSelect('medical')}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center"
          >
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium">Medical</h3>
              <p className="text-sm text-gray-500">Health care professionals, including clinical researchers</p>
            </div>
          </button>
          
          <button 
            onClick={() => onSelect('non_researcher')}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 flex items-center"
          >
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-medium">Not a researcher</h3>
              <p className="text-sm text-gray-500">Journalists, citizen scientists, or anyone interested in reading and discovering research</p>
            </div>
          </button>
        </div>
      </div>
    );
  }