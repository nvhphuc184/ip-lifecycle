"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, ExternalLink, Copy, CheckCircle, Clock, Hash, Calendar } from 'lucide-react'

const blockchainRecords = [
  {
    id: 1,
    recordId: "IP-2024-001",
    event: "Patent Application Filed",
    timestamp: "2023-03-15T10:30:00Z",
    blockNumber: "18,234,567",
    transactionHash: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef12",
    gasUsed: "21,000",
    status: "confirmed",
    confirmations: 1247
  },
  {
    id: 2,
    recordId: "IP-2024-001",
    event: "Patent Granted",
    timestamp: "2024-01-15T14:22:00Z",
    blockNumber: "19,456,789",
    transactionHash: "0x9876543210fedcba0987654321abcdef09876543",
    gasUsed: "23,500",
    status: "confirmed",
    confirmations: 892
  },
  {
    id: 3,
    recordId: "IP-2024-002",
    event: "Trademark Registration",
    timestamp: "2023-06-20T09:15:00Z",
    blockNumber: "18,567,890",
    transactionHash: "0xabcdef1234567890fedcba0987654321abcdef12",
    gasUsed: "19,800",
    status: "confirmed",
    confirmations: 1156
  },
  {
    id: 4,
    recordId: "IP-2024-005",
    event: "Application Submitted",
    timestamp: "2024-01-20T16:45:00Z",
    blockNumber: "19,567,123",
    transactionHash: "0x567890abcdef1234567890abcdef1234567890ab",
    gasUsed: "22,100",
    status: "pending",
    confirmations: 3
  }
]

const networkStats = {
  totalTransactions: 247,
  totalGasUsed: "5,234,567",
  averageConfirmationTime: "2.3 minutes",
  networkFees: "$127.45",
  lastBlockTime: "2024-01-25T10:30:00Z"
}

export function BlockchainViewer() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'failed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Blockchain Timestamps</h1>
        <p className="text-gray-600">Immutable record of your IP lifecycle events</p>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{networkStats.totalTransactions}</div>
              <div className="text-sm text-gray-600">Total Transactions</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{networkStats.totalGasUsed}</div>
              <div className="text-sm text-gray-600">Total Gas Used</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{networkStats.averageConfirmationTime}</div>
              <div className="text-sm text-gray-600">Avg Confirmation</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{networkStats.networkFees}</div>
              <div className="text-sm text-gray-600">Network Fees</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-600">
                {new Date(networkStats.lastBlockTime).toLocaleTimeString()}
              </div>
              <div className="text-sm text-gray-600">Last Block</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blockchain Records */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Blockchain Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blockchainRecords.map((record) => (
              <div key={record.id} className="p-4 border rounded-lg bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(record.status)}
                    <div>
                      <h3 className="font-medium text-gray-900">{record.event}</h3>
                      <p className="text-sm text-gray-600">Record: {record.recordId}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(record.status)}>
                    {record.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Block Number:</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono">{record.blockNumber}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard(record.blockNumber)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Gas Used:</span>
                      <span className="font-mono">{record.gasUsed}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Confirmations:</span>
                      <span className="font-mono">{record.confirmations.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Timestamp:</span>
                      <span>{new Date(record.timestamp).toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Transaction Hash:</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs">
                          {record.transactionHash.substring(0, 10)}...{record.transactionHash.substring(record.transactionHash.length - 8)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard(record.transactionHash)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Blockchain Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Hash className="mr-2 h-5 w-5" />
              Network Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Network:</span>
              <span className="font-medium">Ethereum Mainnet</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Chain ID:</span>
              <span className="font-mono">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Current Block:</span>
              <span className="font-mono">19,567,890</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Gas Price:</span>
              <span className="font-mono">25 gwei</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Last 24 hours:</span>
                <span className="font-medium">3 transactions</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Last 7 days:</span>
                <span className="font-medium">12 transactions</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Last 30 days:</span>
                <span className="font-medium">45 transactions</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total fees paid:</span>
                <span className="font-medium">$127.45</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
