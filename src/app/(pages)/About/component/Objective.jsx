import { Heading } from '@/components/ui/text'
import React from 'react'

function ObjectiveAboutpage() {
  return (
    <div>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="w-full flex flex-col justify-center items-center  text-center lg:mx-0">
            <Heading as="h1">
              Our objectives are precise and purpose-driven.
            </Heading>
            <p className="mt-6 text-base leading-7 text-gray-600 max-w-2xl">
              Our objectives focus on fostering academic excellence,
              facilitating meaningful research collaborations, and streamlining
              the process of knowledge sharing. Through expertly managed
              conferences, high-quality publications, and comprehensive
              educational support, we aim to empower scholars and researchers to
              achieve their fullest potential.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                30+
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">
                  {" "}
                  Conference
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Organized impactful academic conferences to connect scholars
                  globally and foster collaboration
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                1000+
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Article Published
                </p>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  Supported researchers in publishing high-quality,
                  peer-reviewed articles across various disciplines
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-cyan-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                75+
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  {" "}
                  Journal Tie-ups
                </p>
                <p className="mt-2 text-base leading-7 text-indigo-100">
                  Partnered with prestigious journals to provide enhanced
                  publishing opportunities for academic communities.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ObjectiveAboutpage
