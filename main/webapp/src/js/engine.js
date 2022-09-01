import {reactive} from 'vue'
import { Hct as HCT, argbFromHex, themeFromSourceColor, applyTheme } from "MCU";



// Simple demonstration of HCT.
const color = HCT.fromInt(0xff4285f4);
//console.log(`Hue: ${color.hue}`);
//console.log(`Chrome: ${color.chroma}`);
//console.log(`Tone: ${color.tone}`);




//import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities";

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex('#f82506'), [
  {
    name: "custom-1",
    value: argbFromHex("#ff0000"),
    blend: true,
  },
]);

// Print out the theme as JSON
console.log(JSON.stringify(theme, null, 2));

// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, {target: document.body, dark: systemDark});



export var cookieManager = {
    add: (values) => {
        let key_value;
        try {
            if ((values.key && values.value) || values.value === "") key_value = values.key+"="+values.value;
            else if (!values.key && !values.value) throw new Error("Propiedades 'key' y 'valor' no detectadas");
            else if (!values.key) throw new Error("Propiedad 'key' no detectada");
            else throw new Error("Propiedad 'valor' no detectada");
            let path = values.path? ";path="+values.path : "";
            let domain = values.domain? ";domain="+values.domain : "";
            let max_age = values.max_age? ";max-age="+values.max_age : "";
            let expires = values.expires? ";expires="+values.expires : "";
            let secure = values.secure? ";secure" : "";
            let samesite = values.samesite==="strict"? ";samesite=strict" : values.samesite==="lax"? ";samesite=lax" : "";
            document.cookie = key_value+path+domain+max_age+expires+secure+samesite;
        } catch (msg) { 
            console.error("Ha ocurrido un error con la creación de la cookie \nEspecificación del error: "+msg);
        }
    },
    
    get: (key) => {
        try {
            return new RegExp('\\b(?<='+key+'\\=)(?:\\w|\\s)*\\b').exec(document.cookie)[0];
        } catch {
            return '';
        }
    },
    
    exist: (key) => {
        return new RegExp('\\b'+key+'\\b').test(document.cookie);
    },
    
    samesite: {STRICT: "strict",LAX: "lax"}
};



export var engine = reactive({
    idiomas: [
        {
            id: "es",
            idioma: "español",
            img: "/jv/src/img/svg/banderas/SVG/Espana_cuadrado.svg"
        } , {
            id: "en",
            idioma: "english",
            img: "/jv/src/img/svg/banderas/SVG/Inglaterra_cuadrado.svg"
        }
    ],
    idioma(id) {
        for ( let item of engine.idiomas) {
            if (item.id == cookieManager.get('idioma')) {
                return item
            }
        }
    },
    idiomaId: cookieManager.get('idioma'),
    setIdiomaId(id) {
        this.idiomaId = id
    },
    
    templates: {}

})