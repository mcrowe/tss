function make(sheet: object) {

  return function(...keys: Array<false | string>) {
    let styles = {}

    for (let key of keys) {
      if (key) {
        if (sheet[key]) {
          Object.assign(styles, sheet[key])
        } else {
          throw new Error('Missing style for ' + key)
        }
      }
    }

    return styles
  }

}


export default make