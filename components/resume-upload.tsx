"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { CheckCircle, Upload, FileText, X } from "lucide-react"

export function ResumeUpload() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const processFile = (file: File) => {
    setIsUploading(true)
    setUploadedFile(file)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setUploadSuccess(true)
    }, 2000)
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      processFile(file)
    }
  }, [])

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      processFile(file)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  })

  const removeFile = () => {
    setUploadedFile(null)
    setUploadSuccess(false)
    setIsUploading(false)
  }

  const handleAnalyze = () => {
    // Navigate to results page
    window.location.href = "/results"
  }

  const handleChooseFile = () => {
    const fileInput = document.getElementById('file-input') as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }

  if (uploadSuccess && uploadedFile) {
    return (
      <div className="max-w-2xl mx-auto fade-in-up">
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 text-center space-y-6 card-hover">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-medium text-foreground">Resume Successfully Uploaded</h3>
            <p className="text-muted-foreground">
              {uploadedFile.name} • {(uploadedFile.size / 1024 / 1024).toFixed(1)} MB
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button variant="outline" onClick={removeFile} className="flex items-center gap-2 bg-transparent btn-hover">
              <X className="w-4 h-4" />
              Upload Different File
            </Button>
            <Button
              onClick={handleAnalyze}
              className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2 px-6 btn-hover"
            >
              Analyze My Career Portrait
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 card-hover
          ${
            isDragActive
              ? "border-accent bg-accent/5 scale-[1.02]"
              : "border-border hover:border-accent/50 hover:bg-accent/5"
          }
          ${!isDragActive ? "animate-breathe" : ""}
        `}
      >
        <input {...getInputProps()} />
        
        {/* Hidden file input for manual selection */}
        <input 
          type="file"
          onChange={handleFileSelect}
          accept=".pdf,.doc,.docx"
          className="hidden"
          id="file-input"
        />

        {isUploading ? (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-medium text-foreground">Uploading Resume...</h3>
              <p className="text-muted-foreground">{uploadedFile?.name}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-accent" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl font-medium text-foreground">
                {isDragActive ? "Drop your resume here" : "Upload Your Resume"}
              </h3>
              <p className="text-muted-foreground">
                Drag and drop your PDF, DOC, or DOCX file here, or click to browse
              </p>
            </div>

            <div className="space-y-4">
              <Button
                type="button"
                variant="outline"
                className="mx-auto flex items-center gap-2 bg-transparent btn-hover"
                onClick={handleChooseFile}
              >
                <FileText className="w-4 h-4" />
                Choose File
              </Button>

              <p className="text-xs text-muted-foreground">
                Maximum file size: 10MB • Supported formats: PDF, DOC, DOCX
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Privacy Notice */}
      <div className="mt-8 p-6 bg-card/50 rounded-xl border border-border/30 card-hover">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-1">
            <h4 className="font-medium text-sm text-foreground">Your Privacy Matters</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your resume is processed securely and never shared with third parties. We use enterprise-grade encryption
              and delete uploaded files after analysis completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}