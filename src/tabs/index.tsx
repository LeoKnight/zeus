import * as React from 'react'
import styled from '../theme/styled-components'
import { T } from '../util'
import { FlexRow } from '../globals'

interface TabProps {
  selected?: boolean
}

const Tabs: React.SFC<{}> = ({ children, ...rest }) => <FlexRow {...rest}>{children}</FlexRow>

export const StyledTabs = styled(Tabs)`
  align-self: stretch;
  margin: 0 32px;
  margin-top: 16px;
  align-items: stretch;
  min-height: 48px;
  @media (max-width: 768px) {
    background-color: ${T('palette.white')};
    align-self: stretch;
    margin: 0;
    margin-bottom: 2px;
  }
`

const Tab: React.SFC<TabProps> = ({ children, ...rest }) => <FlexRow {...rest}>{children}</FlexRow>

export const StyledTab = styled(Tab)`
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1;
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.selected ? props.theme.palette.primary : props.theme.palette.black)}
  cursor: pointer;
  position: relative;
  top: 2px;
  border-bottom: 2px solid ${props => (props.selected ? props.theme.palette.primary : props.theme.palette.black)};
  .icon {
    margin-right: 8px;
  }

  &:hover {
    color: ${T('palette.primary')};
  }
  @media (max-width: 768px) {
    flex: auto;
    justify-content: center;
    margin-top: 32px;
    text-align: center;
    .icon {
      margin-right: 0;
    }
  }
`