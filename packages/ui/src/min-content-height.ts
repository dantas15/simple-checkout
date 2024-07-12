import { footerHeight } from './components/footer';

const wooviLogoSize = '2.3125rem'; // 37px (from figma :/)
const paddingFromHeaderContentAndFooter = '3rem';
export const minContentHeight = `calc(100vh - (${footerHeight}px + ${wooviLogoSize} + ${paddingFromHeaderContentAndFooter}))`;
