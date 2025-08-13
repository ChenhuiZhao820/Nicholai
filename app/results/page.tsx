import { CareerPortraitCard } from "@/components/career-portrait-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, Share2, ArrowLeft, BarChart3, Target, RotateCcw, TrendingUp, Zap } from "lucide-react"

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background page-enter">
      {/* Navigation */}
      <nav className="px-6 py-4 md:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="font-serif text-xl font-semibold text-primary">
            Nicholai
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/upload"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Upload
            </Link>
            <Button variant="outline" size="sm" className="btn-hover bg-transparent">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Results Header */}
      <div className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto text-center space-y-4 fade-in-up">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground typewriter">
            Your Career Portrait is Ready
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive analysis of your unique career journey, revealing hidden strengths and untapped
            opportunities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Career Portrait Card */}
            <div className="lg:col-span-1 fade-in-up delay-100">
              <div className="sticky top-8">
                <CareerPortraitCard />

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2 btn-hover">
                    <Download className="w-4 h-4" />
                    Download Portrait
                  </Button>
                  <Button variant="outline" className="w-full flex items-center gap-2 bg-transparent btn-hover">
                    <Share2 className="w-4 h-4" />
                    Share Results
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Micro-Report Modules */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Core Competency Analysis */}
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50 card-hover fade-in-up delay-200">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-accent" />
                    <h2 className="font-serif text-lg font-medium text-foreground">Core Competency Analysis</h2>
                  </div>
                  <div className="border-b border-border/30 mb-4"></div>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Strategic Leadership</span>
                        <span className="text-sm text-accent font-medium">92%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full">
                        <div className="h-1.5 bg-accent rounded-full progress-animate" style={{ width: "92%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Cross-Functional Collaboration</span>
                        <span className="text-sm text-primary font-medium">87%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full">
                        <div className="h-1.5 bg-primary rounded-full progress-animate" style={{ width: "87%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Innovation & Problem Solving</span>
                        <span className="text-sm text-accent font-medium">84%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full">
                        <div className="h-1.5 bg-accent rounded-full progress-animate" style={{ width: "84%" }}></div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Exceptional <span className="text-accent font-medium">strategic leadership</span> with unique
                    cross-functional navigation abilities.
                  </p>
                </div>

                {/* Hidden Strengths Discovery */}
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50 card-hover fade-in-up delay-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    <h2 className="font-serif text-lg font-medium text-foreground">Hidden Strengths Discovery</h2>
                  </div>
                  <div className="border-b border-border/30 mb-4"></div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">Pattern Recognition</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Exceptional ability to identify{" "}
                        <span className="text-accent font-medium">patterns across industries</span> and contexts.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">Cultural Bridge-Building</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Natural connector between different{" "}
                        <span className="text-accent font-medium">organizational cultures</span>.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">Adaptive Learning</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Remarkable ability to <span className="text-accent font-medium">master new domains</span>{" "}
                        quickly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cross-Domain Ability Mapping */}
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50 card-hover fade-in-up delay-400">
                  <div className="flex items-center gap-3 mb-4">
                    <RotateCcw className="w-5 h-5 text-accent" />
                    <h2 className="font-serif text-lg font-medium text-foreground">Cross-Domain Ability Mapping</h2>
                  </div>
                  <div className="border-b border-border/30 mb-4"></div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                        <span className="text-accent font-serif text-sm font-medium">T</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-foreground">Technology × Business</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Translate <span className="text-accent font-medium">technical concepts</span> into business
                          value.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-serif text-sm font-medium">C</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-medium text-foreground">Creative × Analytical</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Rare combination of <span className="text-accent font-medium">creative problem-solving</span>{" "}
                          with analytics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Path Insights */}
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50 card-hover fade-in-up delay-500">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h2 className="font-serif text-lg font-medium text-foreground">Growth Path Insights</h2>
                  </div>
                  <div className="border-b border-border/30 mb-4"></div>

                  <div className="space-y-4">
                    <div className="border-l-3 border-accent pl-4 space-y-1">
                      <h3 className="text-sm font-medium text-foreground">Executive Leadership</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Well-positioned for <span className="text-accent font-medium">C-suite roles</span> in digital
                        transformation.
                      </p>
                    </div>

                    <div className="border-l-3 border-primary pl-4 space-y-1">
                      <h3 className="text-sm font-medium text-foreground">Strategic Advisory</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Valuable as <span className="text-accent font-medium">independent consultant</span> or advisor.
                      </p>
                    </div>

                    <div className="border-l-3 border-accent pl-4 space-y-1">
                      <h3 className="text-sm font-medium text-foreground">Innovation Leadership</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Strong potential in <span className="text-accent font-medium">innovation management</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Recommendations */}
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 card-hover fade-in-up delay-300">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-accent" />
                  <h2 className="font-serif text-xl font-medium text-foreground">Action Recommendations</h2>
                </div>
                <div className="border-b border-border/30 mb-6"></div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <h3 className="font-medium text-foreground">Immediate Actions (Next 30 Days)</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed pl-4">
                        <li>
                          • Update LinkedIn to highlight{" "}
                          <span className="text-accent font-medium">cross-domain expertise</span>
                        </li>
                        <li>
                          • Identify 3 companies undergoing{" "}
                          <span className="text-accent font-medium">digital transformation</span>
                        </li>
                        <li>
                          • Schedule informational interviews with{" "}
                          <span className="text-accent font-medium">innovation leaders</span>
                        </li>
                        <li>
                          • Document specific examples of{" "}
                          <span className="text-accent font-medium">pattern recognition</span> successes
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h3 className="font-medium text-foreground">Strategic Development (3-6 Months)</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed pl-4">
                        <li>
                          • Develop thought leadership content on{" "}
                          <span className="text-accent font-medium">non-linear careers</span>
                        </li>
                        <li>
                          • Join executive networks focused on{" "}
                          <span className="text-accent font-medium">innovation</span>
                        </li>
                        <li>
                          • Consider advisory roles to build{" "}
                          <span className="text-accent font-medium">consulting portfolio</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <h3 className="font-medium text-foreground">Skill Enhancement Priorities</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed pl-4">
                        <li>
                          • Advanced <span className="text-accent font-medium">systems thinking</span> methodologies
                        </li>
                        <li>
                          • Executive communication and <span className="text-accent font-medium">storytelling</span>
                        </li>
                        <li>
                          • Digital transformation <span className="text-accent font-medium">frameworks</span>
                        </li>
                        <li>
                          • Innovation management <span className="text-accent font-medium">best practices</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <h3 className="font-medium text-foreground">Network Expansion</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed pl-4">
                        <li>
                          • Connect with <span className="text-accent font-medium">C-suite executives</span> in target
                          industries
                        </li>
                        <li>
                          • Engage with <span className="text-accent font-medium">innovation communities</span>
                        </li>
                        <li>
                          • Build relationships with{" "}
                          <span className="text-accent font-medium">executive recruiters</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Next Step:</span> Schedule a follow-up consultation to
                    create a detailed
                    <span className="text-accent font-medium"> 90-day action plan</span> tailored to your specific
                    career goals and target opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
