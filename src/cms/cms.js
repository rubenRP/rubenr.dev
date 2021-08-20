import CMS from "netlify-cms-app"
import styles from "!css-loader!sass-loader!../styles/theme.scss"
import PagePreview from "./preview-templates/PagePreview"

CMS.registerPreviewStyle(styles.toString(), { raw: true })
CMS.registerPreviewTemplate("blog", PagePreview)
CMS.registerPreviewTemplate("pages", PagePreview)
