export interface ISectionProps {
  children: ReactNode;
  gridStyle?: CSSProperties;
  id?: string;
  icon: ReactNode;
  childrenWrapperProps?: GridProps;
  onTitleShow: (t: TypewriterClass) => void;
}
