import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Fahad Memorial School Logo</title>
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="hsl(var(--primary))" />
      <path d="M2 17l10 5 10-5" stroke="hsl(var(--primary))" />
      <path d="M2 12l10 5 10-5" stroke="hsl(var(--primary))" />
      <text
        x="12"
        y="14"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="8"
        fontWeight="bold"
        fill="hsl(var(--primary-foreground))"
        className="font-headline"
      >
        FM
      </text>
    </svg>
  );
}
