const CONSTANTS = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  svgIconsList: {
    path: '../../../assets/svgs/icons/',
    iconsName: [
      'cabin',
      'search',
      'shopping-cart',
      'profile',
      'email',
      'password',
    ],
  },
};

export const C = Object.freeze(CONSTANTS);
export const BP = Object.freeze(CONSTANTS.breakpoints);
