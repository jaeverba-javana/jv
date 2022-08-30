import {reactive} from 'vue'
import { Hct } from "MCU";



// Simple demonstration of Hct.
const color = Hct.fromInt(0xff4285f4);
console.log(`Hue: ${color.hue}`);
console.log(`Chrome: ${color.chroma}`);
console.log(`Tone: ${color.tone}`);






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