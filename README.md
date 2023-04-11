## This is an custom online shop for ebooks and physical books for the actress and author Magda Dimitrescu. 

You can find the project [here](https://magda-dimitrescu.vercel.app/) in test mode.

This project is made with: 
- [NextJs](https://nextjs.org/)
- [Pocketbase](https://pocketbase.io/)
- [Stripe](https://stripe.com/en-ro)

Main features used in this project are:
- Pocketbase SQL Lite database deployed on fly.io with Product and Orders schemas with read/write validations.
- Server side props for product data from the Pocketbase database.
- React Context API and Reducer to manage the cart.
- Using the local storage to save the user's choices.
- React Context API for the custom privacy policy module and cookie storage for the user's choice. 
- Custom checkout integrated with Stripe Elements alongside error handling, validation, and conditional visibility based on user's choices for better UX.
- Payment intent API to create a payment session with stripe while revalidating the stock status.
- Payment webhook where the orders are processed in the Pocketbase database.
- Nodemailer implementation for order emails.
- Romanian and english language inside the privacy context choice.
- Vercel deployment in test mode

What remains to be done:
- Blog integration with Contentful CMS API.
- About me page.
- Order email improvements.
- Automatic receipts in Romanian
- Stripe in live mode
- Vercel live deployment and domain integration.
