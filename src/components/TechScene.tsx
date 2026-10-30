import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { ExtrudeGeometry, OrthographicCamera, type Group } from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills, type Skill } from '../content/skills';
gsap.registerPlugin(ScrollTrigger);

function ResponsiveCamera() {
  const { camera, size, invalidate } = useThree();
  useEffect(() => {
    if (camera instanceof OrthographicCamera) {
      camera.zoom = Math.min(size.width / 5.8, size.height / 6.5);
      camera.updateProjectionMatrix();
      invalidate();
    }
  }, [camera, size, invalidate]);
  return null;
}

function ContextLossGuard({ onFailure }: { onFailure: () => void }) {
  const { gl } = useThree();
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('webglcontextlost', onFailure);
    // R3F intentionally loses the context after unmount. Remove the handler first
    // so leaving the viewport does not permanently switch to the fallback.
    return () => canvas.removeEventListener('webglcontextlost', onFailure);
  }, [gl, onFailure]);
  return null;
}

function ClayBadge({ skill, index, count }: { skill: Skill; index: number; count: number }) {
  const geometries = useMemo(() => {
    const svg = new SVGLoader().parse(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${skill.path}" /></svg>`);
    return svg.paths.flatMap(path => SVGLoader.createShapes(path).map(shape => new ExtrudeGeometry(shape, { depth: 0.7, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.12, bevelThickness: 0.12, curveSegments: 8 })));
  }, [skill.path]);
  useEffect(() => () => geometries.forEach(geometry => geometry.dispose()), [geometries]);
  const angle = (index / count) * Math.PI * 2 + 0.25;
  const x = Math.cos(angle) * 1.72;
  const y = Math.sin(angle) * 1.82 + 0.15;
  return <group position={[x, y, Math.sin(index * 2) * 0.3]} rotation={[0.12, (index % 2 ? -1 : 1) * 0.24, Math.sin(index * 3) * 0.15]}>
    <RoundedBox args={[1.28, 1.28, 0.43]} radius={0.23} smoothness={4}>
      <meshStandardMaterial color={skill.color} roughness={0.78} metalness={0} />
    </RoundedBox>
    <group position={[-0.43, 0.43, 0.24]} scale={[0.036, -0.036, 0.036]}>
      {geometries.map((geometry, i) => <mesh key={i} geometry={geometry}><meshStandardMaterial color="#303733" roughness={0.85} /></mesh>)}
    </group>
  </group>;
}

function Installation() {
  const installation = useRef<Group>(null);
  const invalidate = useThree(state => state.invalidate);
  const gl = useThree(state => state.gl);
  const featured = skills.filter(skill => skill.featured);
  useEffect(() => {
    const group = installation.current;
    if (!group) return;
    const media = gsap.matchMedia();
    media.add('(min-width: 900px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)', () => {
      // Share the DOM hero's playhead: a lazily mounted scene must not create
      // a second ScrollTrigger against an element that is already pinned.
      const journey = gsap.timeline({ paused: true, onUpdate: invalidate });
      journey.to(group.rotation, { y: 0.58, z: -0.12, duration: 1, ease: 'none' }, 0)
        .to(group.position, { y: 0.2, duration: 1, ease: 'none' }, 0);
      group.children.slice(0, featured.length).forEach((badge, i) => {
        journey.to(badge.position, {
          x: (i % 3 - 1) * 1.65, y: (1 - Math.floor(i / 3)) * 1.65,
          z: Math.sin(i) * 0.5, duration: 0.85, ease: 'power1.inOut',
        }, 0.1);
        journey.to(badge.rotation, { z: (i % 2 ? -1 : 1) * 0.12, y: -0.18, duration: 0.85 }, 0.1);
      });
      const ring = group.children[featured.length + 1];
      if (ring) journey.to(ring.scale, { x: 1.28, y: 1.28, z: 1.28, duration: 1 }, 0);
      const sync = (event?: Event) => {
        const progress = event ? (event as CustomEvent<number>).detail : ScrollTrigger.getById('hero-journey')?.animation?.progress() ?? 0;
        journey.progress(progress);
        invalidate();
      };
      window.addEventListener('portfolio:hero-progress', sync);
      sync();
      return () => window.removeEventListener('portfolio:hero-progress', sync);
    });
    const tilt = gsap.quickTo(group.rotation, 'x', { duration: 0.6, onUpdate: invalidate });
    const pointer = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const rect = gl.domElement.getBoundingClientRect();
      tilt((event.clientY - rect.top - rect.height / 2) / rect.height * 0.18);
    };
    const reset = () => tilt(0);
    gl.domElement.addEventListener('pointermove', pointer);
    gl.domElement.addEventListener('pointerleave', reset);
    return () => { media.revert(); gsap.killTweensOf(group.rotation); gl.domElement.removeEventListener('pointermove', pointer); gl.domElement.removeEventListener('pointerleave', reset); };
  }, [gl, invalidate, featured.length]);
  return <group ref={installation} rotation={[0.02, -0.18, -0.08]}>
    {featured.map((skill, i) => <ClayBadge key={skill.id} skill={skill} index={i} count={featured.length} />)}
    <mesh position={[0, -2.38, -0.3]}><cylinderGeometry args={[2.15, 2.22, 0.23, 64]} /><meshStandardMaterial color="#dddcd2" roughness={0.95} /></mesh>
    <mesh position={[0, 0, -0.7]} rotation={[0.15, 0, 0]}><torusGeometry args={[1.8, 0.035, 8, 80]} /><meshStandardMaterial color="#bfc5b7" roughness={0.8} /></mesh>
  </group>;
}

export default function TechScene({ onFailure }: { onFailure: () => void }) {
  return <Canvas aria-hidden="true" orthographic camera={{ position: [0, 0.25, 10], zoom: 78 }} dpr={[1, 1.5]} frameloop="demand"
    gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}>
    <ambientLight intensity={1.6} />
    <directionalLight position={[-3, 6, 6]} intensity={3.2} />
    <directionalLight position={[4, -1, 2]} intensity={0.65} color="#e7edff" />
    <ContextLossGuard onFailure={onFailure} /><ResponsiveCamera /><Installation />
  </Canvas>;
}
