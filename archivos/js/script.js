const API = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

function importDolar(nombre, cb){
    fetch(API)
        .then(res => res.json())
        .then(data => {
            let i = 0;
            while(data[i].casa.nombre != nombre){i++}

            let today = new Date();
            let time = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear() + " a las " + today.getHours() + ":" + today.getMinutes();

            
            console.log(time)
            console.log(data[i].casa)
            let compra = data[i].casa.compra
            let venta = data[i].casa.venta
            let variacion = data[i].casa.variacion
            cb(nombre, compra, venta, variacion, time)
        })


}

importDolar('Dolar Oficial', writeInHTML)
importDolar('Dolar Blue', writeInHTML)
importDolar('Dolar Soja', writeInHTML)
importDolar('Dolar Bolsa', writeInHTML)
importDolar('Dolar turista', writeInHTML)
importDolar('Dolar Contado con Liqui', writeInHTML)

function writeInHTML(name, compra, venta, variacion, time){
    $(".fecha").text(time)
    switch(name) {
        case "Dolar Oficial":
            // Escribo los datos en las ID's del dolar oficial del HTML
            $("#oficialCompra").text("$" + compra);
            $("#oficialVenta").text("$" + venta);
            $("#oficialVar").text(variacion + "%");
            break;
        case "Dolar Blue":
            // Escribo los datos en las ID's del dolar blue del HTML
            $("#blueCompra").text("$" + compra);
            $("#blueVenta").text("$" + venta);
            $("#blueVar").text(variacion + "%");
            break;
        case "Dolar Soja":
            // Escribo los datos en las ID's del dolar soja del HTML
            $("#sojaCompra").text("$" + compra);
            $("#sojaVenta").text("$" + venta);
            $("#sojaVar").text(variacion + "%");
            break;
        case "Dolar Bolsa":
            // Escribo los datos en las ID's del dolar bolsa del HTML
            $("#bolsaCompra").text("$" + compra);
            $("#bolsaVenta").text("$" + venta);
            $("#bolsaVar").text(variacion + "%");
            break;
        case "Dolar turista":
            // Escribo los datos en las ID's del dolar turista del HTML
            $("#turistaCompra").text("$" + compra);
            $("#turistaVenta").text("$" + venta);
            $("#turistaVar").text(variacion + "%");
            break;
        case "Dolar Contado con Liqui":
            // Escribo los datos en las ID's del dolar contado con liqui del HTML
            $("#CCLCompra").text("$" + compra);
            $("#CCLVenta").text("$" + venta);
            $("#CCLVar").text(variacion + "%");
            break;
    }
}
