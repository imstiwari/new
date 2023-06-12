import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "/src/components/ScrollManager";
import { useEffect, useState } from "react";
import { Leva } from "leva";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";

function App() {
  
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <> <MotionConfig
    transition={{
      ...framerMotionConfig,
    }}
      >
        <Canvas shadows camera={{ position: [-1, 3, 10], fov: 26}}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={3} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened}  />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>     
     <Menu 
     onSectionChange={setSection}
     menuOpened={menuOpened}
     setMenuOpened={setMenuOpened}/>
     <Cursor/>
     </MotionConfig>
     <Leva hidden />
    </>
    

  );
}

export default App;
