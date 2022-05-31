package GUI_JFRAME;
import java.awt.Color;
import java.awt.Dimension;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JFrame;
public class HomeWindow extends JFrame {    // --> Creamos nuestra propia plantilla heredando de la clase JFrame(javax.swing.JFrame).
    public HomeWindow(){
        this.setSize(900, 600);  // --> Permite que cada instancia de nuestra plantilla tendra un width de 600px y un height de 400px. 
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);    // --> Este metodo dice que operacion ejecutar cuando se cierra la ventana, con el parametro EXIT_ON_CLOSE establecemos que al cerrar la venta la ejecuion de la misma finalizara.
        this.setTitle("Home");   // --> Permite establecer un titulo a la ventana.
        /*this.setLocation(400 , 200);    // -->  Permite establecer la posicion inicial de la ventana definiendo el desplazamiento en x como en y, ambos en medidas de pixeles.
        //this.setBounds(380, 200, 600, 400); // --> Viene siendo un short-hand de 
        // setSize y setLocation, en dos los dos primeros parametros hacen
        // referencia al desplazamiento de la ventana al iniciar (setLocation) 
        // y los dos ultimos parametros hacen referencia al width y al height 
        // de la ventana (setSize), teniendo en cuenta que todas las medidas 
        // son en pixeles. */
        this.setLocationRelativeTo(null); // --> Permite centrar la ventana con respecto a otra, si definimos null como parametro entonces la centrara tomando en cuenta la pantalla.
        //setResizable(false);    // --> Permite gestionar el redimensionamiento de la ventana, con false no permite redimensionar la ventana una vez esta se abre, por defecto el valor inicial es true.
        this.setMinimumSize(new Dimension(600, 400));    // --> Permite establecer un tamaño minimo de la ventana, definiendo en el parametro una instancia de tipo de Dimension donde estableceremos el width y height minimo. 
        //this.getContentPane().setBackground(Color.GRAY); // --> el getContentPane permite retornar el contenido de la ventana, y a su vez mediante el setBackground establecemos el color de fondo para esos elementos.
        initComponents();   // --> Llamada del metodo que nos permitira inicialzar los componentes que hemos definido para esta plantilla.
    }
    private void initComponents(){  // --> Metodo que permitira inicializar los componentes de la ventana.
        JPanel container = new JPanel();    // --> Instacia de tipo JPanel.
        //container.setBackground(Color.gray);    // --> Aplicamos un color al panel instanciado.
        this.getContentPane().add(container);   // --> getContentPane nos permite retornar el contenido de una ventana que este a su vez con el metodo add nos permite añadir un componente al contenido a la ventana que este caso sera la instancia container de tipo JPanel.
        container.setLayout(null);  // --> Deshabilitamos el layout por defecto del JPanel instanciado para poder desplazar libremente el JLabel dentro del JPanel.
        JLabel label = new JLabel();    // --> Instanciamos un JLabel
        container.add(label);   // --> Añadimos la instancias JLabel dentro de la instancia JPanel.
        label.setText("Hola Mundo");    // --> Establecemos el texto para la instancia JLabel.
        label.setBounds(16 , 16, 80, 32);   // --> Establecemos la locacion y el tamaño de la instancia JLabel.
        label.setForeground(Color.white); // --> Permitimos cambiar el color de la fuente de la instancia JLabel.
        label.setOpaque(true);  // --> Deshabilitamos la transparencia con true con el fin de aplicarle un background a la instancia JLabel.
        label.setBackground(Color.cyan); // Le aplicamos un background-color a la instancia JLabel.
    }   
}
// A partir de esta plantilla crearemos instancias en la clase main para realizar varios ejericicios.
