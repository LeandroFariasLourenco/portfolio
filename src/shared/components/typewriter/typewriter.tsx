import { useState, memo, useMemo } from 'react';
import cx from 'classnames';
import TypewriterEffect from 'typewriter-effect';
import { ITypewriterProps } from './props.interface';

import styles from './typewriter.module.scss';

const Typewriter = ({
  onInit,
  variant = 'h2',
  variantProps,
  options = {},
}: ITypewriterProps) => {
  const [hasFinished, setHasFinished] = useState<boolean>(false);
  const Variant = useMemo(() => `${variant}` as any, []);

  return (
    <div
      className={`${styles.typewriter} ${cx({
        [styles['is--finished']]: hasFinished,
      })}`}
    >
      <Variant {...variantProps}>
        <TypewriterEffect
          onInit={(typewriter) => {
            onInit(typewriter);
            typewriter.callFunction(() => { setHasFinished(true); });
          }}
          options={{
            delay: 75,
            ...options,
          }}
        />
      </Variant>
    </div>
  );
};
export default memo(Typewriter);
