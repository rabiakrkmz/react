import React, { Components } from 'react'
import './App.css';

function App() {
  return (
    <div className="col-md-8 mb-4">
      <div className="card">
        <div className="card-header">
          <h4>Form Elementi</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="E-mail">E-mail</label>
             <input
             type="text"
             E-mail= "E-mail"
             id="id"
             placeholder="Lütfen e-posta adresinizi giriniz..."
             class="form-control"

             >
                 <div className="card-body">
                     <form>
                         <div className="Form-group">
                             <label htmlFor="Sifre">Şifre</label>
                             <input
                             type="text"
                             Sifre="Şifre"
                             id="id"
                             placeholder="Lütfen şifrenizi giriniz..."
                             class="form-control"
                             >
                               <button class="btn" type="submit">AddUser</button>
                             </input>
                         </div>
                     </form>

                 </div>
            </input>
            </div>   
          </form>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
