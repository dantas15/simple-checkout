import { ReactNode } from 'react';
import { ScreenHeightStack } from './screen-height-stack';

type Props = {
  alignCenter?: boolean;
  children: ReactNode;
};

export function MainContent({ children, alignCenter }: Props) {
  const alignCenterOrUndefined = alignCenter ? 'center' : undefined;
  return (
    <ScreenHeightStack
      py="2rem"
      component="main"
      justifyContent={alignCenterOrUndefined}
      alignItems={alignCenterOrUndefined}
    >
      {children}
    </ScreenHeightStack>
  );
}
