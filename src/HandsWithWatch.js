import React, { useEffect, useRef, useState } from "react";
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import hand_landmarker_task from "./hand_landmarker.task";

// Componente para renderizar el reloj 3D
const WatchModel = ({ wristPosition }) => {
    const { nodes, materials } = useGLTF('/models/applewatch-normal.glb');

    // Restaurar materiales
    Object.values(materials).forEach((material) => {
        material.metalness = 0.5;
        material.roughness = 0.4;
    });

    console.log("Nodes:", nodes);
    console.log("Materials:", materials);

    // Buscar automáticamente la geometría y el material principal
    const watchNode = Object.values(nodes).find(node => node.geometry); // Encuentra el nodo con geometría
    const watchMaterial = Object.values(materials)[0]; // Toma el primer material disponible

    if (!watchNode || !watchNode.geometry) {
        console.error("No se encontró un nodo válido con geometría en el modelo.");
        return null;
    }

    return (
        <group
            position={[
                (wristPosition?.x - 0.5) * 2 || 0, // Ajustar X
                (wristPosition?.y - 0.5) * -2 || 0, // Ajustar Y e invertir
                0, // Mantener cerca del plano Z
            ]}
            rotation={[Math.PI / 2, 0, 0]} // Rotar para orientar correctamente
            scale={0.3} // Ajustar tamaño
        >
            <mesh geometry={nodes.Mesh.geometry} material={materials.Material} />
        </group>
    );
};

const HandsWithWatch = () => {
    const videoRef = useRef(null);
    const [handPresence, setHandPresence] = useState(null);
    const [wristPosition, setWristPosition] = useState(null);

    useEffect(() => {
        let handLandmarker;
        let animationFrameId;

        const initializeHandDetection = async () => {
            try {
                const vision = await FilesetResolver.forVisionTasks(
                    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
                );
                handLandmarker = await HandLandmarker.createFromOptions(
                    vision, {
                        baseOptions: { modelAssetPath: hand_landmarker_task },
                        numHands: 1,
                        runningMode: "video"
                    }
                );
                detectHands();
            } catch (error) {
                console.error("Error initializing hand detection:", error);
            }
        };

        const detectHands = () => {
            if (videoRef.current && videoRef.current.readyState >= 2) {
                const detections = handLandmarker.detectForVideo(videoRef.current, performance.now());
                setHandPresence(detections.handednesses.length > 0);

                if (detections.landmarks && detections.landmarks[0]) {
                    // Obtener posición de la muñeca (landmark 0)
                    setWristPosition(detections.landmarks[0][0]);
                }
            }
            animationFrameId = requestAnimationFrame(detectHands);
        };

        const startWebcam = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
                await initializeHandDetection();
            } catch (error) {
                console.error("Error accessing webcam:", error);
            }
        };

        startWebcam();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
            if (handLandmarker) {
                handLandmarker.close();
            }
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <>
            <h1>Is there a Hand? {handPresence ? "Yes" : "No"}</h1>
            <div style={{ position: "relative", width: "600px", height: "480px" }}>
                {/* Webcam Video */}
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1, // Aseguramos que esté en el fondo
                        objectFit: "cover", // Ajustar el video al contenedor
                    }}
                />

                {/* 3D Canvas */}
                <Canvas
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 2, // Encima del video
                        pointerEvents: "none", // Deshabilitar interacción
                    }}
                    camera={{ position: [0, 0, 5] }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 2]} intensity={1} />
                    {wristPosition && <WatchModel wristPosition={wristPosition} />}
                </Canvas>
            </div>
        </>
    );
};

export default HandsWithWatch;
