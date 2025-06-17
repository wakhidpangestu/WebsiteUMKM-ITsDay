'use client';

import React, { useEffect, useState } from 'react';

type Position = { x: number; y: number };

const username = 'Tong Hee Love';

const UserCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [typedName, setTypedName] = useState('');
  const [loopIndex, setLoopIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse position tracking
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Hover tracking
  useEffect(() => {
    if (isMobile) return;
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
  }, [isMobile]);

  // Typing animation
  useEffect(() => {
    if (isMobile) return;
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
  }, [loopIndex, isMobile]);

  if (isMobile) return null;

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
