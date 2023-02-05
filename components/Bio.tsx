import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const PortfolioBio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? `translateY(0)` : `translateY(-50%)`,
  });

  return (
    <div className="relative flex flex-col items-center text-center h-80 mt-10">
      <button
        className="bg-slate-600 cursor-pointer z-10 shadow-xl transition-all hover:shadow-sm text-white p-2 rounded-lg hover:bg-slate-700"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle Bio
      </button>
      <animated.div
        className=" w-11/12 p-4 bg-white rounded-lg shadow-lg mt-10"
        style={{
          position: 'absolute',
          top: '10%',
          left: '4%',

          ...animationProps,
        }}
      >
        <p className="text-slate-700 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie
          fringilla nisi, et blandit risus rhoncus in. Aenean euismod
          pellentesque enim, non aliquam orci molestie id.
        </p>
      </animated.div>

      <div className="transform-rotate-x-45">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          3D Transformed Text
        </h1>
      </div>
    </div>
  );
};

export default PortfolioBio;
