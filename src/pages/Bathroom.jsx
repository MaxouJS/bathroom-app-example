
import { Suspense, useEffect, useState } from 'react'
import { useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilState } from 'recoil'
import { Canvas } from '@react-three/fiber'
import { Html, PresentationControls, useProgress } from '@react-three/drei'
import { ImSpinner8 } from 'react-icons/im'

import SinkList from '../components/2d/lists/SinkList'
import TapList from '../components/2d/lists/TapList'
import VanityList from '../components/2d/lists/VanityList'

import PrimitiveModel from '../components/3d/PrimitiveModel'

import loadedState from '../atoms/loadedState'
import currentSinkState from '../atoms/currentSinkState'
import currentTapState from '../atoms/currentTapState'
import currentVanityState from '../atoms/currentVanityState'

const Loader = () => {
  const { progress } = useProgress()

  const [loaded, setLoaded] = useRecoilState(loadedState)

  useEffect(() => {
    setLoaded(false)

    if (progress >= 100) {
      setLoaded(true)
    }
  }, [progress])

  return (
    <Html fullscreen>
      <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-green-400 via-sky-400 to-teal-400'>
        <div className='flex-col text-center space-y-8'>
          <img src='./images/Tradelink.png' className='h-32' />
          <div className='flex-col space-y-4'>
            <span className='text-4xl font-black text-white animate-pulse'>Loading {progress.toFixed(0)}%</span>
          </div>
        </div>
      </div>
    </Html>
  )
}

const Bathroom = () => {
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE()

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
      fileName: 'SilverTap',
      name: 'Silver Tap'
    }
  ]

  const vanities = [
    {
      fileName: 'BlackVanity',
      name: 'Black Vanity'
    },
    {
      fileName: 'GreyVanity',
      name: 'Grey Vanity'
    },
    {
      fileName: 'NeutralVanity',
      name: 'Neutral Vanity'
    },
    {
      fileName: 'WhiteVanity',
      name: 'White Vanity'
    }
  ]

  const [currentSink, setCurrentSink] = useRecoilState(currentSinkState)
  const [currentTap, setCurrentTap] = useRecoilState(currentTapState)
  const [currentVanity, setCurrentVanity] = useRecoilState(currentVanityState)
  const [loaded, setLoaded] = useRecoilState(loadedState)

  const [cursor, setCursor] = useState('cursor-grab')
  
  useEffect(() => {
    setCurrentSink(sinks[0])
    setCurrentTap(taps[0])
    setCurrentVanity(vanities[0])
  }, [])

  return (
    <div className='min-safe-h-screen h-screen w-screen cursor-grab'>
      <Canvas
        shadows
        onMouseDown={() => {setCursor('cursor-grabbing')}}
        onMouseUp={() => {setCursor('cursor-grab')}}
        className={cursor}
      >
        <Suspense fallback={<Loader />}>
          <PresentationControls
            snap={<PrimitiveModel />}
            polar={[-0.2, 0.2]}
            azimuth={[-0.4, 0.4]}
            rotation={[0.5, 0, 0]}
            cursor={true} 
          >
            <ambientLight />
            <directionalLight position={[5, 20, 10]} />
            <PrimitiveModel
              fileName='EmptyBathroom'
              position={[0.7825, -0.5, 4]}
            />
            {
              currentSink && currentSink.name === 'Black Sink'
                ? 
                  <PrimitiveModel
                    fileName='BlackSink'
                    position={[0.7825, -0.5, 4]}
                  />
                :
                  null
            }
            {
              currentSink && currentSink.name === 'White Sink'
                ? 
                  <PrimitiveModel
                    fileName='WhiteSink'
                    position={[0.7825, -0.5, 4]}
                  />
                :
                  null
            }
            {
              currentTap && currentTap.name === 'Black Tap'
                ? 
                  <PrimitiveModel
                    fileName='BlackTap'
                    position={[0.7825, -0.5, 4]}
                  />
                :
                  null
            }
            {
              currentTap && currentTap.name === 'Silver Tap'
                ? 
                  <PrimitiveModel
                    fileName='SilverTap'
                    position={[0.7825, -0.5, 4]}
                  />
                :
                  null
            }
            {
              currentVanity && currentVanity.name === 'Black Vanity'
                ? 
                  <PrimitiveModel
                    fileName='BlackVanity'
                    position={[0.7825, -0.5, 4]}
                  />
                :
                  null
            }
            {
              currentVanity && currentVanity.name === 'Grey Vanity'
                ? 
                  <PrimitiveModel
                    fileName='GreyVanity'
                    position={[0.7825, -0.5, 4]}
                  />
                :
                  null
            }
            {
              currentVanity && currentVanity.name === 'Neutral Vanity'
                ? 
                  <PrimitiveModel
                    fileName='NeutralVanity'
                    position={[0.7825, -0.5, 4]}
                  />
                :
                  null
            }
            {
              currentVanity && currentVanity.name === 'White Vanity'
                ? 
                  <PrimitiveModel
                    fileName='WhiteVanity'
                    position={[0.7825, -0.5, 4]}
                  />
                :
                  null
            }
            {
              !loaded
                ?
                  <>
                    {
                      sinks.map((s, index) => (
                        <PrimitiveModel key={index}
                            fileName={s.fileName}
                            position={[0.7825, -0.5, 4]}
                        />
                      ))
                    }
                    {
                      taps.map((t, index) => (
                        <PrimitiveModel key={index}
                            fileName={t.fileName}
                            position={[0.7825, -0.5, 4]}
                        />
                      ))
                    }
                    {
                      vanities.map((v, index) => (
                        <PrimitiveModel key={index}
                            fileName={v.fileName}
                            position={[0.7825, -0.5, 4]}
                        />
                      ))
                    }
                  </>
                :
                  null
            }
          </PresentationControls>
          <Html fullscreen>
            <div className='py-1 px-4'>
              <a href='https://tradelink.com.au/' target='_blank'>
                <img src='./images/Tradelink.png' className='w-64 mb-2' />
              </a>
              <span className='bg-gradient-to-r from-[#005AAC] to-transparent py-2 px-3 text-white text-sm font-bold'>Example demo for Tradelink</span>
            </div>
            <div className='absolute bottom-0 shadow-xl w-full p-4'>
              <div className='flex items-end'>
                <div className='flex-col bg-white/50 bg-clip-padding backdrop-filter backdrop-blur-md rounded-xl shadow-xl p-4 space-y-2 cursor-auto md:flex hidden'>
                  <span className='text-xs'>Made by Max Gumiero</span>
                  <a className='text-xs underline hover:text-blue-600 duration-200' href='https://github.com/MaxouJS/bathroom-app-example' target='_blank'>GitHub Repo</a>
                </div>
                <div className='ml-auto flex-col bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-md rounded-xl shadow-xl p-8 space-y-4 cursor-auto'>
                  <h1 className='md:text-2xl text-md font-black md:pb-2 border-b border-black/25'>Vanity builder</h1>
                  <div className='flex-col'>
                    <RecoilBridge>
                      <SinkList sinks={sinks} />
                      <TapList taps={taps} />
                      <VanityList vanities={vanities} />
                    </RecoilBridge>
                  </div>
                </div>
              </div>
            </div>
          </Html>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Bathroom