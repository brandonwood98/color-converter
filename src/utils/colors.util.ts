import { RGB } from 'src/models/rgb.model';

const getContrast = (hexcolor: string) => {
  const rgb = hexToRGB(hexcolor);
  if (!rgb) {
    return '#000';
  }
  var yiq = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#FFF';
};

const hexToRGB = (hex: string): RGB | null => {
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(function (hex) {
        return hex + hex;
      })
      .join('');
  }

  const result = {
    r: parseInt(hex.substr(0, 2), 16),
    g: parseInt(hex.substr(2, 2), 16),
    b: parseInt(hex.substr(4, 2), 16),
  } as RGB;

  if (isNaN(result.r) || isNaN(result.g) || isNaN(result.b)) {
    return null;
  }

  return result;
};

export const colorUtils = { hexToRGB, getContrast };
