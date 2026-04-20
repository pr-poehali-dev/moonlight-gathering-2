export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Heart icon */}
      <path
        d="M20 32C20 32 4 22 4 13C4 8.6 7.6 5 12 5C15 5 17.6 6.6 20 9C22.4 6.6 25 5 28 5C32.4 5 36 8.6 36 13C36 22 20 32 20 32Z"
        fill="#e8527a"
      />
      {/* SPARK text */}
      <text x="46" y="29" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="white" letterSpacing="1">SPARK</text>
      {/* dating tagline */}
      <text x="47" y="38" fontFamily="Arial, sans-serif" fontSize="7" fill="white" opacity="0.5" letterSpacing="2">dating</text>
    </svg>
  );
};