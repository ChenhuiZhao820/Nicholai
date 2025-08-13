import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background page-enter">
      {/* Minimal Navigation */}
      <nav className="px-6 py-4 md:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="font-serif text-xl font-semibold text-primary">Nicholai</div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              About
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              How it Works
            </Link>
            <Button variant="outline" size="sm" className="btn-hover bg-transparent">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 md:px-12 py-16 md:py-24 font-serif">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
              <h1 className="font-serif text-7xl md:text-8xl lg:text-8xl font-medium text-foreground leading-tight fade-in-up">
              <div className="space-y-2">
                <span className="block">Infinite</span>
                <span className="block">Career</span>
                <span className="block">Possibilities</span>
              </div>
            </h1>


                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl fade-in-up delay-100">
                  Upload your resume to get started
                </p>
              </div>

              <div className="space-y-4 fade-in-up delay-200">
                <Link href="/upload">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-medium rounded-xl shadow-lg btn-hover"
                  >
                    Begin Exploring My Career Portrait
                  </Button>
                </Link>
                
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative fade-in-up delay-300">
              <div className="bg-card rounded-2xl p-8 shadow-2xl border border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-4 bg-accent/20 rounded w-1/2"></div>
                    <div className="h-4 bg-primary/20 rounded w-5/6"></div>
                    <div className="h-8 bg-accent/30 rounded w-2/3 mt-6"></div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-16 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Professional Consulting Meets Human Care
            </h2>
            <p className="font-serif oblique-20 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the gravitas of premium consulting with the warmth of personalized guidance
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 space-y-4 card-hover fade-in-up delay-100">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-sm"></div>
              </div>
              <h3 className="font-serif text-xl font-medium">Resume Deep Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered parsing that reveals hidden patterns and cross-domain abilities in your career journey
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 space-y-4 card-hover fade-in-up delay-200">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
              </div>
              <h3 className="font-serif text-xl font-medium">Company Research</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive insights into organizations that value non-linear career paths and diverse experiences
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 space-y-4 card-hover fade-in-up delay-300">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-sm"></div>
              </div>
              <h3 className="font-serif text-xl font-medium">Personalized Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic career roadmaps tailored to your unique strengths and unconventional background
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
