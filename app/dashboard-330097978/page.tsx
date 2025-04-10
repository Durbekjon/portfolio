"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Users, Activity, BarChart3, Globe, ArrowUpRight, ArrowDownRight, Clock, Bell } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const stats = [
  {
    title: "Total Users",
    value: "2,834",
    change: "+12.5%",
    increasing: true,
    icon: Users,
  },
  {
    title: "Active Now",
    value: "142",
    change: "+8.2%",
    increasing: true,
    icon: Activity,
  },
  {
    title: "Revenue",
    value: "$45,234",
    change: "-3.1%",
    increasing: false,
    icon: BarChart3,
  },
  {
    title: "Page Views",
    value: "123.5K",
    change: "+14.2%",
    increasing: true,
    icon: Globe,
  },
]

const recentActivity = [
  {
    user: "John Doe",
    action: "Created a new project",
    time: "2 minutes ago",
  },
  {
    user: "Jane Smith",
    action: "Updated profile settings",
    time: "15 minutes ago",
  },
  {
    user: "Mike Johnson",
    action: "Completed task #123",
    time: "1 hour ago",
  },
  {
    user: "Sarah Wilson",
    action: "Added new comment",
    time: "2 hours ago",
  },
  {
    user: "Tom Brown",
    action: "Uploaded new files",
    time: "3 hours ago",
  },
]

const chartData = [
  { name: "Jan", users: 4000, revenue: 2400 },
  { name: "Feb", users: 3000, revenue: 1398 },
  { name: "Mar", users: 2000, revenue: 9800 },
  { name: "Apr", users: 2780, revenue: 3908 },
  { name: "May", users: 1890, revenue: 4800 },
  { name: "Jun", users: 2390, revenue: 3800 },
  { name: "Jul", users: 3490, revenue: 4300 },
]

export default function DashboardPage() {
  const [chartType, setChartType] = useState<"users" | "revenue">("users")

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="p-6 lg:p-8 pt-24">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
              <p className="text-foreground/60">Welcome back, Durbek</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Button className="liquid-button bg-gradient-to-r from-purple to-accent hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-500">
                View Reports
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card
                key={stat.title}
                className="glassmorphism border-white/10 hover:border-purple/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-foreground/70">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-foreground/50" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="flex items-center text-sm">
                    {stat.increasing ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={stat.increasing ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                    <span className="text-foreground/60 ml-1">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="glassmorphism border-white/10">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-6">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center">
                              <Bell className="h-4 w-4 text-purple" />
                            </div>
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">{activity.user}</p>
                            <p className="text-sm text-foreground/60">{activity.action}</p>
                            <div className="flex items-center text-xs text-foreground/40">
                              <Clock className="h-3 w-3 mr-1" />
                              {activity.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="glassmorphism border-white/10">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Analytics Overview</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant={chartType === "users" ? "default" : "outline"}
                      onClick={() => setChartType("users")}
                      className="text-xs"
                    >
                      Users
                    </Button>
                    <Button
                      size="sm"
                      variant={chartType === "revenue" ? "default" : "outline"}
                      onClick={() => setChartType("revenue")}
                      className="text-xs"
                    >
                      Revenue
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="name" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "rgba(17, 24, 39, 0.8)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey={chartType}
                          stroke="#8B5CF6"
                          strokeWidth={2}
                          dot={{ fill: "#8B5CF6", strokeWidth: 2 }}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}

