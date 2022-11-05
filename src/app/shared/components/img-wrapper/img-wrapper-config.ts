export type ImgWrapper = {
  name: string;
  path?: string;
  // class for set dimension up for svg and wrapper div
  keepDefCss?: boolean;
  wrapperClasses?: string[];
};

export const imgWrapperDefault: ImgWrapper = {
  name: '',
  path: '../../../assets/svgs/imgs/',
  wrapperClasses: ['wrapper-dim-alpha', 'wrapper-circle', 'wrapper-default'],
};
