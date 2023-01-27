import http from "./http-axios";

class servicioDatosProducto {
  getAll() {
    return http.get("/productos");
  }

  get(id) {
    return http.get(`/producto/${id}`);
  }

  create(data) {
    return http.post("/producto", data);
  }

  update(id, data) {
    return http.put(`/producto/${id}`, data);
  }

  delete(id) {
    return http.delete(`/producto/${id}`);
  }

  deleteAll() {
    return http.delete(`/productos`);
  }

  //Busca los productos con el nombre completo especificado
  findByNombre(nombre) {
    return http.get(`/productos?q=${nombre}`);
  }
  
  //Busca un producto si contiene el texto en alguno de los campos
  findByGeneral(texto){
    return http.get(`/productos?q=${texto}`);

}
}

export default new servicioDatosProducto();