"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Toaster } from "react-hot-toast"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import {
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Users,
  BookOpen,
  Building,
  Upload,
  MessageSquare,
  ArrowRight,
  Loader2,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function PaperSubmissionForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)

      // Add phone number to form data
      if (phoneNumber) {
        formData.set("phone_number", phoneNumber)
      }

      // Add file if selected
      if (selectedFile) {
        formData.set("file", selectedFile)
      }

      const response = await fetch("/api/submit-paper", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit paper")
      }

      // Show success toast
      toast({
        title: "Success!",
        description: "Your paper has been submitted successfully.",
        variant: "default",
      })

      // Redirect to success page
      router.push("/journal/success")
    } catch (err) {
      setError(err.message || "An error occurred while submitting your paper")
      toast({
        title: "Error",
        description: err.message || "An error occurred while submitting your paper",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-24 px-4 sm:px-6 lg:px-8 ">
      <Toaster position="top-right" />

      <Card className="max-w-4xl mx-auto shadow-lg border-0 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>

        <CardHeader className="space-y-1 pb-8 pt-6 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Journal Submission
          </CardTitle>
          <CardDescription className="text-muted-foreground max-w-md mx-auto">
            Submit your research paper for review and publication in our academic journal
          </CardDescription>
        </CardHeader>

        {error && (
          <div className="mx-6 mb-6 p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-md">
            {error}
          </div>
        )}

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium border-b pb-2">Author Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Author Name */}
                <div className="space-y-2">
                  <Label htmlFor="author" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>Author Name</span>
                  </Label>
                  <Input
                    type="text"
                    id="author"
                    name="author"
                    required
                    placeholder="Enter your full name"
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>Email Address</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone_number" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>Phone Number</span>
                  </Label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    required
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label htmlFor="country" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Country</span>
                  </Label>
                  <Input
                    type="text"
                    id="country"
                    name="country"
                    required
                    placeholder="Your country of residence"
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium border-b pb-2">Paper Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Co-Author */}
                <div className="space-y-2">
                  <Label htmlFor="co_author" className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Co-Author(s)</span>
                  </Label>
                  <Input
                    type="text"
                    id="co_author"
                    name="co_author"
                    required
                    placeholder="Separate multiple authors with commas"
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Paper Title */}
                <div className="space-y-2">
                  <Label htmlFor="paper_title" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>Paper Title</span>
                  </Label>
                  <Input
                    type="text"
                    id="paper_title"
                    name="paper_title"
                    required
                    placeholder="Enter the title of your paper"
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <Label htmlFor="department" className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>Department</span>
                  </Label>
                  <Input
                    type="text"
                    id="department"
                    name="department"
                    required
                    placeholder="Your academic department"
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Organization */}
                <div className="space-y-2">
                  <Label htmlFor="organization" className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>Organization</span>
                  </Label>
                  <Input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    placeholder="Your university or institution"
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium border-b pb-2">Submission</h3>

              <div className="space-y-6">
                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file" className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-muted-foreground" />
                    <span>Upload Paper</span>
                  </Label>
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center transition-colors hover:bg-muted/5">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      required
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <label htmlFor="file" className="cursor-pointer flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                      </span>
                      <span className="text-xs text-muted-foreground">PDF, DOC, or DOCX (max 10MB)</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span>Additional Message</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Any additional information or comments about your submission"
                    className="resize-none transition-all duration-200 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
              </div>
            </div>

            <CardFooter className="flex justify-end px-0 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-all text-white w-full sm:w-auto"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Paper
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
