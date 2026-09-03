/* Le logo SVG SP / le Sporting by Papüm */
/* Reconstitution vectorielle du monogramme */

export default function LogoSVG({ color = '#B5944A', height = 56 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 300"
      height={height}
      aria-label="Le Sporting by Papüm"
      role="img"
      style={{ display: 'block', flexShrink: 0 }}
    >
      {/* ── Monogramme SP ── */}
      {/* S grand */}
      <text
        x="28"
        y="190"
        fontFamily="'EB Garamond', Georgia, serif"
        fontSize="185"
        fontWeight="400"
        fill={color}
        opacity="1"
        letterSpacing="-8"
      >S</text>

      {/* P grand — décalé à droite, légèrement transparent pour l'overlap */}
      <text
        x="108"
        y="190"
        fontFamily="'EB Garamond', Georgia, serif"
        fontSize="185"
        fontWeight="400"
        fill={color}
        opacity="0.88"
        letterSpacing="-8"
      >P</text>

      {/* ── Script "le Sporting" ── */}
      <text
        x="130"
        y="235"
        fontFamily="'Signature', cursive"
        fontSize="38"
        fill={color}
        textAnchor="middle"
        letterSpacing="1"
      >le Sporting</text>

      {/* ── Sous-titre BY PAPÜM ── */}
      <text
        x="130"
        y="260"
        fontFamily="'DM Sans', system-ui, sans-serif"
        fontSize="11"
        fill={color}
        textAnchor="middle"
        letterSpacing="4"
        opacity="0.8"
        fontWeight="500"
      >BY PAPÜM</text>

      {/* Trait décoratif vertical sous le P */}
      <rect x="172" y="195" width="2" height="40" fill={color} opacity="0.6" rx="1" />
    </svg>
  )
}
