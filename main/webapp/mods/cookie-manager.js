export default {
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