import { TextAlignProperty } from "csstype"

export interface HeroData {
  title?: any
  subtitle?: string
  text?: string
  image?: string
  social?: boolean
  date?: string
  tags?: [string]
  isParallax?: boolean
  arrow?: boolean
  classes?: string
  textAlign?: TextAlignProperty
  smallHeadings?: boolean
}
