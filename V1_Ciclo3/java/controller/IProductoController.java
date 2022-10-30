package controller;

public interface IProductoController {

    public String listar(boolean ordenar, String orden);
    
    public String devolver(int id, String username);

    public String sumarCantidad(int id);
    
    public String registrar(int id, String username);
    
    public String modificar(int id);
}