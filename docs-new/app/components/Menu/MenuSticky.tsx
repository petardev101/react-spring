import { animated } from '@react-spring/web'

import { styled } from '~/styles/stitches.config'

import { useAnimatedHeader } from '~/hooks/useAnimatedHeader'

import { HeaderSubnav } from '../Header/HeaderSubnav'

import { SubtitleSchemaItem } from '../../../scripts/docs/navigation'

interface MenuStickyProps {
  tag?: keyof JSX.IntrinsicElements
  className?: string
  subnav: SubtitleSchemaItem
}

export const MenuSticky = ({ className, subnav }: MenuStickyProps) => {
  const [styles, isStuck] = useAnimatedHeader(false)

  return (
    <StickyMenu className={className} isStuck={isStuck} style={styles}>
      <HeaderSubnav subnav={subnav} />
    </StickyMenu>
  )
}

const StickyMenu = styled(animated.header, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 'inherit',
  backgroundColor: 'rgba(250, 250, 250, 0.80)',
  backdropFilter: 'blur(5px)',
  zIndex: '$1',
  px: 28,
  top: 0,

  '@tabletUp': {
    px: 62,
  },

  variants: {
    isStuck: {
      true: {
        position: 'fixed',

        '& + article': {
          paddingTop: 82,
        },

        '@tabletUp': {
          '& + article': {
            paddingTop: 171,
          },
        },
      },
    },
  },
})