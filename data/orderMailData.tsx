const OrderMailData = (emailData: any) => {
  return `<!doctype html>
    <html>
    <div style="width: 100%; background-color: #f2f2f2; box-sizing: border-box; margin: 0px; padding: 50px; font-family: 'Trebuchet MS', sans-serif;">
              <div style="padding: 25px; border-radius: 10px; background-color: #fff; margin-left: auto; margin-right:auto">
                <h1 style="font-size: 25px">${
                  emailData.orderLang === "en"
                    ? `From Magda Dimitrescu`
                    : `De la Magda Dimitrescu`
                }</h1>
               
  
                <p>${
                  emailData.orderLang === "en"
                    ? `New order for`
                    : `Comanda nouă pentru:`
                } ${emailData.email}</p>
                <p>${emailData.message}</p>
                <p>${emailData.details}</p>
                <p>${emailData.amount}</p>
                <p>${
                  emailData.orderLang === "en"
                    ? `Order ID:`
                    : `Codul comenzii este:`
                } ${emailData.orderId}</p>
                <p>${
                  emailData.orderLang === "en"
                    ? `Payment was processed via card`
                    : `Plata a fost procesată cu cardul`
                }</p>
                <p>${
                  emailData.orderLang === "en"
                    ? `You will receive your products as soon as possible.`
                    : `Veți primi produsele dvs. cât mai curând posibil.`
                }</p>
              </div>
            </div>
    </html>`;
};

export default OrderMailData;
