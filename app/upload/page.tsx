import { ResumeUpload } from "@/components/resume-upload"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-background page-enter">
      {/* Navigation */}
      <nav className="px-6 py-4 md:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="font-serif text-xl font-semibold text-primary">
            Nicholai
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Back to Home
            </Link>
            <Button variant="outline" size="sm" className="btn-hover bg-transparent">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Upload Section */}
      <main className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12 fade-in-up">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">Upload Your Resume</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Share your career story with us. Our AI will analyze your unique journey and create a personalized Career
              Portrait that reveals hidden strengths and opportunities.
            </p>
          </div>

          <div className="fade-in-up delay-100">
            <ResumeUpload />
          </div>

          {/* Process Steps */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 fade-in-up delay-200">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="font-serif text-lg font-semibold text-accent">1</span>
              </div>
              <h3 className="font-serif text-lg font-medium">Upload Resume</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Share your PDF resume or CV with our secure AI system
              </p>
            </div>

            <div className="text-center space-y-4 fade-in-up delay-300">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="font-serif text-lg font-semibold text-primary">2</span>
              </div>
              <h3 className="font-serif text-lg font-medium">AI Analysis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deep parsing reveals patterns and cross-domain abilities
              </p>
            </div>

            <div className="text-center space-y-4 fade-in-up delay-400">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="font-serif text-lg font-semibold text-accent">3</span>
              </div>
              <h3 className="font-serif text-lg font-medium">Career Portrait</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Receive your personalized insights and recommendations
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
