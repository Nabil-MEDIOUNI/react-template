import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { MeshWobbleMaterial } from 'drei';
import { useSpring, a } from 'react-spring/three';

const SpinningMesh = ({
  position, color, speed, args,
}) => {
  // ref to target the mesh
  const mesh = useRef();

  // useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  // Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach="material"
        factor={0.6}
      />
    </a.mesh>
  );
};

export default SpinningMesh;
