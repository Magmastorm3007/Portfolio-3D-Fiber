import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Monitor() {
  const { scene, animations } = useGLTF("/assets/monitor2.glb", true);
  const mixer = useRef(null);
  const textureRef = useRef(null);
  const rotationRef = useRef(0); // Track rotation progress
  const initialRotation = useRef(scene.rotation.clone()); // Store initial rotation
  const rotating = useRef(true); // Flag to check if rotation is in progress

  useEffect(() => {
    if (animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
      });
    }

    const video = document.createElement("video");
    video.src = "/assets/video.mp4";
    video.loop = true;
    video.muted = true;
    video.play();

    const texture = new THREE.VideoTexture(video);
    textureRef.current = texture;

    scene.traverse((child) => {
      if (child.isMesh && child.name.includes("Plane")) {
        child.material = new THREE.MeshBasicMaterial({ map: texture });
      }
    });
  }, [scene, animations]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);

    if (rotating.current) {
      scene.rotation.y += delta * 2; // Adjust speed as needed
      rotationRef.current += delta * 2;

      if (rotationRef.current >= Math.PI * 2) {
        scene.rotation.y = initialRotation.current.y; // Reset rotation
        rotating.current = false; // Stop rotation
      }
    }
  });

  return <primitive object={scene} scale={1.5} />;
}

function AnimatedText({ text, position, fontSize, color }) {
  const ref = useRef();
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t * 1.5) * 0.5;
    }
  });

  return (
    <Text
      ref={ref}
      position={[
        position[0] * (viewport.width / 40),
        position[1],
        position[2],
      ]}
      fontSize={fontSize * (viewport.width / 40)}
      color={color}
      anchorX="left"
      anchorY="middle"
      outlineColor="#00ffff"
      outlineWidth={0.03}
      outlineBlur={0.01}
      outlineOpacity={0.8}
      depthOffset={-1}
      letterSpacing={-0.04}
    >
      {text}
    </Text>
  );
}

export default function MonitorScene() {
  return (
    <Canvas
      camera={{ position: [0, 10, 40], fov: 40 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Monitor />

        {/* Animated Glowing Text */}
        <AnimatedText
          text="Shashwat Nath"
          position={[-7, -6, 0]}
          fontSize={2.5}
          color="#ccffcc" // soft white-green
          outlineColor="#00ff88" // glowing green
        />

        <AnimatedText
          text="SDE | Data Engineer"
          position={[-6, -10, 0]}
          fontSize={1.5}
          color="#aaffaa" // lighter green
          outlineColor="#00ff88" // same glow
        />

        {/* Bloom Glow Effect */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
            intensity={1.2}
          />
        </EffectComposer>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
