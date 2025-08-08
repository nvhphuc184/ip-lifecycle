"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Clock, CheckCircle, Bell, Calendar, FileText } from 'lucide-react'

const notifications = [
  {
    id: 1,
    type: "urgent",
    title: "Patent Renewal Due Soon",
    description: "US Patent 10,123,456 renewal fee due in 7 days",
    dueDate: "2024-02-15",
    daysLeft: 7,
    recordId: "IP-2024-001",
    priority: "high"
  },
  {
    id: 2,
    type: "warning",
    title: "Trademark Opposition Period",
    description: "TechFlow trademark entering opposition period",
    dueDate: "2024-02-20",
    daysLeft: 12,
    recordId: "IP-2024-002",
    priority: "medium"
  },
  {
    id: 3,
    type: "info",
    title: "Design Registration Response",
    description: "Response to design office action required",
    dueDate: "2024-02-25",
    daysLeft: 17,
    recordId: "IP-2024-003",
    priority: "medium"
  },
  {
    id: 4,
    type: "success",
    title: "Patent Application Filed",
    description: "Blockchain Security Protocol application submitted successfully",
    dueDate: "2024-01-20",
    daysLeft: 0,
    recordId: "IP-2024-005",
    priority: "low"
  },
  {
    id: 5,
    type: "urgent",
    title: "Maintenance Fee Overdue",
    description: "Patent US9,876,543 maintenance fee is overdue",
    dueDate: "2024-01-30",
    daysLeft: -5,
    recordId: "IP-2023-045",
    priority: "high"
  }
]

export function NotificationsPanel() {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return <AlertTriangle className="h-5 w-5 text-red-600" />
      case 'warning':
        return <Clock className="h-5 w-5 text-orange-600" />
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      default:
        return <Bell className="h-5 w-5 text-blue-600" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'border-red-200 bg-red-50'
      case 'warning':
        return 'border-orange-200 bg-orange-50'
      case 'success':
        return 'border-green-200 bg-green-50'
      default:
        return 'border-blue-200 bg-blue-50'
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

  const urgentNotifications = notifications.filter(n => n.type === 'urgent')
  const warningNotifications = notifications.filter(n => n.type === 'warning')
  const infoNotifications = notifications.filter(n => n.type === 'info')
  const successNotifications = notifications.filter(n => n.type === 'success')

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
        <p className="text-gray-600">Stay updated on important IP deadlines and events</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-600">Urgent</p>
                <p className="text-2xl font-bold text-red-700">{urgentNotifications.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Warning</p>
                <p className="text-2xl font-bold text-orange-700">{warningNotifications.length}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Info</p>
                <p className="text-2xl font-bold text-blue-700">{infoNotifications.length}</p>
              </div>
              <Bell className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Success</p>
                <p className="text-2xl font-bold text-green-700">{successNotifications.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="mr-2 h-5 w-5" />
            All Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border-2 ${getNotificationColor(notification.type)}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-gray-900">{notification.title}</h3>
                        <Badge className={getPriorityColor(notification.priority)}>
                          {notification.priority}
                        </Badge>
                      </div>
                      <p className="text-gray-700 mb-2">{notification.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          Due: {notification.dueDate}
                        </div>
                        <div className="flex items-center">
                          <FileText className="mr-1 h-4 w-4" />
                          {notification.recordId}
                        </div>
                      </div>
                      
                      {notification.daysLeft > 0 && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                            <span>{notification.daysLeft} days remaining</span>
                            <span>{Math.round((30 - notification.daysLeft) / 30 * 100)}%</span>
                          </div>
                          <Progress 
                            value={(30 - notification.daysLeft) / 30 * 100} 
                            className="h-2"
                          />
                        </div>
                      )}
                      
                      {notification.daysLeft < 0 && (
                        <div className="mt-2">
                          <Badge className="bg-red-100 text-red-800">
                            Overdue by {Math.abs(notification.daysLeft)} days
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <Button variant="outline" size="sm">
                      View Record
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Take Action
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
