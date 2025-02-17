import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
import { useRef, useState } from "react";
import logo from "../assets/leetcode (2).svg"
import logo2 from "../assets/github.svg"
import { useNavigate } from "react-router-dom";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const UsernameCard = () => {
    const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const [leetcodeUsername,setLeetcodeUsername] = useState("")
  const [githubUsername,setGithubUsername] = useState("")
  const navigate = useNavigate()
  const SubmitHandeler = () => {
    navigate(`/compare?leetcodeUsername=${leetcodeUsername}&githubUsername=${githubUsername}`)
  }
    return (
        
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-2/5 w-fit px-3 sm:px-8 mx-6 sm:w-1/3 rounded-xl border bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
        <div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }} className="flex flex-col justify-around h-full">
          <div className="flex flex-col justify-around h-full">
              <p className="text-black text-2xl font-bold text-center pt-2">Enter Profile Username</p>
              <div className="flex flex-col gap-4">
                  <div
                  className="flex w-11/12 mx-auto gap-2 items-center rounded px-2">
                      <img src={logo} alt="" className="h-6 w-6" />
                      <input onChange={(e) => {
                          setLeetcodeUsername(e.target.value)
                      }} type="text" placeholder="Leetcode Username" className="w-full text-gray-700 px-2 rounded h-8 "/>
                  </div>
                  <div className="flex w-11/12 mx-auto gap-2 items-center rounded px-2">
                      <img src={logo2} alt="" className="h-6 w-6 bg-white" />
                      <input onChange={(e) => {
                          setGithubUsername(e.target.value)
                      }} type="text" placeholder="Github Username" className="w-full text-gray-700 px-2 rounded h-8"/>
                  </div>
              </div>
              
              <button onClick={SubmitHandeler} className="w-11/12 mx-auto h-9 rounded-lg bg-black text-white text-lg font-bold shadow-sm shadow-white">Submit</button>
          </div>
        </div>
      
    </motion.div>
    )
}