"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreePetCanvasProps {
  className?: string;
}

export function ThreePetCanvas({ className = "" }: ThreePetCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // 2. High-Fidelity WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Brand Lighting Setup (Verde Limão, Pink Vibrante, Laranja Solar)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const pinkLight = new THREE.PointLight(0xff2e93, 4.5, 20);
    pinkLight.position.set(-4, 3, 3);
    scene.add(pinkLight);

    const limeLight = new THREE.PointLight(0x84cc16, 5, 20);
    limeLight.position.set(4, -2, 4);
    scene.add(limeLight);

    const orangeLight = new THREE.PointLight(0xff6b00, 4, 20);
    orangeLight.position.set(0, 4, -2);
    scene.add(orangeLight);

    // 4. Hierarchical 3D Pet Sculpture (Patinha Estilizada de Alta Precisão)
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Materiais Nobres de Estúdio (Efeito Porcelana / Vidro Lustroso da Marca)
    const centralPadMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.25,
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const toeMaterialPink = new THREE.MeshStandardMaterial({
      color: 0xff2e93,
      metalness: 0.25,
      roughness: 0.2,
    });

    const toeMaterialLime = new THREE.MeshStandardMaterial({
      color: 0x84cc16,
      metalness: 0.25,
      roughness: 0.2,
    });

    const toeMaterialOrange = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      metalness: 0.25,
      roughness: 0.2,
    });

    // Almofada Central (Coração/Forma Oval da Pata)
    const padGeometry = new THREE.SphereGeometry(1.2, 48, 48);
    padGeometry.scale(1.15, 0.9, 0.45);
    const mainPad = new THREE.Mesh(padGeometry, centralPadMaterial);
    mainPad.position.y = -0.3;
    rootGroup.add(mainPad);

    // Anel Orbital Tricolor da Marca
    const ringGeometry = new THREE.TorusGeometry(2.4, 0.04, 24, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      metalness: 0.6,
      roughness: 0.2,
    });
    const orbitalRing = new THREE.Mesh(ringGeometry, ringMaterial);
    orbitalRing.rotation.x = Math.PI / 3;
    orbitalRing.rotation.y = Math.PI / 6;
    rootGroup.add(orbitalRing);

    const secondRingGeometry = new THREE.TorusGeometry(2.1, 0.03, 24, 100);
    const secondRingMaterial = new THREE.MeshStandardMaterial({
      color: 0x84cc16,
      metalness: 0.5,
      roughness: 0.2,
    });
    const secondRing = new THREE.Mesh(secondRingGeometry, secondRingMaterial);
    secondRing.rotation.x = -Math.PI / 4;
    secondRing.rotation.z = Math.PI / 4;
    rootGroup.add(secondRing);

    // 4 Dedinhos Esculturais
    const toeGeo = new THREE.SphereGeometry(0.42, 32, 32);
    toeGeo.scale(0.9, 1.15, 0.55);

    const toesConfig = [
      { x: -1.3, y: 1.1, z: 0.1, rotZ: 0.35, mat: toeMaterialPink },
      { x: -0.45, y: 1.55, z: 0.15, rotZ: 0.1, mat: toeMaterialLime },
      { x: 0.45, y: 1.55, z: 0.15, rotZ: -0.1, mat: toeMaterialOrange },
      { x: 1.3, y: 1.1, z: 0.1, rotZ: -0.35, mat: toeMaterialPink },
    ];

    toesConfig.forEach((cfg) => {
      const toe = new THREE.Mesh(toeGeo, cfg.mat);
      toe.position.set(cfg.x, cfg.y, cfg.z);
      toe.rotation.z = cfg.rotZ;
      rootGroup.add(toe);
    });

    // 5. Constelação de Partículas Flutuantes nas Cores da Marca
    const particleCount = 70;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const brandColors = [
      new THREE.Color(0x84cc16), // Verde Limão
      new THREE.Color(0xff2e93), // Pink Vibrante
      new THREE.Color(0xff6b00), // Laranja Solar
      new THREE.Color(0xffffff), // Pure white
    ];

    for (let i = 0; i < particleCount; i++) {
      const r = 3.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const color = brandColors[i % brandColors.length];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 6. Mouse Physics & Inertia Interpolation
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = x * 0.75;
      targetRotX = -y * 0.6;
    };

    window.addEventListener("mousemove", onMouseMove);

    // 7. Scroll Physics
    let scrollOffset = 0;
    const onScroll = () => {
      scrollOffset = window.scrollY * 0.001;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // 8. Resize Observer
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // 9. Render Loop com Suavização de Movimento
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Flutuação Orgânica em repouso
      const idleFloatY = Math.sin(elapsedTime * 1.5) * 0.15;
      const idleRotZ = Math.sin(elapsedTime * 0.8) * 0.08;

      // Interpolação elástica para suavidade profissional (lerp)
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      rootGroup.position.y = idleFloatY;
      rootGroup.rotation.x = currentRotX + scrollOffset * 0.4;
      rootGroup.rotation.y = currentRotY + elapsedTime * 0.25;
      rootGroup.rotation.z = idleRotZ;

      // Rotação dos anéis orbitais com velocidades independentes
      orbitalRing.rotation.z = elapsedTime * 0.4;
      secondRing.rotation.y = -elapsedTime * 0.35;

      // Partículas em órbita suave
      particles.rotation.y = elapsedTime * 0.08;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;

      // Movimentação suave das luzes
      pinkLight.position.x = Math.sin(elapsedTime * 1.2) * 5;
      pinkLight.position.y = Math.cos(elapsedTime * 1.0) * 4;

      limeLight.position.x = Math.cos(elapsedTime * 1.1) * 5;
      limeLight.position.z = Math.sin(elapsedTime * 1.1) * 4 + 2;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Desalocação Limpa de Memória e Recursos GPU
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries
      padGeometry.dispose();
      ringGeometry.dispose();
      secondRingGeometry.dispose();
      toeGeo.dispose();
      particleGeometry.dispose();

      // Dispose materials
      centralPadMaterial.dispose();
      ringMaterial.dispose();
      secondRingMaterial.dispose();
      toeMaterialPink.dispose();
      toeMaterialLime.dispose();
      toeMaterialOrange.dispose();
      particleMaterial.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full cursor-grab active:cursor-grabbing select-none pointer-events-auto ${className}`}
      title="Escultura 3D interativa da Pais de Pet • Mova o mouse para interagir"
    />
  );
}
