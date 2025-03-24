// src/components/register/ResearcherDetailsStep.jsx
export default function ResearcherDetailsStep({ researcherType, formData, onChange, onSubmit, onBack }) {
    return (
      <div className="py-4">
        <h2 className="text-xl font-semibold mb-6 text-center">
          {researcherType === 'academic' ? 'Academic Details' : 
           researcherType === 'corporate' ? 'Corporate Details' : 'Medical Details'}
        </h2>
        
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-4">
          {/* Academic or Medical Fields */}
          {(researcherType === 'academic' || researcherType === 'medical') && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={onChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={onChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
            </>
          )}
  
          {/* Medical or Corporate Fields */}
          {(researcherType === 'medical' || researcherType === 'corporate') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
          )}
  
          {/* Corporate-only Fields */}
          {researcherType === 'corporate' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={onChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Division</label>
                <input
                  type="text"
                  name="division"
                  value={formData.division}
                  onChange={onChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
            </>
          )}
  
          <div className="flex justify-between pt-4">
            <button 
              type="button" 
              onClick={onBack}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Back
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }