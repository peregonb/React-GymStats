import { App } from '@redux/store';
import { useSelector as useSelectorFromRedux } from 'react-redux';

const useSelector = <T>(selector: (state: App) => T): T => useSelectorFromRedux(selector);

export default useSelector;
