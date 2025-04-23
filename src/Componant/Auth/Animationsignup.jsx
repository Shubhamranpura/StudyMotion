import lottie from "lottie-web";
import animationdata from "../../assets/animations/signupanimation.json"
import { useEffect, useRef } from "react";

const Animationssignup = () => {
  const container = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    if (!animationInstance.current) { // Prevent multiple instances
      animationInstance.current = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationdata,
      });
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy(); 
        animationInstance.current = null;
      }
    };
  }, []);
  

  return <div ref={container} style={{ width: 500, height: 500 }} />;
};

export default Animationssignup;
