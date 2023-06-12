import {
  ContactShadows,
  OrbitControls,
    } from "@react-three/drei";

import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { motion } from "framer-motion-3d";
import { framerMotionConfig } from "../config";
import { useEffect } from "react";
import { animate, useMotionValue } from "framer-motion";
import { useFrame, useThree } from "@react-three/fiber";



export const Experience = (props) => {

  const { animation } = useControls({
    animation: {
      value: "Wave",
      options: ["Wave", "Dance", "Bow","Happy"],
    },
  });
  const { section, menuOpened } = props;
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>

      
      
      <ambientLight intensity={1}/>
      
       <group position-y={-1}>
       <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />


       <motion.group
              initial={{ opacity: 0 }}
              
              exit={{ opacity: 0 }}
          animate={{
            opacity:0,
         
          y: section === 1 ? -viewport.height : 0 ,
          color:"yellow"
          
         }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />

        <group >

           <group scale={[1.8, 1.8, 1.8]} position-x={1} position-z={3}
          >

  

         <    Avatar animation={section ===0 ?"Wave":"Dance" }/>

           </group>
           <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-0.001} position-z={2}>
        <planeGeometry />
        <ContactShadows/>
        <meshStandardMaterial color="#FF6978" />
       </mesh>

        </group>
        </motion.group>
        
        
        {/* <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-0.001} position-z={2}>
        <planeGeometry />
        <ContactShadows/>
        <meshStandardMaterial color="#FF6978" />
       </mesh> */}
       {/* <mesh scale={10} rotation-x={-Math.PI * 0.5} position={[0,-4.8,2]}>
        <planeGeometry />
        <ContactShadows/>
        <meshStandardMaterial color="yellow" />
       </mesh> */}
      </group>
      

    </>
  );
};
