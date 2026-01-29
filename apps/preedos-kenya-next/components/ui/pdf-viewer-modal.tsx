'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface PDFViewerModalProps {
    isOpen: boolean
    onClose: () => void
    pdfPath: string
    title: string
}

export function PDFViewerModal({ isOpen, onClose, pdfPath, title }: PDFViewerModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose])

    // Disable right-click on the modal
    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault()
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onContextMenu={handleContextMenu}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-4xl h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-secondary-200 bg-secondary-50">
                    <h3 className="text-lg font-semibold text-secondary-900">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 rounded-lg transition-colors"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* PDF Container with Watermark */}
                <div className="relative flex-1 overflow-hidden select-none bg-secondary-100">
                    {/* PDF Embed - Using embed tag for better browser support */}
                    <embed
                        src={`${pdfPath}#toolbar=0&navpanes=0&view=FitH`}
                        type="application/pdf"
                        className="w-full h-full"
                        style={{
                            display: 'block',
                        }}
                    />

                    {/* Watermark Overlay - Multiple watermarks for full coverage */}
                    <div
                        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
                        style={{ userSelect: 'none' }}
                    >
                        {/* Grid of watermarks */}
                        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-32 rotate-[-30deg] scale-150 opacity-[0.15]">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="text-primary-600 font-bold text-2xl whitespace-nowrap select-none"
                                    style={{ userSelect: 'none' }}
                                >
                                    PREEDOS KENYA
                                </div>
                            ))}
                        </div>

                        {/* Center watermark - more prominent */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="text-primary-600 font-bold text-5xl opacity-20 rotate-[-30deg] select-none whitespace-nowrap"
                                style={{ userSelect: 'none' }}
                            >
                                PREEDOS KENYA
                            </div>
                        </div>
                    </div>

                    {/* Transparent overlay to prevent easy interaction */}
                    <div
                        className="absolute inset-0 bg-transparent"
                        style={{
                            pointerEvents: 'none',
                            userSelect: 'none',
                        }}
                    />
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-secondary-200 bg-secondary-50">
                    <p className="text-xs text-secondary-500 text-center">
                        This certificate is the property of Preedos Kenya Limited. Unauthorized reproduction is prohibited.
                    </p>
                </div>
            </div>
        </div>
    )
}
