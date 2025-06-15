export const RenderHeader = () => {

     return (
          <div className="header">
               <div className="logo">
                    <img onClick={ () => { window.location.href="https://www.uncinc.nl/nl"} } src="/unc_inc_logo.png" alt="Logo"/>
               </div>
               <h1>Authentication Unc Inc</h1>
          </div>
     )
}

