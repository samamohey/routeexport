type BrandLogoProps = {
  className?: string;
};

/**
 * Route Export mark — an export route curving up into a departure arrow,
 * drawn with the brand gold gradient inside a hairline ring.
 */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id="route-export-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--gold-light, 45 78% 72%))" />
          <stop offset="50%" stopColor="hsl(var(--gold, 42 62% 52%))" />
          <stop offset="100%" stopColor="hsl(var(--gold-deep, 36 55% 38%))" />
        </linearGradient>
      </defs>

      {/* outer ring */}
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke="url(#route-export-gold)"
        strokeWidth="1.25"
        opacity="0.55"
      />

      {/* export route: curve rising to the right */}
      <path
        d="M11 33.5c5.2 0 7.6-3.4 10.4-8.4C24.6 19.4 27.6 15 34.6 14.2"
        fill="none"
        stroke="url(#route-export-gold)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* departure arrowhead */}
      <path
        d="M29.6 12.1 36.8 14l-1.9 7.2"
        fill="none"
        stroke="url(#route-export-gold)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* origin point */}
      <circle cx="11" cy="33.5" r="2.6" fill="url(#route-export-gold)" />
    </svg>
  );
}
