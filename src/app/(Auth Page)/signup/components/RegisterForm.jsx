// src/components/register/RegisterForm.jsx
"use client";

import { useState } from 'react';
import Stepper from './Stepper';
import ResearcherTypeStep from './ResearcherTypeStep';
import ResearcherDetailsStep from './ResearcherDetailsStep';
import NonResearcherStep from './NonResearcherStep';
import AccountDetailsStep from './AccountDetailsStep';
import { useRouter } from 'next/navigation';
import { getPocketBaseClient } from '@/lib/pocketbase';

export default function RegisterForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    researcher_type: '',
    institution: '',
    department: '',
    company: '',
    division: '',
    position: '',
    is_scientific: null,
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const steps = [
    "Type",
    "Details",
    "Account"
  ];

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleResearcherTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      researcher_type: type
    }));
    handleNext();
  };

  const handleScientificWorkChange = (isScientific) => {
    setFormData(prev => ({
      ...prev,
      is_scientific: isScientific
    }));
    handleNext();
  };

  const handleDetailsSubmit = () => {
    handleNext();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFieldErrors({});

    try {
      const pb = getPocketBaseClient();
      const data = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        passwordConfirm: formData.passwordConfirm,
        researcher_type: formData.researcher_type,
        name: formData.username, // Using username as name by default
      };

      // Add conditional fields based on researcher type
      if (formData.researcher_type === 'academic') {
        data.institution = formData.institution;
        data.department = formData.department;
      } else if (formData.researcher_type === 'corporate') {
        data.company = formData.company;
        data.division = formData.division;
        data.position = formData.position;
      } else if (formData.researcher_type === 'medical') {
        data.institution = formData.institution;
        data.department = formData.department;
        data.position = formData.position;
      } else if (formData.researcher_type === 'non_researcher') {
        data.is_scientific = formData.is_scientific;
      }

      // Create the user record
      const createdUser = await pb.collection('users').create(data);
      
      // Auto login after register
      const authData = await pb.collection('users').authWithPassword(
        formData.username,
        formData.password
      );
      
      // Auth data will be automatically stored in localStorage due to our setup in getPocketBaseClient
      console.log("User authenticated:", authData.record);
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      console.error('Registration error:', err);
      
      // Check if there are field-specific errors in the data property
      if (err.data) {
        setFieldErrors(err.data);
        
        // Create a detailed error message from all field errors
        const errorMessages = [];
        Object.keys(err.data).forEach(field => {
          if (err.data[field].message) {
            errorMessages.push(`${field}: ${err.data[field].message}`);
          }
        });
        
        if (errorMessages.length > 0) {
          // Join all field error messages with a separator
          setError(errorMessages.join(' | '));
        } else {
          setError(err.message || 'Failed to create record.');
        }
      } else {
        setError(err.message || 'Failed to register. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <Stepper steps={steps} currentStep={currentStep} />
      
      {currentStep === 0 && (
        <ResearcherTypeStep onSelect={handleResearcherTypeChange} />
      )}
      
      {currentStep === 1 && (
        formData.researcher_type === 'non_researcher' ? (
          <NonResearcherStep onSelect={handleScientificWorkChange} />
        ) : (
          <ResearcherDetailsStep 
            researcherType={formData.researcher_type}
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleDetailsSubmit}
            onBack={handleBack}
          />
        )
      )}
      
      {currentStep === 2 && (
        <AccountDetailsStep 
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
          onBack={handleBack}
          loading={loading}
          error={error}
          fieldErrors={fieldErrors}
        />
      )}
    </div>
  );
}