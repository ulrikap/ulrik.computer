import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";

import { useSpring } from "react-spring";

softShadows();

const SpinningElement = ({
  size,
  position,
  color,
  speed,
}: {
  size: [number, number, number];
  position: [number, number, number];
  color: string;
  speed: number;
}) => {
  const [expand, setExpand] = useState(false);

  const meshRef = useRef(null);
  useFrame(
    //@ts-expect-error kek
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  );

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <mesh
      onClick={() => setExpand(!expand)}
      ref={meshRef}
      scale={[1, 1, 1]}
      castShadow
      position={position}
    >
      <boxBufferGeometry attach="geometry" args={size} />
      <MeshWobbleMaterial
        attach="material"
        wireframe={false}
        speed={speed}
        factor={0.6}
        color={color}
      />
    </mesh>
  );
};

const Group = () => {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.3} />
      </mesh>
    </group>
  );
};

const Boxes = () => {
  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 30 }}>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[0, 10, 0]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <Group />
      <SpinningElement
        {...{
          size: [1, 1, 1],
          position: [-2, 1, -5],
          color: "pink",
          speed: 6,
        }}
      />
      <SpinningElement
        {...{
          size: [1, 1, 1],
          position: [-3, -3, -3],
          color: "pink",
          speed: 6,
        }}
      />
      <SpinningElement
        {...{
          size: [1, 1, 1],
          position: [0, 1, 0],
          color: "lightblue",
          speed: 2,
        }}
      />
      <SpinningElement
        {...{
          size: [1, 2, 1],
          position: [2, -0, 3],
          color: "lightblue",
          speed: 2,
        }}
      />
      <SpinningElement
        {...{ size: [1, 1, 1], position: [5, 1, -2], color: "pink", speed: 6 }}
      />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        autoRotate={true}
      />
    </Canvas>
  );
};

export default Boxes;
