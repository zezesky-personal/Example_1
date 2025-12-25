"use client"

import { useState } from "react"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, ShieldCheck, Wallet, Bitcoin } from "lucide-react"

export default function RiskCalculator() {
    const [years, setYears] = useState([10])
    const currentYears = years[0]

    // Dynamic Logic
    const getRiskProfile = (y: number) => {
        if (y <= 5) return { type: "Conservative", color: "text-chart-2", risk: "Low", return: "3-5%" }
        if (y <= 15) return { type: "Balanced", color: "text-chart-1", risk: "Medium", return: "6-8%" }
        return { type: "Aggressive", color: "text-chart-4", risk: "High", return: "10-15%+" }
    }

    const profile = getRiskProfile(currentYears)

    const getRecommendations = (y: number) => {
        if (y <= 5) return [
            { name: "High Yield Savings", percent: "60%", icon: Wallet, desc: "Safety first. Keep liquidity." },
            { name: "Short-Term Bonds", percent: "30%", icon: ShieldCheck, desc: "Low volatility income." },
            { name: "Index Funds", percent: "10%", icon: TrendingUp, desc: "Small exposure to growth." },
        ]
        if (y <= 15) return [
            { name: "S&P 500 Index Funds", percent: "50%", icon: TrendingUp, desc: "Market average growth." },
            { name: "Corporate Bonds", percent: "30%", icon: ShieldCheck, desc: "Stable returns." },
            { name: "Real Estate / REITs", percent: "20%", icon: Wallet, desc: "Diversification." },
        ]
        return [
            { name: "Growth Tech Stocks", percent: "40%", icon: TrendingUp, desc: "Maximum long-term upside." },
            { name: "Crypto Assets", percent: "30%", icon: Bitcoin, desc: "High risk, high potential." },
            { name: "Emerging Markets", percent: "30%", icon: Wallet, desc: "Global growth exposure." },
        ]
    }

    const recommendations = getRecommendations(currentYears)

    return (
        <div className="min-h-screen bg-background p-6 md:p-12">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <ArrowLeft className="w-4 h-4" />
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight">Risk Calculator</h1>
                </div>

                {/* Input Section */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Investment Horizon</CardTitle>
                        <CardDescription>How long do you plan to invest?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="flex justify-between items-center px-2">
                            <span className="text-sm font-medium text-muted-foreground">Short Term</span>
                            <span className="text-4xl font-bold text-primary">{currentYears} <span className="text-lg text-muted-foreground">Years</span></span>
                            <span className="text-sm font-medium text-muted-foreground">Long Term</span>
                        </div>

                        <Slider
                            value={years}
                            onValueChange={setYears}
                            max={30}
                            min={1}
                            step={1}
                            className="py-4"
                        />
                    </CardContent>
                </Card>

                {/* Results Section */}
                <div className="grid md:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-700">
                    {/* Summary Card */}
                    <Card className={`border-l-4 ${profile.type === 'Conservative' ? 'border-l-chart-2' : profile.type === 'Balanced' ? 'border-l-chart-1' : 'border-l-chart-4'} bg-card/80 transition-all duration-300`}>
                        <CardHeader>
                            <CardTitle className="text-lg text-muted-foreground">Profile</CardTitle>
                            <div className={`text-3xl font-bold ${profile.color}`}>{profile.type}</div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex justify-between border-b border-border py-2">
                                <span>Risk Level</span>
                                <span className="font-medium">{profile.risk}</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span>Est. Return</span>
                                <span className="font-medium text-green-500">{profile.return}</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recommendations Render */}
                    {recommendations.map((rec, i) => (
                        <Card key={i} className="bg-card/60 hover:bg-card/80 transition-colors">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-base font-medium">{rec.name}</CardTitle>
                                <rec.icon className="w-5 h-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold mb-1">{rec.percent}</div>
                                <p className="text-xs text-muted-foreground">{rec.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
