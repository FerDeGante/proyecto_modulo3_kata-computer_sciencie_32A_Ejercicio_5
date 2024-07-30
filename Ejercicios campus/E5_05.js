// 5.- Crear una clase llamada ``Contacto`` con los siguientes datos:
// Nombre
// Apellidos
// Teléfono
// Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
// Agregar un contacto.
// Buscar un contacto por nombre.b 




class Contacto {
    constructor(nombre, apellidos, telefono) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.telefono = telefono;
    }
  }
  
  class ListaContactos {
    constructor() {
      this.contactos = []; 
    }
  
    agregarContacto(contacto) {
      this.contactos.push(contacto); 
    }
  
    buscarContactoPorNombre(nombre) {
      return this.contactos.filter(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase());
    }
  }
  
  // Crear instancias de Contacto
  const contacto1 = new Contacto("Juan", "Pérez", "123-456-7890");
  const contacto2 = new Contacto("María", "Gómez", "098-765-4321");
  const contacto3 = new Contacto("Juan", "Martínez", "111-222-3333");
  
  // Crear una instancia de ListaContactos
  const listaContactos = new ListaContactos();
  
  // Agregar contactos a la lista
  listaContactos.agregarContacto(contacto1);
  listaContactos.agregarContacto(contacto2);
  listaContactos.agregarContacto(contacto3);
  
  // Buscar un contacto por nombre
  const resultadoBusqueda = listaContactos.buscarContactoPorNombre("Juan");
  console.log(resultadoBusqueda);
  