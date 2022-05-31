package GUI_JFRAME;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Image;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JFrame;
import javax.swing.SwingConstants;
public class HomeWindow extends JFrame {    // --> Creamos nuestra propia plantilla heredando de la clase JFrame(javax.swing.JFrame).
    public JPanel container;
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
        InitJPanels();
        //InitJLabels();
        InitJButtons();
    }  
    private void InitJPanels(){  // --> Metodo para inicializar los componentes de tipo JPanel
        container = new JPanel();    // --> Instacia de tipo JPanel.
        //container.setBackground(Color.gray);    // --> Aplicamos un color al panel instanciado.
        this.getContentPane().add(container);   // --> getContentPane nos permite retornar el contenido de una ventana que este a su vez con el metodo add nos permite añadir un componente al contenido a la ventana que este caso sera la instancia container de tipo JPanel.
        container.setLayout(null);  // --> Deshabilitamos el layout por defecto del JPanel instanciado para poder desplazar libremente el JLabel dentro del JPanel.
    }
    private void InitJLabels(){ // --> Metodo para inicializar los componentes de tipo JLabel.
         // ETIQUETA DE TEXTO
        JLabel label = new JLabel(/*"Hola Mundo", SwingConstants.CENTER*/);    // --> Instanciamos un JLabel, en el primer parametro podemos establecer el texto de la instancia JLabel y en el segundo parametro establecemos la alineacion horizontal del texto dentro de la instancia JLabel.
        label.setText("Hola Mundo");    // --> Establecemos el texto para la instancia JLabel.
        label.setBounds(16 , 16, 160, 80);   // --> Establecemos la locacion y el tamaño de la instancia JLabel.
        label.setHorizontalAlignment(SwingConstants.CENTER);    // --> Establecemos el alineamiento horizontal del texto dentro de la instancia JLabel.
        label.setForeground(Color.white); // --> Permitimos cambiar el color de la fuente de la instancia JLabel.
        label.setOpaque(true);  // --> Deshabilitamos la transparencia con true con el fin de aplicarle un background a la instancia JLabel.
        label.setBackground(Color.cyan); // --> Le aplicamos un background-color a la instancia JLabel.
        label.setFont(new Font("JetBrains Mono", Font.PLAIN, 18));  // --> Permite modificar la fuente del texto. Necesita un parametro de tipo Font, donde en el metodo instructor necesita como paramtros el nombre de la fuente, el estilo de la fuente y el tamaño de la fuente.
        container.add(label);   // --> Añadimos la instancias JLabel dentro de la instancia JPanel.
        // ETIQUETA DE IMAGEN
        JLabel homerImg = new JLabel(new ImageIcon("homer.jpeg"));  // --> Instanciamos el JLabel para una imagen.
        homerImg.setBounds(80, 112, 250, 250);  // --> Posicionamos la la instanica JLabel.
        homerImg.setOpaque(true);   // --> Deshabilitamos la transparencia
        homerImg.setBackground(Color.green);    // --> Establecemos un background para saber el tamaño de la etiqueta con respecto a la imagen que esta contiene.
        container.add(homerImg);    // --> Añadimos la instancia JLabel al container de tipo JPanel.
    }
    private void InitJButtons(){    // --> Metodo para inicializar componentes de tipo JButton.
        JButton button = new JButton(); // --> Instancia JButton
        button.setText("Login");    // --> Asignamos el texto al boton.
        button.setBounds(80, 80, 160, 48);  // --> Posicionamos el boton dentro de la instancia JPanel.
        button.setOpaque(true); // --> Deshabilitamos la opacidad.
        button.setBackground(Color.green);  // --> Asignamos un background-color.
        button.setForeground(Color.white);  // --> Asignamos el color de la fuente.
        button.setFont(new Font("JetBrains Mono", Font.BOLD, 18));  // --> Estabelcemos la fuente del boton.
        //button.setEnabled(false);   // --> Este metodo permite habilitar y deshabilitar el boton para su uso, con true el boton podra interactuar con el usuario mientras que con un valor de false el usuario no podra interactuar con el boton.
        button.setMnemonic('L');    // --> Establece el Mnemonico del boton, al presionar ALT + L automaticamente se accede al boton.
        container.add(button);  // --> Añadimos el boton a la instancia del JPanel.
    }
}
// A partir de esta plantilla crearemos instancias en la clase main para realizar varios ejericicios.
