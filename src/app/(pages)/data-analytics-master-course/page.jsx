"use client"

import Image from "next/image"
import { Check, Award, BookOpen, Briefcase, Code, Database, BarChart, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import RegistrationDialog from "../(Resourse & Event)/courses/[slug]/component/DialogBox"
export default function Home() {

      const [isDialogOpen, setIsDialogOpen] = useState(false)
    
      const handlePayment = (method) => {
        console.log(`Processing payment via ${method}`)
        setIsDialogOpen(false)
      }
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className=" py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-10 md:mb-0 flex flex-col">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Data Analytics Masters
                <span className="text-blue-500 block mt-2">2025 Edition</span>
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Master the art of data analytics with industry-relevant skills and hands-on projects
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-6">
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-gray-500 line-through">₹4,999</p>
                    <p className="text-3xl font-bold text-blue-500">₹3,999</p>
                  </div>
                  <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    Special offer today only!
                  </div>
                </div>
              </div>
              <button 
               onClick={() => setIsDialogOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
                Enroll Now
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1714038211/sbihc9eewmn1hnuufxlw.gif"
                  alt="Data Analytics Course"
                  fill
                  className="object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative h-64 w-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-blue-100"></div>
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1709556612/cnkb4zr9felsyt4mywhr.png"
                    alt="Dr. Satyajit Pattnaik"
                    width={250}
                    height={250}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Instructor</h2>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Dr. Satyajit Pattnaik</h3>
              <p className="text-gray-700 mb-2">Lead Data/AI Consultant</p>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">13+ years experience</span> working in Data Analytics and Data Sciences
                  across different industry verticals including telecom, cyber security, insurance, e-commerce etc.
                </p>
                <p className="text-gray-700 mb-2">Expertised on BI tech stack including Power BI & Tableau.</p>
                <p className="text-gray-700 mb-2">
                  Analytic experience includes ETL, descriptive and predictive data analysis, data visualization​,
                  Machine Learning & Deep Learning
                </p>
                <p className="text-gray-700">
                  Over 8+ years of training & teaching experience into Data Science & Analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LearningCard
              id="1"
              icon={<Code className="h-8 w-8 text-blue-600" />}
              description="Discover how to effectively handle, analyze, and visualize data using Python and its robust libraries, including Pandas, NumPy, Matplotlib, and Seaborn."
            />
            <LearningCard
              id="2"
              icon={<BarChart className="h-8 w-8 text-blue-600" />}
              description="Learn how to conduct Exploratory Data Analysis (EDA) to reveal insights, detect patterns, and prepare data for further analysis through effective visualization."
            />
            <LearningCard
              id="3"
              icon={<Database className="h-8 w-8 text-blue-600" />}
              description="Acquire the skills to extract, manipulate, and aggregate data using SQL. You will utilize MySQL to handle complex databases and execute sophisticated queries."
            />
            <LearningCard
              id="4"
              icon={<BarChart className="h-8 w-8 text-blue-600" />}
              description="Master the art of creating interactive and insightful dashboards using Power BI and Tableau. You'll apply DAX for complex calculations in Power BI and integrate."
            />
            <LearningCard
              id="5"
              icon={<BookOpen className="h-8 w-8 text-blue-600" />}
              description="Explore the fundamentals of machine learning, including classification, regression, and time series analysis, to enhance your predictive analytics skills."
            />
            <LearningCard
              id="6"
              icon={<Database className="h-8 w-8 text-blue-600" />}
              description="Learn the fundamentals of ETL processes to effectively extract, transform, and load data for analysis."
            />
          </div>
        </div>
      </section>

      {/* Job Roles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Job Roles After Course Completion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <JobRoleCard title="Data Analyst" />
            <JobRoleCard title="BI Analyst" />
            <JobRoleCard title="Power BI Developer" />
            <JobRoleCard title="Tableau Developer" />
            <JobRoleCard title="Business Analyst" />
          </div>
        </div>
      </section>

      {/* Skills You'll Gain Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills You'll Gain</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <SkillBadge name="Python" />
            <SkillBadge name="SQL" />
            <SkillBadge name="Statistics" />
            <SkillBadge name="Power BI" />
            <SkillBadge name="Tableau" />
            <SkillBadge name="Predictive AI" />
            <SkillBadge name="ETL" />
            <SkillBadge name="Pandas" />
            <SkillBadge name="Numpy" />
            <SkillBadge name="Data Analysis" />
          </div>
        </div>
      </section>

      {/* Course Syllabus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Course Syllabus</h2>
          <div className="space-y-4">
            <SyllabusAccordion
              title="Introduction to Data Analytics"
              items={[
                "What is Data Analytics",
                "Importance of Data Analytics",
                "Types of Data",
                "Types of Statistical Analysis",
                "Steps to obtain a Data Analytics solution",
                "Business Understanding",
                "Data Understanding",
                "Data Collection",
                "Data Preparation",
                "Data Modelling",
                "Deployment",
                "Use Case",
              ]}
            />
            <SyllabusAccordion
              title="Python for Data Analytics"
              items={[
                "Course Contents",
                "Python Introduction",
                "Variables & Keywords",
                "Datatypes & Operators",
                "Data Structures - Lists",
                "Data Structures - Tuples",
                "Data Structures - Sets",
                "Data Structures - Dictionary",
                "Loops & Iteration",
                "Functions in Python",
                "File Handling",
                "Map Reduce Filter",
                "OOPS Concepts",
                "Control Structures in Python",
                "NumPy",
                "Pandas",
                "Data Visualization",
                "Matplotlib",
                "Seaborn",
                "Python Quiz",
              ]}
            />
            <SyllabusAccordion
              title="Exploratory Data Analysis"
              items={[
                "Course Contents",
                "Agenda",
                "Data Analytics/Science Process",
                "What is EDA",
                "Visualization",
                "Steps involved in EDA (Data Sourcing)",
                "Steps involved in EDA (Data Cleaning)",
                "Handle Missing Values (Theory)",
                "Handle Missing Values (Code)",
                "Feature Scaling",
                "Feature Scaling (Standardization)",
                "Feature Scaling (Normalization)",
                "Feature Scaling (Code)",
                "Outlier Treatment (Theory)",
                "Outlier Treatment (Code)",
                "Invalid Data",
                "Types of Data",
                "Types of Analysis",
                "Univariate Analysis",
                "Bivariate Analysis",
                "Multivariate Analysis",
                "Numerical Analysis",
                "Analysis (Code)",
                "Derived Metrics",
                "Feature Binning (Theory)",
                "Feature Binning (Theory)",
                "Feature Binning (Code)",
                "Feature Encoding",
                "Feature Encoding Detailed",
                "Feature Encoding (Code)",
                "Case Study",
                "Data Exploration (Case Study)",
                "Data Cleaning (Case Study)",
                "Univariate Analysis (Case Study)",
                "Bivariate Analysis (Case Study)",
                "Bivariate Analysis (Case Study)",
                "EDA Report (Case Study)",
                "EDA Quiz",
              ]}
            />
            <SyllabusAccordion
              title="Business Statistics"
              items={[
                "Course Contents",
                "Intro to Stats",
                "Chapter 1 - Agenda",
                "Descriptive Stats",
                "Inferential Stats",
                "Qualitative Data",
                "Quantitative Data",
                "Chapter 2 - Agenda",
                "Population vs Sample",
                "Why sampling is important?",
                "Types of sampling",
                "Probability Sampling",
                "Cluster Random Sampling",
                "Non probability sampling",
                "Chapter 3 - Agenda",
                "Measures of Central Tendency",
                "Mean",
                "Median",
                "Mode",
                "Measures of Dispersion",
                "Range",
                "IQR",
                "Mean Deviation",
                "Variance & Standard Deviation",
                "Why n-1 and not n",
                "Chapter 4 - Agenda",
                "Probability",
                "Addition Rule",
                "Independent Events",
                "Cumulative Probability",
                "Conditional Probability",
                "Bayes Theorem Part 1",
                "Bayes Theorem Part 2",
                "Chapter 5 - Agenda",
                "Uniform Distribution",
                "Binomial Distribution",
                "Poisson Distribution",
                "Normal Distribution Part 1",
                "Normal Distribution Part 2",
                "Skewness",
                "Kurtosis",
                "Calculating Probability with Z-Score",
                "Z-Score Calculation Table",
                "Example",
                "Chapter 6 Agenda",
                "Correlation vs Covariance",
                "Covariance",
                "Correlation",
                "Chapter 7 - Agenda",
                "Hypothesis Testing",
                "Tailed Tests",
                "What is p-value?",
                "Types of Tests",
                "T Test",
                "Z Test",
                "ANOVA",
                "Chi Square",
                "Correlation",
                "Statistics Quiz",
              ]}
            />
            <SyllabusAccordion
              title="SQL for Data Analysis"
              items={[
                "Course Contents",
                "Data Architecture - File server vs Client server",
                "Installation of MySQL Workbench",
                "Introduction to SQL",
                "Constraints in SQL",
                "Table Basics - DDLs",
                "Table Basics - DQLs",
                "Table Basics - DMLs",
                "Joins in SQL",
                "Data Import & Export",
                "Aggregation Functions",
                "String Functions",
                "Date Time Functions",
                "Regular Expressions",
                "Nested Queries",
                "Views",
                "Stored Procedures",
                "Windows Function",
                "SQL-Python connectivity",
                "SQL Quiz",
              ]}
            />
            <SyllabusAccordion
              title="Microsoft Excel"
              items={[
                "Course Contents",
                "Pre-defined Functions",
                "Datetime Functions",
                "String Functions",
                "Mathematical Functions",
                "Lookup (Hlookup,Vlookup)",
                "Logical & Error Functions",
                "Statistical Functions",
                "Images in Excel",
                "Excel Formatting",
                "Custom Formatting",
                "Conditional Formatting",
                "Charts in Excel",
                "Data Analysis using Excel",
                "Pivot Tables",
                "Dashboarding in Excel",
                "Others",
                "Excel Quiz",
              ]}
            />
            <SyllabusAccordion
              title="Power BI"
              items={[
                "Course Contents",
                "Introduction",
                "Introduction to Power BI",
                "Life Hack to get Power BI Pro [2022]",
                "Power BI Desktop",
                "Power BI Services",
                "Power Query Editor",
                "Data Profiling",
                "PBI Group by",
                "PBI Applied Steps",
                "Append vs Merge",
                "PBI Visuals",
                "Power BI Charts",
                "Introduction to DAX",
                "Implicit Measures",
                "DAX Formula",
                "Basic DAX Functions",
                "Date Functions",
                "CALENDAR Functions",
                "Contexts Row vs Filter",
                "CALCULATE & FILTER Functions",
                "IF ELSE Conditions",
                "Time Intelligence Functions",
                "X vs Non X Functions",
                "Tool tips , Drill Throughs",
                "Relationships",
                "KPIs",
                "Administration in Power BI",
                "Security in Power BI",
                "PBI Best Practices",
                "Formatting",
                "EDA",
                "Power BI Quiz",
              ]}
            />
            <SyllabusAccordion
              title="Tableau"
              items={[
                "Course Contents",
                "What is Data Visualization",
                "BI Process",
                "About Tableau - What is Tableau?",
                "About Tableau - how to use Tableau?",
                "About Tableau - Features of Tableau",
                "Tableau Architecture",
                "Tableau vs Power BI",
                "Tableau Desktop",
                "Relationships, Joins & Unions",
                "Sets in Tableau",
                "Groups in Tableau",
                "Hierarchies in Tableau",
                "Filters in Tableau",
                "Highlighting",
                "Device Designer",
                "Parameters",
                "Data Blending & Mark Size",
                "Transparency",
                "Date Aggregation",
                "Generated Fields",
                "Discrete vs Continuous",
                "Charts in Tableau",
                "Pivot Tables in Tableau",
                "LOD Expressions",
                "Calculated Fields",
                "Formatting",
                "Forecasting in Tableau",
                "Analytics in Tableau",
                "Dashboarding",
                "Tableau Quiz",
              ]}
            />
            <SyllabusAccordion
              title="Predictive Analytics"
              items={[
                "Course Contents",
                "Introduction to PA",
                "Predictive Analytics Process",
                "How does the Model Work?",
                "Why Predictive Modelling?",
                "Applications of Predictive Modelling",
                "What is Machine Learning",
                "Types of Machine Learning",
                "Classification",
                "k-nearest neighbors (Theory)",
                "k-NN Example (Excel)",
                "Classification Practicals Part 1",
                "k-nearest neighbors (Code)",
                "Decision Trees (Theory)",
                "Decision Tree (Code)",
                "Random Forests",
                "Random Forests (Code)",
                "Boosting Algorithms",
                "Boosting (Code)",
                "Regression (Theory)",
                "Regression(Code)",
                "Clustering (Theory)",
                "Clustering (Code)",
                "Time Series Forecasting (Theory)",
                "Time Series Forecasting (Code)",
                "Predictive Analytics Quiz",
              ]}
            />
            <SyllabusAccordion
              title="ETL & Data Warehousing"
              items={[
                "Course Contents",
                "Introduction to ETL & Data Warehouse",
                "What is ETL?",
                "ETL Tools & Azure Data Factory Architecture",
                "What is Data Warehouse?",
                "Benefits of Data Warehousing",
                "Data Warehouse Structure",
                "Why do we need Staging environment?",
                "What are Data Marts?",
                "Data Lakes",
                "Data Lake vs Data Warehouse",
                "Elements of Data Lake",
                "ETL & Data Warehousing Quiz",
              ]}
            />
            <SyllabusAccordion
              title="Interview Guides"
              items={["Python", "Statistics", "Power BI", "Tableau", "SQL"]}
            />
            <SyllabusAccordion
              title="Capstone Project"
              items={[
                "Power BI - Live Project",
                "Tableau - Live Project",
                "Financial Dashboard",
                "Sales Analytics",
                "Cyber Security Breaches",
                "Telecom Analytics",
                "HR Analytics",
              ]}
            />
            <SyllabusAccordion
              title="Final Assignment"
              items={[
                "This is a graded assignment, a score of 70% and above guarantees you a course completion certificate, and a score of 80% and above guarantees an internship opportunity from Zep or their partner companies",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1743675173/e1l1s2tzajdq9foqriwq.png"
                  alt="Course Certificate"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Certified</h2>
              <p className="text-lg text-gray-700 mb-6">
                Upon successful completion of the course, you will receive a professional certificate validating your
                skills in Data Analytics. This certificate can be shared on LinkedIn and other professional platforms to
                enhance your career prospects.
              </p>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <p className="text-gray-700">Recognized industry certification</p>
              </div>
              <div className="flex items-center mb-4">
                <Check className="h-6 w-6 text-blue-600 mr-2" />
                <p className="text-gray-700">Score 70% or above to earn your certificate</p>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                <p className="text-gray-700">Score 80% or above for internship opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our Data Analytics Masters course today and gain the skills needed to excel in the data-driven world.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="mb-4 sm:mb-0 sm:mr-8">
                <p className="text-gray-500 line-through">₹4,999</p>
                <p className="text-4xl font-bold text-blue-600">₹3,999</p>
              </div>
              <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                Special discount today only!
              </div>
            </div>
          </div>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-lg transition duration-300 text-xl shadow-lg">
            Enroll Now
          </button>
        </div>
      </section> */}
      <RegistrationDialog
              isOpen={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              title={"Data Analytics Masters 2025 Edition"}
              price={3999}
              onPayment={handlePayment}
            />
    </main>
  )
}

function LearningCard({ id, icon, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="mb-4">{icon}</div>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

function JobRoleCard({ title }) {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
      {/* <Briefcase className="h-10 w-10 text-blue-600 mx-auto mb-4" /> */}
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    </div>
  )
}

function SkillBadge({ name }) {
  return (
    <div className="bg-white py-3 px-4 rounded-full shadow-sm border border-gray-200 text-center hover:shadow-md transition duration-300">
      <span className="text-gray-800 font-medium">{name}</span>
    </div>
  )
}

function SyllabusAccordion({ title, items }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

