"use client"

import { useRef } from "react"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import { Group } from "three"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"

// Extend THREE with TextGeometry
extend({ TextGeometry })

interface Icon3DProps {
  type: "coin" | "card" | "pie" | "split" | "wallet" | "receipt"
  color?: string
  size?: number
  className?: string
}

function CoinIcon({ color = "#FFD166" }) {
  const ref = useRef<Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })
  
  return (
    <group ref={ref}>
      <mesh>
        <cylinderGeometry args={[0.7, 0.7, 0.1, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Replace TextGeometry with a simple box for the dollar sign */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[0.1, 0.5, 0.05]} />
        <meshStandardMaterial color="#1A2130" />
      </mesh>
      <mesh position={[0, 0, 0.06]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 0.3, 0.05]} />
        <meshStandardMaterial color="#1A2130" />
      </mesh>
    </group>
  )
}

function CardIcon({ color = "#3E6D9C" }) {
  const ref = useRef<Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })
  
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1.4, 1, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 0.2, 0.06]} scale={[0.8, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#00C9A7" />
      </mesh>
      <mesh position={[-0.4, -0.3, 0.06]} scale={[0.3, 0.2, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#FFD166" />
      </mesh>
    </group>
  )
}

function PieIcon({ color = "#00C9A7" }) {
  const ref = useRef<Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })
  
  const colors = ["#00C9A7", "#3E6D9C", "#FFD166", "#FF6B6B", "#9B5DE5"]
  const segments = 5
  const angleStep = (Math.PI * 2) / segments
  
  return (
    <group ref={ref}>
      {colors.map((segmentColor, index) => (
        <mesh key={index} rotation={[0, 0, index * angleStep]}>
          <cylinderGeometry args={[0, 0.7, 0.2, 32, 1, false, 0, angleStep]} />
          <meshStandardMaterial color={segmentColor} />
        </mesh>
      ))}
      <mesh position={[0, 0.11, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
        <meshStandardMaterial color="#1A2130" />
      </mesh>
    </group>
  )
}

function SplitIcon({ color = "#00C9A7" }) {
  const ref = useRef<Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })
  
  return (
    <group ref={ref}>
      <mesh position={[-0.4, 0, 0]}>
        <boxGeometry args={[0.5, 1, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.4, 0, 0]}>
        <boxGeometry args={[0.5, 1, 0.1]} />
        <meshStandardMaterial color="#3E6D9C" />
      </mesh>
      <mesh position={[0, 0, 0.1]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} />
        <meshStandardMaterial color="#FFD166" />
      </mesh>
    </group>
  )
}

function WalletIcon({ color = "#3E6D9C" }) {
  const ref = useRef<Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
  })
  
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1.2, 0.8, 0.2]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.4, 0, 0.11]}>
        <boxGeometry args={[0.3, 0.5, 0.05]} />
        <meshStandardMaterial color="#00C9A7" />
      </mesh>
      <mesh position={[-0.2, -0.2, 0.11]} scale={[0.5, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#FFD166" />
      </mesh>
    </group>
  )
}

function ReceiptIcon({ color = "#F0F4F8" }) {
  const ref = useRef<Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
  })
  
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.8, 1.2, 0.05]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {[0.3, 0.1, -0.1, -0.3].map((y, i) => (
        <mesh key={i} position={[0, y, 0.03]} scale={[0.6, 0.05, 0.01]}>
          <boxGeometry />
          <meshStandardMaterial color={i === 0 ? "#3E6D9C" : "#1A2130"} />
        </mesh>
      ))}
    </group>
  )
}

export default function Icon3D({ type, color, size = 100, className = "" }: Icon3DProps) {
  const getIcon = () => {
    switch (type) {
      case "coin":
        return <CoinIcon color={color} />
      case "card":
        return <CardIcon color={color} />
      case "pie":
        return <PieIcon color={color} />
      case "split":
        return <SplitIcon color={color} />
      case "wallet":
        return <WalletIcon color={color} />
      case "receipt":
        return <ReceiptIcon color={color} />
      default:
        return <CoinIcon color={color} />
    }
  }
  
  return (
    <div style={{ width: size, height: size }} className={className}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Float rotationIntensity={0.2} floatIntensity={0.5}>
          {getIcon()}
        </Float>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}