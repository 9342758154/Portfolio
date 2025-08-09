import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4FC3F7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9C27B0" />
        
        <Stars radius={300} depth={60} count={1000} factor={7} />
        <FloatingCube />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};