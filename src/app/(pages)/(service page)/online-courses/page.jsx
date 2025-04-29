import { IconAccessible, IconBriefcase, IconToolsOff } from "@tabler/icons-react"
export const metadata = {
  title: "OnlineCourses | Zepresearch | International Journal Publication and Conference",
  description:
    "Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI.",
  keywords: ["research journal", "international publication", "academic conference", "data science courses"],
  openGraph: {
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    type: "website",
    url: "https://zepresearch.com/online-courses",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zep Research | International Journal Publication",
    description: "Leading platform for international journal publications and conferences",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://zepresearch.com/online-courses",
  },
}
function OnlineCourses() {
  const benefits = [
    {
      title: "Skill Enhancement",
      description: "Gain the skills needed to advance your research and academic career.",
      icon: <IconToolsOff />,
    },
    {
      title: "Career Growth",
      description:
        "Stay updated with the latest research trends and techniques, giving you a competitive edge in your field.",
      icon: <IconBriefcase />,
    },
    {
      title: "Accessible Anywhere",
      description: "Learn from anywhere in the world, without the constraints of location or time.",
      icon: <IconAccessible />,
    },
  ]

  const courses = [
    {
      id: 1,
      title: "Data Science & AI Masters 2025 - From Python To Gen AI",
      price: "₹5999",
      duration: "3-4 months at 10 hours a week",
      url: "https://www.zepresearch.com/courses/data-science-ai-masters-2025-from-python-to-gen-ai",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Data Analytics Masters - 2025 Edition",
      price: "₹4999",
      duration: "3-4 months at 10 hours a week",
      url: "https://www.zepresearch.com/courses/data-analytics-masters-2025-edition",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-24">
      <div >
        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
          

        

      
          </div>
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 font-JosefinSans text-center ">Online Courses</h2>
              <p className="text-gray-700 font-PTSerif">
                At Zep Research, we believe in empowering researchers and academics through continuous learning. Our
                Online Courses are designed to enhance your research skills, knowledge, and professional development
                from the comfort of your home.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-cyan-50 text-cyan-600  ">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-700 font-PTSerif">
                    <span className="font-bold font-JosefinSans">High-Quality Content</span> – Our courses are developed
                    by industry experts and leading academics, ensuring you receive the most relevant and up-to-date
                    knowledge.
                  </span>
                </div>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-cyan-50 text-cyan-600 ">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-700 font-PTSerif ">
                    <span className="font-bold font-JosefinSans">Flexible Learning</span> – With online access, you can
                    learn at your own pace, fitting your studies around your schedule.
                  </span>
                </div>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-cyan-50 text-cyan-600  ">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-700 font-PTSerif ">
                    <span className="font-bold font-JosefinSans">Comprehensive Curriculum</span> – We cover a wide range
                    of topics, from research methods and data analysis to academic writing and publication strategies.
                  </span>
                </div>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-cyan-50 text-cyan-600  ">
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="grow">
                  <span className="text-sm sm:text-base text-gray-700 font-PTSerif">
                    <span className="font-bold font-JosefinSans">Interactive Sessions</span> – Our courses offer
                    interactive features, including quizzes, assignments, and discussion forums, providing an engaging
                    learning experience
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-1 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800 font-JosefinSans text-center">
            Benefits of Our Online Courses
          </h2>

          <div>
            {/* <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726493773/rgnc87hzg8iulmzuxhpn.png" alt="imggif" /> */}
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-1 gap-8 md:gap-12">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-x-5">
                <div className="shrink-0 mt-1 size-6 text-cyan-600">{b.icon}</div>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800 font-JosefinSans ">{b.title}</h3>
                  <p className="mt-1 text-gray-600 font-PTSerif text-sm sm:text-base ">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Available Courses Section */}
      <div className="mt-16">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 font-JosefinSans">Available Courses</h2>
          <p className="mt-3 text-gray-700 font-PTSerif max-w-3xl mx-auto">
            Enroll in our industry-leading courses taught by experienced professionals and take your career to the next
            level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(14, 52, 84, 0.95), rgba(14, 52, 84, 0.8), rgba(14, 52, 84, 0.4))`,
            }}
          >
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
              <img
                className="w-full h-full object-fill"
                src={course.image || "/placeholder.svg"}
                alt=""
              />
            </div>
            
            <div className="flex h-full">
              {/* Left content */}
              <div className="w-2/3 p-6 flex flex-col justify-between text-white">
                <div>
                  <span className="inline-block px-3 py-1 bg-cyan-500 rounded-full text-xs font-medium mb-3">
                    Data Science & AI
                  </span>
                  <h3 className="text-2xl font-bold mb-2 font-JosefinSans">
                    {course.title || "Data Science & AI Masters 2025 - From Python To Gen AI"}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4 font-PTSerif">
                    Master Data Science and AI: Learn Python, EDA, Stats, SQL, Machine Learning, NLP, Deep Learning and Gen AI
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-JosefinSans">₹5999</span>
                  <a
                    href={course.url || "#"}
                    className="py-2 px-4 bg-cyan-500 rounded-md text-sm font-semibold hover:bg-cyan-600 transition"
                  >
                    Know More
                  </a>
                </div>
              </div>
              
              {/* Right content - Instructor */}
              <div className="w-1/3 flex flex-col items-center justify-center p-4">
                <div className="relative w-24 h-24 mb-2">
                  <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-30"></div>
                  <img
                    className="w-full h-full rounded-full object-cover p-1"
                    src="/instructor.webp"
                    alt="Dr.Satyajit Pattnaik"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                </div>
                <h4 className="text-white text-center font-semibold font-JosefinSans mt-1">
                  Dr.Satyajit Pattnaik
                </h4>
                <p className="text-gray-200 text-xs text-center font-PTSerif">
                  Lead Data/AI Consultant
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default OnlineCourses
