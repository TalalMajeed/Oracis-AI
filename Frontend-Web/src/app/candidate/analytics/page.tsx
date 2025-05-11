"use client";

import {
    ArrowUpRight,
    BarChart3,
    Briefcase,
    Building2,
    Calendar,
    DollarSign,
    Eye,
    LineChart,
    TrendingUp,
    Users
} from "lucide-react";
import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CandidateAnalytics() {
  const [timeRange, setTimeRange] = useState("30d");
  const [activeTab, setActiveTab] = useState("overview");

  // Mock analytics data
  const analytics = {
    profile: {
      views: 245,
      viewsChange: 12.5,
      searchAppearances: 180,
      searchAppearancesChange: 8.2,
      profileCompleteness: 85,
      profileCompletenessChange: 5,
      lastUpdated: "2 days ago"
    },
    applications: {
      total: 45,
      successRate: 68,
      successRateChange: 5.2,
      averageResponseTime: "3.2 days",
      responseTimeChange: -0.5,
      byStatus: {
        screening: 12,
        interview: 8,
        offer: 3,
        rejected: 22
      }
    },
    skills: {
      topDemand: [
        { name: "React", demand: "Very High", growth: 15.2 },
        { name: "TypeScript", demand: "High", growth: 12.8 },
        { name: "Node.js", demand: "High", growth: 10.5 }
      ],
      marketValue: [
        { name: "React", value: "$90,000 - $120,000", change: 8.5 },
        { name: "TypeScript", value: "$85,000 - $110,000", change: 6.2 },
        { name: "Node.js", value: "$80,000 - $105,000", change: 5.8 }
      ]
    },
    market: {
      salaryTrends: [
        { role: "Frontend Developer", average: "$95,000", change: 5.2 },
        { role: "Full Stack Developer", average: "$110,000", change: 6.8 },
        { role: "Backend Developer", average: "$100,000", change: 4.5 }
      ],
      industryTrends: [
        { industry: "Technology", growth: 12.5, demand: "Very High" },
        { industry: "Finance", growth: 8.2, demand: "High" },
        { industry: "Healthcare", growth: 15.8, demand: "High" }
      ]
    }
  };

  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{analytics.profile.views}</div>
              <div className={`flex items-center text-sm ${
                analytics.profile.viewsChange > 0 ? "text-green-600" : "text-red-600"
              }`}>
                <ArrowUpRight size={16} className="mr-1" />
                {analytics.profile.viewsChange}%
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Search Appearances</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{analytics.profile.searchAppearances}</div>
              <div className={`flex items-center text-sm ${
                analytics.profile.searchAppearancesChange > 0 ? "text-green-600" : "text-red-600"
              }`}>
                <ArrowUpRight size={16} className="mr-1" />
                {analytics.profile.searchAppearancesChange}%
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Application Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{analytics.applications.successRate}%</div>
              <div className={`flex items-center text-sm ${
                analytics.applications.successRateChange > 0 ? "text-green-600" : "text-red-600"
              }`}>
                <ArrowUpRight size={16} className="mr-1" />
                {analytics.applications.successRateChange}%
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profile Completeness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{analytics.profile.profileCompleteness}%</div>
              <div className={`flex items-center text-sm ${
                analytics.profile.profileCompletenessChange > 0 ? "text-green-600" : "text-red-600"
              }`}>
                <ArrowUpRight size={16} className="mr-1" />
                {analytics.profile.profileCompletenessChange}%
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-between">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
            <TabsTrigger value="market">Market Insights</TabsTrigger>
          </TabsList>
        </Tabs>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <TabsContent value="overview" className="space-y-6">
        {/* Profile Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Performance</CardTitle>
            <CardDescription>Track your profile's visibility and engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye size={16} className="text-gray-500" />
                    <span className="text-sm font-medium">Profile Views</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Last updated: {analytics.profile.lastUpdated}
                  </div>
                </div>
                <div className="h-[200px] bg-gray-50 rounded-lg flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-gray-400" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-500" />
                    <span className="text-sm font-medium">Search Appearances</span>
                  </div>
                </div>
                <div className="h-[200px] bg-gray-50 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Success */}
        <Card>
          <CardHeader>
            <CardTitle>Application Success</CardTitle>
            <CardDescription>Track your application performance and response times</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-gray-500" />
                    <span className="text-sm font-medium">Application Status</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {Object.entries(analytics.applications.byStatus).map(([status, count]) => (
                    <div key={status} className="flex items-center justify-between">
                      <span className="text-sm capitalize">{status}</span>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gray-500" />
                    <span className="text-sm font-medium">Response Time</span>
                  </div>
                </div>
                <div className="h-[200px] bg-gray-50 rounded-lg flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="applications" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Application Analytics</CardTitle>
            <CardDescription>Detailed analysis of your job applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{analytics.applications.total}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">{analytics.applications.successRate}%</div>
                      <div className={`flex items-center text-sm ${
                        analytics.applications.successRateChange > 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        <ArrowUpRight size={16} className="mr-1" />
                        {analytics.applications.successRateChange}%
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">{analytics.applications.averageResponseTime}</div>
                      <div className={`flex items-center text-sm ${
                        analytics.applications.responseTimeChange > 0 ? "text-red-600" : "text-green-600"
                      }`}>
                        <ArrowUpRight size={16} className="mr-1" />
                        {analytics.applications.responseTimeChange} days
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="h-[300px] bg-gray-50 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="skills" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Skills Analysis</CardTitle>
            <CardDescription>Market demand and value of your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Top Skills in Demand</h3>
                <div className="space-y-4">
                  {analytics.skills.topDemand.map((skill, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{skill.name}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <TrendingUp size={14} className="text-blue-500" />
                              {skill.demand} Demand
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowUpRight size={16} className="mr-1" />
                              {skill.growth}% growth
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Market Value</h3>
                <div className="space-y-4">
                  {analytics.skills.marketValue.map((skill, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{skill.name}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <DollarSign size={14} className="text-green-500" />
                              {skill.value}
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowUpRight size={16} className="mr-1" />
                              {skill.change}% change
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="market" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Insights</CardTitle>
            <CardDescription>Industry trends and salary insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Salary Trends</h3>
                <div className="space-y-4">
                  {analytics.market.salaryTrends.map((trend, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{trend.role}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <DollarSign size={14} className="text-green-500" />
                              Average: {trend.average}
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowUpRight size={16} className="mr-1" />
                              {trend.change}% change
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Industry Trends</h3>
                <div className="space-y-4">
                  {analytics.market.industryTrends.map((trend, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{trend.industry}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Building2 size={14} className="text-blue-500" />
                              {trend.demand} Demand
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowUpRight size={16} className="mr-1" />
                              {trend.growth}% growth
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
} 