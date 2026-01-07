interface CircularProgressProps {
  percentage: number
  color: string
  size?: "sm" | "md" | "lg"
}

export function CircularProgress({ percentage, color, size = "md" }: CircularProgressProps) {
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-40 h-40"
  }

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-4xl"
  }

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="currentColor" strokeWidth="10" className="text-muted" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={color}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${textSizeClasses[size]} font-bold`}>{percentage}%</span>
        <span className="text-sm text-muted-foreground">Match</span>
      </div>
    </div>
  )
}
