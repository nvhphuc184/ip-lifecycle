"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { IPRecordsList } from "@/components/ip-records-list"
import { RecordDetailView } from "@/components/record-detail-view"
import { AddRecordForm } from "@/components/add-record-form"
import { NotificationsPanel } from "@/components/notifications-panel"
import { AIAssistantPanel } from "@/components/ai-assistant-panel"
import { BlockchainViewer } from "@/components/blockchain-viewer"

export type ViewType = 'dashboard' | 'records' | 'detail' | 'add' | 'notifications' | 'ai' | 'blockchain'

export function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard')
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardOverview onNavigate={setCurrentView} />
      case 'records':
        return <IPRecordsList onViewRecord={(id) => {
          setSelectedRecordId(id)
          setCurrentView('detail')
        }} />
      case 'detail':
        return <RecordDetailView recordId={selectedRecordId} onBack={() => setCurrentView('records')} />
      case 'add':
        return <AddRecordForm onBack={() => setCurrentView('records')} />
      case 'notifications':
        return <NotificationsPanel />
      case 'ai':
        return <AIAssistantPanel />
      case 'blockchain':
        return <BlockchainViewer />
      default:
        return <DashboardOverview onNavigate={setCurrentView} />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentView={currentView} 
        onNavigate={setCurrentView}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  )
}
