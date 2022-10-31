function  Contact() {
    return (

      <>
   
      <div id="contacto" class="mt-5 container">
            <div class="text-center">
                <h1 class="textC">CONTÁCTANOS</h1>
               
            </div>
            <div class="subC d-flex align-items-center justify-content-center">
                <div class="bg-white col-md-4">
                    <div class="p-4 rounded shadow-md">
                        <div>
                            <label for="name" class="form-label">Nombre:</label>
                            <input type="text" name="name" class="form-control" placeholder="Nombre" required/>
                        </div>
                        <div class="mt-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="text" name="email" class="form-control" placeholder="Email" required/>
                        </div >
                      
                        <div class="mt-3 mb-3">
                            <label for="message" class="form-label">Mensaje:</label>
                            <textarea name="message" cols="20" rows="6" class="form-control"
                                placeholder="Mensaje"></textarea>
                        </div>
                        <button class="butC">
                            Enviar
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
      
      
      </>)}

      export default Contact;