import { TagCloud } from 'react-tagcloud';

const data = [
  { value: 'JavaScript', count: 27 },
  { value: 'React', count: 35 },
  { value: 'Node', count: 33 },
  { value: 'Express', count: 22 },
  { value: 'HTML5', count: 16 },
  { value: 'MongoDB', count: 20 },
  { value: 'CSS', count: 23 },
  { value: 'Tailwind', count: 21 },
  { value: 'GraphQL', count: 17 },
  { value: 'Docker', count: 13 },
  { value: 'Stripe', count: 26 },
  { value: 'TypeScript', count: 15 },
  { value: 'Firestore', count: 18 },
  { value: 'AWS', count: 11 },
  { value: 'React Router', count: 19 },
  { value: 'Next.js', count: 25 },
  { value: 'Strapi', count: 23 },
  { value: 'Github', count: 19 },
  { value: 'CLI', count: 15 },
  { value: 'Digital Ocean', count: 10 },
  { value: 'CMS', count: 19 },
  { value: 'Webpack', count: 11 },
  { value: 'OAuth', count: 21 },
  { value: 'Accessibility', count: 10 },
  { value: 'SQL', count: 10 },
  { value: 'Jest', count: 17 },
  { value: 'React Spring', count: 12 },
  { value: 'Remix', count: 16 },
  { value: 'Shopify', count: 10 },
];

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 2s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 12}em`,
      border: `1px solid ${color}`,
      margin: '1px',
      padding: '1px',
      display: 'inline-block',
      color: 'white',
    }}
  >
    {tag.value}
  </span>
);

const SimpleCloud = () => (
  <div className=" bg-gradient-to-b  text-center from-slate-600 to-slate-500 text-slate-100">
    <h2 className="text-3xl md:text-6xl md:p-16 h-40 tracking-widest mb-0 md:mb-1">
      My Toolbox
    </h2>
    <TagCloud
      minSize={12}
      maxSize={45}
      tags={data}
      renderer={customRenderer}
      randomSeed={22}
    />
  </div>
);

export default SimpleCloud;
