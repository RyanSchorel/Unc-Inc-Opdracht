export const RenderHeader = () => {
     return (
          <div className="header">
               <div className="logo">
                    <img 
                      onClick={() => { window.open("https://www.uncinc.nl/nl", "_blank") }} 
                      src="/unc_inc_logo.png" 
                      alt="Logo" 
                    />
               </div>
               <h1>Authentication Unc Inc</h1>
          </div>
     )
}
