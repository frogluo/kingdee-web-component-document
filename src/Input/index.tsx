import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import withComponent, { ComponentProps } from '../common/withComponent';
const Input = (props: ComponentProps) => {
  console.log(props);
  const divRef = useRef(null);

  const [value, setValue] = useState('');

  useEffect(() => {
    if (!divRef.current) return;
    const dom = divRef.current.querySelector('kd-input');
    dom.addEventListener('change', (e: ChangeEvent) => {
      setValue(e.target.value);
    });
  }, [divRef]);

  return (
    <div ref={divRef}>
      <kd-input {...props} />
      当前输入的内容是： {value}
    </div>
  );
};

export default withComponent(Input);
