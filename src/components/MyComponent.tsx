import React from 'react';
import '../styles/styles.css'; // Import custom CSS

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return <div className="my-component">{text}</div>;
};

export default MyComponent;