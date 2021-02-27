import statusesColor from './statusesColor';

const palette = {
  primary: {
    main: '#037Ef3',
    light: 'rgba(3, 126, 243,0.1);',
  },
  secondary: {
    main: '#BF2600',
  },
  text: {
    primary: '#2073d4',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    title: 'rgba(0, 0, 0, 0.6)',
    title2: 'rgba(0, 0, 0, 0.65)',
  },
  common: {
    blue: '#037ef3',
    red: '#f85a40',
    lightGreen: '#30c39e',
    drakGreen: '#0a8ea0',
    orange: '#f48924',
    yellow: '#ffc845',
    black: '#52565e',
    darkBlack: '#3e3e3e',
    gray: '#caccd1',
    white: '#f3f4f7',
    whitesecondary: '#FFF',
  },
  background: {
    paper: '#fff',
    default: '#ffffff',
    light: '#e5e5e5',
    dark: '#9b9b9b',
  },
  statuses: statusesColor,
  products: {
    // gt: 'rgba(17, 141, 158, 1)',
    // ge: 'rgba(67, 186, 154, 1)',
    GlobalVolunteer: 'rgba(240, 92, 66, 1)',
    GlobalTalent: 'rgba(24, 181, 181, 1)',
    GlobalEntrepreneur: 'rgba(244, 137, 36, 1)',
  },
};
export default palette;
