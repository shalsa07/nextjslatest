'use client'

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export default function ExperienceWorld() {
  return (
    <Canvas>
        <OrbitControls/>
        <mesh>
            <meshBasicMaterial/>
            <boxGeometry/>
        </mesh>
    </Canvas>
  )
}
