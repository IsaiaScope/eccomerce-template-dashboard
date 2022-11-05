export type SvgData = {
  name: string;
  path?: string;
  // class for set dimension up for svg and wrapper div
  shareDimClass?: string[];
  wrapperClasses?: string[];
  svgClasses?: string[];
};

export const svgDataDefault: SvgData = {
  name: '',
  path: '../../../assets/svgs/icons/',
  shareDimClass: ['svg-share-default'],
  wrapperClasses: ['svg-wrapper-default'],
  svgClasses: ['svg-icon-default'],
};
