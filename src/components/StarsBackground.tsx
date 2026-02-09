// @ts-nocheck
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const Stars = (props: ThreeElements['points']) => {
    const ref = useRef<any>(null);

    // Custom function to generate random points in a sphere
    const sphere = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 5000; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = 1.5 * Math.cbrt(Math.random()); // Radius 1.5
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>

                <PointMaterial
                    transparent
                    color="#a881f8" // BTS light purple
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsBackground = () => {
    return (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f0f0f] to-[#1a0b2e]">
            {/* Added a dark background to make stars visible */}
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default StarsBackground;
