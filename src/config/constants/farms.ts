import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'
import { ChainId } from '@wagyu-swap/sdk'

const serializedTokens = serializeTokens()

const chainId = parseInt(CHAIN_ID, 10)
const { MAINNET } = ChainId

export const VLX_WAG_FARM_PID = chainId === MAINNET ? 1 : 9 // WAG-VLX (2)
export const VLX_USDT_FARM_PID = chainId === MAINNET ? 5 : 6 // BUSD-VLX (3)

const farms: SerializedFarmConfig[] =
  chainId === MAINNET
    ? [
        {
          pid: 0,
          v1pid: 0,
          lpSymbol: 'WAG',
          lpAddresses: {
            111: '',
            106: '0xaBf26902Fd7B624e0db40D31171eA9ddDf078351',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          v1pid: 1,
          lpSymbol: 'VLX_WAG LP',
          lpAddresses: {
            111: '',
            106: '0x33f879690C165cC320B0BA04cEb1F9CeaC80F376',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 2,
          v1pid: 2,
          lpSymbol: 'VLX_ETH LP',
          lpAddresses: {
            111: '',
            106: '0x7c3F1eA99770aa23Fe1b19097c93BB0cF34C8351',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 3,
          v1pid: 3,
          lpSymbol: 'VLX_BUSD LP',
          lpAddresses: {
            111: '',
            106: '0x8e2B762Bee3E2bf2C8fB0cdd04274042748D6C23',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 4,
          v1pid: 4,
          lpSymbol: 'VLX_USDC LP',
          lpAddresses: {
            111: '',
            106: '0x757Ac3cDFfa84b67dFC58c5880Aa8037ef5a23d5',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 5,
          v1pid: 5,
          lpSymbol: 'VLX_USDT LP',
          lpAddresses: {
            111: '',
            106: '0x7F3cB73FC470c2c9F543FdD17dF4De0e97b51A97',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 6,
          v1pid: 6,
          lpSymbol: 'VLX_BITORB LP',
          lpAddresses: {
            111: '',
            106: '0xa4c1Ee69750Ff17a2fa561D697E2fb23f4e0A842',
          },
          token: serializedTokens.bitorb,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 7,
          v1pid: 7,
          lpSymbol: 'VLX_SCAR LP',
          lpAddresses: {
            111: '',
            106: '0x9D4192D18c49dd9e4DBC3892dd55Cd8EC4081299',
          },
          token: serializedTokens.scar,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 10,
          v1pid: 10,
          lpSymbol: 'WAG_ASTRO LP',
          lpAddresses: {
            111: '',
            106: '0x40AC95e5855878e614f838ABf2b84853e84F188d',
          },
          token: serializedTokens.astro,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 11,
          v1pid: 11,
          lpSymbol: 'WAG_SWAPZ LP',
          lpAddresses: {
            111: '',
            106: '0x3f3C905210411F6E7D881889AffBA5051fC9294b',
          },
          token: serializedTokens.swapz,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 12,
          v1pid: 12,
          lpSymbol: 'WAG_USDV LP',
          lpAddresses: {
            111: '',
            106: '0x545Dad8f8F934b6E5fa408FEC3da59651228Ee9E',
          },
          token: serializedTokens.usdv,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 13,
          v1pid: 13,
          lpSymbol: 'WAG_BUSD LP',
          lpAddresses: {
            111: '',
            106: '0x339977398975dcD543f3873194B9238A96Ac79dE',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 14,
          v1pid: 14,
          lpSymbol: 'VLX_VDGT LP',
          lpAddresses: {
            111: '',
            106: '0x7b714BC5dD176EaA198fe6C07E415a87A40dc858',
          },
          token: serializedTokens.vdgt,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 15,
          v1pid: 15,
          lpSymbol: 'BUSD_USDV LP',
          lpAddresses: {
            111: '',
            106: '0x5bF6d526C5C0AdfEA5853941f7B59261ea071Da6',
          },
          token: serializedTokens.usdv,
          quoteToken: serializedTokens.busd,
        },
        {
          pid: 16,
          v1pid: 16,
          lpSymbol: 'WBTC_USDV LP',
          lpAddresses: {
            111: '',
            106: '0x90724ea2D9D9decE420C9413850401DA9dccb514',
          },
          token: serializedTokens.wbtc,
          quoteToken: serializedTokens.usdv,
        },
        {
          pid: 17,
          v1pid: 17,
          lpSymbol: 'DAI_USDV LP',
          lpAddresses: {
            111: '',
            106: '0x0a2c396e388Edb05BbAb98F511BFceC11f643226',
          },
          token: serializedTokens.dai,
          quoteToken: serializedTokens.usdv,
        },
        {
          pid: 18,
          v1pid: 18,
          lpSymbol: 'AVAX_WAG LP',
          lpAddresses: {
            111: '',
            106: '0xF20C64b3c070688dCB39ECb28e69FC13e2E4D37c',
          },
          token: serializedTokens.avax,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 19,
          v1pid: 19,
          lpSymbol: 'MATIC_WAG LP',
          lpAddresses: {
            111: '',
            106: '0xdbbCBf9FbFe8E2FCd80E30894c9320e995e77b97',
          },
          token: serializedTokens.matic,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 20,
          v1pid: 20,
          lpSymbol: 'BNB_WAG LP',
          lpAddresses: {
            111: '',
            106: '0x133F317F41f8b4d749A0a559761681767aF69a27',
          },
          token: serializedTokens.bnb,
          quoteToken: serializedTokens.cake,
        },
        {
          pid: 22,
          v1pid: 22,
          lpSymbol: 'stVLX_VLX LP',
          lpAddresses: {
            111: '',
            106: '0xd42846DCbbecDEf542D6bCc6e4E170171a2Ae459',
          },
          token: serializedTokens.stvlx,
          quoteToken: serializedTokens.wvlx,
        },
      ]
    : [
        /**
         * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
         */
        {
          pid: 0,
          v1pid: 0,
          lpSymbol: 'WAG',
          lpAddresses: {
            111: '0xb830d8213e2c3dD621037703D05A5e594387B6Be',
            106: '',
          },
          token: serializedTokens.syrup,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 1,
          v1pid: 1,
          lpSymbol: 'VLX_TE6 LP',
          lpAddresses: {
            111: '0xC056BBe888547986Ad2bb0Ff7F9fA484A0c27743',
            106: '',
          },
          token: serializedTokens.te6,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 2,
          v1pid: 2,
          lpSymbol: 'VLX_TE9 LP',
          lpAddresses: {
            111: '0x40d4fC460eF4C76a20CE1BaEAEB6b921050f483f',
            106: '',
          },
          token: serializedTokens.te9,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 3,
          v1pid: 3,
          lpSymbol: 'VLX_TE12 LP',
          lpAddresses: {
            111: '0xc40969848d5B549138f0b1B499a69fA9B510407d',
            106: '',
          },
          token: serializedTokens.te12,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 4,
          v1pid: 4,
          lpSymbol: 'VLX_TE18 LP',
          lpAddresses: {
            111: '0xf01D3d7827211626E7b76DD583EaC8b369d046b0',
            106: '',
          },
          token: serializedTokens.te18,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 5,
          v1pid: 5,
          lpSymbol: 'VLX_ETH LP',
          lpAddresses: {
            111: '0x8A70d2a3e2cba2CAD61FbA419E62eB821F18Bb57',
            106: '',
          },
          token: serializedTokens.weth,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 6,
          v1pid: 6,
          lpSymbol: 'VLX_USDT LP',
          lpAddresses: {
            111: '0xF20c93c5e5F534C9D95567497Ea17a841164d37b',
            106: '',
          },
          token: serializedTokens.usdt,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 7,
          v1pid: 7,
          lpSymbol: 'VLX_USDC LP',
          lpAddresses: {
            111: '0x33ea93e391aF9cAA4b8e9C3368236B93DFCF39C4',
            106: '',
          },
          token: serializedTokens.usdc,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 8,
          v1pid: 8,
          lpSymbol: 'VLX_BUSD LP',
          lpAddresses: {
            111: '0xe25107384e3d23403c4537967D34cCe02A2b56c6',
            106: '',
          },
          token: serializedTokens.busd,
          quoteToken: serializedTokens.wvlx,
        },
        {
          pid: 9,
          v1pid: 9,
          lpSymbol: 'VLX_WAG LP',
          lpAddresses: {
            111: '0xdC415f9c745a28893b0Cbb6A8eaC1bb6ed42C581',
            106: '',
          },
          token: serializedTokens.cake,
          quoteToken: serializedTokens.wvlx,
        },
      ]

export default farms
