import { Outlet } from 'remix'
import { MDXProvider } from '@mdx-js/react'

import { styled } from '~/styles/stitches.config'

import { Header } from '../components/Header'
import { Heading, HeadingProps } from '~/components/Text/Heading'
import { Copy, CopyProps } from '~/components/Text/Copy'
import { List, ListProps } from '~/components/Text/List'
import { Anchor, AnchorProps } from '~/components/Text/Anchor'

const comps = {
  h1: (props: HeadingProps) => (
    <Heading
      fontStyle="$XL"
      css={{
        mb: 20,
        '@tabletUp': {
          mb: 30,
        },
      }}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <Heading
      tag="h2"
      fontStyle="$L"
      css={{
        mt: 30,
        mb: 15,

        '@tabletUp': {
          mt: 40,
          mb: 20,
        },
      }}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <Heading tag="h3" fontStyle="$M" css={{ mt: 40, mb: 20 }} {...props} />
  ),
  h4: (props: HeadingProps) => (
    <Heading
      tag="h4"
      fontStyle="$S"
      css={{
        mt: 30,
        mb: 15,

        '@tabletUp': {
          mt: 40,
          mb: 20,
        },
      }}
      {...props}
    />
  ),
  h5: (props: HeadingProps) => (
    <Heading
      tag="h5"
      fontStyle="$XS"
      css={{
        mt: 30,
        mb: 4,
        textTransform: 'uppercase',

        '@tabletUp': {
          mt: 40,
          mb: 6,
        },
      }}
      {...props}
    />
  ),
  h6: () => null,
  p: (props: CopyProps) => (
    <Copy
      css={{
        '& + &': {
          mt: 15,
        },
      }}
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <List
      css={{
        mt: 15,
      }}
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <List
      tag="ol"
      css={{
        mt: 15,
      }}
      {...props}
    />
  ),
  a: (props: AnchorProps) => <Anchor {...props} />,
}

export default function DocsLayout() {
  return (
    <>
      <Header />
      <Main>
        <MDXProvider components={comps}>
          <Outlet />
        </MDXProvider>
      </Main>
    </>
  )
}

const Main = styled('main', {
  padding: '0 $25',
  width: '100%',
  maxWidth: '$document',
  margin: '0 auto',

  '@tabletUp': {
    padding: '0 $15',
  },
})

const MyHiddenThing = styled('h1', {
  color: 'pink',
  fontSize: '$XL',
})
