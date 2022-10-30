
package beans;
import java.sql.Date;

public class Registro {
    private int id;
    private String username;
    private Date fecha;
    private String proveedor;

    public Registro(int id, String username, Date fecha, String proveedor) {
        this.id = id;
        this.username = username;
        this.fecha = fecha;
        this.proveedor = proveedor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getProveedor() {
        return proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }

    @Override
    public String toString() {
        return "Registro{" + "id=" + id + ", username=" + username + ", fecha=" + fecha + ", proveedor=" + proveedor + '}';
    }

    
}
