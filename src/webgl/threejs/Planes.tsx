import { Canvas } from "@react-three/fiber";
import {
  softShadows,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

softShadows();

var vertexShader = `
varying vec2 vUv;

void main()
{
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}


`;

var fragmentShader = `
varying vec2 vUv;

void main()
{
  gl_FragColor = vec4(vUv.x, vUv.y, 0.5, 0.5);
}

`;

const Group = () => {
  return (
    <group>
      <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[2, 2, 32, 32]} />
        <shaderMaterial
          attach="material"
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const Planes = () => {
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
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
};

export default Planes;
