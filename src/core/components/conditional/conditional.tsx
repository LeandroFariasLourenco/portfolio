import { IConditionalProps } from './props.interface';

const Conditional = ({
  children,
  shouldRender,
}: IConditionalProps) => {
  if (shouldRender) return children;

  return null;
};

export default Conditional;
