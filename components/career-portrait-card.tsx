"use client"

export function CareerPortraitCard() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-card rounded-2xl p-8 shadow-2xl border border-border/50 max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <h2 className="font-serif text-2xl font-medium text-foreground">Alex Thompson</h2>
        <p className="text-muted-foreground text-sm">Career Portrait Deep Analysis</p>
      </div>

      {/* Abstract Geometric Visualization */}
      <div className="relative h-48 mb-8 flex items-center justify-center">
        <svg width="200" height="180" viewBox="0 0 200 180" className="overflow-visible">
          {/* Background circles */}
          <circle cx="100" cy="90" r="70" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.3" />
          <circle cx="100" cy="90" r="50" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.3" />
          <circle cx="100" cy="90" r="30" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.3" />

          {/* Skill representation shapes */}
          <polygon points="100,30 130,70 100,90 70,70" fill="#d69e2e" opacity="0.8" />
          <polygon points="100,90 140,110 120,150 80,150 60,110" fill="#4a5568" opacity="0.7" />
          <circle cx="100" cy="90" r="15" fill="#d69e2e" opacity="0.9" />

          {/* Connecting lines */}
          <line x1="100" y1="50" x2="100" y2="75" stroke="#4a5568" strokeWidth="2" opacity="0.6" />
          <line x1="85" y1="90" x2="115" y2="90" stroke="#d69e2e" strokeWidth="2" opacity="0.6" />
          <line x1="100" y1="105" x2="100" y2="130" stroke="#4a5568" strokeWidth="2" opacity="0.6" />

          {/* Accent dots */}
          <circle cx="70" cy="60" r="3" fill="#d69e2e" />
          <circle cx="130" cy="120" r="3" fill="#4a5568" />
          <circle cx="80" cy="130" r="3" fill="#d69e2e" />
          <circle cx="120" cy="50" r="3" fill="#4a5568" />
        </svg>
      </div>

      {/* Key Insights */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <span className="text-sm font-medium text-foreground">Strategic Leadership</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-sm font-medium text-foreground">Cross-Domain Expertise</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <span className="text-sm font-medium text-foreground">Innovation Catalyst</span>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pt-6 border-t border-border/30">
        <p className="text-xs text-muted-foreground">Generated on</p>
        <p className="text-sm font-medium text-foreground">{currentDate}</p>
      </div>
    </div>
  )
}
