<div align="center">
  <table style="width:100%; border:none; background-color:transparent;">
    <tr>
      <td style="width:20%; text-align:left; border:none;">
        <img src="img/iz.png" alt="Logo SEP/TecNM" width="120">
      </td>
      <td style="width:60%; text-align:center; border:none;">
        <h2>TECNOLÓGICO NACIONAL DE MÉXICO</h2>
        <h3>INSTITUTO TECNOLÓGICO DE OAXACA</h3>
      </td>
      <td style="width:20%; text-align:right; border:none;">
        <img src="img/de.png" alt="Logo ITO" width="100">
      </td>
    </tr>
  </table>
<br>
<p><b>CARRERA:</b></p>
  <p>INGENIERÍA EN SISTEMAS COMPUTACIONALES</p>
<br>
<p><b>MATERIA:</b> PROGRAMACIÓN WEB</p>
<br>
<p><b>PRESENTA:</b></p>
  <p><b>MEIXUEIRO CRUZ ARTURO DANIEL</b></p>
<br>
<p><b>NOMBRE DEL CATEDRÁTICO:</b> MARTINEZ NIETO ADELINA</p>
<br>
<p><b>ACTIVIDAD:</b> Portafolio Personal con Plantilla Bootstrap</p>
<br><br>
</div>
<div align="right">
  <p>07 DE JULIO DEL 2026</p>
</div>

# Portafolio Personal - Start Bootstrap Personal

**Nombre del Proyecto:** Portafolio Profesional Personal  
**Descripción breve:** Sitio web tipo portafolio completamente personalizado basado en la plantilla **Personal** de Start Bootstrap.

## Descripción del Proyecto

Este portafolio fue desarrollado utilizando la plantilla **Personal** de Start Bootstrap. El framework CSS utilizado es **Bootstrap 5.2.3**, el cual permite un diseño moderno, responsive y profesional.

### Secciones del Portafolio:
- **Inicio**: Hero section con foto de perfil y acceso rápido.
- **Currículum**: Información académica y habilidades mediante modales dinámicos.
- **Proyectos**: Galería con carruseles de imágenes.
- **Contacto**: Formulario interactivo con SweetAlert2.

**Enlace de la plantilla original:**  
[https://startbootstrap.com/previews/personal](https://startbootstrap.com/previews/personal)

---

## Proceso de Creación

### 1. Página de Inicio
**Antes:**  
Contenido genérico con texto “Start Bootstrap”, foto placeholder y descripción de marketing.  
![Inicio - Antes](img/antes-inicio.png)

**Después:**  
Se personalizó el nombre, título, badge, foto de perfil (`profile.jpg`) y descripción propia.  
![Inicio - Después](img/despues-inicio.png)

**Modificaciones:** Cambio de textos, reemplazo de imagen y ajuste del hero section.

---

### 2. Sección de Currículum
**Antes:**  
Tarjetas tradicionales de experiencia y educación con texto lorem ipsum.  
![Currículum - Antes](img/antes-curriculum.png)

**Después:**  
Reemplazado por botones grandes que abren **modales dinámicos** mostrando lenguajes de programación y soft skills.  
![Currículum - Después](img/despues-curriculum.png)

**Modificaciones:** Eliminación de contenido estático y creación de `DynamicModal` con estilos personalizados y fondo.

---

### 3. Sección de Proyectos
**Antes:**  
Dos tarjetas simples con imágenes dummy y texto placeholder.  
![Proyectos - Antes](img/antes-proyectos.png)

**Después:**  
Proyectos reales (`GUSTAMBO-PEDIA` y `GASTOMETRO.COM`) con carruseles de imágenes y fondo personalizado.  
![Proyectos - Después](img/despues-proyectos.png)

**Modificaciones:** Añadido carrusel Bootstrap (`DynamicCarousel`), imágenes propias y estilos adicionales.

---

### 4. Sección de Contacto
**Antes:**  
Formulario básico con mensajes de éxito/error genéricos.  
![Contacto - Antes](img/antes-contacto.png)

**Después:**  
Formulario en español con validación y mensajes atractivos usando **SweetAlert2**.  
![Contacto - Después](img/despues-contacto.png)

**Modificaciones:** Integración de SweetAlert2, validación en JavaScript y mensajes personalizados.

---

### Modificaciones Técnicas Generales
- Cambio completo del idioma a **español**.
- Actualización de la navbar con branding propio.
- Creación del archivo `dynamic-components.js` con clases `DynamicModal`, `DynamicTooltip` y `DynamicCarousel`.
- Añadidos fondos personalizados y efectos hover.
- Optimización de estilos adicionales en `styles.css`.

---

## Capturas de Pantalla

1. **Página de Inicio**  
   ![Inicio](img/01-inicio.png)

2. **Currículum con Modales**  
   ![Currículum](img/02-curriculum.png)

3. **Proyectos con Carruseles**  
   ![Proyectos](img/03-proyectos.png)

4. **Formulario de Contacto**  
   ![Contacto](img/04-contacto.png)

5. **Modal de Lenguajes**  
   ![Modal Lenguajes](img/05-modal-lenguajes.png)

---

**Conclusión**

La personalización de esta plantilla permitió transformar un diseño genérico en un portafolio único, interactivo y representativo de mis habilidades. El uso de componentes dinámicos (modales y carruseles) mejora la experiencia del usuario y demuestra un buen manejo de JavaScript junto con Bootstrap.

