import { Snackbar } from '@varlet/ui'

const systemTipsIconsClassMap = {
  success: 'i-ic:twotone-check-circle text-emerald-500',
  warning: 'i-ic:twotone-warning text-amber-500',
  error: 'i-icon-park-twotone:handle-x text-rose-500',
  info: 'i-icon-park-twotone:attention text-slate-400',
} as const

export function systemTips(
  content: string,
  options: {
    tipsType?: 'success' | 'warning' | 'error' | 'info'
  } = {},
) {
  Snackbar({
    content,
    contentClass: 'font-bold text-slate-100',
    position: 'center',
    icon: (
      h('div', { class: `text-4 ${
        options.tipsType
          ? systemTipsIconsClassMap[options.tipsType]
          : 'i-twemoji:beach-with-umbrella'
      }` })
    ),
  })
}

export function featureNotSupport(featureName: string) {
  Snackbar({
    content: `${featureName}功能暂未开放！`,
    contentClass: 'font-bold text-slate-100',
    icon: (
      h('div', { class: 'i-twemoji:carp-streamer text-4' })
    ),
  })
}
