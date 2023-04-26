import { EDeviceType } from 'src/core/components/responsive/models/device-type.enum';
import { useGlobalContext } from 'src/core/context/global/global-context';
import { EResponsiveType } from '../../models';
import { IUseResponsiveProps } from './props.interface';

const useResponsive = ({
  breakpoint = 'md',
  type = EResponsiveType.bigger,
}: IUseResponsiveProps) => {
  const { userDeviceType } = useGlobalContext();

  const getBreakpointState = () => (type === EResponsiveType.bigger
    ? userDeviceType === EDeviceType.DESKTOP
    : userDeviceType === EDeviceType.MOBILE);

  return getBreakpointState();
};

export default useResponsive;
