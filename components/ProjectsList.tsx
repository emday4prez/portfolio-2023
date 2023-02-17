// import { useState, useEffect } from 'react';
// import { useTrail, animated } from 'react-spring';

// interface Project {
//   title: string;
//   description: string;
//   url: string;
//   technologies: string[];
// }

// const ProjectList = ({ projects }) => {
//   const [showList, setShowList] = useState(false);
//   const trail = useTrail(projects.length, {
//     from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
//     to: { opacity: showList ? 1 : 0, transform: 'translate3d(0, 0, 0)' },
//   });

//   useEffect(() => {
//     setTimeout(() => {
//       setShowList(true);
//     }, 1000);
//   }, []);

//   return (
//     <ul className="flex flex-col text-slate-900">
//       {trail.map(({ opacity, transform }, index) => (
//         <animated.li
//           key={projects[index].title}
//           style={{
//             opacity,
//             transform,
//             transition: 'opacity 0.5s, transform 0.5s',
//             padding: '1rem',
//             backgroundColor: '#f2f2f2',
//             borderRadius: '4px',
//             marginBottom: '1rem',
//           }}
//           className="text-center"
//         >
//           {projects[index].title}
//         </animated.li>
//       ))}
//     </ul>
//   );
// };

// export default ProjectList;
