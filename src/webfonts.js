
import webfontloader from 'webfontloader'

export const webfonts = [
  'Roboto',
  'Roboto Mono',
  'Roboto Slab',
  'Open Sans',
  'Lato',

  'Lato',
  'PT Sans',
  'PT Serif',
  'Oswald',
  'Montserrat',
  'Source Sans Pro',
  'Source Serif Pro',
  'Source Code Pro',
  'Raleway',
  'Nunito',

  'Merriweather',
  'Playfair Display',
  'Work Sans',
  'Alegreya',
  'Alegreya Sans',
  'Fira Sans',
  'Inconsolata',
  'Lora',
  'Karla',
  'Poppins',
  'Neuton',
  'Cardo',
  'Arvo',
]

export const loadFont = (family) => {
  webfontloader.load({
    google: {
      families: [
        family
      ]
    }
  })
}

export const handleFontChange = ({ fontFamily }) => {
  const i = webfonts.indexOf(fontFamily)

  if (i > -1) {
    const family = webfonts[i]
    loadFont(family)
  }
}

export default handleFontChange

