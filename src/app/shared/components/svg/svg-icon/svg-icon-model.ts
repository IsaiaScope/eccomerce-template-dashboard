export interface SvgIcon {
  iconName: string;
  svgClasses?: string;
  path?: string;
}

export const svgIconDefault: SvgIcon = {
  path: '../../../assets/svgs/icons/',
  svgClasses: 'svg-default',
  iconName: '',
};
