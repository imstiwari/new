
import React, { useEffect,useRef } from 'react'
import { useAnimations,useFBX, useGLTF } from '@react-three/drei'
import { useControls } from "leva";

export function Avatar(props) {
  const { animation } = props;
  const group=useRef();
  const { nodes, materials } = useGLTF('models/64818d769e0110def75a9f68.glb');
  const {animations : WavingAnimation} = useFBX("animations/Waving.fbx");
  const {animations : HappyAnimation} = useFBX("animations/Happy Idle.fbx");
  const {animations : BowAnimation} = useFBX("animations/Bow.fbx");
  const {animations : DanceAnimation} = useFBX("animations/Dance.fbx");
  const {animations : FallingAnimation} = useFBX("animations/Falling To Roll.fbx");

  
  WavingAnimation[0].name="Wave";
  HappyAnimation[0].name="Happy";
  BowAnimation[0].name="Bow";
  DanceAnimation[0].name="Dance";
  FallingAnimation[0].name="Fall";


  const { actions } = useAnimations(
    [WavingAnimation[0],HappyAnimation[0],BowAnimation[0],DanceAnimation[0], FallingAnimation[0]],
    group
  );

 
  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);


  return (
    <group {...props}  ref={group} dispose={null}>
     <group>
       <primitive object={nodes.Hips} />
       <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
       <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
       <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
       <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
       <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
       <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
       <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
       <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
       <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
       <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
      </group>
    
    </group>
  )
}

useGLTF.preload('models/64818d769e0110def75a9f68.glb')
