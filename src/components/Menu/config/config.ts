import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
  TradeIcon,
  FarmIcon,
} from 'packages/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { DropdownMenuItems } from 'packages/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      // {
      //   label: t('Limit'),
      //   href: '/limit-orders',
      // },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: t('Perpetual'),
      //   href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT`,
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: TrophyIcon,
  //   fillIcon: TrophyFillIcon,
  //   items: [
  // {
  //   label: t('Trading Competition'),
  //   href: '/competition',
  //   hideSubNav: true,
  // },
  // {
  //   label: t('Prediction (BETA)'),
  //   href: '/prediction',
  // },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  // {
  //   label: t('NFT'),
  //   href: `${nftsBaseUrl}`,
  //   icon: NftIcon,
  //   fillIcon: NftFillIcon,
  //   items: [
  //     {
  //       label: t('Overview'),
  //       href: `${nftsBaseUrl}`,
  //     },
  //     {
  //       label: t('Collections'),
  //       href: `${nftsBaseUrl}/collections`,
  //     },
  //     {
  //       label: t('Activity'),
  //       href: `${nftsBaseUrl}/activity`,
  //     },
  //   ],
  // },

  {
    label: '',
    href: '/swap',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      // {
      //   label: t('Info'),
      //   href: '/info',
      // },
      {
        label: t('WAG Burn'),
        href: '/burn',
      },
      // {
      //   label: t('IFO'),
      //   href: '/ifo',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: t('Leaderboard'),
      //   href: '/teams',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://medium.com/pancakeswap',
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
      {
        label: 'NFT Marketplace',
        href: 'https://kitchenft.io',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Cross chain swapz'),
        href: 'https://cross2.swapz.app/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.wagyuswap.app/wagyuswap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Github'),
        href: 'https://github.com/wagyuswapapp',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@wagyuswap.app',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Support'),
        href: 'mailto:support@wagyuswap.app',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Velascan'),
        href: 'https://velascan.org/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
