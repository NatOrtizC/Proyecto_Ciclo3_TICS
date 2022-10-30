
package test;
import beans.Producto;
import connection.DBConnection;
import java.sql.ResultSet;
import java.sql.Statement;

public class OperacionesBD {
    
    public static void main(String[] args) {
        //actualizarProducto(1, "Superheroes/DC");
        listarProducto();
    }
    
    public static void actualizarProducto(int id, String proveedor){
        DBConnection con = new DBConnection();
        String sql = "UPDATE producto SET proveedor= '"+ proveedor + "'WHERE id= "+id;
        try {
            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        finally{
            con.desconectar();
        }
    }
    
    public static void listarProducto(){
        DBConnection con = new DBConnection();
        String sql = "SELECT * FROM producto";
        try {
            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);
            while(rs.next()){
                int id = rs.getInt("id");
                String nombre = rs.getString("nombre");
                String tipo = rs.getString("tipo");
                String proveedor = rs.getString("proveedor");
                int volumen = rs.getInt("volumen");
                int tiempo = rs.getInt("tiempo");
                String imagen = rs.getString("imagen");
                String descripcion = rs.getString("descripcion");
                Producto producto = new Producto(id, nombre, tipo, proveedor, volumen, tiempo, imagen, descripcion);
                System.out.println(producto.toString());
            }
            st.executeQuery(sql);
            
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        finally{
            con.desconectar();
        }
    }
    
}
