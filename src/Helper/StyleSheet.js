export const colors = {
  primary_color: '#00F6FF', 
  secondary_color: '#00FADC',
  background_color: '#050A1E',
  secondary_color: '#E6F2EC',
  terciary_color: '#00131A',
  alternate_color: '#001319',

  green_color: '#00FF55',
  red_color: '#FF3333',
  white_color: '#FFF',

  blue_hover: '#8AE3FF',

  primary_text_color: '#FFF',
  secondary_text_color: '#F0F0F0',
  terciary_text_color: '#021014',
  google_button: '#FF5B5B'
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileLMin: '424px',
  mobileL: '425px',
  tabletMin: '767px',
  tablet: '768px',
  laptopMin: '1023px',
  laptop: '1024px',
  laptopM: '1366px',
  laptopL: '1920px',
  desktop: '2260px',
  desktopL: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileLMin})`,
  mobileHeader: `(min-width: ${size.mobileS}) and (max-width: 610px)`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.tabletMin})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptopMin})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};