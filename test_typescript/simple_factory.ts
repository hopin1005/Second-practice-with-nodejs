//simple factory
abstract class WEB{
    abstract run(): void;
}

class PHP extends WEB{
    run(): void{
        console.log("PHP website run!!");
    }
}

class NODEJS extends WEB{
    run(): void{
        console.log("NODEJS website rub!!");
    }
}

class WEBFACTORY{
    public static produceWeb(lang: "PHP" | "NODEJS"): WEB{
        if (lang === "PHP"){
            return new PHP();
        }

        if (lang === "NODEJS"){
            return new NODEJS();
        }
    }
}

//create website
const nodeJsWeb = WEBFACTORY.produceWeb("NODEJS");
const phpWeb = WEBFACTORY.produceWeb("PHP");

nodeJsWeb.run();
phpWeb.run();


/*優缺點:

優點: 使用者不用了解實際是怎麼做出來的，只要知道輸入引數就可
缺點: 擴充不易

*/
//run result
/*
NODEJS website rub!!
PHP website run!!
*/ 