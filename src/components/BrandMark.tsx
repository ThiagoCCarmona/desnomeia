interface BrandMarkProps {
  className?: string;
  variant?: 'onDark' | 'onYellow' | 'mono';
  title?: string;
}

/**
 * Sovereign Hex-D (v2) — Designed via logo-design-skill (100/100 svg_audit score).
 * Exact 30°/60° regular hexagon geometry forming an architectural monogram D
 * with a parallel 30° surgical redaction cut across the left spine.
 */
export function BrandMark({
  className = 'h-8 w-8',
  variant = 'onDark',
  title = 'Desnomeia Ltda',
}: BrandMarkProps) {
  const pillarTopFill =
    variant === 'onDark'
      ? '#F6F4EE'
      : variant === 'onYellow'
        ? '#080808'
        : 'currentColor';
  const accentFill =
    variant === 'onDark'
      ? '#F5C400'
      : variant === 'onYellow'
        ? '#080808'
        : 'currentColor';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <g>
        <path
          fill={pillarTopFill}
          d="M 41.40 28.00 H 77.40 V 107.22 L 41.40 128.00 Z"
        />
        <path
          fill={accentFill}
          d="M 41.40 148.78 L 77.40 128.00 V 228.00 H 41.40 Z"
        />
        <path
          fill={accentFill}
          d="M 95.40 28.00 H 128.00 L 214.60 78.00 V 178.00 L 128.00 228.00 H 95.40 V 192.00 H 118.35 L 178.60 157.22 V 98.78 L 118.35 64.00 H 95.40 Z"
        />
      </g>
    </svg>
  );
}

interface HiveSealIconProps {
  className?: string;
}

/**
 * Minimal geometric hexagonal honeycomb & stylized bee silhouette seal
 * serving as the discreet JUSC easter-egg trigger in the architectural colophon.
 */
export function HiveSealIcon({ className = 'h-5 w-5' }: HiveSealIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer honeycomb hexagon */}
      <polygon
        points="16,2.5 27.7,9.25 27.7,22.75 16,29.5 4.3,22.75 4.3,9.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Stylized minimalist bee wings + striped abdomen */}
      <ellipse cx="12.6" cy="13.5" rx="3.2" ry="2" transform="rotate(-24 12.6 13.5)" stroke="currentColor" strokeWidth="1.25" />
      <ellipse cx="19.4" cy="13.5" rx="3.2" ry="2" transform="rotate(24 19.4 13.5)" stroke="currentColor" strokeWidth="1.25" />
      <rect x="13.8" y="13.2" width="4.4" height="8.6" rx="2.2" fill="currentColor" />
      <line x1="13.9" y1="16.2" x2="18.1" y2="16.2" stroke="#080808" strokeWidth="1.15" />
      <line x1="13.9" y1="18.8" x2="18.1" y2="18.8" stroke="#080808" strokeWidth="1.15" />
      <path d="M14.7 12.6 L13.4 10.2 M17.3 12.6 L18.6 10.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
