type IconProps = { name?: 'arrow' | 'download' | 'plus'; className?: string }
export function Icon({ name = 'arrow', className = '' }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === 'arrow' && <path d="M5 19 19 5M5 5h14v14" />}
      {name === 'download' && <><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></>}
      {name === 'plus' && <path d="M12 5v14M5 12h14" />}
    </svg>
  )
}