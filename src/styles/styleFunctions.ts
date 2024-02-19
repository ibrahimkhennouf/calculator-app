import { darkThemeColors, lightThemeColors } from './colors';

export const getBackgroundColor = (theme: string) => ({
  backgroundColor:
    theme === 'dark'
      ? darkThemeColors.backgroundColorDark
      : lightThemeColors.backgroundColorLight
});

export const getSecondaryBgColor = (theme: string) => ({
  backgroundColor:
    theme === 'dark'
      ? darkThemeColors.secondaryBackgroundColorDark
      : lightThemeColors.secondaryBackgroundColorLight
});

export const getThirdBgColor = (theme: string) => ({
  backgroundColor:
    theme === 'dark'
      ? darkThemeColors.thirdBackgroundColorDark
      : lightThemeColors.thirdBackgroundColorLight
});

export const getPrimaryColor = (theme: string) => ({
  color:
    theme === 'dark'
      ? darkThemeColors.primaryColorDark
      : lightThemeColors.primaryColorLight
});

export const getSecondaryColor = (theme: string) => ({
  color:
    theme === 'dark'
      ? darkThemeColors.secondaryColorDark
      : lightThemeColors.secondaryColorLight
});

export const getPrimaryTextColor = (theme: string) => ({
  color:
    theme === 'dark'
      ? darkThemeColors.textColorDark1
      : lightThemeColors.textColorLight1
});

export const getSecondaryTextColor = (theme: string) => ({
  color:
    theme === 'dark'
      ? darkThemeColors.textColorDark2
      : lightThemeColors.textColorLight2
});

export const getThirdTextColor = (theme: string) => ({
  color:
    theme === 'dark'
      ? darkThemeColors.textColorDark3
      : lightThemeColors.textColorLight3
});

export const symbolStyles = (theme: string) => ({
  color: getSecondaryColor(theme).color,
  backgroundColor: getSecondaryBgColor(theme).backgroundColor,
  marginLeft: 0
});

export const suppStyles = (theme: string) => ({
  ...symbolStyles(theme),
  backgroundColor: getSecondaryBgColor(theme).backgroundColor
});

export const opStyles = (theme: string) => ({
  color: getPrimaryColor(theme).color,
  backgroundColor: getThirdBgColor(theme).backgroundColor,
  marginLeft: 0
});
