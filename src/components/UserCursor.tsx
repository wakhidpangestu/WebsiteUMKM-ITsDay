'use client';

import React, { useEffect, useState } from 'react';
interface Position {
  x: number;
  y: number;
}

const username = 'Hii Lovers!!';

const UserCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [typedName, setTypedName] = useState('');
  const [loopIndex, setLoopIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // default: false

  // Mobile & Tablet detection
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Mouse position tracking & auto-hide
  useEffect(() => {
    if (isMobile || isTablet) return;
    const handleMouseMove = (e: MouseEvent) => {
      // Sembunyikan cursor jika mouse di atas iframe (misal Google Maps)
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'IFRAME' || target.closest('iframe'))) {
        setIsVisible(false);
        return;
      }
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleDocumentMouseLeave = (e: MouseEvent) => {
      // Hide only if leaving the document (not just a child element)
      if (!e.relatedTarget) {
        setIsVisible(false);
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleDocumentMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleDocumentMouseLeave);
    };
  }, [isMobile, isTablet]);

  // Hover tracking
  useEffect(() => {
    if (isMobile || isTablet) return;
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, select, label')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, [isMobile, isTablet]);

  // Typing animation
  useEffect(() => {
    if (isMobile || isTablet) return;
    let index = 0;
    const typingSpeed = 100;
    const interval = setInterval(() => {
      setTypedName(username.slice(0, index + 1));
      index++;
      if (index > username.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTypedName('');
          setLoopIndex((prev) => prev + 1);
        }, 15000);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [loopIndex, isMobile, isTablet]);

  if (isMobile || isTablet || !isVisible) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-10px, -10px)',
      }}
    >
      {isHovering ? (
        // 🔸 Custom Pointer (glowing ring)
        <div className="w-6 h-6 rounded-full border-2 border-orange-500 animate-pulse bg-orange-100/20" />
      ) : (
        // 🛩️ Custom Cursor: Plane + Typing Text
        <div className="flex items-center space-x-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 512 512"
            style={{ transform: 'rotate(-115deg)' }}
          >
            <defs>
              <linearGradient id="cursorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FEC90B" />
                <stop offset="100%" stopColor="#FE9100" />
              </linearGradient>
            </defs>
            <path
              fill="url(#cursorGradient)"
              d="M16 464L496 256 16 48l48 176 272 32-272 32z"
            />
          </svg>
          <div
            className="px-2 py-1 text-xs font-semibold text-white rounded"
            style={{
              background: 'linear-gradient(90deg, #FEC90B, #FE9100)',
              fontFamily: 'monospace',
              whiteSpace: 'nowrap',
              position: 'relative',
              top: '4px', // geser teks ke bawah
              left: '4px', // geser teks sedikit ke kanan
            }}
          >
            {typedName}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCursor;
