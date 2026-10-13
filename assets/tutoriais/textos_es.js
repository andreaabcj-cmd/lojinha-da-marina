/* Traducción al español (Latinoamérica) de los textos de los tutoriales.
   Las capturas siguen en portugués por ahora; solo cambian los textos. */
window.TUTORIAL_ES = {
 ui: { passo: 'Paso', de: 'de', ant: '◀ Anterior', prox: 'Siguiente ▶', tocar: '▶ Reproducir solo', pausar: '⏸ Pausar',
   inteira: '🔍 Pantalla completa', zoom: '🔍 Acercar', erro: '⚠️ Error común', alt: '🧭 Camino alternativo', fim: 'Fin de esta etapa 🎉',
   proxEtapa: 'Siguiente etapa', voltar: '← Todos los tutoriales', porque: 'Por qué importa', check: 'Elementos que la tienda necesita',
   anot: 'Pixel', emBreve: 'próximamente', parcial: 'en grabación', pronto: 'listo', prints: 'capturas',
   aviso: 'Capturas en portugués (la interfaz de Meta en español usa los mismos lugares y botones).' },
 etapas: {
  '01': { bloco: '1 · Preparar la casa', titulo: 'Crear el portafolio comercial',
    resumo: 'El portafolio comercial reúne todo lo que la empresa tiene en Meta: páginas, Pixel, catálogo, cuentas publicitarias y las personas con acceso. Piensa en él como la oficina de Marina, donde se guardan las llaves.',
    porque: ['Sin portafolio, el Pixel y el catálogo quedan sueltos, atados a la cuenta personal de alguien.', 'Quien tiene Control total en el portafolio administra todo lo que hay dentro.', 'Una página solo puede pertenecer a UN portafolio. Si ya está en otro, no aparece para agregarla.'],
    checklist: ['Portafolio comercial', 'Página de Facebook', 'Pixel (conjunto de datos)', 'Catálogo', 'Cuenta publicitaria', 'Personas con los permisos correctos'] },
  '02': { bloco: '2 · El Pixel', titulo: 'Crear el Pixel (conjunto de datos)',
    resumo: 'Meta crea el Pixel y le da un número de identificación (el ID del Pixel). Ese número es el que va en el código del sitio.',
    porque: ['Hoy Meta llama al Pixel “conjunto de datos”. Es lo mismo.', 'Cada Pixel tiene un número único (el ID). ¿Recuerdas el 📓 cuaderno equivocado del laboratorio? Es cuando el sitio usa el ID de otro Pixel.'] },
  '03': { bloco: '2 · El Pixel', titulo: 'Poner el Pixel en el sitio', resumo: 'Pegar el número del Pixel en el código de la tienda y publicar.' },
  '04': { bloco: '2 · El Pixel', titulo: 'Ver llegar el primer evento (Probar eventos)', resumo: 'Abrir la tienda y ver el PageView llegando en vivo al Administrador de eventos.' },
  '05': { bloco: '2 · El Pixel', titulo: 'Configuración del Pixel', resumo: 'Coincidencia avanzada automática, cookies propias y tráfico permitido: qué hace cada una.' },
  '06': { bloco: '3 · Catálogo', titulo: 'Crear el catálogo y conectarlo al Pixel', resumo: 'Crear las fichas de los productos en el Administrador de ventas y revisar que los códigos coincidan con el Pixel.' }
 },
 passos: {
  '01-01': { titulo: 'Dónde están los portafolios', texto: 'En Meta Business Suite, abre el selector de la esquina superior izquierda. Muestra tus portafolios comerciales y el botón Crear un portafolio comercial.', dica: 'Si aquí aparece un portafolio que no recuerdas haber creado, es normal: a veces Meta crea uno solo cuando haces una página o un anuncio. ¡Revisa de quién es antes de usarlo!' },
  '01-02': { titulo: 'El formulario', texto: 'El formulario pide 3 cosas: el nombre público del portafolio (el nombre de la empresa), tu nombre y apellido (pasas a ser administrador) y un correo comercial.', dica: 'El nombre del portafolio comercial es el nombre público de la empresa en Meta. Usa el nombre de la tienda.' },
  '01-03': { titulo: 'Error común: caracteres especiales', texto: 'Error común: los paréntesis, las comillas y otros caracteres especiales no se aceptan en el nombre del portafolio. Usa solo letras, números y espacios.', dica: 'Meta rechaza caracteres especiales en el nombre del portafolio. 😅 Quita ( ) “ ” y símbolos, y el botón Crear se activa.' },
  '01-04': { titulo: 'Todo completo', texto: 'Todo completo: nombre sin caracteres especiales, tu nombre real (pasas a ser administrador) y el correo de la empresa. Al hacer clic en Crear aceptas las Condiciones comerciales.', dica: 'Usa tu nombre real: Meta pide datos verdaderos. El correo es de la empresa y los clientes no lo ven. Luego llega un correo para confirmar: ábrelo y haz clic.' },
  '01-05': { titulo: 'Agregar páginas', texto: '¡Portafolio creado! Meta ofrece agregar tus páginas. Atención: una página que ya pertenece a otro portafolio NO aparece aquí. Solo marca páginas de la misma empresa.', dica: '¿No apareció la página de la tienda? Ya está en otro portafolio. Una página solo puede tener un dueño. Para traerla, quien tiene Control total en el otro portafolio debe liberarla.' },
  '01-06': { titulo: 'Personas y roles', texto: 'Quien creó el portafolio queda con Control total (administrador). Aquí puedes invitar a otras personas por correo, como Empleado (acceso parcial) o con control total. Para la clase, omite este paso.', dica: 'Control total: administra todo, incluidas personas y permisos. Empleado: solo accede a lo que le asignes. Ante la duda, da el mínimo necesario.' },
  '01-07': { titulo: 'Confirmar', texto: 'Resumen final: el nombre del portafolio y quién tendrá acceso. Revisa y haz clic en Confirmar.', dica: 'Revisa el nombre y quién tendrá acceso. Puedes cambiar todo después, en la Configuración.' },
  '01-08': { titulo: '¡Portafolio listo!', texto: 'Listo: el portafolio nuevo ya está seleccionado en la esquina superior izquierda. Todavía está vacío (sin páginas), por eso aparece ese mensaje. ¡Es normal!', dica: 'Portafolio comercial creado, todavía vacío. Siguiente paso: crear el Pixel. 🎉' },
  '02-01': { titulo: 'Administrador de eventos', texto: 'Administrador de eventos, con el portafolio correcto seleccionado en la esquina superior derecha. Para crear el Pixel, haz clic en Conectar datos (el + verde).', dica: 'Revisa SIEMPRE el portafolio en la esquina superior derecha antes de crear algo. ¡Crear en el portafolio equivocado es el error más común!' },
  '02-02': { titulo: 'Tipo de datos: Web', texto: 'Elige el tipo de fuente de datos. El Pixel es la opción Web (actividad en el sitio: visualizaciones, carrito y compras).', dica: 'Web es el Pixel, que mide lo que pasa en el sitio. App, Offline y CRM son otras fuentes de datos.' },
  '02-03': { titulo: 'Crear el conjunto de datos', texto: 'Meta ahora llama al Pixel conjunto de datos. Ponle un nombre, decide sobre la casilla de la API de conversiones y elige la categoría (opcional).', dica: 'Conjunto de datos es el nombre actual del Pixel en el Administrador de eventos. Es lo mismo.' },
  '02-04': { titulo: 'Categorías sensibles', texto: 'Las categorías son de temas sensibles (salud, religión, política...). Solo márcalas si el negocio trabaja con eso. Una tienda de tazas no marca ninguna.', dica: 'Estas categorías existen para proteger datos sensibles (salud, religión...). ¿Tienda de tazas? Ninguna.' },
  '02-05': { titulo: 'Listo para crear', texto: 'Nombre listo (sin símbolos). En la clase desmarcamos la API de conversiones para estudiar primero el Pixel solo; se puede activar después. Haz clic en Crear.', dica: 'La casilla de la API de conversiones activa el envío desde el servidor. En la clase lo dejamos para después, para entender primero el Pixel solo.' },
  '02-06': { titulo: 'Camino alternativo', texto: 'Camino alternativo (cuando el Administrador de eventos da error): Configuración del portafolio › Fuentes de datos › Conjuntos de datos y píxeles › Agregar.', dica: 'Si el Administrador de eventos da error, prueba por aquí. ¿Portafolio recién creado? Meta puede retener la creación por algunas horas. Espera e inténtalo de nuevo.' }
 }
};
