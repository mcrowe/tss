// TODO: Typescript compresses this type down to string for some reason.
//       fix it so that we can be type-safe.
// export type IKey = string | object | undefined | false | null
export type IKey = any


function make(sheet: object) {

  return function(...keys: IKey[]) {
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