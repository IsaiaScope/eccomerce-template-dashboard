export type SvgData = {
  type: 'icon' | 'img';
  name: string;
  path?: string;
  // class for set dimension up for svg and wrapper div
  shareDimClass?: string[];
  wrapperClasses?: string[];
  svgClasses?: string[];
};

export const svgIconDefault: SvgData = {
  type: 'icon',
  name: '',
  path: '../../../assets/svgs/icons/',
  shareDimClass: ['svg-icon-default'],
  wrapperClasses: ['svg-wrapper-default'],
};

export const svgImgDefault: SvgData = {
  type: 'img',
  name: '',
  path: '../../../../assets/svgs/imgs/',
  shareDimClass: ['svg-img-default'],
  wrapperClasses: ['svg-wrapper-default'],
};
