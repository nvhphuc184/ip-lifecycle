"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Upload, FileText, Calendar, Clock, Shield, AlertCircle, CheckCircle } from 'lucide-react'

interface RecordDetailViewProps {
  recordId: string | null
  onBack: () => void
}

export function RecordDetailView({ recordId, onBack }: RecordDetailViewProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the selected record
  const record = {
    id: recordId || "IP-2024-001",
    type: "Patent",
    title: "AI-Powered Data Processing System",
    status: "Active",
    priority: "High",
    filingDate: "2023-03-15",
    expiryDate: "2043-03-15",
    jurisdiction: "US",
    description: "A revolutionary AI system that processes large datasets with unprecedented efficiency and accuracy.",
    inventor: "Dr. Sarah Johnson, Dr. Michael Chen",
    assignee: "TechCorp Industries",
    patentNumber: "US11,234,567",
    applicationNumber: "16/789,123"
  }

  const timeline = [
    {
      date: "2023-03-15",
      event: "Application Filed",
      status: "completed",
      description: "Initial patent application submitted to USPTO"
    },
    {
      date: "2023-06-20",
      event: "First Office Action",
      status: "completed",
      description: "Examiner's initial review and response"
    },
    {
      date: "2023-09-10",
      event: "Response Filed",
      status: "completed",
      description: "Attorney response to office action"
    },
    {
      date: "2024-01-15",
      event: "Patent Granted",
      status: "completed",
      description: "Patent officially granted and published"
    },
    {
      date: "2027-03-15",
      event: "First Maintenance Fee Due",
      status: "upcoming",
      description: "3.5 year maintenance fee payment required"
    }
  ]

  const documents = [
    {
      name: "Patent Application.pdf",
      type: "Application",
      size: "2.4 MB",
      uploadDate: "2023-03-15"
    },
    {
      name: "Technical Drawings.pdf",
      type: "Drawings",
      size: "5.1 MB",
      uploadDate: "2023-03-15"
    },
    {
      name: "Office Action Response.pdf",
      type: "Response",
      size: "1.8 MB",
      uploadDate: "2023-09-10"
    },
    {
      name: "Grant Certificate.pdf",
      type: "Certificate",
      size: "892 KB",
      uploadDate: "2024-01-15"
    }
  ]

  const blockchainEvents = [
    {
      timestamp: "2023-03-15T10:30:00Z",
      event: "Application Filed",
      hash: "0x1a2b3c4d5e6f7890abcdef1234567890",
      blockNumber: "18,234,567"
    },
    {
      timestamp: "2024-01-15T14:22:00Z",
      event: "Patent Granted",
      hash: "0x9876543210fedcba0987654321abcdef",
      blockNumber: "19,456,789"
    }
  ]

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
            <h1 className="text-3xl font-bold text-gray-900">{record.title}</h1>
            <div className="flex items-center space-x-2 mt-1">
              <Badge variant="outline">{record.type}</Badge>
              <Badge className="bg-green-100 text-green-800">{record.status}</Badge>
              <Badge className="bg-red-100 text-red-800">{record.priority}</Badge>
              <span className="text-gray-600">ID: {record.id}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            Edit Record
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Patent Number</label>
                  <p className="text-gray-900">{record.patentNumber}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Application Number</label>
                  <p className="text-gray-900">{record.applicationNumber}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Inventor(s)</label>
                  <p className="text-gray-900">{record.inventor}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Assignee</label>
                  <p className="text-gray-900">{record.assignee}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Jurisdiction</label>
                  <p className="text-gray-900">{record.jurisdiction}</p>
                </div>
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Filing Date</label>
                  <p className="text-gray-900">{record.filingDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Expiry Date</label>
                  <p className="text-gray-900">{record.expiryDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Next Maintenance Fee</label>
                  <p className="text-gray-900">2027-03-15</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Time Remaining</label>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>19 years remaining</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{record.description}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Documents</CardTitle>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Document
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-600">{doc.type} • {doc.size} • {doc.uploadDate}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Patent Lifecycle Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {timeline.map((event, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {event.status === 'completed' ? (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-blue-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">{event.event}</h3>
                        <span className="text-sm text-gray-600">{event.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blockchain" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Blockchain Timestamps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blockchainEvents.map((event, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{event.event}</h3>
                      <Badge variant="outline">Block #{event.blockNumber}</Badge>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Timestamp: {new Date(event.timestamp).toLocaleString()}</p>
                      <p className="font-mono">Hash: {event.hash}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
