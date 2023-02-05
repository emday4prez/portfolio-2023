import { useSpring, animated } from 'react-spring';

const TextAnimation = () => {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-100%)',
  }));

  const handleScroll = () => {
    set({
      opacity: 1,
      transform: 'translateX(0%)',
    });
  };

  return (
    <animated.div
      className="fixed top-0 left-0 right-0 bottom-0 h-screen w-full flex items-center justify-center"
      style={props}
      onWheel={handleScroll}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Text Text Animation Text Animation Text Animation Text Animation Text
        Animation Text Animation Text Animation Text Animation Text Animation
        Text Animation Text Animation Text Animation Text Animation Text
        Animation Text Animation Text Animation Text Animation Text Animation
        Text Animation
      </h1>
    </animated.div>
  );
};

export default TextAnimation;
