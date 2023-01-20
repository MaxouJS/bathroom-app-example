import { Canvas } from '@react-three/fiber'
import { Html, PresentationControls } from '@react-three/drei'

import SinkList from '../components/2d/lists/SinkList'
import TapList from '../components/2d/lists/TapList'

import PrimitiveModel from '../components/3d/PrimitiveModel'
import { RecoilRoot } from 'recoil'

const Bathroom = () => {
  const sinks = [
    {
      fileName: 'BlackSink',
      name: 'Black Sink'
    },
    {
      fileName: 'WhiteSink',
      name: 'White Sink'
    }
  ]

  const taps = [
    {
      fileName: 'BlackTap',
      name: 'Black Tap'
    },
    {
      fileName: 'WhiteTap',
      name: 'Silver Tap'
    }
  ]

  return (
    <div className='h-screen w-screen'>
      <Canvas
        shadows
        className='bg-white'
      >
        <RecoilRoot>
        <PresentationControls
          snap={<PrimitiveModel />}
          polar={[-0.2, 0.2]}
          azimuth={[-0.4, 0.4]}
          rotation={[0.5, 0, 0]}
        >
          <ambientLight />
          <directionalLight position={[5, 20, 10]} />
          <PrimitiveModel
            fileName='Bathroom'
            position={[0.7825, -0.5, 4]}
          />
          <PrimitiveModel
            fileName='BlackSink'
            position={[0.7825, -0.5, 4]}
          />
          <PrimitiveModel
            fileName='SilverTap'
            position={[0.7825, -0.5, 4]}
          />
        </PresentationControls>
        <Html fullscreen>
          <div className='absolute bottom-0 shadow-xl w-full p-4'>
            <div className='flex items-end'>
              <div className='flex flex-col bg-white/50 bg-clip-padding backdrop-filter backdrop-blur-md rounded-xl shadow-xl p-4 space-y-2'>
                <span className='text-xs'>Made by Maxence Gumiero</span>
                <a className='text-xs underline hover:text-blue-600 duration-200' href='https://github.com/MaxouJS/bathroom-app-example' target='_blank'>GitHub Repo</a>
              </div>
              <div className='ml-auto flex-col bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-md rounded-xl shadow-xl p-8 space-y-4'>
                <h1 className='text-2xl font-black pb-2 border-b border-black/25'>Bathroom Maker</h1>
                <div className='flex space-x-4'>
                  <SinkList sinks={sinks} />
                  <TapList taps={taps} />
                </div>
              </div>
            </div>
          </div>
        </Html></RecoilRoot>
      </Canvas>
    </div>
  )
}

export default Bathroom