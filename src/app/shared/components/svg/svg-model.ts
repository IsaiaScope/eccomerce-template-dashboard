export type SvgData = {
  name: string;
  path?: string;
  // class for set dimension up for svg and wrapper div
  wrapperClasses?: string[];
  svgClasses?: {
    fill?: string | string[];
    dim?: string | string[];
    filter?: string | string[];
    extras?: string | string[];
  };
};

export const svgDataDefault: SvgData = {
  name: '',
  path: '../../../assets/svgs/icons/',
  svgClasses: {
    fill: 'svg-fill-default',
    dim: 'svg-dim-default',
    filter: 'svg-filter-default',
  },
};
