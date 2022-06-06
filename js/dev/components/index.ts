export { Preloader } from './Preloader/Preloader';
export { AjaxWrapper } from './AjaxWrapper/AjaxWrapper';
export { Button } from './Button/Button';
export { Svg } from './Svg/Svg';
export { Stars } from './Stars/Stars';


export const getClassPrefix = (className: string) => {
    return 'component-' + className;
}