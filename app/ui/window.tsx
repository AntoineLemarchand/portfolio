import React, { useEffect } from 'react';

export default function Window({
  as: Tag = "div",
  children,
  className,
}: {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  className = "bg-bg border-2 border-fg p-5" + className ?? "";

  return (
    <Tag className={className}
         ref={ref}>
      {children}
    </Tag>
  );
};

