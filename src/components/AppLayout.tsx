import { useEffect, useRef } from "react";
import { Header } from "./Header";
import { Outlet } from "react-router";
import createGlobe from "cobe";
import { Footer } from "./Footer";

export const AppLayout = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
      width: 600 * 2,
      height: 2400,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1,
      mapSamples: 16000,
      mapBrightness: 2,
      mapBaseBrightness: 0,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0, 0, 0],
      glowColor: [0.1, 0.1, 0.1],
      scale: 0.5,
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0 },
        { location: [40.7128, -74.006], size: 0 },
      ],
      offset: [-1000, 1000],

      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.0013;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-zinc-950 pb-4">
      <canvas
        className="pointer-events-none fixed z-0 h-[1500px] w-full opacity-30 sm:opacity-50"
        ref={canvasRef}
      />
      <div className="relative z-50 mx-auto flex w-full max-w-[768px] flex-col px-4 text-zinc-200">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
