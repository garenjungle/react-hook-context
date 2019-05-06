import React from 'react';

const ContentContext = React.createContext();

const useContent = () => {
  const context = React.useContext(ContentContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
};

const ContentProvider = props => {
  const [content, setContent] = React.useState('안녕하세요');
  const value = React.useMemo(() => {
    return { content, setContent };
  }, [content]);
  return <ContentContext.Provider value={value} {...props} />;
};

export { useContent, ContentProvider };
