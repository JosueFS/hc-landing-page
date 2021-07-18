import React, {
  InputHTMLAttributes,
  useState,
  useRef,
  useCallback,
  forwardRef
} from 'react';
import { useEffect } from 'react';
import { IconBaseProps } from 'react-icons';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  isFocused: (e: any) => void;
  isFilled: (e: any) => void;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  icon: Icon,
  isFocused,
  isFilled,
  ...rest
}, ref) => {
  
  

  return (
    <div
      className="input-container"
      >
      {Icon && <Icon size={24} />}
      <input
        name={name}
        onFocus={e => isFocused(e)}
        onBlur={e => isFilled(e)}
        ref={ref}
        {...rest}
      />
    </div>
  );
};

export default forwardRef(Input);