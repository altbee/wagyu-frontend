import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Text, Flex, CardBody, CardFooter, Button, AddIcon } from 'packages/uikit'
import Link from 'next/link'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { AppHeader, AppBody } from '../../components/App'
import Page from '../Page'
import { BigNumber } from '@ethersproject/bignumber'
import axios from 'axios'
import { Supply } from './components/Supply'
import { Burn } from './components/Burn'

const Body = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 10;
  padding: 32px 0;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`

const SupplyContainer = styled.div`
  align-self: stretch;
  max-width: 662px;
  flex: 66;

  @media screen and (max-width: 850px) {
    max-width: unset;
  }
`

const BurnContainer = styled.div`
  align-self: stretch;
  max-width: 482px;
  flex: 44;

  @media screen and (max-width: 850px) {
    max-width: unset;
  }
`

export interface IBurnInfo {
  bscTotalSupply: BigNumber
  tlosTotalSupply: BigNumber
  vlxTotalSupply: BigNumber
  totalSupply: BigNumber
  bscBurn: BigNumber
  vlxBurn: BigNumber
  tlosBurn: BigNumber
  totalBurn: BigNumber
  nextBurn: BigNumber
  bscCSupply: BigNumber
  vlxCSupply: BigNumber
  tlosCSupply: BigNumber
  cSupply: BigNumber
}
const ZERO = BigNumber.from(0)
const defaultBurnInfo: IBurnInfo = {
  bscTotalSupply: ZERO,
  vlxTotalSupply: ZERO,
  tlosTotalSupply: ZERO,
  totalSupply: ZERO,
  bscBurn: ZERO,
  vlxBurn: ZERO,
  tlosBurn: ZERO,
  totalBurn: ZERO,
  nextBurn: ZERO,
  bscCSupply: ZERO,
  vlxCSupply: ZERO,
  tlosCSupply: ZERO,
  cSupply: ZERO,
}

export default function WagBurn() {
  const { account } = useActiveWeb3React()
  const { t } = useTranslation()

  const [burn, setBurn] = useState<IBurnInfo>(defaultBurnInfo)

  useEffect(() => {
    let mounted = true

    const loadInfo = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SUPPLY_ENDPOINT || '')
        const data = await response.json()

        const info = { ...data }
        Object.keys(info).forEach((key) => {
          info[key] = BigNumber.from(info[key])
        })

        setBurn(info)
      } catch (error) {
        setBurn(defaultBurnInfo)
      }
    }

    loadInfo()
    const interval = setInterval(loadInfo, 20000)

    return () => {
      clearInterval(interval)
      mounted = false
    }
  }, [])

  return (
    <Page bgUrl="/images/swap/bg.svg">
      <Body>
        <SupplyContainer>
          <Supply burn={burn} />
        </SupplyContainer>
        <BurnContainer>
          <Burn burn={burn} />
        </BurnContainer>
      </Body>
    </Page>
  )
}
