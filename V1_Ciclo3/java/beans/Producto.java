
package beans;


public class Producto {
    private int id;
    private String nombre;
    private String tipo;
    private String proveedor;
    private int volumen;
    private int tiempo;
    private String imagen;
    private String descripcion;

    public Producto(int id, String nombre, String tipo, String proveedor, int volumen, int tiempo, String imagen, String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.proveedor = proveedor;
        this.volumen = volumen;
        this.tiempo = tiempo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getProveedor() {
        return proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }

    public int getVolumen() {
        return volumen;
    }

    public void setVolumen(int volumen) {
        this.volumen = volumen;
    }

    public int getTiempo() {
        return tiempo;
    }

    public void setTiempo(int tiempo) {
        this.tiempo = tiempo;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "Producto{" + "id=" + id + ", nombre=" + nombre + ", tipo=" + tipo + ", proveedor=" + proveedor + ", volumen=" + volumen + ", tiempo=" + tiempo + ", imagen=" + imagen + ", descripcion=" + descripcion + '}';
    }

    

}
