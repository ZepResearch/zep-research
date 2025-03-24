"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { getPocketBaseClient } from "@/lib/pocketbase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import { Camera, Pencil, Save, X } from "lucide-react"

export default function ProfileForm({ initialData }) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [avatarFile, setAvatarFile] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    name: initialData.username || "",
    username: initialData.username || "",
    email: initialData.email || "",
    researcher_type: initialData.researcher_type || "non_researcher",
    institution: initialData.institution || "",
    department: initialData.department || "",
    company: initialData.company || "",
    division: initialData.division || "",
    position: initialData.position || "",
    is_scientific: initialData.is_scientific || false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name, checked) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setAvatarFile(file)
      const previewUrl = URL.createObjectURL(file)
      setAvatarPreview(previewUrl)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const pb = getPocketBaseClient()
      const formDataToUpdate = { ...formData }

      // Update profile data
      await pb.collection("users").update(initialData.id, formDataToUpdate)

      // Update avatar if changed
      if (avatarFile) {
        const formData = new FormData()
        formData.append("avatar", avatarFile)
        await pb.collection("users").update(initialData.id, formData)
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      })

      setIsEditing(false)
      router.refresh()
    } catch (error) {
      toast({
        title: "Update failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Get avatar URL from PocketBase
  const getAvatarUrl = () => {
    if (avatarPreview) return avatarPreview

    const pb = getPocketBaseClient()
    if (initialData.avatar) {
      return pb.files.getUrl(initialData, initialData.avatar)
    }
    return null
  }

  const avatarUrl = getAvatarUrl()

  return (
    <Card className="border-none shadow-sm bg-slate-50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-medium">Profile</CardTitle>
        {!isEditing ? (
          <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)} className="gap-2">
            <Pencil className="h-4 w-4" />
            <span className="hidden sm:inline">Edit</span>
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>
              <X className="h-4 w-4" />
            </Button>
            <Button variant="default" size="sm" onClick={handleSubmit} disabled={isLoading} className="gap-2">
              <Save className="h-4 w-4" />
              <span className="hidden sm:inline">{isLoading ? "Saving..." : "Save"}</span>
            </Button>
          </div>
        )}
      </CardHeader>

      <CardContent>
        <form className="space-y-6">
          {/* Avatar Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-4">
              <div
                className={`relative h-24 w-24 overflow-hidden rounded-full border-2 ${isEditing ? "border-primary cursor-pointer" : "border-muted-foreground/20"}`}
                onClick={isEditing ? handleAvatarClick : undefined}
              >
                {avatarUrl ? (
                  <Image src={avatarUrl || "/placeholder.svg"} alt="Profile" fill className="object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted text-2xl font-semibold uppercase text-muted-foreground">
                    {initialData.username?.charAt(0) || "U"}
                  </div>
                )}
                {isEditing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white transition-opacity">
                    <Camera className="h-6 w-6" />
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                accept="image/*"
                className="hidden"
                disabled={!isEditing}
              />
            </div>
            <h2 className="text-lg font-medium">{initialData.username}</h2>
            <p className="text-sm text-muted-foreground">{initialData.email}</p>
          </div>

          <Separator />

          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="research">Research Details</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium">
                    Username
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="bg-background"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="research" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="researcher_type" className="text-sm font-medium">
                  Researcher Type
                </Label>
                <Select
                  disabled={!isEditing}
                  value={formData.researcher_type}
                  onValueChange={(value) => handleSelectChange("researcher_type", value)}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select researcher type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="non_researcher">Non-Researcher</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.researcher_type === "academic" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="institution" className="text-sm font-medium">
                      Institution
                    </Label>
                    <Input
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-sm font-medium">
                      Department
                    </Label>
                    <Input
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="bg-background"
                    />
                  </div>
                </div>
              )}

              {formData.researcher_type === "corporate" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="division" className="text-sm font-medium">
                      Division
                    </Label>
                    <Input
                      id="division"
                      name="division"
                      value={formData.division}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-sm font-medium">
                      Position
                    </Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="bg-background"
                    />
                  </div>
                </div>
              )}

              {formData.researcher_type === "non_researcher" && (
                <div className="flex items-center space-x-2 pt-2">
                  <Switch
                    id="is_scientific"
                    checked={formData.is_scientific}
                    onCheckedChange={(checked) => handleSwitchChange("is_scientific", checked)}
                    disabled={!isEditing}
                  />
                  <Label htmlFor="is_scientific" className="text-sm font-medium">
                    Scientific Background
                  </Label>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </form>
      </CardContent>
    </Card>
  )
}

