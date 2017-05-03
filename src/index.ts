type IFalsey = undefined | null | false


function make(sheet: object) {

  return function(...keys: Array<IFalsey | string | object>) {
    let styles = {}

    for (let key of keys) {
      if (key) {
        if (typeof key == 'string') {
          if (sheet[key]) {
            Object.assign(styles, sheet[key])
          } else {
            throw new Error('Missing style for ' + key)
          }
        } else if (typeof key == 'object') {
          Object.assign(styles, key)
        } else {
          throw new Error('Unexpected style type ' + typeof key)
        }
      }
    }

    return styles
  }

}


export default make