"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, MessageSquare, Upload, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import FeatureCard from "./components/feature-card"
import HeroAnimation from "./components/hero-animation"
import TestimonialCard from "./components/testimonial-card"
import DemoChatbot from "./components/demo-chatbot"
import logo from '../../../assets/logo.svg'
import Image from "next/image"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
                <Link href="/" title="Home">
                <Image src={logo} alt='logo' className="h-12 w-auto" />
              </Link>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
              >

                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                Revolutionize Your Research Process
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
              >
                Chat With Your <span className="text-cyan-400">Research Papers</span> Like Never Before
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl"
              >
                Upload your publications and research papers, then ask questions, get summaries, and extract insights
                through natural conversation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="relative group bg-gradient-to-tr from-cyan-400 to-blue-400"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Try It Now</span>
                  <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative"
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyatext-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Powerful Features for Researchers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Our AI-powered chatbot transforms how you interact with academic publications and research papers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Upload className="h-10 w-10 text-cyan-500" />}
              title="Easy PDF Upload"
              description="Seamlessly upload multiple research papers and publications with our intuitive interface."
              delay={0.1}
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-cyan-500" />}
              title="Natural Conversations"
              description="Ask questions in plain language and get accurate, contextual responses from your documents."
              delay={0.2}
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-cyan-500" />}
              title="Instant Insights"
              description="Extract key findings, methodologies, and conclusions without reading entire papers."
              delay={0.3}
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-cyan-500" />}
              title="Citation Support"
              description="Get properly formatted citations and references from your uploaded papers."
              delay={0.4}
            />
            <FeatureCard
              icon={
                <svg
                  className="h-10 w-10 text-cyan-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12H15M9 16H15M9 8H15M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Multi-Document Analysis"
              description="Compare findings across multiple papers and identify connections between research."
              delay={0.5}
            />
            <FeatureCard
              icon={
                <svg
                  className="h-10 w-10 text-cyan-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Research Assistance"
              description="Get suggestions for related papers and identify gaps in your literature review."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 rounded-3xl mx-12">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Three simple steps to transform your research experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 text-cyan-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-cyan-500">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Upload Your PDFs</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Simply drag and drop your research papers or publications into our secure platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 text-cyan-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-cyan-500">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">AI Processes Content</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our advanced AI analyzes and indexes the full text, figures, and references in your documents.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 text-cyan-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-cyan-500">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Chat and Discover</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Ask questions, request summaries, or explore connections between papers through natural conversation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">DummyChatbot</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Experience how our chatbot transforms research paper interaction
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 md:p-8 shadow-lg"
          >
            <DemoChatbot />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What Researchers Say</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Hear from academics and researchers who have transformed their workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="This tool has cut my literature review time in half. I can quickly extract key information from dozens of papers."
              author="Dr. Sarah Chen"
              role="Professor of Computer Science"
              delay={0.1}
            />
            <TestimonialCard
              quote="The ability to ask questions about specific methodologies across multiple papers has been invaluable for my research."
              author="James Wilson, PhD"
              role="Research Scientist"
              delay={0.2}
            />
            <TestimonialCard
              quote="As a graduate student, this tool has helped me understand complex papers and identify connections I would have missed."
              author="Maria Rodriguez"
              role="PhD Candidate"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-tr from-cyan-400 to-blue-400 text-white mx-12 my-8 rounded-3xl">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Research Process?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of researchers who are saving time and gaining deeper insights with our PDF chatbot.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Button size="lg" variant="secondary" className="text-cyan-500">
                Get Started For Free
              </Button>
            </motion.div>
            <p className="mt-4 text-sm opacity-80">No credit card required. Free plan includes 5 PDF uploads.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
            <Link href="/" title="Home">
                <Image src={logo} alt='logo' className="h-12 w-auto my-4" />
              </Link>
              <p className="mb-4">
                Transforming how researchers interact with academic publications through AI-powered conversations.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p>© 2025 Research Paper Chatbot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

