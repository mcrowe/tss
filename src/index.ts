import { IStyleSheet } from './types'


// function compileSheet(sheet: IStyleSheet): string {
//   return stringifySheet(expandSheet(sheet))
// }


// function expandSheet(sheet: IStyleSheet) {
//   let res = {}
//   for (let key in sheet) {
//     const style = sheet[key]
//     for (let prop in style) {
//       const value = style[prop]

//       Object.assign(res, expandStyle(prop, value))
//     }
//   }

//   return res
// }


function make(sheet: IStyleSheet) {

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



const sheet: IStyleSheet = {
  abc: {
    display: 'inline'
  }
}

export default { }


// function stringifySheet(sheet: object) {
//   let style = ''

//   for (let key in sheet) {
//     style = style + '; ' + stringifyStyle(sheet[key])
//   }

//   return style
// }


// function stringifyStyle()


// function expandStyle(prop: string, value: string) {
//   if (prop == 'display' && value == 'flex') {
//     return {
//       display: ['-webkit-box', '-ms-flexbox', 'flex']
//     }
//   } else if (prop == 'justify-content') {
//     return {
//       '-webkitBoxPack': value,
//       '-msFlexPack': value,
//       justifyContent: value
//     }
//   } else if (prop == 'align-items') {
//     return {
//       '-webkitBoxAlign': value,
//       '-msFlexAlign': value,
//       alignItems: value
//     }
//   } else if (prop == 'flex') {
//     return {
//       '-webkitBoxFlex': value,
//       '-msFlex': value,
//       flex: value
//     }
//   } else if (prop == 'flex-direction' && value == 'row') {
//     return {
//       '-webkitBoxOrient': 'horizontal',
//       '-webkitBoxDirection': 'normal',
//       '-msFlexDirection': 'row',
//       flexDirection: 'row'
//     }
//   } else if (prop == 'flex-direction' && value == 'column') {
//     return {
//       '-webkitBoxOrient': 'vertical',
//       '-webkitBoxDirection': 'normal',
//       '-msFlexDirection': 'column',
//       flexDirection: 'column'
//     }
//   } else if (prop == 'flex-wrap') {
//     return {
//       '-msFlexWrap': 'wrap',
//       flexWrap: 'wrap'
//     }
//   } else if (prop == 'marginHorizontal') {
//     return {
//       marginLeft: value,
//       marginRight: value
//     }
//   } else if (prop == 'marginVertical') {
//     return {
//       marginTop: value,
//       marginBottom: value
//     }
//   } else if (prop == 'paddingHorizontal') {
//     return {
//       paddingLeft: value,
//       paddingRight: value
//     }
//   } else if (prop == 'paddingVertical') {
//     return {
//       paddingTop: value,
//       paddingBottom: value
//     }
//   }
// }