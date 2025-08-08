"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileText, Clock, AlertTriangle, Shield, TrendingUp, Calendar, DollarSign } from 'lucide-react'
import type { ViewType } from "@/components/dashboard"

interface DashboardOverviewProps {
  onNavigate: (view: ViewType) => void
}

export function DashboardOverview({ onNavigate }: DashboardOverviewProps) {
  const stats = [
    {
      title: "Total IP Assets",
      value: "247",
      change: "+12%",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      onClick: () => onNavigate('records')
    },
    {
      title: "Upcoming Renewals",
      value: "18",
      change: "Next 30 days",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      onClick: () => onNavigate('notifications')
    },
    {
      title: "Pending Applications",
      value: "7",
      change: "In review",
      icon: AlertTriangle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      onClick: () => onNavigate('records')
    },
    {
      title: "Active Disputes",
      value: "3",
      change: "Requires attention",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      onClick: () => onNavigate('records')
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: "Patent",
      title: "AI-Powered Data Processing System",
      status: "Filed",
      date: "2024-01-15",
      priority: "high"
    },
    {
      id: 2,
      type: "Trademark",
      title: "TechFlow Brand Logo",
      status: "Approved",
      date: "2024-01-14",
      priority: "medium"
    },
    {
      id: 3,
      type: "Copyright",
      title: "Software Documentation v2.1",
      status: "Registered",
      date: "2024-01-13",
      priority: "low"
    }
  ]

  const upcomingDeadlines = [
    {
      title: "Patent Renewal - US10123456",
      date: "2024-02-15",
      daysLeft: 12,
      type: "renewal"
    },
    {
      title: "Trademark Opposition Period",
      date: "2024-02-20",
      daysLeft: 17,
      type: "opposition"
    },
    {
      title: "Design Registration Response",
      date: "2024-02-25",
      daysLeft: 22,
      type: "response"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your intellectual property portfolio</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={stat.onClick}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates on your IP portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{activity.type}</Badge>
                      <Badge 
                        variant={activity.priority === 'high' ? 'destructive' : 
                                activity.priority === 'medium' ? 'default' : 'secondary'}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                    <p className="font-medium text-gray-900 mt-1">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Deadlines
            </CardTitle>
            <CardDescription>Critical dates requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{deadline.title}</p>
                    <p className="text-sm text-gray-600">{deadline.date}</p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>{deadline.daysLeft} days left</span>
                        <span>{Math.round((30 - deadline.daysLeft) / 30 * 100)}%</span>
                      </div>
                      <Progress 
                        value={(30 - deadline.daysLeft) / 30 * 100} 
                        className="h-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Value */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="mr-2 h-5 w-5" />
            Portfolio Value Overview
          </CardTitle>
          <CardDescription>Estimated value and distribution of your IP assets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">$2.4M</div>
              <div className="text-sm text-gray-600">Patents</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">$850K</div>
              <div className="text-sm text-gray-600">Trademarks</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">$320K</div>
              <div className="text-sm text-gray-600">Designs</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">$180K</div>
              <div className="text-sm text-gray-600">Copyrights</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
