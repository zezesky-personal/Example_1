import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Activity } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-chart-2 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl w-full space-y-12 text-center z-10">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-primary via-chart-2 to-chart-1 bg-clip-text text-transparent animate-in fade-in zoom-in duration-1000">
            Risk<span className="text-foreground">Master</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advanced portfolio risk verification for the modern investor.
            Calibrate your strategy based on your unique time horizon.
          </p>
          <div className="pt-4">
            <Link href="/risk-calculator">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_rgba(var(--primary),0.8)] transition-all duration-300">
                Start Analysis
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-12">
          <FeatureCard
            icon={<Shield className="w-10 h-10 text-chart-1" />}
            title="Secure Logic"
            description="Bank-grade algorithm for risk assessment."
          />
          <FeatureCard
            icon={<TrendingUp className="w-10 h-10 text-chart-2" />}
            title="Growth Focus"
            description="Maximize returns based on market cycles."
          />
          <FeatureCard
            icon={<Activity className="w-10 h-10 text-chart-3" />}
            title="Dynamic Sync"
            description="Real-time adjustment with visual feedback."
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:bg-card/80 transition-colors duration-300">
      <CardHeader className="flex flex-col items-center space-y-4 pb-2">
        <div className="p-3 bg-background/50 rounded-2xl ring-1 ring-border">
          {icon}
        </div>
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
