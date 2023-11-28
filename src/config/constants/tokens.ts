import { ChainId, Token } from '@wagyu-swap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { CHAIN_ID } from './networks'
import { SerializedToken } from './types'
import addresses from './addresses.json'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

const defineTokens = <T extends TokenList>(t: T) => t

export const mainnetTokens = {
  wvlx: new Token(MAINNET, addresses[106].WVLX, 18, 'WVLX', 'Wrapped VLX', 'https://wagyuswap.app/'),
  // bnb here points to the wbnb contract. Wherever the currency VLX is required, conditional checks for the symbol 'VLX' can be used
  vlx: new Token(MAINNET, addresses[106].WVLX, 18, 'VLX', 'VLX', 'https://wagyuswap.app/'),
  cake: new Token(MAINNET, addresses[106].WAGToken, 18, 'WAG', 'WAGToken', 'https://wagyuswap.app/'),
  usdt: new Token(
    MAINNET,
    '0x01445C31581c354b7338AC35693AB2001B50b9aE',
    6,
    'USDT',
    'Multichain Tether USD',
    'https://wagyuswap.app/',
  ),
  weth: new Token(
    MAINNET,
    '0x85219708c49aa701871Ad330A94EA0f41dFf24Ca',
    18,
    'WETH',
    'Multichain WETH',
    'https://wagyuswap.app/',
  ),
  bnb: new Token(MAINNET, '0x2b8e9cd44c9e09d936149549a8d207c918ecb5c4', 18, 'BNB', 'BNB', 'https://wagyuswap.app/'),
  busd: new Token(
    MAINNET,
    '0xc111c29A988AE0C0087D97b33C6E6766808A3BD3',
    18,
    'BUSD',
    'Velas BUSD',
    'https://wagyuswap.app/',
  ),
  usdc: new Token(
    MAINNET,
    '0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993',
    6,
    'USDC',
    'Velas USDC',
    'https://wagyuswap.app/',
  ),
  avax: new Token(
    MAINNET,
    '0x525bd1f949ffa2a0c5820f3b6fe61bb897466ff7',
    18,
    'AVAX',
    'Velas AVAX',
    'https://wagyuswap.app/',
  ),
  ftm: new Token(
    MAINNET,
    '0xc9b3aa6e91d70f4ca0988d643ca2bb93851f3de4',
    18,
    'FTM',
    'Velas FTM',
    'https://wagyuswap.app/',
  ),
  matic: new Token(
    MAINNET,
    '0x6ab0b8c1a35f9f4ce107ccbd05049cb1dbd99ec5',
    18,
    'MATIC',
    'Velas Polygon',
    'https://wagyuswap.app/',
  ),
  bitorb: new Token(
    MAINNET,
    '0x09bce7716d46459df7473982fd27a96eabd6ee4d',
    6,
    'BITORB',
    'Bitorbit',
    'https://bitorbit.com',
  ),
  scar: new Token(
    MAINNET,
    '0x8d9fb713587174ee97e91866050c383b5cee6209',
    18,
    'SCAR',
    'Velhalla',
    'https://velhalla.io/',
  ),
  astro: new Token(
    MAINNET,
    '0x72eb7ca07399ec402c5b7aa6a65752b6a1dc0c27',
    18,
    'ASTRO',
    'AstroSwap',
    'https://www.astroswap.app/',
  ),
  swapz: new Token(
    MAINNET,
    '0x9b6fbF0ea23faF0d77B94d5699B44062e5E747Ac',
    18,
    'SWAPZ',
    'SWAPZ.app',
    'https://swapz.app',
  ),
  usdv: new Token(
    MAINNET,
    '0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf',
    18,
    'USDV',
    'USD Velero Stablecoin',
    'https://velero.finance/',
  ),
  vdgt: new Token(
    MAINNET,
    '0xd12f7a98c0d740e7ec82e8caf94eb79c56d1b623',
    18,
    'VDGT',
    'VELERO',
    'https://velero.finance/',
  ),
  dai: new Token(MAINNET, '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d', 18, 'DAI', 'dai', 'https://makerdao.com/'),
  wbtc: new Token(
    MAINNET,
    '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
    18,
    'WBTC',
    'Wrapped Bitcoin',
    'https://wbtc.network/',
  ),
  vlxpad: new Token(
    MAINNET,
    '0xa065e0858417dfc7abc6f2bd4d0185332475c180',
    18,
    'VLXPAD',
    'Velas Pad',
    'https://velaspad.io/',
  ),
  stvlx: new Token(
    MAINNET,
    '0x3557371afed82dd683de278924bd0e1a790a3c49',
    18,
    'stVLX',
    'Staked VLX',
    'https://accumulated.finance/stake/vlx',
  ),
  syrup: new Token(TESTNET, addresses[106].WAGStake, 18, 'WAGStake', 'WAGStake Token', 'https://wagyuswap.app/'),
  // te6: new Token(TESTNET, addresses[111].TE6, 6, 'TE6', 'ERC20 Token', 'https://wagyuswap.app/'),
  // te9: new Token(TESTNET, addresses[111].TE9, 9, 'TE9', 'ERC20 Token', 'https://wagyuswap.app/'),
  // te12: new Token(TESTNET, addresses[111].TE12, 12, 'TE12', 'ERC20 Token', 'https://wagyuswap.app/'),
  // te18: new Token(TESTNET, addresses[111].TE18, 18, 'TE18', 'ERC20 Token', 'https://wagyuswap.app/'),
}

