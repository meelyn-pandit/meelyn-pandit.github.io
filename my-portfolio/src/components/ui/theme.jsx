    import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "white", // Change this to any color palette you prefer
      
    },
    body: {
      backgroundColor: '#282c34',
      textColor: 'white'
    }
  },
})

export const system = createSystem(defaultConfig, config)