import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <TypeAnimation
      sequence={[
        'Lorem ipsum', 2000,
        'Dolor sit amit', 2000,
        '1Lorem ipsum', 2000,
        '2Dolor sit amit', 2000
      ]}
      wrapper="span" speed={50} repeat={Infinity}
    />
  );
}

export default App;