export const testnetTokens = {
  wvlx: new Token(TESTNET, addresses[111].WVLX, 18, 'WVLX', 'Wrapped VLX', 'https://wagyuswap.app/'),
  cake: new Token(TESTNET, addresses[111].WAGToken, 18, 'WAG', 'WAGToken', 'https://wagyuswap.app/'),
  syrup: new Token(TESTNET, addresses[111].WAGStake, 18, 'WAGStake', 'WAGStake Token', 'https://wagyuswap.app/'),
  usdt: new Token(
    TESTNET,
    '0x6Ef054B3E3C3C83E14527E8fa593c2c4435A6ea4',
    18,
    'USDT',
    'Velas USDT',
    'https://wagyuswap.app/',
  ),
  busd: new Token(
    TESTNET,
    '0xe2172a8E1762ae9962A59EE88a731522A61a4cc9',
    18,
    'BUSD',
    'Velas BUSD',
    'https://wagyuswap.app/',
  ),
  usdc: new Token(
    TESTNET,
    '0x6b82bDB5a1AdFfa3816D1F942D60f0269647C646',
    18,
    'USDC',
    'Velas USDC',
    'https://wagyuswap.app/',
  ),
  weth: new Token(
    TESTNET,
    '0x3538C7f88aDbc8ad1F435f7EA70287e26b926344',
    18,
    'WETH',
    'Multichain WETH',
    'https://wagyuswap.app/',
  ),
  te6: new Token(TESTNET, addresses[111].TE6, 6, 'TE6', 'ERC20 Token', 'https://wagyuswap.app/'),
  te9: new Token(TESTNET, addresses[111].TE9, 9, 'TE9', 'ERC20 Token', 'https://wagyuswap.app/'),
  te12: new Token(TESTNET, addresses[111].TE12, 12, 'TE12', 'ERC20 Token', 'https://wagyuswap.app/'),
  te18: new Token(TESTNET, addresses[111].TE18, 18, 'TE18', 'ERC20 Token', 'https://wagyuswap.app/'),
}

const tokens = () => {
  const chainId = CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(testnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] }
    }, {} as typeof testnetTokens)
    // return Object.keys(mainnetTokens).reduce((accum, key) => {
    //   return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    // }, {} as typeof testnetTokens & typeof mainnetTokens)
  }

  return mainnetTokens
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {} as SerializedTokenList)

  return serializedTokens as any
}

export default unserializedTokens
