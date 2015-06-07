import { theme } from 'reapp-kit';
import iOS from 'reapp-kit/themes/ios';
import components from './constants/components';
import styles from './styles';

import './main.css';

theme({
  constants: [
    iOS.constants.base,
    iOS.constants.components,
    components
  ],
  styles: [
    iOS.styles,
    styles
  ],
  animations: [iOS.animations]
});
