import eruda from 'eruda'

export function setupEruda() {
  eruda.init()
  // @ts-expect-error 'eruda-vue' doesn't provide types
  import('eruda-vue').then((mod) => {
    eruda.add(mod.default)
  })

  return eruda
}
