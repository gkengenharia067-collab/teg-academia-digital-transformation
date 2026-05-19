/**
 * Official TEG Academia logo — geometric play-button triangle
 * composed of 9 smaller triangles in a 3-level tessellation.
 *
 * Color mapping (left → right):
 *   Column 1 (3 triangles): Magenta  #9B1B60
 *   Gap triangles (2):      Dark     #4A4A4A
 *   Column 2 (2 triangles): Red      #E8343A
 *   Gap triangle (1):       Dark     #4A4A4A
 *   Column 3 (1 triangle):  Orange   #F8A930
 */
export function TegLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TEG Academia logo"
    >
      {/* Column 1 — Magenta right-pointing triangles */}
      <polygon points="0,0 0,10 10,5" fill="#9B1B60" />
      <polygon points="0,10 0,20 10,15" fill="#9B1B60" />
      <polygon points="0,20 0,30 10,25" fill="#9B1B60" />

      {/* Gap — Dark left-pointing triangles */}
      <polygon points="0,10 10,5 10,15" fill="#4A4A4A" />
      <polygon points="0,20 10,15 10,25" fill="#4A4A4A" />

      {/* Column 2 — Red right-pointing triangles */}
      <polygon points="10,5 10,15 20,10" fill="#E8343A" />
      <polygon points="10,15 10,25 20,20" fill="#E8343A" />

      {/* Gap — Dark left-pointing triangle */}
      <polygon points="10,15 20,10 20,20" fill="#4A4A4A" />

      {/* Column 3 — Orange right-pointing triangle (tip) */}
      <polygon points="20,10 20,20 30,15" fill="#F8A930" />
    </svg>
  );
}
