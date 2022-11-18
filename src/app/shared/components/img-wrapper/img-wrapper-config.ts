export type ImgWrapper = {
  url?: string;
  name: string;
  path?: string;
  type?: string;
  // class for set dimension up for svg and wrapper div
  keepDefCss?: boolean;
  wrapperClasses?: string[];
};

export const imgWrapperDefault: ImgWrapper = {
  name: '',
  path: '../../../assets/svgs/imgs/',
  type: '.svg',
  wrapperClasses: ['wrapper-default'],
};
