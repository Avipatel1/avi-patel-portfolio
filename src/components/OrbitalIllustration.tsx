export function OrbitalIllustration() {
  return (
    <div className="orbital-art" aria-hidden="true">
      <svg viewBox="0 0 560 540" fill="none">
        <defs>
          <radialGradient id="aura"><stop stopColor="#8d65cf" stopOpacity=".2" /><stop offset="1" stopColor="#8d65cf" stopOpacity="0" /></radialGradient>
          <radialGradient id="planet"><stop stopColor="#eee3ff" /><stop offset=".25" stopColor="#c3a2f4" /><stop offset="1" stopColor="#644283" /></radialGradient>
          <linearGradient id="orbit-stroke" x1="50" y1="100" x2="490" y2="450" gradientUnits="userSpaceOnUse"><stop stopColor="#c7a8fb" stopOpacity=".65" /><stop offset="1" stopColor="#5e447c" stopOpacity=".15" /></linearGradient>
        </defs>
        <circle cx="280" cy="270" r="260" fill="url(#aura)" />
        <g stroke="#a091b9" opacity=".15" strokeDasharray="2 7"><path d="M25 270h510M280 25v490" /><circle cx="280" cy="270" r="210" /></g>
        <g stroke="url(#orbit-stroke)" strokeWidth="1">
          <ellipse cx="280" cy="270" rx="226" ry="83" transform="rotate(-32 280 270)" />
          <ellipse cx="280" cy="270" rx="207" ry="117" transform="rotate(39 280 270)" />
          <ellipse cx="280" cy="270" rx="197" ry="91" transform="rotate(85 280 270)" />
          <ellipse cx="280" cy="270" rx="164" ry="65" transform="rotate(-32 280 270)" />
          <circle cx="280" cy="270" r="54" opacity=".5" />
        </g>
        <circle cx="280" cy="270" r="18" fill="url(#planet)" /><circle cx="452" cy="145" r="5" fill="#d4b7ff" /><circle cx="126" cy="166" r="4" fill="#c86575" /><circle cx="292" cy="466" r="3" fill="#c6bbd8" />
        <g fill="#bdb0ce"><circle cx="112" cy="86" r="1.5" /><circle cx="436" cy="370" r="1" /><circle cx="483" cy="237" r="1.5" /><circle cx="185" cy="440" r="1" /><circle cx="342" cy="79" r="1" /><circle cx="72" cy="330" r="1" /></g>
        <g fill="#9d8bab" fontSize="9" fontFamily="monospace" letterSpacing="2"><text x="307" y="257">r</text><text x="287" y="48">y</text><text x="516" y="260">x</text></g>
      </svg>
      <span className="orbital-caption">A STUDY IN MOTION & POSSIBILITY</span>
    </div>
  )
}