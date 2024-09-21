import React from 'react'
import { cn } from '@/utils/libs/cn'

interface ButtonUIProps {
    text?: string
    icon?: React.ReactNode
    variant: 'primary' | 'secondary' | 'tertiary'
    isIconButton?: boolean
}

export default function ButtonUI({ text, icon, variant, isIconButton }: ButtonUIProps) {
    function getVariantStyle(variant: 'primary' | 'secondary' | 'tertiary') {
        switch (variant) {
            case 'primary':
                return 'bg-btn-primary text-btn-primaryText hover:bg-btn-primaryHover border-btn-primaryBorder shadow-btnPrimary'
            case 'secondary':
                return 'bg-btn-secondary text-btn-secondaryText hover:bg-btn-secondaryHover border-btn-secondaryBorder shadow-btnSecondary'
            case 'tertiary':
                return 'bg-btn-tertiary text-btn-tertiaryText hover:bg-btn-tertiaryHover border-btn-tertiaryBorder shadow-btnTertiary'
            default:
                return ''
        }
    }

    return (
        <button className={cn('flex items-center justify-center px-5 py-2 rounded-lg', getVariantStyle(variant))}>
            {isIconButton && icon && <span className="mr-2">{icon}</span>}
            {text && <p>{text}</p>}
        </button>
    )
}

