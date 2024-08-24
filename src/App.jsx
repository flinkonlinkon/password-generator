import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8); // Corrected typo from 'lenght' to 'length'
  const [numAllow, setNumAllow] = useState(false); // Corrected 'cont' to 'const' and 'useCallback' to 'useState'
  const [chaAllow, setChaAllow] = useState(false); // Corrected 'cont' to 'const' and 'useCallback' to 'useState'
  const [password, setPassword] = useState(''); // Corrected 'useCallback' to 'useState'

  const passGenerator = useCallback(() => {
    let pass = '';
    let stg = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllow) stg += '0123456789';
    if (chaAllow) stg += '!@#$%^&*-_+=[]{}~`';

    for (let i = 0; i < length; i++) { // Changed from i=1 to i=0 and 'lenght' to 'length'
      let cha = Math.floor(Math.random() * stg.length); // Corrected 'lenght' to 'length'
      pass += stg.charAt(cha); // Corrected 'chaAt' to 'charAt'
    }

    setPassword(pass);
  }, [length, numAllow, chaAllow]);

  useEffect(() => {
    passGenerator();
  }, [length, numAllow, chaAllow, passGenerator]);

  return (
    <>
      <div className='w-3/4 mx-auto'>
        <input className='w-full bg-gray-400 text-white text-center' type="text" value={password} readOnly />
        <button className='btn'>copy</button>
        
        <input
          type="range"
          max={100}
          min={8}
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))} // Fixed the onChange handler to update length
        />
        
        <input
          type="checkbox"
          checked={numAllow}
          onChange={() => setNumAllow((prev) => !prev)}
        />
        <label>Include Numbers</label>
        
        <input
          type="checkbox"
          checked={chaAllow}
          onChange={() => setChaAllow((prev) => !prev)}
        />
        <label>Include Special Characters</label>
      </div>
    </>
  );
}

export default App;










