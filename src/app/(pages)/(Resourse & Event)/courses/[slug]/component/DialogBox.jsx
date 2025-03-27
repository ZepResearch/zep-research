"use client"

import { useState } from "react"

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { motion, AnimatePresence } from "framer-motion"
import { X, CreditCard, User, Mail, Phone, MapPin, Building, Flag } from "lucide-react"

export default function RegistrationDialog({
  isOpen = false,
  onClose = () => {},
  title = "Registration",
  price = "",
  currency = "INR",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value })
  }

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`
  }

  const paymentCCAvenue = async () => {
    try {
      setIsLoading(true)
      const host = process.env.NEXT_PUBLIC_APP_URL 

      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        amount: price,
        currency: currency,
        redirect_url: `${host}/api/ccavenue/handle`,
        cancel_url: `${host}/api/ccavenue/handle`,
        billing_email: formData.email,
        billing_name: formData.name,
        billing_address: formData.address,
        billing_city: formData.city,
        billing_state: formData.state,
        billing_zip: formData.zip,
        billing_country: formData.country,
        billing_tel: formData.phone,
        language: "EN",
      }

      // First, get the encrypted order from your backend
      const response = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      if (!response.ok) {
        throw new Error("Failed to encrypt order data")
      }

      const { encRequest } = await response.json()

      // Create form and submit
      const form = document.createElement("form")
      form.method = "POST"
      form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"

      // Add hidden fields
      const fields = {
        encRequest,
        access_code: process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE,
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
      }

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = key
        input.value = value
        form.appendChild(input)
      })

      document.body.appendChild(form)
      form.submit()
    } catch (error) {
      console.error("Payment initiation failed:", error)
      alert("Failed to initiate payment. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.zip || !formData.country) {
      alert("Please fill in all required fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address")
      return
    }

    paymentCCAvenue()
  }

  const inputclasses =
    "mt-1 block w-full py-1.5 px-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-all duration-200 ease-in-out border-2"
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1"

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className=" px-4 py-4 sm:px-6">
                <h3 className="text-2xl font-bold leading-6  mb-2">{title}</h3>
                <p className="">Fill in your details to complete the registration for</p>
              </div>
              <hr />
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 [&>input]:bg-slate-100">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className={labelClasses}>
                      <User className="inline-block w-4 h-4 mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputclasses}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className={labelClasses}>
                      <Mail className="inline-block w-4 h-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputclasses}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="phone" className={labelClasses}>
                      <Phone className="inline-block w-4 h-4 mr-2" />
                      Phone
                    </label>
                    <PhoneInput
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputclass="!rounded-md !border-0 !shadow-sm !ring-1 !ring-inset !ring-gray-300"
                      className="w-full  px-2 border-2  [&>input]:py-1 [&>input]:border-l-2 "
                      required
                    />
                    {/* <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.}
                        onChange={}
                        className={inputclasses}
                      /> */}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="address" className={labelClasses}>
                      <MapPin className="inline-block w-4 h-4 mr-2" />
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={inputclasses}
                    />
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="city" className={labelClasses}>
                        <Building className="inline-block w-4 h-4 mr-2" />
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={inputclasses}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="state" className={labelClasses}>
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={inputclasses}
                      />
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label htmlFor="zip" className={labelClasses}>
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        className={inputclasses}
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label htmlFor="country" className={labelClasses}>
                        <Flag className="inline-block w-4 h-4 mr-2" />
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={inputclasses}
                        required
                      />
                    </motion.div>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isLoading}
                    className="inline-flex w-full justify-center rounded-md border py-2 drop-shadow-sm px-4 text-base font-medium shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm transition-all duration-200 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    <CreditCard className="mr-2" />
                    {isLoading ? "Processing..." : `Pay Now ( ₹ ${price} )`}
                  </motion.button>
                </form>
              </div>
              <div className="bg-slate-50 px-4 py-3 sm:flex sm:flex-row justify-end sm:px-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-all duration-200 ease-in-out"
                >
                  Cancel
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute right-2 top-2 transition-colors duration-200"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

