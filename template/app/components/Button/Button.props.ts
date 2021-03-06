import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { TxKeyPath } from '../../i18n';
import { ButtonPresetNames } from './Button.style';

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * use this if there is no key available in the i18n files
   */
  text?: string;

  /**
   * i18n text
   */
  i18n?: TxKeyPath;

  /**
   * i18n options
   */
  i18nOptions?: I18n.TranslateOptions;

  /**
   * use this if you want a custom children
   */
  children?: React.ReactNode;

  style?: StyleProp<ViewStyle>;

  textStyle?: StyleProp<TextStyle>;

  flavor?: ButtonPresetNames;
}
