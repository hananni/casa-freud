const size = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

const devices = {
  xs: `(min-width: ${size.xs})`,
  xsMax: `(max-width: ${size.sm})`,
  sm: `(min-width: ${size.sm})`,
  smMax: `(max-width: ${size.md})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};

export { devices, size };
