"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, Lightbulb, FileText, AlertCircle, CheckCircle, Clock, Sparkles } from 'lucide-react'

const suggestions = [
  {
    id: 1,
    type: "renewal",
    title: "Patent Renewal Optimization",
    description: "Based on your portfolio analysis, consider consolidating renewal dates for patents US10,123,456 and US10,234,567 to reduce administrative overhead.",
    priority: "medium",
    estimatedSavings: "$2,400"
  },
  {
    id: 2,
    type: "filing",
    title: "International Filing Opportunity",
    description: "Your AI-Powered Data Processing System patent shows strong commercial potential. Consider filing in EU and Japan markets within the next 6 months.",
    priority: "high",
    estimatedValue: "$150K+"
  },
  {
    id: 3,
    type: "risk",
    title: "Prior Art Alert",
    description: "New prior art detected for pending application 16/789,123. Review recommended to strengthen claims before examination.",
    priority: "high",
    action: "Review Required"
  },
  {
    id: 4,
    type: "opportunity",
    title: "Licensing Opportunity",
    description: "TechFlow trademark shows high brand recognition. Consider licensing opportunities in adjacent markets.",
    priority: "low",
    estimatedValue: "$50K+"
  }
]

const chatHistory = [
  {
    id: 1,
    type: "user",
    message: "What's the status of my patent applications?",
    timestamp: "10:30 AM"
  },
  {
    id: 2,
    type: "ai",
    message: "You currently have 5 active patent applications. 2 are under examination, 1 is pending response to office action, and 2 have been granted. Would you like me to provide details on any specific application?",
    timestamp: "10:31 AM"
  },
  {
    id: 3,
    type: "user",
    message: "Tell me about the blockchain security patent",
    timestamp: "10:32 AM"
  },
  {
    id: 4,
    type: "ai",
    message: "Your Blockchain Security Protocol patent (Application #16/890,234) was filed on January 20, 2024. It's currently under initial examination. Based on similar applications, the average processing time is 18-24 months. I recommend preparing for a potential office action around July 2024.",
    timestamp: "10:33 AM"
  }
]

export function AIAssistantPanel() {
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsTyping(true)
      // Simulate AI response delay
      setTimeout(() => {
        setIsTyping(false)
      }, 2000)
      setMessage("")
    }
  }

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'renewal':
        return <Clock className="h-5 w-5 text-blue-600" />
      case 'filing':
        return <FileText className="h-5 w-5 text-green-600" />
      case 'risk':
        return <AlertCircle className="h-5 w-5 text-red-600" />
      case 'opportunity':
        return <Lightbulb className="h-5 w-5 text-yellow-600" />
      default:
        return <Sparkles className="h-5 w-5 text-purple-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Assistant</h1>
        <p className="text-gray-600">Get intelligent insights and recommendations for your IP portfolio</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-5 w-5" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getSuggestionIcon(suggestion.type)}
                      <h3 className="font-medium text-gray-900">{suggestion.title}</h3>
                    </div>
                    <Badge className={getPriorityColor(suggestion.priority)}>
                      {suggestion.priority}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-3">{suggestion.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-600">
                      {suggestion.estimatedSavings && (
                        <span className="text-green-600 font-medium">
                          Savings: {suggestion.estimatedSavings}
                        </span>
                      )}
                      {suggestion.estimatedValue && (
                        <span className="text-blue-600 font-medium">
                          Value: {suggestion.estimatedValue}
                        </span>
                      )}
                      {suggestion.action && (
                        <span className="text-red-600 font-medium">
                          {suggestion.action}
                        </span>
                      )}
                    </div>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5" />
              Chat with AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Chat History */}
              <div className="h-80 overflow-y-auto space-y-3 p-3 bg-gray-50 rounded-lg">
                {chatHistory.map((chat) => (
                  <div
                    key={chat.id}
                    className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                        chat.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{chat.message}</p>
                      <p className={`text-xs mt-1 ${
                        chat.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {chat.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border text-gray-900 px-3 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about your IP portfolio..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} disabled={!message.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => setMessage("What renewals are due this month?")}>
                  Upcoming Renewals
                </Button>
                <Button variant="outline" size="sm" onClick={() => setMessage("Show me portfolio analytics")}>
                  Portfolio Analytics
                </Button>
                <Button variant="outline" size="sm" onClick={() => setMessage("Any filing opportunities?")}>
                  Filing Opportunities
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5" />
            Portfolio Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">92%</div>
              <div className="text-sm text-gray-600">Portfolio Health Score</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">$45K</div>
              <div className="text-sm text-gray-600">Potential Annual Savings</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">7</div>
              <div className="text-sm text-gray-600">Actionable Recommendations</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
