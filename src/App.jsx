import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8); 
  const [numAllow, setNumAllow] = useState(false);
  const [chaAllow, setChaAllow] = useState(false); 
  const [password, setPassword] = useState(''); 

  const passGenerator = useCallback(() => {
    let pass = '';
    let stg = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllow) stg += '0123456789';
    if (chaAllow) stg += '!@#$%^&*-_+=[]{}~`';

    for (let i = 0; i < length; i++) {
      let cha = Math.floor(Math.random() * stg.length); 
      pass += stg.charAt(cha);
    }

    setPassword(pass);
  }, [length, numAllow, chaAllow]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passGenerator();
  }, [length, numAllow, chaAllow, passGenerator]);

  return (
    <>
      <div className='w-3/4 mx-auto'>
        <input className='w-full bg-gray-400 text-white text-center' type="text" value={password} readOnly />
        <button onClick={copyPasswordToClipboard} className='btn'>copy</button>
        
        <input
          type="range"
          max={100}
          min={8}
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))} 
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










