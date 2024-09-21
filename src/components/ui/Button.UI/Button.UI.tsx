import React from 'react'
import { cn } from '@/utils/libs/cn'

interface ButtonUIProps {
    text: string
    variant: 'primary' | 'secondary' | 'tertiary'
}

export default function ButtonUI({ text, variant }: ButtonUIProps) {
    function getVariantStyle(variant: 'primary' | 'secondary' | 'tertiary') {
        switch (variant) {
            case 'primary':
                return 'bg-btn-primary'
            case 'secondary':
                return 'bg-btn-secondary'
            case 'tertiary':
                return 'bg-btn-tertiary'
            default:
                return ''
        }
    }

    return (
        <button className={cn('text-center px-5 py-2 rounded-lg', getVariantStyle(variant))}>
            <p>{text}</p>
        </button>
    )
}

