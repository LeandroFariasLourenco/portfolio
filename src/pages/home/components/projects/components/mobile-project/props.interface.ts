import Swiper from 'swiper';
import { IProject } from '../../models/project.interface';

export interface IMobileProjectProps {
  project: IProject;
  swiperRef: Swiper
}
