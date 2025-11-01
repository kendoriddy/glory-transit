"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NeuralNetworkProps {
  mousePosition: { x: number; y: number };
}

export default function NeuralNetwork({ mousePosition }: NeuralNetworkProps) {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Create nodes (particles)
  const { nodes, connections } = useMemo(() => {
    const count = 50;
    const nodes = new Float32Array(count * 3);
    const connections: [number, number][] = [];

    // Initialize nodes in a spherical distribution
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 3 + Math.random() * 2;

      nodes[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      nodes[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      nodes[i * 3 + 2] = radius * Math.cos(phi);
    }

    // Create connections between nearby nodes
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = nodes[i * 3] - nodes[j * 3];
        const dy = nodes[i * 3 + 1] - nodes[j * 3 + 1];
        const dz = nodes[i * 3 + 2] - nodes[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 2) {
          connections.push([i, j]);
        }
      }
    }

    return { nodes, connections };
  }, []);

  // Create line positions
  const linePositions = useMemo(() => {
    const positions = new Float32Array(connections.length * 6);
    connections.forEach(([i, j], idx) => {
      positions[idx * 6] = nodes[i * 3];
      positions[idx * 6 + 1] = nodes[i * 3 + 1];
      positions[idx * 6 + 2] = nodes[i * 3 + 2];
      positions[idx * 6 + 3] = nodes[j * 3];
      positions[idx * 6 + 4] = nodes[j * 3 + 1];
      positions[idx * 6 + 5] = nodes[j * 3 + 2];
    });
    return positions;
  }, [nodes, connections]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = clock.elapsedTime * 0.05 + mousePosition.y * 0.5;
    }

    if (linesRef.current) {
      linesRef.current.rotation.y = clock.elapsedTime * 0.1;
      linesRef.current.rotation.x = clock.elapsedTime * 0.05 + mousePosition.y * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
      
      {/* Connections (neural network lines) */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00D9FF" opacity={0.3} transparent />
      </lineSegments>

      {/* Nodes (particles) */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodes.length / 3}
            array={nodes}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#00D9FF"
          transparent
          opacity={0.8}
        />
      </points>
    </>
  );
}

