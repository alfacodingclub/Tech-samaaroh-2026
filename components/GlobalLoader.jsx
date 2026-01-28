"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function GlobalLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // ✅ 1. Handle Route Changes
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    setIsLoading(true);
    setIsVisible(true);

    const loadTimer = setTimeout(() => setIsLoading(false), 700);
    const fadeTimer = setTimeout(() => setIsVisible(false), 1100);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(fadeTimer);
    };
  }, [pathname]);

  // ✅ 2. Reactive Network Status (Instant removal on 'online')
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      // Quickly fade out once back online
      const loadTimer = setTimeout(() => setIsLoading(false), 300);
      const fadeTimer = setTimeout(() => setIsVisible(false), 700);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setIsVisible(true);
      setIsLoading(true);
    };

    // Initial check
    if (!navigator.onLine) handleOffline();

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // ✅ 3. Lock Scroll
  useEffect(() => {
    if (isLoading || isOffline) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading, isOffline]);

  if (!isVisible && !isOffline) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-center transition-opacity duration-500 ${
        isLoading || isOffline ? "opacity-100 loader-active" : "opacity-0 pointer-events-none"
      }`}
    >
      <Loader />

      {isOffline && (
        <div className="absolute bottom-16 px-6 py-3 rounded-full bg-[#1a1a1a]/80 border border-[#e99b63]/40 backdrop-blur-md text-[#e99b63] font-semibold text-sm tracking-wide shadow-lg animate-pulse">
          ⚠️ You are offline. Cached content is shown.
        </div>
      )}
    </div>
  );
}