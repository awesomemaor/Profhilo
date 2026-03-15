import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const group = useRef();
  
  // 1. טעינת המודל של המאור (הדמות הסטטית)
  const { scene } = useGLTF("/maor.glb");
  
  // 2. טעינת קובץ האנימציה בלבד
  const { animations: typingAnim } = useGLTF("/ani.glb");
  
  // 3. חיבור האנימציה לקבוצה (group) שמכילה את הדמות
  const { actions } = useAnimations(typingAnim, group);

  useEffect(() => {
    if (actions && typingAnim.length > 0) {
      const actionName = typingAnim[0].name;
      const action = actions[actionName];

      action.reset().fadeIn(0.5).play();
      action.timeScale = 7.0; 
    }

    return () => {
      if (actions && typingAnim.length > 0) {
        actions[typingAnim[0].name]?.fadeOut(0.5);
      }
    };
  }, [actions, typingAnim]);

  return (
    <group ref={group} dispose={null}>
      <ambientLight intensity={0.2} /> 
      <hemisphereLight intensity={1.0} groundColor='black' /> 
      <directionalLight position={[0, 10, 5]} intensity={1.0} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} position={[0, 0, 5]} />

      <primitive
        object={scene}
        scale={isMobile ? 2.2 : 3} 
        position={isMobile ? [0, -3.8, 0] : [0, -4.8, 0]} 
        rotation={[0, -0.2, 0]} 
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always' 
      shadows
      dpr={[1, 2]} 
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;