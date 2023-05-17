import { formatEther, parseEther } from '@ethersproject/units'
import { BigNumber } from '@ethersproject'
import { useState } from 'react'
import styled from 'styled-components'
import { IBurnInfo } from '..'

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 16px;
  border-radius: 16px;
`

const TabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #ff98a4;
  border-radius: 12px;
`

const TabItem = styled.div<{ active: boolean }>`
  border-radius: 12px;
  background-color: ${({ active }) => (active ? '#de2549' : '#ffe0e4')};
  color: ${({ active }) => (active ? 'white' : '#732828')};
  cursor: pointer;
  height: 70px;
  flex: 1;
  transition: all 0.4s;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-align: center;
  &:hover {
    background-color: #de2549;
    color: white;
  }

  @media screen and (max-width: 1120px) {
    height: 60px;
    font-size: 16px;
  }
`

const ContentWrapper = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`

const SectionWrapper = styled.div``

const SectionLabel = styled.div`
  color: #1e1e1e;
  font-size: 20px;
  line-height: 2.2;
`

const SectionValue = styled.div`
  background-color: #c03f58;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ff3323;
  border-radius: 6px;
  color: white;
  font-size: 48px;
  padding: 16px 0;

  @media screen and (max-width: 600px) {
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`

interface IProps {
  burn: IBurnInfo
}

enum ETab {
  Total = 'Total WAG Supply',
  TotalC = 'Total Circ. Supply',
  TotalB = 'Total Wag burnt',
}

export const Supply = ({ burn }: IProps) => {
  const [tab, setTab] = useState(ETab.Total)

  const formatWag = (amount: BigNumber) => amount.div(parseEther('1')).toNumber().toLocaleString('en-US')

  const items = {
    [ETab.Total]: [
      { label: 'Total WAG Supply', value: formatWag(burn.totalSupply) },
      { label: 'Total WAG Supply on BSC', value: formatWag(burn.bscTotalSupply) },
      { label: 'Total WAG Supply on VELAS', value: formatWag(burn.vlxTotalSupply) },
      { label: 'Total WAG Supply on TELOS', value: formatWag(burn.tlosTotalSupply) },
    ],
    [ETab.TotalC]: [
      { label: 'Total Circulating Supply', value: formatWag(burn.cSupply) },
      { label: 'Total Circulating Supply on BSC', value: formatWag(burn.bscCSupply) },
      { label: 'Total Circulating Supply on VELAS', value: formatWag(burn.vlxCSupply) },
      { label: 'Total Circulating Supply on TELOS', value: formatWag(burn.tlosCSupply) },
    ],
    [ETab.TotalB]: [
      { label: 'Total WAG Burnt', value: formatWag(burn.totalBurn) },
      { label: 'Total WAG Burnt on BSC', value: formatWag(burn.bscBurn) },
      { label: 'Total WAG Burnt on VELAS', value: formatWag(burn.vlxBurn) },
      { label: 'Total WAG Burnt on TLOS', value: formatWag(burn.tlosBurn) },
    ],
  }

  return (
    <Container>
      <TabWrapper>
        {Object.values(ETab).map((tabE) => {
          return (
            <TabItem key={tabE} active={tabE === tab} onClick={() => setTab(tabE)}>
              {tabE}
            </TabItem>
          )
        })}
      </TabWrapper>
      <ContentWrapper>
        {items[tab].map((item) => (
          <SectionWrapper key={item.label}>
            <SectionLabel>{item.label}</SectionLabel>
            <SectionValue>{item.value}</SectionValue>
          </SectionWrapper>
        ))}
      </ContentWrapper>
    </Container>
  )
}
