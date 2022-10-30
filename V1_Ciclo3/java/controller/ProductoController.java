package controller;

import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.gson.Gson;
import beans.Producto;
import connection.DBConnection;

public class ProductoController implements IProductoController {

    @Override
    public String listar(boolean ordenar, String orden) {

        Gson gson = new Gson();

        DBConnection con = new DBConnection();
        String sql = "Select * from producto";

        if (ordenar == true) {
            sql += " order by proveedor " + orden;
        }

        List<String> productos = new ArrayList<String>();

        try {

            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {

                int id = rs.getInt("id");
                String nombre = rs.getString("nombre");
                String tipo = rs.getString("tipo");
                String proveedor = rs.getString("proveedor");
                int volumen = rs.getInt("volumen");
                int tiempo = rs.getInt("tiempo");
                String imagen = rs.getString("imagen");
                String descripcion = rs.getString("descripcion");

                Producto producto = new Producto(id, nombre, tipo, proveedor, volumen, tiempo, imagen, descripcion);

                productos.add(gson.toJson(producto));

            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }

        return gson.toJson(productos);

    }
    
     @Override
    public String devolver(int id, String username) {

        DBConnection con = new DBConnection();
        String sql = "Delete from registro where id= " + id + " and username = '" 
                + username + "' limit 1";

        try {
            Statement st = con.getConnection().createStatement();
            st.executeQuery(sql);

            this.sumarCantidad(id);

            return "true";
        } catch (Exception ex) {
            System.out.println(ex.toString());
        } finally {
            con.desconectar();
        }

        return "false";
    }

    @Override
    public String sumarCantidad(int id) {

        DBConnection con = new DBConnection();

        String sql = "Update producto set volumen = (Select volumen from producto where id = " 
                + id + ") + 1 where id = " + id;

        try {
            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);

            return "true";
        } catch (Exception ex) {
            System.out.println(ex.toString());
        } finally {
            con.desconectar();
        }

        return "false";

    }
    
    
    @Override
    public String registrar(int id, String username) {

        Timestamp fecha = new Timestamp(new Date().getTime());
        DBConnection con = new DBConnection();
        String sql = "Insert into registro values ('" + id + "', '" + username + "', '" + fecha + "')";

        try {
            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);

            String modificar = modificar(id);

            if (modificar.equals("true")) {
                return "true";
            }

        } catch (Exception ex) {
            System.out.println(ex.toString());
        } finally {
            con.desconectar();
        }
        return "false";
    }

 @Override
    public String modificar(int id) {

        DBConnection con = new DBConnection();
        String sql = "Update producto set volumen = (volumen - 1) where id = " + id;

        try {
            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);

            return "true";
        } catch (Exception ex) {
            System.out.println(ex.toString());
        } finally {
            con.desconectar();
        }

        return "false";

    }
}