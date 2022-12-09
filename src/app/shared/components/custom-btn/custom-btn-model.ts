export interface customBtn {
  css: {
    color: 'luffy' | 'zoro' | 'sanji';
  };
  label: string;
}

export const defCustomBtn: customBtn = {
  css: {
    color: 'luffy',
  },
  label: `I'm btn label`,
};
