//factory methond pattern
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
        console.log("NODEJS website run!!");
    }
}

interface webFactory{
    produceWeb(): WEB;
}

class PHPFACTORY implements webFactory{
    produceWeb(): WEB{
        return new PHP();
    }
}

class NODEJSFACTORY implements webFactory{
    produceWeb(): WEB{
        return new NODEJS();
    }
}

var phpWebFactory = new PHPFACTORY();
var nodeJsFactory = new NODEJSFACTORY();

var phpWeb = phpWebFactory.produceWeb();
var nodeJsWeb = nodeJsFactory.produceWeb();

phpWeb.run();
nodeJsWeb.run();

//results
/* 
PHP website run!!
NODEJS website run!!
*/
