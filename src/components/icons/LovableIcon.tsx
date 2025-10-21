const LovableIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lovableGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF6B35', stopOpacity: 1 }} />
          <stop offset="33%" style={{ stopColor: '#F7931E', stopOpacity: 1 }} />
          <stop offset="66%" style={{ stopColor: '#FF6B9D', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6B8CFF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M50 85 L20 55 Q15 45 20 35 Q25 25 35 25 Q45 25 50 35 Q55 25 65 25 Q75 25 80 35 Q85 45 80 55 Z"
        fill="url(#lovableGradient)"
        transform="rotate(15 50 50)"
      />
    </svg>
  );
};

export default LovableIcon;
