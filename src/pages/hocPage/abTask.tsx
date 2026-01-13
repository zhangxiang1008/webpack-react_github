import React, { useEffect, useRef, useState } from "react";

const Index: React.FC<any> = () => {
  const [aData, setAdata] = useState<object | null>(null);
  const [bData, setBdata] = useState<object | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setAdata({ a: 1 });
    }, 100);
  });
  useEffect(() => {
    if (aData) {
      setTimeout(() => {
        setBdata({ b: 2 });
      }, 200);
    }
  }, [aData]);

  return (
    <>
      <div></div>
    </>
  );
};
export default Index;
