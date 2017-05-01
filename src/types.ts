export type IColor = string

export type IOverflowValue = 'visible' | 'hidden' | 'scroll' | 'auto'

export interface IStyle {
  fontSize?: number
  fontWeight?: number
  color?: IColor
  lineHeight?: number
  textAlign?: 'center' | 'left' | 'right' | 'justify'

  padding?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingHorizontal?: number
  paddingVertical?: number

  margin?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  marginHorizontal?: number
  marginVertical?: number

  borderWidth?: number
  borderRadius?: number
  borderColor?: IColor

  backgroundColor?: IColor

  display?: 'flex' | 'block' | 'inline' | 'inline-block'

  flexDirection?: 'row' | 'column'
  flex?: number
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'
  alignItems?: 'center' | 'stretch' | 'flex-start' | 'flex-end'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'

  position?: 'absolute' | 'fixed' | 'relative' | 'static'

  overflow?: IOverflowValue
  overflowX?: IOverflowValue
  overflowY?: IOverflowValue
}


export interface IStyleSheet {
  [key: string]: IStyle
}