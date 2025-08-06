"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  position?: "left" | "right"
}

export function WhatsAppButton({
  phoneNumber = "905555555555",
  message = "Hello! I'm interested in Turkish minerals. Can you provide more information?",
  position = "right",
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after button appears
      setTimeout(() => {
        setShowTooltip(true)
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false)
        }, 5000)
      }, 1000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-6 z-50 flex items-center gap-3",
        position === "right" ? "right-6" : "left-6"
      )}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div
          className={cn(
            "animate-fade-in-up bg-white rounded-lg shadow-lg p-4 max-w-xs",
            position === "right" ? "order-first" : "order-last"
          )}
        >
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close tooltip"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm font-medium text-gray-900 mb-1">
            Need help choosing minerals?
          </p>
          <p className="text-xs text-gray-600">
            Chat with our experts on WhatsApp for instant assistance!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-scale-in"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
        
        {/* Hover Label */}
        <span
          className={cn(
            "absolute whitespace-nowrap bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            position === "right" ? "right-full mr-3" : "left-full ml-3"
          )}
        >
          Chat on WhatsApp
        </span>
      </button>
    </div>
  )
}