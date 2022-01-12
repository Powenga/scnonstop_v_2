import { useState } from 'react';

export default function useLoad(state) {
  const [isLoad, setIsLoad] = useState(state);
  const style = { opacity: isLoad ? 1 : 0 };
  return { isLoad, setIsLoad, style };
}
