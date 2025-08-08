"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, Bell, Plus, Bot, Shield, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ViewType } from "@/components/dashboard"

interface SidebarProps {
  currentView: ViewType
  onNavigate: (view: ViewType) => void
  isOpen: boolean
  onToggle: () => void
}

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, view: 'dashboard' as ViewType },
  { name: 'IP Records', icon: FileText, view: 'records' as ViewType },
  { name: 'Add Record', icon: Plus, view: 'add' as ViewType },
  { name: 'Notifications', icon: Bell, view: 'notifications' as ViewType },
  { name: 'AI Assistant', icon: Bot, view: 'ai' as ViewType },
  { name: 'Blockchain', icon: Shield, view: 'blockchain' as ViewType },
]

export function Sidebar({ currentView, onNavigate, isOpen, onToggle }: SidebarProps) {
  return (
    <div className={cn(
      "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
      isOpen ? "w-64" : "w-16"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {isOpen && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900">IPGuard</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8"
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <Button
            key={item.name}
            variant={currentView === item.view ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              !isOpen && "px-2",
              currentView === item.view && "bg-blue-600 text-white hover:bg-blue-700"
            )}
            onClick={() => onNavigate(item.view)}
          >
            <item.icon className={cn("h-5 w-5", isOpen && "mr-3")} />
            {isOpen && item.name}
          </Button>
        ))}
      </nav>
    </div>
  )
}
