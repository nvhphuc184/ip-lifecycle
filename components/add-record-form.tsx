"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, Upload, Plus } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

interface AddRecordFormProps {
  onBack: () => void
}

export function AddRecordForm({ onBack }: AddRecordFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
    inventor: "",
    assignee: "",
    jurisdiction: "",
    priority: "",
    filingDate: "",
    applicationNumber: ""
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    onBack()
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">IP Type</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select IP type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="patent">Patent</SelectItem>
                      <SelectItem value="trademark">Trademark</SelectItem>
                      <SelectItem value="design">Industrial Design</SelectItem>
                      <SelectItem value="copyright">Copyright</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Enter the title of your IP"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Provide a detailed description"
                rows={4}
              />
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Ownership & Legal Details</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="inventor">Inventor(s)</Label>
                  <Input
                    id="inventor"
                    value={formData.inventor}
                    onChange={(e) => setFormData({...formData, inventor: e.target.value})}
                    placeholder="Enter inventor names"
                  />
                </div>
                
                <div>
                  <Label htmlFor="assignee">Assignee</Label>
                  <Input
                    id="assignee"
                    value={formData.assignee}
                    onChange={(e) => setFormData({...formData, assignee: e.target.value})}
                    placeholder="Enter assignee name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="jurisdiction">Jurisdiction</Label>
                    <Select value={formData.jurisdiction} onValueChange={(value) => setFormData({...formData, jurisdiction: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select jurisdiction" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="eu">European Union</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="cn">China</SelectItem>
                        <SelectItem value="multiple">Multiple</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="filingDate">Filing Date</Label>
                    <Input
                      id="filingDate"
                      type="date"
                      value={formData.filingDate}
                      onChange={(e) => setFormData({...formData, filingDate: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="applicationNumber">Application Number (if available)</Label>
                  <Input
                    id="applicationNumber"
                    value={formData.applicationNumber}
                    onChange={(e) => setFormData({...formData, applicationNumber: e.target.value})}
                    placeholder="Enter application number"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Document Upload</h2>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">Drag and drop files here, or click to browse</p>
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Choose Files
                  </Button>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p>Supported formats: PDF, DOC, DOCX, JPG, PNG</p>
                  <p>Maximum file size: 10MB per file</p>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Type:</span> {formData.type}
                      </div>
                      <div>
                        <span className="font-medium">Priority:</span> {formData.priority}
                      </div>
                      <div>
                        <span className="font-medium">Title:</span> {formData.title}
                      </div>
                      <div>
                        <span className="font-medium">Jurisdiction:</span> {formData.jurisdiction}
                      </div>
                      <div>
                        <span className="font-medium">Inventor:</span> {formData.inventor}
                      </div>
                      <div>
                        <span className="font-medium">Filing Date:</span> {formData.filingDate}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Records
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Add New IP Record</h1>
            <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-2xl">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Form */}
      <div className="max-w-2xl">
        <Card>
          <CardContent className="p-6">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          {currentStep === totalSteps ? (
            <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
              Submit Record
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
