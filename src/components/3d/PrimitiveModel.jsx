import { useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils'

const BathroomModel = (props) => {
  let { scene } = useGLTF(`/models/${props.fileName}.glb`)
  
  scene = useMemo(() => clone(scene), [scene])
     
  useEffect(() => {
    scene.traverse((child) => {
      child.frustumCulled = false
    })
  }, [scene])
  
  return (
    <primitive
      position={props.position}
      rotation={props.rotation}
      scale={props.scale}
      object={scene}
    />
  )
}

useGLTF.preload('/models/EmptyBathroom.glb')
useGLTF.preload('/models/BlackSink.glb')
useGLTF.preload('/models/BlackTap.glb')
useGLTF.preload('/models/SilverTap.glb')
useGLTF.preload('/models/WhiteSink.glb')
useGLTF.preload('/models/BlackCabinet.glb')
useGLTF.preload('/models/BlackCabinetFloor.glb')
useGLTF.preload('/models/GreyCabinet.glb')
useGLTF.preload('/models/GreyCabinetFloor.glb')
useGLTF.preload('/models/NeutralCabinet.glb')
useGLTF.preload('/models/NeutralCabinetFloor.glb')
useGLTF.preload('/models/WhiteCabinet.glb')
useGLTF.preload('/models/WhiteCabinetFloor.glb')

export default BathroomModel
