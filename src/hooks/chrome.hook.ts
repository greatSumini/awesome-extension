import { useState, useEffect } from 'react';

export const useActiveTabUrl = () => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs?.query(queryInfo, (tabs) => {
      setUrl(tabs[0]?.url ?? '');
    });
  }, []);

  return url;
};
