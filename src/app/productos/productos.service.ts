import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  listaProductos: any[] = [];

  constructor() {
    this.listaProductos = [
      {
        nombre: 'Bolsa de algodón reutilizable grande',
        instrucciones: '',
        texto: 'Estas bolsas de silicona grado alimenticio son un producto multiuso ya que te permite refrigerar, congelar y calentar alimentos sólidos y líquidos. A su vez son ecológicas, te ayudan a reducir el uso de plásticos desechables ya que una sola bolsa de silicona llega a reemplazar en promedio 5000 bolsas plásticas. También puedes usarlas como compresas calientes o frías./nEntre sus características encontramos que son herméticas, resistentes a temperaturas altas y bajas (-50 ° ~ + 250 °) y son libres de BPA. Son aptas para guardar cualquier tipo de producto animal, frutas, vegetales y jugos. Aptas para uso en congelador, refrigerador, microondas, horno eléctrico y lavavajillas./nLa silicona es un material que no proviene del petróleo, por lo cual es seguro para almacenar tus alimentos. También las puedes sacar de casa, la bolsa pequeña es ideal para llevar tus snacks favoritos, la bolsa mediana es ideal para transportar tus sandwichs. La bolsa grande es ideal para guardar alimentos grandes o voluminosos como pan, hierbas y hojas frescas como lechuga, espinaca, albahaca, perejil, entre otros. Estas bolsas prolongan la vida de frutas que se dañan y secan rápidamente en la nevera como fresas y moras.',
        precio: 1000,
        img: "./assets/productos/producto1.jpg"
      },
      {
        nombre: 'Bolsas de silicona herméticas',
        instrucciones: '',
        texto: 'Estos bolsos están especialmente diseñados para transportar tus compras. Están hechos 100% de algodón, lo cual los hace amigables con el medio ambiente, biodegradables y compostables. Recuerda llevarlos para hacer tus compras y ayuda a reducir el uso de bolsas plásticas. Son hechos a mano en Bucaramanga, Santander por Rosmira y Luz Estella, madres cabeza de familia. Sus medidas son alto 42 cm, ancho 43 cm y profundidad 13 cm. Cuenta con una capacidad de 12 kg.',
        precio: 2000,
        img: './assets/productos/producto2.jpg'
      },
      {
        nombre: 'Aceite capilar reparador',
        instrucciones: 'Aplica primero en las palmas de las manos y luego espárcelo por el cabello húmedo o seco./nPara mayor hidratación aplica desde el cuero cabelludo hasta las puntas y déjalo actuar por 15 minutos y enjuágalo bien antes de aplicar el shampoo./nSi tu cabello es graso no lo uses desde la raíz, solo las puntas.',
        texto: ' Este aceite capilar contiene los aceites mas delicados para el cuidado del cabello: argán, jojoba, almendras, coco fraccionado y germen de trigo. Entre los beneficios del uso de este producto encontramos que ayuda a hidratar, aporta suavidad, reduce el frizz y el volumen, fortalece y aporta brillo al cabello. Gracias al poder de hidratación de estos aceites, ayuda a reparar el cabello quebrado y las puntas abiertas. Producto nacional, contiene 25 ml.',
        precio: 30500,
        img: './assets/productos/producto3.jpg'
      },
      {
        nombre: ' Bolsas para compra a granel ',
        instrucciones: ' Dales el uso que prefieras: compra a granel, lleva tus snacks favoritos al trabajo, colegio o a la universidad. Ofrecemos 3 tamaños para tu mayor comodidad. Recuerda llevarlas para hacer tus compras y ayuda a reducir el uso de bolsas plásticas. Para su cuidado lavar a mano o lavadora con colores similares. El kit de 3 bolsas incluye 1 bolsa S, 1 bolsa M Y 1 bolsa L. El kit de 6 bolsas incluye 2 bolsas S, 2 bolsas M Y 2 bolsas L. ',
        texto: ' Estas bolsas de algodón están especialmente diseñadas para comprar granos, cereales, semillas y frutos secos a granel. Están hechas 100% de algodón, lo cual las hace amigables con el medio ambiente, biodegradables y compostables. Son hechos a mano en Bucaramanga, Santander por Rosmira y Luz Estella, madres cabeza de familia. ',
        precio: 22400,
        img: './assets/productos/producto4.jpg'
      },
      {
        nombre: ' Botella de acero inoxidable ',
        instrucciones: ' Para cuidar este producto te recomendamos lavarla con agua caliente y jabón antes del primer uso. Lavar después de cada uso a mano con cepillo para botellas. No lavar el lavavajillas, no lavar con cloro, no congelar y no ponerlo en el microondas. Sus medidas son alto: 26 cm, diámetro: 7 cm, espesor: 2 mm y cuenta con una capacidad de 500 ml. ',
        texto: ' Esta botella es una alternativa amigable con el medio ambiente ya que es un reemplazo para las botellas plásticas desechables. Está hecha de acero inoxidable grado alimenticio (18/8). Su amplia boquilla permite introducir fácilmente bebidas calientes y frías conservando su temperatura. De igual manera permite un fácil lavado a mano. Esta botella no transmite ningún sabor u olor a sus bebidas, es hermética, cuenta con doble pared y es libre de BPA. ',
        precio: 51900,
        img: './assets/productos/producto5.jpg'
      },
      {
        nombre: ' Desodorante natural en crema ',
        instrucciones: ' También contiene hidróxido de magnesio, manteca de cacao agroecológica, aceite de coco orgánico prensado en frío, harina de sagú y carbón activado. Este último ingrediente ayuda a realizar una limpieza profunda de la piel desintoxicando al mismo tiempo las axilas. Producto vegano y libre de crueldad animal. Producto Nacional, contiene 30 gr. ',
        texto: ' Este desodorante es ideal para las pieles más sensibles ya que en su formulación no incluye el bicarbonato de sodio. Deja una sensación refrescante gracias a su contenido de aceites esenciales de menta, árbol de té, limonaria, lavanda y tomillo. ',
        precio: 22900,
        img: './assets/productos/producto6.jpg'
      },
      {
        nombre: ' Crema dental natural con carbón activado',
        instrucciones: 'Aplicar la crema dental directamente sobre el cepillo./nMantener el recipiente cerrado y en un lugar fresco./nLava tus dientes con esta crema dental solo tres veces a la semana y dos veces al día.Apto para usar después de los 15 años de edad.Producto nacional, contiene 120 gr. ',
        texto: 'Esta crema dental natural está formulada con ingredientes seguros para tu salud y la de tu familia. El carbón activado en esta crema dental ayuda a blanquear y remover las manchas en tus dientes. No contiene flúor ni siliconas y no maltrata el esmalte dental.  Contiene aceites esenciales de cardamomo, clavo, anís y menta. ',
        precio: 24500,
        img: './assets/productos/producto7.jpg'
      },
      {
        nombre: 'Gel antibacterial de aloe vera ',
        instrucciones: ' Aplicar el gel antibacterial sobre las manos,/nMantener el recipiente cerrado y en un lugar fresco',
        texto: 'Este gel antibacterial es ideal para mantener tus manos limpias y seguras ya que las desinfecta sin resecarlas. Gracias a sus ingredientes de origen natural humecta tus manos. Contiene agua destilada, tintura alcohólica de aucalipto, glicerina vegetal, extracto de aloe vera, aceite esencial de eucalipto y vitamina E. Producto nacional, contiene 300 ml. ',
        precio: 26400,
        img: './assets/productos/producto8.jpg'
      },
      {
        nombre: ' Jabones faciales y corporales Taller de Hierbas ',
        instrucciones: '',
        texto: 'Jabón de carbón activado y eucalipto para piel grasa. Este jabón es natural, vegano y libre de parabenos. Está elaborado con ingredientes astringentes como el carbón activado y el aceite esencial de árbol de té que ayudan a limpiar tu piel de impurezas y bacterias. Evita que se generen infecciones, lo cual lo hace ideal para tratar pieles grasas o con acné. Gracias a su alto contenido de aceite de oliva virgen extra, aceite de coco, aceite de ricino y manteca de cacao dejan tu piel suave.Deja una sensación y un aroma fresco gracias al aceite esencial de eucalipto y romero.Producto Nacional, contiene 95 gramos./nJabón de lavanda para piel sensible.Este jabón es natural, vegano y libre de parabenos.Está elaborado con lavanda lo cual lo hace ideal para baños relajantes y para equilibrar la piel.También es ideal para pieles maduras, secas o sensibles./nGracias a su alto contenido de aceite de oliva virgen extra deja tu piel suave con un delicado aroma a lavanda.Están fabricados por un proceso de saponificación en frío evitando de esta manera usar químicos para acelerar su secado.Producto Nacional, contiene 95 gramos./nJabón de naranja para piel mixta.Este jabón es natural, vegano y libre de parabenos.Está elaborado con aceite macerado de caléndula, lo cual lo hace ideal para pieles mixtas, irritables o con alergias.Ayuda a regenerar el tejido muerto, cicatrizando, reparando y suavizando la piel.A su vez disminuye y desinflama brotes y sarpullidos./nGracias a su alto contenido de aceite de oliva virgen extra deja tu piel suave.Están fabricados por un proceso de saponificación en frío evitando de esta manera usar químicos para acelerar su secado.Producto Nacional, contiene 95 gramos. ',
        precio: 17600,
        img: './assets/productos/producto9.jpg'
      },
      {
        nombre: ' Vaso esterilizador para copa menstrual ',
        instrucciones: ' ¿Cómo esterilizar tu copa menstrual?. Llena el vaso de agua hasta 3/4 de su capacidad y ponlo en la estufa a fuego medio. Una vez hierva el agua, introduce tu copa y déjala hervir por 3 minutos. Una vez haya pasado este tiempo, apaga la estufa y retira la copa del agua. Déjala enfriar y está lista para usarse. ',
        texto: ' Este vaso está hecho de peltre recubierto con esmalte porcelanizado, por lo cual es seguro para esterilizar tu copa menstrual. Puedes ponerlo al fuego directamente. Dado que es un producto multifuncional puedes tener uno para esterilizar tu copa y otro para llevar a tus viajes y evitar el uso de vasos de icopor y plásticos. Capacidad 400 ml. ',
        precio: 27900,
        img: './assets/productos/producto10.jpg'
      },
      {
        nombre: ' Base para cepillo de dientes ',
        instrucciones: ' Este soporte cuenta con un orificio inferior para permitir que salga el agua y de esta manera evitar la acumulación de humedad. Recuerda secar tu cepillo antes de colocarlo sobre la base. ',
        texto: ' Este soporte es ideal para colocar tu cepillo de dientes verticalmente y ayudar a que tu cepillo se seque por todos los lados. Esta base para cepillo es de bambú, por lo cual es 100% biodegradable. Puede ser usado para cepillo de dientes de adultos y niños. ',
        precio: 10000,
        img: './assets/productos/producto11.jpg'
      },
      {
        nombre: ' Cepillo de dientes de bambú para niños ',
        instrucciones: ' El cepillo de dientes viene en una bolsa de papel sellada para garantizar que el producto sea seguro de usar. Este producto cuenta con todas las normas de dispositivos médicos. Sus cerdas son libre de BPA. Es recomendable cambiar el cepillo de dientes cada 3 o 4 meses. ',
        texto: ' Estos cepillos de dientes de bambú son ideales para niños entre los 2 y 10 años de edad. El mango de este cepillo es compostable al igual que su empaque. Están hechos 100% de bambú moso, material antibacterial que no absorbe la humedad y de secado rápido. Sus cerdas suaves por recomendación odontológica. ',
        precio: 14900,
        img: './assets/productos/producto12.jpg'
      },
      {
        nombre: ' Cepillo de dientes de bambú ',
        instrucciones: ' Recomendamos cambiarlos aproximadamente cada 4 - 6 meses - 100% compostable, se degrada en dos años aproximadamente en condiciones naturales. ',
        texto: ' Estos cepillos de bambú son una opción ecológica libre de plástico para cuidar de tus dientes y encías. Están hechos 100% de bambú moso, material antibacterial que no absorbe la humedad y de secado rápido. Sus cerdas de dureza media son 50% bambú - 50% nylon y vienen en diferentes colores para ayudarte a identificar el que pertenece a cada integrante de la familia./nEspecialmente diseñados con agarre ergonómico.Sus medidas son, alto total: 19 cm, ancho del mango: 1.3 cm, cabeza del cepillo: 3.3 x 1 cm.Es altamente recomendable dejar secar antes de guardar.Cerdas libres de BPA ',
        precio: 10900,
        img: './assets/productos/producto13.jpg'
      },
      {
        nombre: ' Cepillo de bambú para platos ',
        instrucciones: ' Su agarre es ergonómico, como también fácil de usar y limpiar. Es recomendable dejarlo en un lugar seco boca abajo para permitir que se seque. Puede ser usado en hierro fundido, acero inoxidable, platos, entre otros. Una vez sus cerdas estén gastadas, puedes adquirir solo el repuesto y continuar usando el mango y su estructura. Sus medidas son alto total: 24 cm y diámetro de la cabeza 5.5 cm. ',
        texto: ' Este cepillo es el complemento ideal para limpiar tus utensilios de cocina como platos y ollas. Es una alternativa ecológica para reemplazar los cepillos y esponjas plásticas, ya que está hecho de bambú y cerdas firmes de fibra de agave. Este cepillo es vegano, libre de plástico y compostable. ',
        precio: 22800,
        img: './assets/productos/producto14.jpg'
      },
      {
        nombre: ' Cepillo de bambú para vasos y botellas ',
        instrucciones: ' Este cepillo es vegano, libre de plástico y biodegradable. Su agarre es ergonómico, como también fácil de usar y limpiar. Es recomendable dejarlo en un lugar seco boca abajo para permitir que se seque. Mide 24 cm x 7.5 cm x 4.5 cm. ',
        texto: ' Este cepillo es el complemento ideal para limpiar tus utensilios de cocina como vasos y botellas. Es una alternativa ecológica para reemplazar los cepillos y esponjas plásticas, ya que está hecho de bambú y cerdas firmes de fibra de coco. ',
        precio: 22800,
        img: './assets/productos/producto15.jpg'
      },
      {
        nombre: ' Cepillo de bambú multipropósito para cocina ',
        instrucciones: ' No contiene ningún componente de origen animal, por lo tanto es vegano y 100% compostable. Recuerda que puedes complementar esta limpieza haciendo una mezcla del jabón natural para platos líquido, agua y vinagre. ',
        texto: ' Este cepillo de bambú y cerdas vegetales de fibra de agave, es ideal para limpiar tus frutas y verduras. También lo puedes usar para limpiar fácilmente la cocina, juntas entre baldosas, entre otros. ',
        precio: 29700,
        img: './assets/productos/producto16.jpg'
      },
      {
        nombre: ' Cepillo de bambú para cabello ',
        instrucciones: ' ',
        texto: ' Este cepillo de bambú es un must have en tu rutina de cuidado capilar. Gracias al diseño de sus cerdas permite realizar un masaje en el cuero cabelludo estimulando el crecimiento y evitando su caída. Su uso diario promueve la circulación de la sangre y activa los folículos. Es altamente recomendable secarlo antes de guardarlo. ',
        precio: 23900,
        img: './assets/productos/producto17.jpg'
      },
      {
        nombre: ' Cepillo exfoliante para cuerpo',
        instrucciones: ' ',
        texto: ' Este cepillo de madera y cerdas de fibra de agave es ideal para exfoliar tu piel. Puedes usarlo para cepillado en seco que ayuda a eliminar el aspecto de la celulitis y remover células muertas. También puedes usarlo para tu baño convencional y exfoliar suavemente tu piel. Es un cepillo libre de crueldad animal ya que sus cerdas naturales están hechas de fibra de agave. Sus medidas son alto: 14 cm, ancho: 8 cm y profundidad: 2.5 cm. Para prolongar su vida útil es aconsejable dejar secar después de usar./nNaturalmente nuestro cuerpo realiza una renovación celular de forma natural cada 28 días, sin embargo en muchas ocasiones es necesario ayudarla ya que debido al estrés y cansancio acumulados no la realiza completamente. ',
        precio: 34900,
        img: './assets/productos/producto18.jpg'
      },
      {
        nombre: ' KIT cuidado capilar ',
        instrucciones: ' ',
        texto: ' En este kit encuentras los productos necesarios para empezar a cuidar de tu cabello con productos veganos, naturales y libres de químicos tóxicos. Incluye 1 shampoo sólido, 1 acondicionador sólido y 1 cepillo de bambú de 18 x 6 cm. Puedes escoger el shampoo dependiendo de tu tipo de cabello, déjanos una nota al finalizar tu pedido. ',
        precio: 81500,
        img: './assets/productos/producto19.jpg'
      },
      {
        nombre: ' Aceite de coco ',
        instrucciones: ' Este aceite de coco es virgen, puro, prensado en frío, vegano y libre de conservantes. Su uso ofrece grandes ventajas para la salud y la piel. Entre sus beneficios en uso exterior encontramos que actúa como antioxidante, es altamente hidratante para la piel y el cabello. Estimula la producción de colágeno y elastina, por lo cual ayuda a mejorar la elasticidad de la piel. Ayuda a prevenir afecciones cutáneas ya que también actúa como antiinflamatorio y antimicrobiano. Puedes usarlo para desmaquillarte. ',
        texto: ' Algunos de los beneficios de usarlo para consumo son que ayuda a bajar de peso, mejora el funcionamiento del cerebro, ayuda en el proceso de absorción de las vitaminas y minerales. Tiene propiedades antivirales y ayuda a fortalecer el sistema inmunológico. El aceite de coco soporta altas temperaturas y esto lo hace ideal para freír, hornear y saltear alimentos. Apto para uso cutáneo y culinario. Producto nacional. ',
        precio: 21700,
        img: './assets/productos/producto20.jpg'
      },

      {
        nombre: ' Barras de chocolate orgánico 65% y 80% ',
        instrucciones: ' ',
        texto: ' Estas barras de chocolate orgánico colombiano son veganas y tienen un buen porcentaje de cacao, puedes escoger entre 65% y 80%. Tienen un intenso sabor a cacao y una agradable acidez para consumir a diario. Puedes usarlas para compartir, para usarlas en preparaciones y recetas. Tienen una textura fluida y un buen equilibrio entre sabores dulces y amargos. /nEste producto es 100% nacional y de comercio justo.Sus ingredientes son cacao(licor de cacao y manteca de cacao) y azúcar orgánico.Contiene 80 gramos. ',
        precio: 11000,
        img: './assets/productos/producto21.jpg'
      },
      {
        nombre: ' Frutas para untar de piña o mango ',
        instrucciones: ' ',
        texto: ' Esta fruta para untar es vegana, natural y orgánica. Su consistencia es ideal para esparcirla sobre pan, tostadas, para agregar a postres, dips o como topping. Es 79% fruta orgánica, endulzada con panela y pectina orgánicas no amidada. /nEs un producto 100% nacional, la fruta es cultivada y procesada en Colombia para llevarte un producto natural y de comercio justo.Contiene 250 gr. ',
        precio: 15900,
        img: './assets/productos/producto22.jpg'
      },
      {
        nombre: ' Mantequilla de maní pura ',
        instrucciones: ' ',
        texto: ' Esta mantequilla de maní es libre de conservantes, vegana y una gran fuente de proteína. Este súper alimento proporciona ácidos grasos, minerales, proteínas y fibra. Es elaborado con el método stone ground a bajas temperaturas para conservar sus propiedades nutricionales./nEn su fabricación se encuentra solo un ingrediente, el maní.Puedes consumirla con pan, batidos, galletas o con tu alimento favorito.Producto nacional, contiene 400 gr. ',
        precio: 19900,
        img: './assets/productos/producto23.jpg'
      },
      {
        nombre: 'Porta Snacks en algodón con bundle dye - Colección Raíces ',
        instrucciones: ' ',
        texto: ' Estos porta snacks están especialmente diseñados para que puedas llevar tus semillas, nueces, cereales y frutas favoritos a donde vayas. Son ideales para transportar porciones de comida al trabajo, gimnasio y de viaje. Con nuestros porta snacks evitas el uso de bolsas ziploc y papel chicle./nEstán hechos en algodón 100% y su proceso de teñido se realiza artesanalmente con pigmentos vegetales, respetuosos con el medio ambiente.Tiene forro de algodón en color claro y para cerrarlo solo presionas el broche metálico. /nPuedes escoger la opción con un pocket de eco wrap para llevar fácilmente alimentos como chocolates, dátiles, frutas y demás alimentos que pudieran derretirse, aplastarse o manchar tu porta snacks de tela.Sus medidas son 14cm x 14cm aproximadamente. ',
        precio: 15900,
        img: './assets/productos/producto24.jpg'
      },
    ]
  }

  getProductos() {
    return this.listaProductos;
  }
}
