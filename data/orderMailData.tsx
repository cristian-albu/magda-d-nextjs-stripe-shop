const OrderMailData = (emailData: any) => {
  return `<!doctype html>
    <html>
    <div style="width: 100%; background-color: #f2f2f2; box-sizing: border-box; margin: 0px; padding: 50px; font-family: 'Trebuchet MS', sans-serif;">
              <div style="padding: 25px; border-radius: 10px; background-color: #fff; margin-left: auto; margin-right:auto">
                <h1 style="font-size: 25px">De la Magda Dimitrescu</h1>
               
  
                <p>Comanda nouă pentru: ${emailData.email}</p>
                <br />
                <p>${emailData.message}</p>
                <br />
                <p>${emailData.details}</p>
                <br />
                <p>${emailData.amount}</p>
                <br />
  
                <p>Plata a fost procesată cu cardul</p>
                <br />
                <br />
                <p>Veți primi produsele dvs. cât mai curând posibil.</p>
              </div>
            </div>
    </html>`;
};

export default OrderMailData;
