// src/components/register/Stepper.jsx
export default function Stepper({ steps, currentStep }) {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                index < currentStep 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : index === currentStep 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-gray-300 text-gray-300'
              }`}>
                {index < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span className={`mt-2 text-xs ${
                index <= currentStep ? 'text-blue-600 font-medium' : 'text-gray-500'
              }`}>
                {step}
              </span>
            </div>
          ))}
        </div>
        
        <div className="relative flex items-center justify-between mt-2">
          {steps.map((_, index) => {
            if (index === steps.length - 1) return null;
            return (
              <div 
                key={index} 
                className={`flex-1 h-0.5 ${index < currentStep ? 'bg-blue-600' : 'bg-gray-300'}`} 
              />
            );
          })}
        </div>
      </div>
    );
  }