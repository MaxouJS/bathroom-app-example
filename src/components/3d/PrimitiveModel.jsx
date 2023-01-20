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

useGLTF.preload('/models/Bathroom.glb')
useGLTF.preload('/models/BlackSink.glb')
useGLTF.preload('/models/BlackTap.glb')
useGLTF.preload('/models/SilverTap.glb')
useGLTF.preload('/models/WhiteSink.glb')

export default BathroomModel
